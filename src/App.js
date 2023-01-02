import './App.css';
import { ImageContainer, Image } from "./Sample.js"
import Picture1 from "./assets/Picture1.jpg"

function App() {
  return (
    <div className="App">
      <ImageContainer>
      <Image  src={Picture1} />
      </ImageContainer>
    </div>
  );
}

export default App;
