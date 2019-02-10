function UseEffectHook({ isOpen = true }) {
  const [showModal, setShowModal] = React.useState(isOpen);
  const modalRef = React.useRef(null);
  const toggleModal = () => setShowModal(!showModal);

  React.useEffect(() => {
    function handleClick({ target }) {
      if (target === modalRef.current) return;
      if (target.contains(modalRef.current)) {
        toggleModal();
      }
    }
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div>
      <button onClick={toggleModal}>open modal</button>
      {showModal && (
        <div ref={modalRef} style={{ background: 'coral' }}>
          <button onClick={toggleModal}>x</button>
          <p>Modal</p>
        </div>
      )}
    </div>
  );
}
