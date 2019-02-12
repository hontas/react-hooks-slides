function UseRef({ close }) {
  const [seconds, setSeconds] = React.useState(0);
  const intervalRef = React.useRef(null);
  let intervalId;

  const clearIntervalLet = () => clearInterval(intervalId);
  const clearIntervalRef = () => clearInterval(intervalRef.current);

  React.useEffect(() => {
    intervalId = setInterval(() => setSeconds((s) => s + 1), 1000);
    intervalRef.current = intervalId;
    return clearIntervalRef;
  }, []);

  return (
    <div className="flex--column">
      <p>{seconds}</p>
      <button className="btn" onClick={clearIntervalLet}>
        clear intervalId
      </button>
      <button className="btn" onClick={clearIntervalRef}>
        clear intervalRef.current
      </button>
    </div>
  );
}
