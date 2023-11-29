import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { fetchNewAlbum, fetchTopAlbum, fetchSongs } from "./Api";
import CardSection from "./components/Cardsection/Cardsection";
import SongsCardSection from "./components/SongsCardSection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CardSection title="Top Album" albumData={fetchTopAlbum} />
      <CardSection title="New Album" albumData={fetchNewAlbum} />
      <SongsCardSection title="Songs" albumData={fetchSongs} />
    </>
  );
}

export default App;