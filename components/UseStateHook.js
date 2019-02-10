function Stateful() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>Clicked {count} times</p>
      <button
        type="button"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
    </div>
  );
}
