import { Header } from "./components/Header/index";
import { Home } from "./pages/Home/index";
import back from "./assets/teste2.svg";

export function App() {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${back})`,
      }}
    >
      <Header />
      <Home />
    </div>
  );
}
