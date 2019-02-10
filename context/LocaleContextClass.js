import React from 'react';

const LocaleContext = React.createContext();

export class LocaleContextProvider extends React.Component {
  state = {
    locale: 'sv-se',
    isLoading: true,
    availableLocales: []
  };

  componentDidMount() {
    // 1. fetch avalable locales
    this.setTimeoutId = setTimeout(() => {
      this.setState({
        availableLocales: ['sv-se', 'en-us'],
        isLoading: false
      });
    }, 2500);
  }

  componentWillUnmount() {
    clearTimeout(this.setTimeoutId);
  }

  selectLocale = (locale) => {
    this.setState({ locale });
  };

  render() {
    const { children } = this.props;
    return (
      <LocaleContext.Provider
        value={{
          ...this.state,
          selectLocale: this.selectLocale
        }}
        children={children}
      />
    );
  }
}

export default LocaleContext;
