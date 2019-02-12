function Stateful() {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="expandable">
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'Collapse ▴' : 'Expand ▾'}
      </button>
      {isExpanded && <div>Unfolded</div>}
    </div>
  );
}
