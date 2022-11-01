import Links from "./Components/link";
import Profile from "./Components/profile";
import data from "./Data Source/data";
import "./StyleSheet/app.css"

function App() {
  return (
    <div className="App">
      <Profile/>
      <Links linksData={data}/>
    </div>
  );
}

export default App;
