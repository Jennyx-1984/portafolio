import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/organisms/Header";
import Loading from "../components/organisms/Loading";
import "../App.css";

function Layout() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const onContext = (e) => e.preventDefault();
    const onSelectStart = (e) => e.preventDefault();
    const onCopy = (e) => e.preventDefault();
    const onDragStart = (e) => e.preventDefault();

    const onKeyDown = (e) => {
      if (
        (e.ctrlKey && e.key === "s") ||
        (e.ctrlKey && e.key === "u") ||
        (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") ||
        e.key === "F12"
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", onContext);
    document.addEventListener("selectstart", onSelectStart);
    document.addEventListener("copy", onCopy);
    document.addEventListener("cut", onCopy);
    document.addEventListener("dragstart", onDragStart);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("contextmenu", onContext);
      document.removeEventListener("selectstart", onSelectStart);
      document.removeEventListener("copy", onCopy);
      document.removeEventListener("cut", onCopy);
      document.removeEventListener("dragstart", onDragStart);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="body">
      <Header /> 
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;