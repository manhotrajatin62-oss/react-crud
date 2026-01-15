import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FormContext } from "../../context/FormContext";
import { useContext } from "react";
const TableColumns = () => {
  const {
    setName,
    setEmail,
    setAge,
    setEditingId,
    setGender,
    tableData,
    setTableData,
    setDepartment,
    setSkills,
    setShowModal,
    setModalType,
    setSelectedRow,
    setIsAgree,
  }: any = useContext(FormContext);

  // function to set the row data in the form
  function setDataInForm(row: any) {
    setEditingId(row.id);
    setName(row.name);
    setEmail(row.email);
    setAge(row.age);
    setGender(row.gender);
    setDepartment(row.department);
    setSkills(row.skills);
    setIsAgree(true);
  }

  // FUNCTION to delete all data
   function clearData() {
    setTableData([]);
    localStorage.clear();
  }

  // function to delete single row data
  function deleteTableData(id: any) {
    if (!id) return;

    const newData = tableData.filter((item: any) => item.id !== id);

    setTableData(newData);
    localStorage.setItem("form-data", JSON.stringify(newData));
  }

  const customStyles = {
    headCells: {
      style: {
        color: "#7B809A",
        fontWeight: "700",
        fontSize: "0.75rem",
      },
    },
  };

  const columns = [
    {
      name: "NAME",
      selector: (row: any) => row.name,
      center: true,
    },
    {
      name: "EMAIL",
      center: true,
      wrap: true,
      selector: (row: any) => row.email,
    },
    {
      name: "AGE",
      center: true,
      selector: (row: any) => row.age,
    },
    {
      name: "GENDER",
      selector: (row: any) => row.gender,
      center: true,
    },
    {
      name: "SKILLS",
      selector: (row: any) => row.skills.join(", "),
      center: true,
      wrap: true,
    },
    {
      name: "DEPARTMENT",
      selector: (row: any) => row.department,
      center: true,
    },
    {
      name: "ACTIONS",
      cell: (row: any) => (
        <div className="flex items-center gap-4">
          <FaEdit
          size={15}
          title="Edit"
            onClick={() => setDataInForm(row)}
            className="cursor-pointer"
          />
          <MdDelete
          size={15}
          title="Delete"
            className="cursor-pointer"
            onClick={() => {
              setSelectedRow(row);
              setModalType("delete");
              setShowModal(true);
            }}
          />
          <FaEye
          title="View"
          size={15}
            className="cursor-pointer"
            onClick={() => {
              setSelectedRow(row);
              setModalType("view");
              setShowModal(true);
            }}
          />
        </div>
      ),
      center: true,
    },
  ];

  return {columns, deleteTableData, clearData, customStyles};
};

export default TableColumns;
