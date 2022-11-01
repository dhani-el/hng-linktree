import Links from "./Components/link";
import Profile from "./Components/profile";
import Share from "./Components/share";
import Footer from "./Components/footer";
import data from "./Data Source/data";
import "./StyleSheet/app.css"

function App() {
  return (
    <div className="App">
      <Profile/>
      <Links linksData={data}/>
      <Share/>
      <Footer/>
    </div>
  );
}

export default App;
