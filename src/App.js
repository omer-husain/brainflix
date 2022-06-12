import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import MainVideoPage from "./pages/MainVideoPage/MainVideoPage";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage";
import React from "react";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <section className="App">
        
        <Header />  {/* Nav component */}
        
        <Switch>
          <Route path="/upload" component={VideoUploadPage} />

          <Route path="/videos/:videoId" component={MainVideoPage} />

          <Route path="/" exact component={MainVideoPage} />
        </Switch>
      </section>
    </Router>
  );
}

export default App;
