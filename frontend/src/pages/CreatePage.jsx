
import { useState } from 'react';
// import useProductStore  from '../store/product';
import { useMutation,useQuery } from '@tanstack/react-query'


async function createProduct(product) {
  const res = await fetch(api, {
        method: "POST",
        body: JSON.stringify({ product }),
        headers: {
                  "Content-Type": "application/json"
        }
  })

  return res.json();
}

function CreatePage() {

 const [name, setName] = useState('')
 const [price, setPrice] = useState(0)
 const [image, setImage] = useState('')
// const {products,createProduct} = useProductStore()
//   // const handleSubmit = (e)=>{
//   //   e.preventDefault();
//   //   const product = { name , price , image}
//   //   // fetch('http://localhost:5000/api/products', {
//   //   //   method: "POST",
//   //   //   headers: {
//   //   //       "Content-Type": "application/json" },
//   //   //   body: JSON.stringify(product)
//   //   //     }).then(()=> {
//   //   //       console.log("new product added")
//   //   //     })
     
//   //   createProduct(product)
//   //   setName('')
//   //   setPrice(0)
//   //   setImage('')

//   //   console.log(product)
//   // }
  
 

    const { data, error , isError, isLoading} = useQuery({
      queryKey: ['products']
     
    }) 
    

    const api = "http://localhost:5000/api/products"



    const mutation = useMutation(
                      {
                        mutationFn: async (product) => {
                          const res = await fetch(api, {
                            method: "POST",
                            body: JSON.stringify({ product }),
                            headers: {
                                      "Content-Type": "application/json"
                            }
                      })
                    
                          return res.json();
                        }
                      }
      )
    return (
    <div>
        <h1>This is Create Page</h1>
        <form action="" onSubmit={ e => {
            e.preventDefault();
            const product = {name , price, image}

            mutation.mutate(product)

            setName('')
            setPrice(0)
            setImage('')
            console.log(product)

        }} className='flex flex-col gap-2 justify-center items-center' >
        <input className=' border-2 border-black w-1/2 bg-slate-200 ' type="text" required name='name' value={name} onChange={e => setName(e.target.value) } />
        <input className=' border-2 border-black w-1/2 bg-slate-200 ' type="number" required name='price' value={price} onChange={e => setPrice(e.target.value) } />
        <input className=' border-2 border-black w-1/2 bg-slate-200 ' type="text" required name='image' value={image} onChange={e => setImage(e.target.value) } />
        <button className='w-1/4 bg-blue-500 text-white  ' type='submit'>Add</button>
        </form>
        <p>{name}</p>
    </div>
  )
}

export default CreatePage
