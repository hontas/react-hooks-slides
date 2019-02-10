function WrapperFn() {
  class Modal extends React.Component {
    constructor(props) {
      super(props);
      this.modalRef = React.createRef();
      this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
      document.addEventListener('click', this.handleClick);
    }

    componentWillUnmount() {
      document.removeEventListener(
        'click',
        this.handleClick
      );
    }

    handleClick({ target }) {
      if (target === this.modalRef.current) return;
      if (target.contains(this.modalRef.current)) {
        this.props.close();
      }
    }

    render() {
      return (
        <div
          ref={this.modalRef}
          style={{ background: 'coral', padding: '1em' }}
        >
          <button onClick={this.props.close}>
            close modal
          </button>
          <p>Modal</p>
        </div>
      );
    }
  }

  class Wrapper extends React.Component {
    constructor(props) {
      super(props);
      this.state = { showModal: true };
      this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
      this.setState(({ showModal }) => ({
        showModal: !showModal
      }));
    }

    render() {
      const { showModal } = this.state;
      return (
        <div>
          {!showModal && (
            <button onClick={this.toggleModal}>
              show modal
            </button>
          )}
          {showModal && <Modal close={this.toggleModal} />}
        </div>
      );
    }
  }

  return <Wrapper />;
}
