class StatefulClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }

  toggleExpanded() {
    this.setState(({ isExpanded }) => ({
      isExpanded: !isExpanded
    }));
  }

  render() {
    const { isExpanded } = this.state;
    return (
      <div className="expandable">
        <button onClick={() => this.toggleExpanded()}>
          {isExpanded ? 'Collapse ▴' : 'Expand ▾'}
        </button>
        {isExpanded && (
          <div className="expandable__body">Unfolded</div>
        )}
      </div>
    );
  }
}
