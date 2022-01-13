import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Content from "./Components/Content";
import LastNav from "./Components/LastNav";
import Nav from "./Components/Nav";
import Signup from "./Components/Signup";
import Login from "./Components/Login";

function App() {
  return (
    <Router>
      <div className="App ">
        <div className="mainContent">
          <div className="leftNav">
            <Nav />
          </div>
          <div className="centerNav">
            <div className="rightContent">
              <Routes>
                <Route path="/" exact element={<Content />}></Route>
                <Route path="/sign-up" exact element={<Signup />}></Route>
                <Route path="/login" exact element={<Login />}></Route>
              </Routes>
            </div>
            <div className="leftContent">
              <LastNav />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
