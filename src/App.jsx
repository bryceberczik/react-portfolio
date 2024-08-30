import Header from "./components/header/header";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
