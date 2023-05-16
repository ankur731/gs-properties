import React from "react";

function PreviewSidebar({ opened, setPreviewOpened, record }) {
  return (
    <aside
      className={`prose fixed border-r-2 border-r-gray-900 shadow-sm top-0 duration-500 min-w-md w-1/3 z-50 bg-white min-h-screen p-5 ${
        opened ? "right-0" : "-right-full"
      }`}
    >
      <h1 className="mb-2 text-xl">Property details</h1>
      <hr />

      <div className="flex flex-col h-[40rem] overflow-y-auto m-4">
        <div className="flex items-center max-w-sm justify-between my-6">
          <p>Town</p>
          <p> {record?.town || "-"} </p>
        </div>

        <div className="flex items-center max-w-sm justify-between my-6">
          <p>Phase</p>
          <p> {record?.phase || "-"} </p>
        </div>

        <div className="flex items-center max-w-sm justify-between my-6">
          <p>Block</p>
          <p> {record?.block || "-"} </p>
        </div>

        <div className="flex items-center max-w-sm justify-between my-6">
          <p>Plot no</p>
          <p> {record?.plotNo || "-"} </p>
        </div>

        <div className="flex items-center max-w-sm justify-between my-6">
          <p>Street / road</p>
          <p> {record?.street || "-"} </p>
        </div>

        <div className="flex items-center max-w-sm justify-between my-6">
          <p>Demand</p>
          <p> {record?.demand || "-"} </p>
        </div>

        <div className="flex items-center max-w-sm justify-between my-6">
          <p>Extra Land Label</p>
          <p> {record?.extraLandLabel || "-"} </p>
        </div>

        <div className="flex items-center max-w-sm justify-between my-6">
          <p>Extra Land Charges</p>
          <p> {record?.extraLandCharges || "-"} </p>
        </div>

        <div className="flex items-center max-w-sm justify-between my-6">
          <p>Extra Land Category</p>
          <p> {record?.extraLandCategory || "-"} </p>
        </div>

        <div className="flex items-center max-w-sm justify-between my-6">
          <p>Extra Land</p>
          <p> {record?.extraLand || "-"} </p>
        </div>

        <div className="flex items-center max-w-sm justify-between my-6">
          <p>Corner</p>
          <p> {record?.corner ? "Yes" : "No"} </p>
        </div>

        <div className="flex items-center max-w-sm justify-between my-6">
          <p>Boulevard</p>
          <p> {record?.boulevard ? "Yes" : "No"} </p>
        </div>

        <div className="flex items-center max-w-sm justify-between my-6">
          <p>Park Face</p>
          <p> {record?.parkFace ? "Yes" : "No"} </p>
        </div>

        <div className="flex items-center max-w-sm justify-between my-6">
          <p>Possession Charges Paid</p>
          <p> {record?.possessionChargesPaid ? "Yes" : "No"} </p>
        </div>

        <div className="flex items-center max-w-sm justify-between my-6">
          <p>Utilities Charges Paid</p>
          <p> {record?.utilitiesChargesPaid ? "Yes" : "No"} </p>
        </div>
      </div>

      <button
        onClick={() => {
          setPreviewOpened(false);
        }}
        className="btn btn-primary w-full"
      >
        close
      </button>
    </aside>
  );
}

export default PreviewSidebar;
