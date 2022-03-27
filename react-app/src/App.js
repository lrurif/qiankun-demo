import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Aaa from "./views/Aaa";
import Bbb from "./views/Bbb";
function App() {
  return (
    <BrowserRouter
      basename={window.__POWERED_BY_QIANKUN__ ? "/app-react" : "/"}
    >
      <div className="App">
        <div>我是React项目中的内容</div>
        <div>
          <Link to={"/a"}>a</Link>
          <Link to={"/b"}>b</Link>
        </div>
        <div>
          <Routes>
            <Route path="/a" element={<Aaa/>} />
            <Route path="/b" element={<Bbb/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
// function Aaa() {
//   return <div>a的内容</div>;
// }
// function Bbb() {
//   return <div>b的内容</div>;
// }

export default App;
