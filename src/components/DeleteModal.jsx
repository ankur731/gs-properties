import React, { useState } from "react";
function DeleteModal() {
  return (
    <>
      <input
        type="checkbox"
        id="deleteModal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Delete record
          </h3>
          <p className="py-4">
            Are you sure that you want to delete selected record
          </p>
          <div className="modal-action">
            <button htmlFor="deleteModal" className="btn btn-sm">Back</button>
            <label htmlFor="deleteModal" className="btn btn-sm btn-error" onClick={(e)=> console.log("Delete")}>Continue</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteModal;
