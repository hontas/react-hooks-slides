class Modal extends React.Component {
  constructor() {
    this.state = { value: '' };
    this.handleUnload = this.handleUnload.bind(this);
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.handleUnload);
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.handleUnload);
  }

  handleUnload(event) {
    if (this.state.value) {
      if (!window.confirm()) {
        event.preventDefault();
        event.returnValue = '';
      }
    }
  }

  render() {
    return (
      <div style={{ padding: '1em' }}>
        <form className="modal">
          <label>
            <input
              value={this.state.value}
              onChange={({ target }) => this.setState({ value: target.value })}
            />
          </label>
          <p>Avega Sensationals</p>
        </form>
      </div>
    );
  }
}
