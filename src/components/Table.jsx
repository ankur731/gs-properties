import React, { useState } from "react";
function Table({ config, openPreview }) {
  const skip = 10;
  const rowsPerPage = 10;
  const [page, setPage] = useState(1);
  const [startIndex, setStartIndex] = useState((page - 1) * rowsPerPage);

  const { headers, data } = config;
  const renderedHeaders = [...headers, "Actions"].map((header, index) => {
    return <th key={index}>{header}</th>;
  });

  const nextPage = () => {
    setPage((p) => p + 1);
    setStartIndex((page - 1) * rowsPerPage);
  };


  const previousPage = ()=>{
    setPage(p=>p-1);
    setStartIndex((page - 1) * rowsPerPage);
  }

  const renderedRows = data
    .slice(startIndex, startIndex + skip)
    .map((row, index) => {
      return (
        <tr key={index}>
          <th>{index + 1}</th>
          <td>{row.town}</td>
          <td>{row.phase}</td>
          <td>{row.block}</td>
          <td>{row.plotNo}</td>
          <td>{row.extraLandCharges}</td>
          <td className="flex items-center space-x-2">
            <button
              className="btn btn-primary btn-outline btn-sm"
              onClick={() => {
                openPreview(row);
              }}
            >
              Preview
            </button>
          </td>
        </tr>
      );
    });

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              {renderedHeaders}
            </tr>
          </thead>
          <tbody>{renderedRows}</tbody>
        </table>
      </div>

      <div className="flex w-1/4 mx-auto items-center space-x-4 my-5">
        <button
          className="btn btn-sm btn-dark btn-outline"
          disabled={page === 1}
          onClick={previousPage}
        >
          Previous
        </button>
        <p>
          {page}/ {Math.ceil(data.length / 10)}
        </p>
        <button disabled={page >= Math.ceil(data.length / 10)} className="btn btn-sm btn-dark btn-outline" onClick={nextPage}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Table;
