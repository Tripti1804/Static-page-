"use client"
import { useEffect,useState } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function StaticPage() {
  const[product,setProduct]=useState<Post[]>([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data: Post[] = await response.json();
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
            completed: {item.body}<br></br>
        </h3>
      ))
    }

    </>
    
  );
};



// export default function Home() {
//   return (
//     <h1>Hello</h1>
//   );
// }
