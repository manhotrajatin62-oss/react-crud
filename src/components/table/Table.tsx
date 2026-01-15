import { useContext, useEffect } from "react";
import DataTable from "react-data-table-component";
import { FormContext } from "../../context/FormContext";
import Modal from "../Modal";
import TableColumns from "./TableColumns";

const Table = () => {
  const {
    tableData,
    setTableData,
    modalType,
    selectedRow,
    showModal,
    setShowModal,
  }: any = useContext(FormContext);

  const {columns, deleteTableData, clearData} = TableColumns();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("form-data") || "[]");
    setTableData(storedData);
  }, []);

  return (
    <>
    {/* table data */}
      <section>
        <button onClick={clearData}>Clear Table</button>
        <DataTable columns={columns} data={tableData} />
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
              <p>
                Do you want to delete <b>{selectedRow?.name}</b>?
              </p>
              <div className="flex items-center gap-4">
                <button onClick={() => setShowModal(false)}>Cancel</button>
                <button
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
              <h3>User Details</h3>
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
