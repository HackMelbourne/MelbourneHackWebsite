import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import Prizes from "./pages/Prizes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Background from "./components/Background";
import { Sponsor } from "./pages/Sponsors";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      {/* <Background> */}
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Prizes">
            <Prizes />
          </Route>
          <Route exact path="/Sponsors">
            <Sponsor />
          </Route>
          <Route>
            {/* matches any other route: page for 404 error */}
            <PageNotFound />
          </Route>
        </Switch>
      {/* </Background> */}
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
