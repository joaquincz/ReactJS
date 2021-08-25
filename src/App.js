import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <ItemListContainer />
        </Route>
        <Route exact path="/category/:id">
          <ItemListContainer />
        </Route>
        <Route exact path="/item/:id">
          <ItemDetailContainer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;