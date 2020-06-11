import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0px 0px 3px 1px rgba(150, 150, 150, 0.3);
  background-color: #fff;
  margin-bottom: 10px;

  display: flex;
  justify-content: flex-start;

  img {
    max-height: 100px;
  }

  .product__info {
    padding: 3px 10px 0 10px;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    flex: 1;

    .price {
      font-size: 12px;
    }
    .size {
      font-size: 12px;
    }
    .product__option {
      margin-top: 10px;
      display: flex;

      span {
        width: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
      }
      
      button {
        background: transparent;
        border: 1px solid #212529;
        padding: 5px;

        display: flex;
        align-items: center;

        &.remove {
          margin-left: auto;
          border-color: #de4242;
        }
      }
    }
  }
  
`;