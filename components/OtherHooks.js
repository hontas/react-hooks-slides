() => {
  const [lazyState, setLazyState] = useState(() => expensiveComputation(props));

  const [reducedState, dispatch] = useReducer(reducer, initialState, (initialState) => {
    return { ...initialState };
  });

  const memoizedCallback = useCallback(() => {
    doSomething(reducedState);
  }, [reducedState]);

  const memoizedValue = useMemo(() => Math.sqrt(lazyState), [lazyState]);

  const refContainer = useRef(initialValue);

  useImperativeHandle(ref, createHandle, []); // use with forwardRef

  useLayoutEffect(() => {
    // read layout from the DOM and synchronously re-render
  }, []);

  return <p ref={refContainer}>{memoizedValue}😅</p>;
};
