import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import './App.css';
import Header from "./pages/Header";
import HomePage from "./pages/HomePage";
import RequestForm from "./pages/RequestForm";
import Contacts from "./pages/Contacts";
import Login from "./pages/LoginScreen";

function App() {
  return (
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/request' element={<RequestForm />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/login' element={<Login />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
