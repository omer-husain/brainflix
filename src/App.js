import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import videoDetails from "./data/video-details.json";
import MainVideoPage from "./pages/MainVideoPage/MainVideoPage";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage";

import React from "react";
import apiKey from "./data/api-key.json";

class App extends React.Component {
  render() {
    return (
      <Router>
        <section className="App">
          <Switch>
            <Route path="/" exact component={MainVideoPage} />

            <Route path="/videos/:videoId" component={MainVideoPage} />

            <Route path="/upload" component={VideoUploadPage} />
          </Switch>
        </section>
      </Router>
    );
  }
}

export default App;

// <Route exact path="/props-through-render" render={(props) => <PropsPage {...props} title={`Props through render`} />} />
