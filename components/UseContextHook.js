// import LocaleContext from '../context/LocaleContextHook';

() => {
  function UseContextComp() {
    const context = React.useContext(LocaleContext);

    return (
      <div>
        <p>Current locale: {context.locale}</p>
        {context.isLoading && <p>loading locales...</p>}
        <select
          onChange={({ target }) =>
            context.selectLocale(target.value)
          }
        >
          {context.availableLocales.map((locale) => (
            <option value={locale} children={locale} />
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
