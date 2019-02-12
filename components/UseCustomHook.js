() => {
  const [input, setInput] = usePersistantState('input', '');

  return (
    <label>
      <p>Persisted input</p>
      <input
        value={input}
        onChange={({ target }) => setInput(target.value)}
      />
    </label>
  );
};
