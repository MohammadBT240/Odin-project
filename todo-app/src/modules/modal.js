const Modal = (() => {
  const openModal = (modal) => {
    modal.style.display = "block";
  };

  const closeModal = (modal) => {
    modal.style.display = "none";
  };

  return { openModal, closeModal };
})();

export default Modal;
