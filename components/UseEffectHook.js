() => {
  function Modal({ close }) {
    const modalRef = useRef(null);

    function handleClick({ target }) {
      if (target === modalRef.current) return;
      if (target.contains(modalRef.current)) {
        close();
      }
    }

    useEffect(() => {
      document.addEventListener('click', handleClick);

      return () => {
        document.removeEventListener('click', handleClick);
      };
    }, []);

    return (
      <div ref={modalRef} className="modal">
        <button onClick={close}>╳</button>
        <p>Modal</p>
      </div>
    );
  }

  function Wrapper() {
    const [showModal, setShowModal] = useState(false);

    return (
      <div style={{ padding: '1em' }}>
        {!showModal && (
          <button className="btn" onClick={() => setShowModal(true)}>
            show modal
          </button>
        )}
        {showModal && <Modal close={() => setShowModal(false)} />}
      </div>
    );
  }

  return <Wrapper />;
};
