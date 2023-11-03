
import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import Welcome from './components/Welcome';
// import Geust from './components/Geust';
// import List from './components/List';
import ProductsList from './components/ProductsList';



function App() {
  // const[isLoggedIn,setIsLoggedIn] = useState(false);

  //creer le filtre par category


  // let element=   isLoggedIn ? <h1>I am loggeIn</h1> : <h1>I am not loggeIn</h1>

  return (
    <div className="App">
      {/* <button onClick={()=>setIsLoggedIn(true) }>loggeIn</button> */}
   {/* {element} */}
   {/* {isLoggedIn ? <Welcome name="Niso" /> : <Geust  />} */}

   {/* <List /> */}

   {/*  avec ProductsList */}
  
   <ProductsList />
    </div>
  );
}

export default App;
