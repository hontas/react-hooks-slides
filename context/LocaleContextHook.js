import React, { useState, useEffect } from 'react';

const LocaleContext = React.createContext();

export function LocaleContextProvider({ children }) {
  const [state, setState] = useState({
    locale: 'sv-se',
    isLoading: true,
    availableLocales: []
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setState({
        ...state,
        availableLocales: ['sv-se', 'en-us'],
        isLoading: false
      });
    }, 2500);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <LocaleContext.Provider
      value={{
        ...state,
        selectLocale(locale) {
          setState({ ...state, locale });
        }
      }}
      children={children}
    />
  );
}

export default LocaleContext;
