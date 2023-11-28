import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { fetchNewAlbum, fetchTopAlbum } from "./Api";
import CardSection from "./components/Cardsection/Cardsection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CardSection title="Top Album" albumData={fetchTopAlbum} />
      <CardSection title="New Album" albumData={fetchNewAlbum} />
    </>
  );
}

export default App;