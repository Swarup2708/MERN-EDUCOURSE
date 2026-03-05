import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";
import api from "../lib/axios";
import MaterialCard from "../components/MaterialCard";
import MaterialNotFound from "../components/MaterialNotFound";

const HomePage = () => {
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("");

  useEffect(() => {
    const fetchMaterials = async () => {
      setLoading(true);
      try {
        const res = await api.get("/Material", {
          params: {
            search: search || undefined,
            difficultyLevel: difficulty || undefined,
          },
        });

        setMaterials(Array.isArray(res.data) ? res.data : []);
      } catch (error) {
        console.error("Error fetching materials", error);
        toast.error("Failed to load materials");
      } finally {
        setLoading(false);
      }
    };

    fetchMaterials();
  }, [search, difficulty]);

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 mt-6">

        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search materials..."
            className="input input-bordered w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Difficulty Filter */}
          <select
            className="select select-bordered w-full md:w-56"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="">All Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>

        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center text-primary py-10">
            Loading...
          </div>
        )}

        {/* No Materials */}
        {!loading && materials.length === 0 && (
          <MaterialNotFound />
        )}

        {/* Materials Grid */}
        {!loading && materials.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {materials.map((material) => (
    <MaterialCard
      key={material._id}
      material={material}
      setMaterials={setMaterials}
    />
  ))}
</div>
        )}

      </div>
    </div>
  );
};

export default HomePage;
