import React from "react";
import Result from "./Result";

function SearchList({ searchResults }) {
  const results = searchResults?.map((result) => (
    <Result key={result.title} result={result} />
  ));

  return (
    <div className=" absolute w-full z-50 bg-white border-1 border-gray-500 divide-y-1 divide-gray-300 rounded">
      {results}

      {results.length === 0 && (
        <p className="text-md text-black p-2">No results found.</p>
      )}
    </div>
  );
}

export default SearchList;
