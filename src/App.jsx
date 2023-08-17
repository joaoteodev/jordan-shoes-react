import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <>
      <Header />
      <Banner />
      <Main />
      <Footer text="q" />
    </>
  );
}
