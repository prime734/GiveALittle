import React from 'react';
import './styles/sellers-page.css'
import { useState  } from "react"


function AddProductPopup(props) {

    const [imageUrl, setImageUrl] = useState('');
    const [name, setName] = useState('');
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");


  return (props.trigger) ? (
    <div 
        className='popup'>

        <button 
            className='close-popup-button'
            onClick={() => props.setTrigger(false)} 
            >
            Close
            {props.children}
        </button>

        <form onSubmit={props.onSubmit}>
            
            <div >
                <input 
                type="text" 
                value={name}
                placeholder="Product Name"
                onChange={(e) => setName(e.target.value)} ></input>
            </div>

            <div >
                <input 
                type="text"
                value={desc} 
                placeholder="Description"
                onChange={(e) => setDesc(e.target.value)}></input>
            </div>

            <div>
                <input 
                type="number"
                value={price} 
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}></input>
            </div>

            <div>
                <input 
                type="number" 
                value={stock}
                placeholder="Products in stock"
                onChange={(e) => setStock(e.target.value)}></input>
            </div>

        <input type="submit" ></input>
    </form>

    </div>
  ): "";
}

export default AddProductPopup