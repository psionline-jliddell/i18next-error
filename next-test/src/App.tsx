import React from "react";
import logo from "./logo.svg";
import "./App.css";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "Welcome to React": "Welcome to React and react-i18next",
          EXAMPLE_KEY: "example value {someDetail}",
        },
      },
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

interface AppState {
  someDetail: any;
}

function App() {
  const { t } = useTranslation();

  const [state, setState] = React.useState<AppState>({
    someDetail: {
      dynamic: "test-dynamic",
    },
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <h2 className="h6-like">{t("EXAMPLE_KEY")}</h2>
        <h2 className="h6-like">{t("EXAMPLE_KEY", state.someDetail)}</h2>
      </header>
    </div>
  );
}

export default App;
