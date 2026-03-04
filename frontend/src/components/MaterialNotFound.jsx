import React from "react";
import { NotebookIcon } from "lucide-react";
import { Link } from "react-router";

const MaterialNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">

      {/* Icon Circle */}
      <div className="bg-primary/10 rounded-full p-8">
        <NotebookIcon className="size-10 text-primary" />
      </div>

      {/* Heading */}
      <h3 className="text-2xl font-bold">
        No Materials Yet
      </h3>

      {/* Subtext */}
      <p className="text-base-content/70">
        Ready to add materials? Create your first learning resource now.
      </p>

      {/* Button */}
      <Link to="/create" className="btn btn-primary">
        Add First Material
      </Link>

    </div>
  );
};

export default MaterialNotFound;
