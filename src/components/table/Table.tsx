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
  }: any = useContext(FormContext);

  const { columns, deleteTableData, clearData, customStyles } = TableColumns();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("form-data") || "[]");
    setTableData(storedData);
  }, []);

  return (
    <>
      {/* table data */}
      <section className="mx-auto my-10 shadow shadow-gray-400 flex w-[95%] flex-col rounded-lg bg-white p-5">
        <DataTable columns={columns} data={tableData} customStyles={customStyles} />
      {tableData.length >=1 &&  <button
          className="flex mt-4 gap-1 cursor-pointer items-center self-end rounded-2xl bg-gray-200 hover:bg-gray-300 px-3 py-1.5 text-xs"
          onClick={clearData}
        >
          <MdDeleteForever size={20} /> Clear Table
        </button>}
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
              <div className="flex items-center justify-end mt-15 gap-10">
                <button className="cursor-pointer" onClick={() => setShowModal(false)}>Cancel</button>
                <button
                className="bg-black text-white py-2 px-3 cursor-pointer rounded-lg"
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
              <h3 className="font-semibold text-xl mb-4">User Details</h3>
              <p>Name: {selectedRow?.name}</p>
              <p>Email: {selectedRow?.email}</p>
              <p>Age: {selectedRow?.age}</p>
              <p>Department: {selectedRow?.department}</p>
              <p>Gender: {selectedRow?.gender}</p>
              <p>Skills: {selectedRow?.skills.join(", ")}</p>
            </>
          )}
        </Modal>
      </section>
    </>
  );
};

export default Table;
