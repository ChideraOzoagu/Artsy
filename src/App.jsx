import "../src/scss/index.scss";

import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Auctions from "./pages/Auctions";
import Drops from "./pages/Drops";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path='auctions' element={<Auctions/>}/>
            <Route path='marketplace' element={<Marketplace/>}/>
            <Route path='drops' element={<Drops/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
