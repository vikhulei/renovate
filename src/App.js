import './App.css';
import { Image } from "./Sample.js"
import Picture1 from "./assets/Picture1.jpg"

function App() {
  return (
    <div className="App">
      <Image  src={Picture1} />
    </div>
  );
}

export default App;
