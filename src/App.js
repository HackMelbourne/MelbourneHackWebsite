import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import Prizes from "./pages/Prizes";
import Navbar from "./components/Navbar";
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
          <Route path='/Registration' component={() => { 
          window.location.replace("https://www.eventbrite.com.au/e/melbourne-hack-2021-tickets-162202392723"); 
          return null;
          }}/>
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
