import Form from "./components/form/Form";
import Table from "./components/table/Table";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <main>
        <Form />
        <Table />
      </main>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default App;
