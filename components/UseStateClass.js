class Stateful extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <p>Clicked {count} times</p>
        <button
          type="button"
          onClick={() =>
            this.setState({ count: count + 1 })
          }
        >
          Click me
        </button>
      </div>
    );
  }
}
