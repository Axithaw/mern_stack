// import { create } from "zustand";

// const useProductStore = create((set) => ({
//     products: [],
//     setProducts: (products) => set({products}),
//     createProduct: async (newProduct) => {
//         const res = await fetch("http://localhost:5000/api/products", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(newProduct),
//         })
//        const data =  res.json();
//        set((state) => {
//             return    
//              { products: [...state.products, data]}})
//        return { success: true, message: "Created Successfully"}
//     },
// }))

// export default useProductStore