// import LocaleContext from '../context/LocaleContextHook';

() => {
  function UseContextComp() {
    const context = useContext(LocaleContext);

    return (
      <div>
        <p>Current locale: {context.locale}</p>
        {context.isLoading && <p>loading locales...</p>}
        <select onChange={({ target }) => context.selectLocale(target.value)}>
          {context.availableLocales.map((locale) => (
            <option key={locale} value={locale} children={locale} />
          ))}
        </select>
      </div>
    );
  }

  return (
    <LocaleContextProvider>
      <UseContextComp />
    </LocaleContextProvider>
  );
};
