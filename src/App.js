// Components UI
import Wrapper from "./UI/Wrapper.js";

// ComponentsTree
import Component from "./ComponentsTree/Component.js";

// css
import "./App.css";

function App() {
  // Components
  return (
    <div className="App">
      <Wrapper>
        <Component />
      </Wrapper>
    </div>
  );
}

export default App;
