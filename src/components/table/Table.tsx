import { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { FormContext } from "../../context/FormContext";

const Table = () => {

  const {tableData, setTableData}:any = useContext(FormContext)

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("form-data") || "[]");
    setTableData(storedData);
  }, []);

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
  ];


  return (
    <div>
      <DataTable columns={columns} data={tableData} />
    </div>
  );
};

export default Table;
