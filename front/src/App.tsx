import "./App.css";
import MainContainer from "./main/MainContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DetailPage from "./sub/DetailPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={MainContainer} />
          <Route exact path="/detail" component={DetailPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
