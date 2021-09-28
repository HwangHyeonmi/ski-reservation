import "./App.css";
import MainContainer from "./main/MainContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DetailPage from "./sub/DetailPage";
import Header from "./main/Header";
import CommonLayOut from "./layout/CommonLayOut";
import Payment from "./sub/Payment";
import PaymentCompletion from "./sub/PaymentCompletion";
import ComfirmReservation from "./sub/ConfirmReservation";
function App() {
  return (
    <div className="App">
      <CommonLayOut>
        <Switch>
          <Route exact path="/" component={MainContainer} />
          <Route exact path="/detail" component={DetailPage} />
          <Route
            exact
            path="/detail/:id"
            render={(props) => <DetailPage id={props.match.params.id} />}
          />
          <Route exact path="/payment" component={Payment}></Route>
          <Route
            exact
            path="/paymentCompetion"
            component={PaymentCompletion}
          ></Route>
          <Route
            exact
            path="/confirmReservation"
            component={ComfirmReservation}
          ></Route>
        </Switch>
      </CommonLayOut>
    </div>
  );
}

export default App;
