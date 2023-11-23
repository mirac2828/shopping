import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Modal from "./Modal";

function App() {
  const [datalar, setDatalar] = useState("");
  const [category, setCategory] = useState("");
  const [basket, setBasket] = useState([]);
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState([]);
  const [newInput,setNewInput]=useState(datalar)
 
 

  useEffect(() => {
    fetch("http://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setDatalar(data.slice(0, 20)))
      .catch((err) => console.log(err));
    fetch("http://api.escuelajs.co/api/v1/categories")
      .then((res) => res.json())
      .then((item) => setCategory(item.slice(0, 5)));

  
      
  }, [datalar,newInput]);
  const app=document.getElementsByClassName("App")
   
 

  if (!datalar || !category) return null;
  return (
    <div className="App">
      <Header
      app={app}
      total={total}
      setTotal={setTotal}
        price={price}
        setPrice={setPrice}
        basket={basket}
        setBasket={setBasket}
        category={category}
        datalar={datalar}
        newInput={newInput}
        setNewInput={setNewInput}
      setDatalar={setDatalar}
       
           />
    
   
    </div>
  );
}

export default App;
