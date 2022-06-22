import React from 'react'
import {useEffect , useState} from "react"
import ItemDetail from '../componentes/ItemDetail'
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs, documentId } from "firebase/firestore";
import { db } from '../firebase/firesbaseConfig';



const ItemDetailContainer = () => {

    const [item, setItem] = useState([]) 
   
    const { id } = useParams();
    

       useEffect(()=> {
        const getPantuflas = async () => {
          const q = query(collection(db, "pantuflas"), where(documentId(), "==", id));
          const querySnapshot = await getDocs(q);
          const docs = [];
          querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id });
          });
          console.log(docs)
          setItem(docs)
        }   
          getPantuflas()
       }, [id]) 

   
  return (
    <div>
        <h1>Detalle de producto</h1>
        {item !== undefined
        ? item.map((iteracion)=> {
          return <ItemDetail item={iteracion}/>;
        })
        : null }

        
        <>
        </>
       
    </div>
  )
}





export default ItemDetailContainer