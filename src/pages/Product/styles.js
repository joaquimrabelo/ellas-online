import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
  margin-bottom: 40px;

  display: flex;
  flex-direction: column;

  position: relative;

  figure {
    width: 100%;

    img {
      max-width: 100%;
    }
  }

  .discount {
    position: absolute;
    font-size: 14px;
    padding: 2px 7px;
    top: 0;
    left: 0;
    background-color: #de4242;
    color: #fff;
  }

  .product__option {
    display: flex;
    flex-direction: column;
  }

  .product__info {
    font-size: 14px;

    .price {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-weight: 500;
      margin-top: 8px;

      .original {
        font-weight: 400;
        text-decoration: line-through;
        color: #676a6e;
        font-size: 12px;
        margin-right: 10px;
      }
    }
    .installments {
      color: #676a6e;
      font-size: 12px;
    }

  }
  .size__options {
    display: flex;
    flex-direction: column;

    span {
      font-weight: 500;
    }

    .size--error {
      font-weight: 400;
      color: red;
    }

    div {
      margin-top: 5px;
    }

    button {
      background-color: #fff;
      border: 1px solid #212529;
      margin-right: 3px;
      padding: 4px 7px;
      font-weight: 500;
      transition: all 0.2s;
      
      &.selected {
        background-color: #212529;
        color: #fff;
      }
      &:disabled {
        color: #ccc;
        border-color: #ccc;
      }
    }
  }

  .button__add {
    margin-top: 15px;
    height: 40px;
    border: 1px solid #212529;
    background-color: #212529;
    color: #fff;
    transition: all 0.2s;

    &:hover {
      box-shadow: 0px 0px 3px 1px #000;
    }
  }

  @media only screen and (min-width: 468px) {
    flex-direction: row;
    
    figure {
      width: 50%;
    }

    .product__option {
      padding-left: 10px;
    }
  }

`;