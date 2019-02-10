class UseEffectClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: props.isOpen || true };
    this.modalRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
  }

  handleClick({ target }) {
    if (target === this.modalRef.current) return;
    if (target.contains(this.modalRef.current)) {
      this.toggleModal();
    }
  }

  toggleModal() {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleModal}>
          open modal
        </button>
        {this.state.isOpen && (
          <div
            ref={this.modalRef}
            style={{ background: 'coral' }}
          >
            <button onClick={this.toggleModal}>x</button>
            <p>Modal</p>
          </div>
        )}
      </div>
    );
  }
}
