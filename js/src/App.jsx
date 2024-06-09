import "./App.css";
import { useState } from "react";

import SideBar from "./components/SideBar";
import Flutter from "./components/Flutter";
import Performance from "./components/Performance";
import Docs from "./components/Docs";
import Security from "./components/Security";
import Errors from "./components/Errors";

function App() {
  const [tab, setTab] = useState(1);

  function renderTab() {
    if (tab === 1) return <Flutter></Flutter>;
    else if (tab === 2) return <Performance></Performance>;
    else if (tab === 3) return <Security></Security>;
    else if (tab === 4) return <Docs></Docs>;
    else if (tab === 5) return <Errors></Errors>;
  }

  return (
    <div className="main">
      <SideBar setTab={setTab}></SideBar>
      {renderTab()}
    </div>
  );
}

export default App;
