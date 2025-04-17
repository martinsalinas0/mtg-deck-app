import Navbar from "./components/navBar";
import Yeet from "./components/searchBar";
import CardView from "./components/cardView";


export default function Home() {
  return (
    <div className="section">
      <Navbar /> 
      <Yeet /> 
      <CardView /> 
    </div>
  );
}
