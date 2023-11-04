// import Navbar from "./Components/Navbar";
// import Home from "./Components/Home";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Checkout from "./Components/Checkout";
// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Switch>
//           <Route path="/Chekout">
//             <Navbar />
//             <Checkout />
//           </Route>
//           <Route path="">
//             <Navbar />
//             <Home />
//           </Route>
//         </Switch>
//       </Router>
//     </div>
//   );
// }

// export default App;
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/basket" element={<CheckoutPage />} />
        </Routes>
      </Router>
    </div>
  );
}

function CheckoutPage() {
  return (
    <>
      <Navbar />
      <Checkout />
    </>
  );
}
function HomePage() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
