import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import PageNotFound from './pages/PageNotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <div>Home</div>
            </Route>
            <Route>
              {/* matches any other route: page for 404 error */}
              <PageNotFound />
            </Route>
          </Switch>
        <Footer />
    </Router>
  );
}

export default App;
