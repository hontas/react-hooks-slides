import React from 'react';

const LocaleContext = React.createContext();

export function LocaleContextProvider({ children }) {
  const [state, setState] = React.useState({
    locale: 'sv-se',
    isLoading: true,
    availableLocales: []
  });

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setState({
        ...state,
        availableLocales: ['sv-se', 'en-us'],
        isLoading: false
      });
    }, 2500);
    return () => clearTimeout(timeoutId);
  }, []);

  function selectLocale(locale) {
    setState({ ...state, locale });
  }

  return (
    <LocaleContext.Provider
      value={{
        ...state,
        selectLocale
      }}
      children={children}
    />
  );
}

export default LocaleContext;
