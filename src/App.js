import './App.css';
import Row from './components/Row';
import requests from './api/requests';

function App() {
  return (
    <div>
      <Row title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals} />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
