import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { InstrumentListPage } from "./pages/InstrumentListPage";
import { InstrumentSinglePage } from "./pages/InstrumentSinglePage";
import { InstrumentCreatePage } from "./pages/InstrumentCreatePage";
import Nav from "./components/Nav";

function App() {

  
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<InstrumentListPage />} />
        <Route path="/hangszer/:hangszerId" element={<InstrumentSinglePage />} />
        <Route path="/uj-hangszer" element={<InstrumentCreatePage />} />
      </Routes>
    </BrowserRouter>
  );
}




export default App;
