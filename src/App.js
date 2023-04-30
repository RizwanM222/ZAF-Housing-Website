// import './App.css';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import { houses } from "./data";
import DiscoverInfo from "./pages/DiscoverInfo";
import About from "./pages/About";
import Faqs from "./pages/Faqs";
import { Mail } from "./components/Mail";
import Login from "./components/Login";
import Account from "./components/Account";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Route path="/" exact component={Home} />

        <Route
          path="/discover"
          exact
          render={() => <Discover houses={houses} />}
        />

        <Route
          path="/discover/:id"
          render={() => <DiscoverInfo houses={houses} />}
        />

        <Route path="/about" exact render={() => <About />} />
        
        <Route path="/faqs" exact render={() => <Faqs />} />

        <Route path="/login" exact render={() => <Login />} />

        <Route path="/account" exact render={() => <Account />} />

        <Mail />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
