import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { useRete } from "./rete";

import "./styles.css";

function Editor() {
  const [setContainer] = useRete();

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
      ref={(ref) => ref && setContainer(ref)}
    />
  );
}

function App() {
  const [visible, setVisible] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setVisible(false)}>Destroy</button>
      <a target="_blank" href="https://github.com/retejs/react-render-plugin">
        <img
          style={{ position: "absolute", top: 0, right: 0, border: 0 }}
          src="https://camo.githubusercontent.com/652c5b9acfaddf3a9c326fa6bde407b87f7be0f4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6f72616e67655f6666373630302e706e67"
          alt="Fork me on GitHub"
          data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png"
        />
      </a>
      {visible && <Editor />}
    </div>
  );
}

const rootElement = document.getElementById("root");
createRoot(rootElement).render(<App />);
