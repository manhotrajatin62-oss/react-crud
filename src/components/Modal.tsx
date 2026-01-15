const Modal = ({children, showModal, onClose, modalType}:any) => {
  return (
    <div
      className={`${showModal ? "pointer-events-auto scale-100 opacity-100" : "pointer-events-none scale-90 opacity-0"} w-100 fixed top-[50%] left-[50%] z-99  translate-[-50%] shadow shadow-black rounded-lg overflow-hidden bg-white transition-normal duration-300`}
    >
      <div className="bg-white p-6 flex flex-col rounded">
        {children}
       {modalType === "view" && <button onClick={onClose} className="mt-10 self-end cursor-pointer bg-black text-white py-2 px-3 rounded-lg">Close</button>}
      </div>
    </div>
  );
};

export default Modal;
