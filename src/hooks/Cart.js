import React, { useState, createContext, useContext, useEffect } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalCart, setTotalCart] = useState(0);

  useEffect(() => {
    console.log('#### LOAD DADOS CART');
    //setTotalCart(0);
  }, []);

  const searchProduct = (style, sku) => {
    return cart.find(product => (product.style === style && product.sku === sku));
  }

  const addToCart = (style, sku) => {
    const checkProduct = searchProduct(style, sku);
    if (!checkProduct) {
      setCart([...cart, {style, sku, count: 1}]);
      setTotalCart(totalCart + 1);
    } else {
      console.log('update produto');
    }
    console.log(cart);
  }

  const updateProduct = () => {
    console.log('update');
  }

  const removeFromCart = () => {
    console.log('remove');
  }

  return (
    <CartContext.Provider value={{cart, totalCart, addToCart, updateProduct, removeFromCart}}>
      {children}
    </CartContext.Provider>
  );
};

function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart precisa ser usado com o CartContext');
  }

  return context;
}

export { CartProvider, useCart };