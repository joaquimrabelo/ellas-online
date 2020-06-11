import React, { useState, createContext, useContext, useEffect } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storagedCart = localStorage.getItem('@ellasCart');
    if (storagedCart) {
      return JSON.parse(storagedCart);
    }
    return [];
  });
  const [totalCart, setTotalCart] = useState(cart.length);

  const saveCart = (cartData) => {
    setCart(cartData);
    setTotalCart(cartData.length);
    localStorage.setItem('@ellasCart', JSON.stringify(cartData));
  }

  useEffect(() => {
    console.log('#### LOAD DADOS CART');
    //setTotalCart(0);
  }, []);

  const searchProduct = (code_color, sku) => {
    return cart.find(product => (product.code_color === code_color && product.sku === sku));
  }

  const addToCart = (code_color, sku, size) => {
    const checkProduct = searchProduct(code_color, sku);
    if (!checkProduct) {
      saveCart([...cart, {code_color, sku, size, count: 1}]);
      setTotalCart(totalCart + 1);
    } else {
      const newCart = cart.map(item => {
        if (item.code_color === code_color && item.sku === sku) {
          item.count++;
        }
        return item;
      });
      saveCart(newCart);
    }
    console.log(cart);
  }

  const increaseProduct = (code_color, sku) => {
    const newCart = cart.map(item => {
      if (item.code_color === code_color && item.sku === sku) {
        item.count++;
      }
      return item;
    });
    saveCart(newCart);
  }

  const decreaseProduct = (code_color, sku) => {
    const newCart = cart.map(item => {
      if (item.code_color === code_color && item.sku === sku) {
        item.count--;
      }
      return item;
    });
    saveCart(newCart);
  }

  const removeFromCart = (code_color, sku) => {
    const newCart = cart.filter(item => {
      if (item.code_color === code_color && item.sku === sku) {
        return false;
      }
      return true;
    });
    saveCart(newCart);
  }

  return (
    <CartContext.Provider value={{
      cart, 
      totalCart, 
      addToCart, 
      increaseProduct, 
      decreaseProduct,
      removeFromCart
    }}>
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