import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';

import logoImg from '../../assets/logo.png';
import Header from '../Header';
import { Container } from './styles';

function HeaderHome({ handleSearchSidebar, handleCartSidebar }) {
  return (
    <Header>
      <Container>
        <Link className="header__logo" to="/">
          <img src={logoImg} alt="Ellas - Moda feminina"/>
        </Link>
        <div className="header__actions">
          <button type="button" onClick={handleSearchSidebar}>
            <FiSearch size={24} />
          </button>
          <button type="button" onClick={handleCartSidebar}>
            <FiShoppingCart size={24} />
          </button>
        </div>
      </Container>
    </Header>
  )
}

export default HeaderHome;