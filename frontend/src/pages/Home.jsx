import React from 'react'
import { QueryClient, useMutation , useQuery } from '@tanstack/react-query'

const api = "http://localhost:5000/api/products"


async function fetchProduct() {
  const res = await fetch(api);
  const data = res.json();
  return data

  console.log(data)
  
}

// async function createProduct(product) {
//     const res = await fetch(api, {
//           method: "POST",
//           body: JSON.stringify({ product }),
//           headers: {
//                     "Content-Type": "application/json"
//           }
//     })

//     return res.json();
// }

function Home() {
  const { data, error , isError, isLoading} = useQuery({
    queryKey: ['products'],
    queryFn: fetchProduct,
  })

  
  console.log(data)
  return (
    <div>
        <h1>This is Home</h1>

        {data && 
            <ul>
                {data.map(item => (
                    <li> {item.name}</li>
                ))}
            </ul>
        }
    </div>
  )
}

export default Home
