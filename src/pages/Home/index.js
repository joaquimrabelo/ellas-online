import React, { useState, useEffect} from 'react';

import api from '../../services/api';
import CreateSlug from '../../utils/CreateSlug';

import HeaderHome from '../../components/HeaderHome';
import Loading from '../../components/Loading';
import ProductList from '../../components/ProductList';
import Search from '../Search';
import Cart from '../Cart';

import { Container } from './styles';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const handleSearchSidebar = () => {
    console.log('handle search');
    setSearchOpen(!searchOpen);
  }

  const handleCartSidebar = () => {
    console.log('cart open');
    setCartOpen(!cartOpen);
  }

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
      console.log('loaded');
    }
    loadProducts();
  }, []);

  if (loading) {
    return (
      <Loading />
    )
  } else {
    return (
      <Container className={searchOpen || cartOpen ? 'sidebar--active' : ''}>
        <HeaderHome handleSearchSidebar={handleSearchSidebar} handleCartSidebar={handleCartSidebar} />
        <ProductList products={products} />
        <Search searchOpen={searchOpen} handleSearchSidebar={handleSearchSidebar} />
        <Cart cartOpen={cartOpen} handleCartSidebar={handleCartSidebar} />
      </Container>
    )
  }
};

export default Home;