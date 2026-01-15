const Modal = ({children, showModal, onClose, modalType}:any) => {
  return (
    <div
      className={`${showModal ? "pointer-events-auto translate-y-[-50%] scale-100 opacity-100" : "pointer-events-none translate-y-[-55%] scale-90 opacity-0"} absolute top-[50%] left-[50%] z-99 h-100 w-100 translate-x-[-50%] border border-black bg-white transition-all duration-300`}
    >
      <div className="bg-white p-6 rounded">
        {children}
       {modalType === "view" && <button onClick={onClose} className="mt-4">Close</button>}
      </div>
    </div>
  );
};

export default Modal;
