import {
  Outlet,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
