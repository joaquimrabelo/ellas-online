import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0px 0px 3px 1px rgba(150, 150, 150, 0.3);
  background-color: #fff;

  width: calc(50% - 10px);
  margin: 0 5px 20px;
  display: flex;
  flex-direction: column;

  position: relative;

  @media only screen and (min-width: 468px) {
    width: calc(33.33% - 10px);
  }

  @media only screen and (min-width: 768px) {
    width: calc(25% - 10px);
  }

  @media only screen and (min-width: 960px) {
    width: calc(25% - 10px);
  }

  @media only screen and (min-width: 1300px) {
    width: calc(25% - 10px);
  }

  figure {
    text-align: center;

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

  .product__info {
    padding: 10px;
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
  }
`;