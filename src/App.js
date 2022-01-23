import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactDetails from "./components/contactDetails";
import Contacts from "./components/contacts";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Contacts />} />
          <Route path="/:id" element={<ContactDetails />} />
        </Routes>
      </Router>
    </Provider>
  );
};
export default App;
