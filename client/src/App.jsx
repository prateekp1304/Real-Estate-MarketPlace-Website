import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/signIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import About from "./pages/about";
import Profile from "./pages/profile";
import Header from "./components/Header";
import PrivateRoute from "./components/privateRoute";
import CreateListing from "./pages/CreateListing";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-listing" element={<CreateListing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
