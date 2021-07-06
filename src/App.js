import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Background from "./components/Background";

function App() {
  return (
    <Router>
      <Background>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            {/* matches any other route: page for 404 error */}
            <PageNotFound />
          </Route>
        </Switch>
      </Background>
      <Footer />
    </Router>
  );
}

export default App;
