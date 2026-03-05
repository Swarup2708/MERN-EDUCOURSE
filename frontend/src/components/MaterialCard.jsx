import { Link } from "react-router";
import {
  BookOpen,
  UserCircle,
  Trash2,
  Edit,
  Eye,
} from "lucide-react";
import { formatData } from "../lib/utils";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { useState } from "react";

const MaterialCard = ({ material, setMaterials }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = async () => {
    try {
      await api.delete(`/Materials/${material._id}`);
      setMaterials((prev) =>
        prev.filter((m) => m._id !== material._id)
      );
      toast.success("Material deleted successfully");
    } catch {
      toast.error("Delete failed");
    } finally {
      setShowModal(false);
    }
  };

  return (
    <>
      <div className="relative block rounded-xl bg-base-100 p-4 border hover:border-primary hover:shadow-xl transition">

        {/* Top Row */}
        <div className="flex justify-between items-start">
          <p className="text-xs text-base-content/60 truncate">
            {material._id}
          </p>

          <span className="badge badge-secondary">
            {material.publishYear}
          </span>
        </div>

        {/* Title */}
        <Link to={`/Materials/${material._id}`}>
          <div className="mt-4 space-y-2 cursor-pointer">
            <div className="flex items-center gap-2">
              <BookOpen className="size-4 text-primary" />
              <p className="font-medium line-clamp-1">
                {material.title}
              </p>
            </div>
          </div>
        </Link>

        {/* Instructor */}
        <div className="flex items-center gap-2 text-base-content/70 mt-2">
          <UserCircle className="size-4 text-primary" />
          <Link
            to={`/instructor/${material.instructorName}`}
            className="text-sm hover:underline hover:text-primary"
          >
            {material.instructorName}
          </Link>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="badge badge-outline">
            {material.difficultyLevel}
          </span>

          <span className="badge badge-outline">
            {material.price === 0
              ? "Free"
              : `₹${material.price}`}
          </span>

          <span className="badge badge-info">
          {material.type}
          </span>

          <span className="badge badge-ghost flex items-center gap-1">
            <Eye className="size-3" />
            {material.views}
          </span>
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-between items-center">
          <span className="text-xs text-base-content/60">
            {formatData(new Date(material.createdAt))}
          </span>

          {/* ACTION ICONS */}
          <div className="flex items-center gap-4">

            {/* EDIT */}
            <Link to={`/Materials/${material._id}`}>
            <Edit className="size-4 text-warning" />
            </Link>

            {/* DELETE */}
            <button
              onClick={() => setShowModal(true)}
              className="text-error hover:scale-110 transition"
            >
              <Trash2 className="size-4" />
            </button>

          </div>
        </div>
      </div>

      {/* Delete Modal */}
      {showModal && (
        <dialog className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-error">
              Delete Material
            </h3>

            <p className="py-4">
              Delete "{material.title}" ?
            </p>

            <div className="modal-action">
              <button
                className="btn btn-ghost"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>

              <button
                className="btn btn-error"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default MaterialCard;
