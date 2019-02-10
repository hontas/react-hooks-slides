function UseRef({ close }) {
  const [seconds, setSeconds] = React.useState(0);
  const intervalRef = React.useRef(null);
  let intervalId;

  const stopIntervalLet = () => clearInterval(intervalId);
  const stopIntervalRef = () =>
    clearInterval(intervalRef.current);

  React.useEffect(() => {
    intervalId = setInterval(
      () => setSeconds((s) => s + 1),
      1000
    );
    intervalRef.current = intervalId;
    return stopIntervalRef;
  }, []);

  return (
    <div>
      <p>{seconds}</p>
      <button onClick={stopIntervalLet}>
        Clear interval let
      </button>
      <button onClick={stopIntervalRef}>
        Clear interval ref
      </button>
    </div>
  );
}
