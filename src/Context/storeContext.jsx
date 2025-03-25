import { createContext, useState } from "react";
import { food_list } from "../assets/assets"; 
export const storeContext = createContext(null)

// console.log("Food List in Context:", food_list);

const storeContextProvider = ({children}) => {
    
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems )
        {
            if (cartItems[item]>0) {
                let itemInfo = food_list.find((product)=>product._id === item)
                totalAmount += itemInfo.price*cartItems[item]
            }  
        }
        return totalAmount;
    }
    
    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    };
    
    return (
        <storeContext.Provider value={contextValue}>
            {children}
        </storeContext.Provider>
    )
}

export default storeContextProvider;