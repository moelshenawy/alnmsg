import "./App.scss";
import { useEffect, useState } from "react";
import { BiArrowFromBottom } from "react-icons/bi";
import { Route, Routes } from "react-router-dom";
import { Home, Login, Signup } from "./components";
import Dashboard from "./components/Dashboard/index";
function App() {
  const [isVisable, setisVisable] = useState(false);
  const [userData, setUserData] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setisVisable(true);
    } else {
      setisVisable(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>

      <div
        className={`to-top  ${isVisable ? "opacity-100" : "opacity-0 d-none"}`}
      >
        <button type="button" onClick={scrollToTop}>
          <BiArrowFromBottom className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </>
  );
}

export default App;
