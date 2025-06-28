import { BrowserRouter } from "react-router-dom";
import Navigation from "./navigation/index";
import i18n from "./services/lang/i18n";
import { I18nextProvider } from "react-i18next";

function App() {
  return (
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        {/* <Toaster position="top-center" reverseOrder={false} /> */}
        <Navigation />
      </I18nextProvider>
    </BrowserRouter>
  );
}

export default App;
