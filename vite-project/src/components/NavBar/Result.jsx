import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Result({ result }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/products/${result.id}`);
      }}
      className="hover:bg-red-500 hover:text-white cursor-pointer p-2"
    >
      <h1>{result.title}</h1>
    </div>
  );
}

export default Result;
