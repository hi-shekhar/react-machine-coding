import { Outlet } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="main-layout">
      <header className="site-header">
        <h1>React Machine Coding</h1>
      </header>
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="site-footer">
        <p>A project by Himanshu Shekhar.</p>
      </footer>
    </div>
  );
};

export default App;
