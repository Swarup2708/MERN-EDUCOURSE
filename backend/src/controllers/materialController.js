import Material from "../models/Material.js";

export async function createMaterial(req, res) {
  try {
    const {
      title,
      subject,
      description,
      type,
      category,
      instructorName,
      difficultyLevel,
      publishYear,
      price
    } = req.body;

    if (
      !title ||
      !subject ||
      !description ||
      !type ||
      !category ||
      !instructorName ||
      !difficultyLevel ||
      !publishYear ||
      price === undefined
    ) {
      return res
        .status(404)
        .json({ message: "All fields are required" });
    }

    const material = new Material({
      title,
      subject,
      description,
      type,
      category,
      instructorName,
      difficultyLevel,
      publishYear,
      price
    });

    const savedMaterial = await material.save();
    res.status(201).json({ savedMaterial });

  } catch (error) {
    console.error("Error in createMaterial controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}


export async function getAllMaterials(req, res) {
  try {
    const { search, difficultyLevel, instructorName } = req.query;

    let query = {};

    if (search) {
      query.title = { $regex: search, $options: "i" };
    }

    if (difficultyLevel) {
      query.difficultyLevel = difficultyLevel;
    }

    if (instructorName) {
      query.instructorName = instructorName;
    }

    const materials = await Material.find(query);

    res.status(200).json(materials);
  } catch (error) {
    res.status(500).json({ message: "Error fetching materials" });
  }
}

export async function getMaterialById(req, res) {
  try {
    const material = await Material.findByIdAndUpdate(
      req.params.id,
      { $inc: { views: 1 } },
      { new: true }
    );

    if (!material) {
      return res.status(404).json({ message: "Material not found" });
    }

    res.status(200).json(material);
  } catch (error) {
    console.error("GET BY ID ERROR:", error);
    res.status(500).json({ message: "Error fetching material" });
  }
}


export async function updateMaterial(req, res) {
  try {
    const updatedMaterial = await Material.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedMaterial) {
      return res.status(404).json({ message: "Material not found" });
    }

    res.status(200).json(updatedMaterial);
  } catch (error) {
    res.status(500).json({ message: "Error updating material" });
  }
}

export async function deleteMaterial(req, res) {
  try {
    const deletedMaterial = await Material.findByIdAndDelete(req.params.id);

    if (!deletedMaterial) {
      return res.status(404).json({ message: "Material not found" });
    }

    res.status(200).json({ message: "Material deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting material" });
  }
}

