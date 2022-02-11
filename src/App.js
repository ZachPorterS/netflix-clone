import Row from './components/Row';
import requests from './utils/requests';
import Banner from './components/Banner';
import Nav from './components/Nav';
import './styles/App.css';

function App() {
  return (
    <div className='app'>
      <Nav />
      <Banner />
      <Row title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action' fetchUrl={requests.fetchActionMovies} />
      <Row title='Horror' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Comedy' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
      <Row title='Romance' fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}

export default App;