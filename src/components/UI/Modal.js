const Modal = (props) => {
  const closeModal = props.closeModal;
  const children = props.children;

  const modalStyles = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const overlayStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.78)",
  };

  return (
    <div className="modal" style={overlayStyles} onClick={closeModal}>
      <div className="modal-content" style={modalStyles}>
        {children}
      </div>
    </div>
  );
};

export { Modal };
