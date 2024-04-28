import {db} from "./firebase"
import { useEffect, useState } from "react";
import {getDocs,collection} from 'firebase/firestore'

const useGetProducts=()=>{
    const [productList,setProductList]=useState([])
    const productCollectionRef=collection(db,"Product")
    
    useEffect(()=>{
        const getProductList= async()=>{
            try{
                
                const data= await getDocs(productCollectionRef)
                const filteredData=data.docs.map((doc)=>({
                    ...doc.data(),
                    id:doc.id
                }))
                setProductList(filteredData)
            }catch (err){
                console.log(err)
            }
        }
        getProductList();
    },[])

    return {productList}
}

export default useGetProducts