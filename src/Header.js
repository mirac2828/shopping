import React, { useEffect, useState } from "react";
import "./Header.css";
import Modal from "./Modal";

const Header = ({
  datalar,
  setDatalar,
  category,
  basket,
  setBasket,
  price,
  setPrice,
  setNewInput,
  newInput=datalar,
  total,
  setTotal,
  app
 

}) => {
    
  const [modalOpen, setModalOpen] = useState(false);
  const [headerInput,setHeaderInput]=useState("")
  const [darkMode,setDarkMode]=useState(false)

  
  
  
  
  
 
  
  const newFınd=()=>{var de=( datalar.filter(item=> 
    item.title.toLocaleLowerCase().includes(headerInput.toLocaleLowerCase())))

    
setNewInput(de)
console.log(newInput,"newInput")



}
  

  



  const addToBasket = (param) => {
    console.log(total, "total");
    const foundItem = basket?.find((item) => item.id === param.id);
    const d = basket.reduce((acc, item) => {
      return acc + item.amount * item.price;
    }, param.price);
    setPrice(d);

    if (foundItem) {
      foundItem.amount += 1;
      setBasket([...basket.filter((item) => item.id !== param.id), foundItem]);
    } else {
      setBasket([...basket, { ...param, amount: 1 }]);
    }
  };

  return (
    <div className={darkMode ? "dark-mode":"light-mode" } >
      <div className="navbar">
        <h3> E-Ticaret</h3>
        <input value={  headerInput} onChange= {(e)=>{setHeaderInput(e.target.value)
        newFınd()
      
        
        
        
        }}  placeholder="        Ürünün ismini giriniz" />

        <div className="buttons">
          <button onClick={()=>setModalOpen(true)}  >Sepet </button>
          <button>Kayıt Ol</button>
          <button onClick={()=>newFınd()} >Giriş Yap</button>
        </div>
      </div>

      <div className="category-wrapper">
     
     <div className="categoryText"> 
       <h1 style={{color: darkMode && "white"}} >KATEGORİLER</h1> 
        <div className="toggle">
          
      <input id="checkInput"  value={""}  onChange={()=>{ setDarkMode(!darkMode)
      console.log(document.body)}
      
      }  type={"checkbox"}/>
      <label htmlFor="checkInput"  className="button">  </label>
      <p style={{fontSize:"1.2rem",  fontWeight:"600"  ,color: darkMode ? "white":"black" }}> Mode</p>
       
        </div> 
        </div>
        <div className="category-images">
          {category.map((item, index) => (
            <div className="category-inside" key={index}>
              <img src={item.image} />
              <span>{item.name} </span>
            </div>
          ))}
        </div>
      </div>

      {modalOpen &&  (

        <> <div  > 
        <Modal   modalOpen={modalOpen}
         setModalOpen={setModalOpen} 
         price={price} setPrice={setPrice}
        basket={basket} setBasket={setBasket}  />
        </div>
        </>
      )}

      <div className="images">
        {newInput ? newInput.map((item, index) => (
          <div key={index} className="card">
            <img src={item.images[0]} />
            <div className="card-footer">
              <p>
                Price:<span> {item.price}$ </span>
              </p>
              <button
                onClick={() => {
                  setTotal([...total, { ...item, amount: 1 }]);
                  addToBasket(item);
                  setModalOpen(true);
                  console.log(total);
                }}
              >
                Sepete Ekle
              </button>
              

            </div>
            <p className="itemTitle">{item.title} </p>
          </div>
        )) : datalar.map((item, index) => (
            <div key={index} className="card">
              <img src={item.images[0]} />
              <div className="card-footer">
                <p>
                  Price:<span> {item.price}$ </span>
                </p>
                <button
                  onClick={() => {
                    setTotal([...total, { ...item, amount: 1 }]);
                    addToBasket(item);
                    setModalOpen(true);
                    console.log(total);
                  }}
                >
                  Sepete Ekle
                </button>
              </div>
              <p className="itemTitle">{item.title} </p>
            </div>
          )) }
      </div>
    </div>
  ); 
};

export default Header;
