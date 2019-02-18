function UseSetInterval() {
  const [count, setState] = useState(0);
  const [random, setRandom] = useState();

  useEffect(() => {
    const id = setInterval(() => {
      setState(count + 1);
    }, 1000);
    return () => clearInterval(id);
  });

  useEffect(() => {
    // simulate updating props
    const id = setInterval(() => {
      setRandom(Math.round(Math.random()));
    }, 500);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <p>count: {count}</p>
    </div>
  );
}
