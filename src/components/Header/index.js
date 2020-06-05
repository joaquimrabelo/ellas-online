import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';

import logoImg from '../../assets/logo.png';
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <div className="container">
        <div className="row">
          <Link className="header__logo" to="/">
            <img src={logoImg} alt="Ellas - Moda feminina"/>
          </Link>
          <div className="header__actions">
            <Link to="/">
              <FiSearch size={24} />
            </Link>
            <Link to="/">
              <FiShoppingCart size={24} />
            </Link>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Header;