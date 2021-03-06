import { useState, useRef, useEffect } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import Prizes from "./pages/Prizes";
import Navbar from "./components/Navbar";
import Sponsor from "./pages/Sponsors";
import Footer from "./components/Footer";
import Invite from "./components/Invite";

function App() {
  // getting the total page height is effectful, this is needed for Scroll
  const [pageHeight, setPageHeight] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current !== null) {
      setPageHeight(ref.current.clientHeight);
    }
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div ref={ref}>
        {/* <Background> */}
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home pageHeight={pageHeight} />
          </Route>
          <Route exact path="/Prizes">
            <Prizes />
          </Route>
          <Route exact path="/Sponsors">
            <Sponsor />
          </Route>
          <Route path='/Registration' component={() => {
            window.location.replace("https://www.eventbrite.com.au/e/melbourne-hack-2022-tickets-303665410417");
            return null;
          }} />
          <Route>
            {/* matches any other route: page for 404 error */}
            <PageNotFound />
          </Route>
        </Switch>
        {/* </Background> */}
        <Invite />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
