import { useState } from 'react'
import Navbar from './components/Navbar';
import './App.css'
import Home from './components/Home';
import Search from './components/Search';
import Movies from './components/Movies';

function App() {
  // const [count, setCount] = useState(0)
  const[search, setSearch] = useState("");
  const[loader, setLoader] = useState(false);
  const callBack = (ele) => {
    setSearch(ele);
  }
  const loadCall = (ele) => {
    setLoader(ele)
  }
  // console.log(search);

  return (
    <div className="App">
      {/* <h1>jjdkdk</h1> */}
      {
        loader && <Loader />
      }
      <Navbar />
      <Home />
      <Search loadCall={loadCall} callBack={callBack}/>
      {
        search && <Movies search={search} />
      }
    </div>
  )
}

export default App
