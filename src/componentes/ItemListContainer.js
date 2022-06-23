import React from 'react'
import { useEffect, useState } from 'react'
import ItemList from "../componentes/ItemList";
import { useParams } from 'react-router-dom';
import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../firebase/firesbaseConfig';



const ItemListContainer = () => {

       const [productos, setProductos] = useState([])    
       let { category } = useParams()

       useEffect(()=> {
        const getPantuflas = async () => {
          const q = query(collection(db, "pantuflas"))
          const docs = [];
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id });
          });
          if (category === undefined) {
            setProductos(docs)
          } else {
            setProductos(docs.filter((item) => item.category === category)); 
          }
          
        }
          getPantuflas()
       }, [category])

 

        return (
          <>
          <h1 className='titleCatalogo'>Catalogo de productos</h1>
         
          <ItemList productos={productos}/>
          
            
          </>
        );  
};


export default ItemListContainer


