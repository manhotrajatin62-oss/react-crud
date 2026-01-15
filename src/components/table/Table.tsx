import { useContext, useEffect } from "react";
import DataTable from "react-data-table-component";
import { FormContext } from "../../context/FormContext";
import Modal from "../Modal";
import TableColumns from "./TableColumns";
import { MdDeleteForever } from "react-icons/md";

const Table = () => {
  const {
    tableData,
    setTableData,
    modalType,
    selectedRow,
    showModal,
    setShowModal,
    setModalType,
  }: any = useContext(FormContext);

  const { columns, deleteTableData, clearData, customStyles } = TableColumns();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("form-data") || "[]");
    setTableData(storedData);
  }, []);

  return (
    <>
      {/* table data */}
      <section className="mx-auto my-10 flex w-[95%] flex-col rounded-lg bg-white p-5 shadow shadow-gray-400">
        <DataTable
          columns={columns}
          data={tableData}
          customStyles={customStyles}
        />
        {tableData.length >= 1 && (
          <button
            className="mt-4 flex cursor-pointer items-center gap-1 self-end rounded-2xl bg-gray-200 px-3 py-1.5 text-xs hover:bg-gray-300"
            onClick={() => {
              setModalType("clear");
              setShowModal(true);
            }}
          >
            <MdDeleteForever size={20} /> Clear Table
          </button>
        )}
      </section>

      {/* modal section */}
      <section>
        {showModal && (
          <div
            onClick={() => setShowModal(false)}
            className="fixed top-0 right-0 bottom-0 left-0 z-98 bg-black/40"
          />
        )}

        <Modal
          modalType={modalType}
          showModal={showModal}
          onClose={() => setShowModal(false)}
        >
          {modalType === "delete" && (
            <>
              <p className="text-lg">
                Do you want to delete <b>{selectedRow?.name}</b>?
              </p>
              <div className="mt-15 flex items-center justify-end gap-10">
                <button
                  className="cursor-pointer"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="cursor-pointer rounded-lg bg-black px-3 py-2 text-white"
                  onClick={() => {
                    deleteTableData(selectedRow.id);
                    setShowModal(false);
                  }}
                >
                  Delete
                </button>
              </div>
            </>
          )}

          {modalType === "view" && (
            <>
              <h3 className="mb-4 text-xl font-semibold">User Details</h3>
              <p>Name: {selectedRow?.name}</p>
              <p>Email: {selectedRow?.email}</p>
              <p>Age: {selectedRow?.age}</p>
              <p>Department: {selectedRow?.department}</p>
              <p>Gender: {selectedRow?.gender}</p>
              <p>Skills: {selectedRow?.skills.join(", ")}</p>
            </>
          )}

          {modalType === "clear" && (
            <>
              <p className="text-lg">
                Do you want to delete all <b>Table Data</b>?
              </p>
              <div className="mt-15 flex items-center justify-end gap-10">
                <button
                  className="cursor-pointer"
                  onClick={() => setShowModal(false)}
                >
                  No
                </button>
                <button
                  className="cursor-pointer rounded-lg bg-black px-3 py-2 text-white"
                  onClick={() => {
                    clearData();
                    setShowModal(false);
                  }}
                >
                  Yes
                </button>
              </div>
            </>
          )}
        </Modal>
      </section>
    </>
  );
};

export default Table;
