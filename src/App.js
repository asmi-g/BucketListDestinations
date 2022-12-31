import './App.css';
import Banner from "./components/Banner"
import Destination from "./components/Destination"
import data from "./data"

function App() {
  const listobjects = data.map(object => {
    return <Destination 
      object = {object}
      />
  })
  return (
    <div className="App">
        <Banner />
        <div>
          {listobjects}
        </div>
    </div>
  );
}

export default App;
