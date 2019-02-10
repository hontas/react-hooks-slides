function WrapperFn() {
  function Modal({ close }) {
    const modalRef = React.useRef(null);

    React.useEffect(() => {
      function handleClick({ target }) {
        if (target === modalRef.current) return;
        if (target.contains(modalRef.current)) {
          close();
        }
      }
      document.addEventListener('click', handleClick);

      return () => {
        document.removeEventListener('click', handleClick);
      };
    }, []);

    return (
      <div
        ref={modalRef}
        style={{ background: 'coral', padding: '1em' }}
      >
        <button onClick={close}>close modal</button>
        <p>Modal</p>
      </div>
    );
  }

  function Wrapper() {
    const [showModal, setShowModal] = React.useState(true);

    return (
      <div>
        {!showModal && (
          <button onClick={() => setShowModal(true)}>
            show modal
          </button>
        )}
        {showModal && (
          <Modal close={() => setShowModal(false)} />
        )}
      </div>
    );
  }

  return <Wrapper />;
}
