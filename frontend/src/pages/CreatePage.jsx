import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeftIcon } from "lucide-react";
import toast from "react-hot-toast";
import api from "../lib/axios";

const CreatePage = () => {
  const [form, setForm] = useState({
    title: "",
    subject: "",
    description: "",
    type: "",
    category: "",
    instructorName: "",
    publishYear: "",
    difficultyLevel: "Beginner",
    price: 0,
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.title ||
      !form.subject ||
      !form.description ||
      !form.type ||
      !form.category ||
      !form.instructorName ||
      !form.publishYear
    ) {
      toast.error("Please fill all required fields");
      return;
    }

    setLoading(true);

    try {
      await api.post("/", {
        ...form,
        publishYear: Number(form.publishYear),
        price: Number(form.price),
      });

      toast.success("Material created successfully");
      navigate("/");
    } catch (error) {
      console.error("Error creating material", error);
      toast.error("Failed to create material");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8 max-w-2xl">

        <Link to="/" className="btn btn-ghost mb-6">
          <ArrowLeftIcon className="size-5" /> Back
        </Link>

        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">
              Create New Material
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                name="title"
                placeholder="Title"
                className="input input-bordered w-full"
                value={form.title}
                onChange={handleChange}
              />

              <input
                name="subject"
                placeholder="Subject"
                className="input input-bordered w-full"
                value={form.subject}
                onChange={handleChange}
              />

              <textarea
                name="description"
                placeholder="Description"
                className="textarea textarea-bordered w-full"
                value={form.description}
                onChange={handleChange}
              />

              <input
                name="category"
                placeholder="Category (Programming, Notes, etc)"
                className="input input-bordered w-full"
                value={form.category}
                onChange={handleChange}
              />

              <input
                name="type"
                placeholder="Type (Notes/PDF/Video)"
                className="input input-bordered w-full"
                value={form.type}
                onChange={handleChange}
              />

              <input
                name="instructorName"
                placeholder="Instructor Name"
                className="input input-bordered w-full"
                value={form.instructorName}
                onChange={handleChange}
              />

              <input
              name="publishYear"
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
               maxLength="4"
              className="input input-bordered w-full"
              value={form.publishYear}
              onChange={handleChange}
              placeholder="e.g. 2024"
              />

              <select
                name="difficultyLevel"
                className="select select-bordered w-full"
                value={form.difficultyLevel}
                onChange={handleChange}
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>

              <input
                type="number"
                name="price"
                placeholder="Price (0 for Free)"
                className="input input-bordered w-full"
                value={form.price}
                onChange={handleChange}
              />

              <div className="card-actions justify-end">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                >
                  {loading ? "Creating..." : "Create Material"}
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CreatePage;