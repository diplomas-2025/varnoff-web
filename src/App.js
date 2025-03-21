import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Header from "./pages/Header";
import HomePage from "./pages/HomePage";
import RequestForm from "./pages/RequestForm";
import Contacts from "./pages/Contacts";
import Login from "./pages/LoginScreen";
import AdminPage from "./pages/AdminPage";
import RequestsPage from "./pages/RequestsPage";
import CallRequestsPage from "./pages/CallRequestsPage";

function App() {
  return (
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/request' element={<RequestForm />} />
              <Route path='/contacts' element={<Contacts />} />
              { localStorage.getItem("authToken") ?
                  <>
                      <Route path='/admin' element={<AdminPage />} />
                      <Route path='/admin/requests' element={<RequestsPage />} />
                      <Route path='/admin/call-requests' element={<CallRequestsPage />} />
                  </>
                  :
                  <>
                      <Route path='/login' element={<Login />} />
                  </>
              }
          </Routes>
      </BrowserRouter>
  );
}

export default App;
