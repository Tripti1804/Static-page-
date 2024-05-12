"use client"
import { useEffect,useState } from "react";

export default function StaticPage() {
  const[product,setProduct]=useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data: Product[] = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <>
      <h1>Static page & Dummy API</h1>
    {
      product.map((item)=>(
        <h3>userId: {item.userId}<br></br>
            Id: {item.id}<br></br>
            title: {item.title}<br></br>
            completed: {item.completed}<br></br>
        </h3>
      ))
    }
    {/* {
      product.map((item)=>(
        <h3>Id: {item.id}</h3>
      ))
    }
    {
      product.map((item)=>(
        <h3>title: {item.title}</h3>
      ))
    }
    {
      product.map((item)=>(
        <h3>completed: {item.completed}</h3>
      ))
    } */}
    </>
    
  );
};



// export default function Home() {
//   return (
//     <h1>Hello</h1>
//   );
// }
