import React from "react";
import { Link } from "react-router";
import { PlusIcon, BookOpen } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-base-100 border-b border-base-content/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">

        <div className="flex items-center justify-between">

          {/* Logo / Title */}
          <Link to="/" className="flex items-center gap-2">
            <BookOpen className="size-7 text-primary" />
            <h1 className="text-2xl font-bold text-primary font-mono tracking-tight">
              EduCourse Hub
            </h1>
          </Link>

          {/* Create Button */}
          <Link
            to="/create"
            className="btn btn-primary flex items-center gap-2"
          >
            <PlusIcon className="size-5" />
            <span>Add Material</span>
          </Link>

        </div>

      </div>
    </header>
  );
};

export default Navbar;