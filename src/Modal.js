import React from "react";
import "./Modal.css";
import close from "./images/close.png"

const Modal = ({ price,setPrice, total,setModalOpen,basket ,setBasket }) => {
  console.log(total);
  return (
   <div className="modalFooter">
        
   <div className="modal-wrapper"> 
  <div className="img-wrapper">
      <img  onClick={()=>setModalOpen(false)} style ={{backgroundColor:"black",borderRadius:"50%"}} src= {close} />
  </div>
   
   
   <table>
     
     <thead className="table">
       <th>Ürün  </th>
       <th>Fiyat </th>
       <th>Adet </th>
     </thead>
        
     <tbody className="modal-body" >
      {basket.map((item, index) =>  
      <tr className="row"> 
       
          
              <td > { item.title}  </td>
              <td >$ {item.price} </td>
              <td>{item.amount}  </td></tr>
             
           )}</tbody>
   </table>
   <div className="footer"><h1>Toplam : ${price} </h1>
   <button onClick={()=>{setBasket([])
   setPrice(0)
   
   
   }}  > Sepeti boşalt</button>
   
     
      </div>
      </div>
   
 </div>
 
  
  );
};

export default Modal;
