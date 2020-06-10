import React, { createContext, useContext, useState, useCallback } from 'react';

import api from '../services/api';
import CreateSlug from '../utils/CreateSlug';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const loadProducts = useCallback(async () => {
    const response = await api.get();
      const productsData = response.data.map(product => {
        return {
          ...product,
          slug: CreateSlug(product.name)
        }
      })
      setProducts(productsData);
  }, []);

  if (!products.length) {
    loadProducts();
  }
  
  const getProduct = useCallback((slug) => {
    return products.find(product => product.slug === slug);
  }, [products]);

  return (
    <ProductContext.Provider value={{products, loadProducts, getProduct}}>
      {children}
    </ProductContext.Provider>
  );
};

function useProduct() {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error('useProduct precisa ser usado com o ProductProvider');
  }

  return context;
}

export { ProductProvider, useProduct };