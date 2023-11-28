import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import { fetchTopAlbum } from "./Api";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Section title="Top Album" albumData={fetchTopAlbum} />
    </>
  );
}

export default App;