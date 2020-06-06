import React, { useState, useEffect} from 'react';

import api from '../../services/api';
import CreateSlug from '../../utils/CreateSlug';

import Loading from '../../components/Loading';
import ProductList from '../../components/ProductList';
import { Container } from './styles';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get();
      const productsData = response.data.map(product => {
        return {
          ...product,
          slug: CreateSlug(product.name)
        }
      })
      setProducts(productsData);
      setLoading(false);
    }
    loadProducts();
  }, []);

  return (
    <>
      {loading ? <Loading /> : <ProductList products={products}  />}
    </>
  );
};

export default Home;