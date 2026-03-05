import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import api from "../lib/axios";
import MaterialCard from "../components/MaterialCard";

const InstructorPage = () => {
 const { name } = useParams();
const decodedName = decodeURIComponent(name);

useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await api.get(`/?instructorName=${decodedName}`);
      setMaterials(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchData();
}, [decodedName]);

  return (
    <div className="min-h-screen bg-base-200 p-6">
      <Link to="/" className="btn btn-ghost mb-6">
        Back
      </Link>

      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">{name}</h2>
        <p>Total Contributions: {materials.length}</p>
      </div>

      {materials.length === 0 ? (
        <p className="text-center text-base-content/70">
          No materials found for this instructor.
        </p>
      ) : (
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
  );
};

export default InstructorPage;
