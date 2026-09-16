import { createContext, useState } from "react";


export const WishlistContext = createContext();


const WishlistProvider = ({children}) => {


  const [wishlist,setWishlist] = useState([]);



  const addToWishlist = (product)=>{

    const alreadyExist = wishlist.find(
      (item)=> item.id === product.id
    );


    if(alreadyExist){
      return;
    }


    setWishlist([
      ...wishlist,
      product
    ]);

  }



  const removeWishlist = (id)=>{

    setWishlist(
      wishlist.filter(
        (item)=> item.id !== id
      )
    );

  }



  return (

    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeWishlist
      }}
    >

      {children}

    </WishlistContext.Provider>

  )

}


export default WishlistProvider;