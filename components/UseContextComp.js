// import LocaleContext, {
//   LocaleContextProvider
// } from '../context/LocaleContextClass';

function UseContextComp() {
  return (
    <LocaleContextProvider>
      <LocaleContext.Consumer>
        {(context) => (
          <div>
            <p>Current locale: {context.locale}</p>
            {context.isLoading && <p>loading locales...</p>}
            <select
              onChange={({ target }) =>
                context.selectLocale(target.value)
              }
            >
              {context.availableLocales.map((locale) => (
                <option
                  key={locale}
                  value={locale}
                  children={locale}
                />
              ))}
            </select>
          </div>
        )}
      </LocaleContext.Consumer>
    </LocaleContextProvider>
  );
}
