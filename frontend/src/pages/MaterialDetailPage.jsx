import React, { useEffect, useState,useRef} from "react";
import { Link, useNavigate, useParams } from "react-router";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { LoaderIcon, Trash2Icon, ArrowLeftIcon } from "lucide-react";

const MaterialDetailPage = () => {
  const [material, setMaterial] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

 const fetchedRef = useRef(false);
 

useEffect(() => {
  if (fetchedRef.current) return;   
  fetchedRef.current = true;

  const fetchMaterial = async () => {
    try {
      const res = await api.get(`/Materials/${id}`);
      setMaterial(res.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch material");
    } finally {
      setLoading(false);
    }
  };

  fetchMaterial();
}, [id]);



  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this material?"))
      return;

    try {
      await api.delete(`/Materials/${id}`);
      toast.success("Material deleted successfully");
      navigate("/");
    } catch {
      toast.error("Delete failed");
    }
  };

  const handleSave = async () => {
    if (
      !material.title ||
      !material.subject ||
      !material.description ||
      !material.category ||
      !material.type ||
      !material.instructorName ||
      !material.publishYear ||
      !material.difficultyLevel
    ) {
      toast.error("Please fill all required fields");
      return;
    }

    setSaving(true);

    try {
      await api.put(`/Materials/${id}`, {
        ...material,
        publishYear: Number(material.publishYear),
        price: Number(material.price),
      });

      toast.success("Material updated successfully");
      navigate("/");
    } catch {
      toast.error("Update failed");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    );
  }

  if (!material) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        Material not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">

          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="btn btn-ghost">
              <ArrowLeftIcon className="h-5 w-5" /> Back
            </Link>

            <button
              onClick={handleDelete}
              className="btn btn-error btn-outline"
            >
              <Trash2Icon className="h-5 w-5" /> Delete
            </button>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body space-y-4">

              <input
                type="text"
                className="input input-bordered"
                value={material.title}
                onChange={(e) =>
                  setMaterial({ ...material, title: e.target.value })
                }
                placeholder="Title"
              />

              <input
                type="text"
                className="input input-bordered"
                value={material.subject}
                onChange={(e) =>
                  setMaterial({ ...material, subject: e.target.value })
                }
                placeholder="Subject"
              />

              <textarea
                className="textarea textarea-bordered"
                value={material.description}
                onChange={(e) =>
                  setMaterial({ ...material, description: e.target.value })
                }
                placeholder="Description"
              />

              <input
                type="text"
                className="input input-bordered"
                value={material.category}
                onChange={(e) =>
                  setMaterial({ ...material, category: e.target.value })
                }
                placeholder="Category"
              />

              <input
                type="text"
                className="input input-bordered"
                value={material.type}
                onChange={(e) =>
                  setMaterial({ ...material, type: e.target.value })
                }
                placeholder="Type"
              />

              <input
                type="text"
                className="input input-bordered"
                value={material.instructorName}
                onChange={(e) =>
                  setMaterial({
                    ...material,
                    instructorName: e.target.value,
                  })
                }
                placeholder="Instructor Name"
              />

              <input
                type="number"
                className="input input-bordered"
                value={material.publishYear}
                onChange={(e) =>
                  setMaterial({
                    ...material,
                    publishYear: e.target.value,
                  })
                }
                placeholder="Publish Year"
              />

              <select
                className="select select-bordered"
                value={material.difficultyLevel}
                onChange={(e) =>
                  setMaterial({
                    ...material,
                    difficultyLevel: e.target.value,
                  })
                }
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>

              <input
                type="number"
                className="input input-bordered"
                value={material.price}
                onChange={(e) =>
                  setMaterial({
                    ...material,
                    price: e.target.value,
                  })
                }
                placeholder="Price"
              />

              <div className="text-sm text-gray-500">
                Views: {material.views}
              </div>

              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  disabled={saving}
                  onClick={handleSave}
                >
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MaterialDetailPage;
