import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import ProvideAuth from './auth';

function App() {
  return (
    <ProvideAuth>
      <Router>
        <Routes />
      </Router>
    </ProvideAuth>
  );
}

export default App;
