import styled from 'styled-components';

export const Container = styled.div`
  
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 10;
  top: 0;
  left: 100%;
  overflow: hidden;

  display: flex;
  justify-content: flex-end;
  
  transition: all 0.15s;

  &.active {
    display: flex;
    left: 0;
  }

  .sidebar__content {
    width: 100%;
    height: 100vh;
    background: #f9f9f9;
    color: #212529;
    position: relative;

  }

  @media only screen and (min-width: 768px) {
    .sidebar__content {
      width: 400px;
      height: 100vh;
      background: #f9f9f9;

      .product {
        width: calc(50% - 10px);
      }
      
      .container {
        margin: 0 10px;
        width: 380px;
      }
    }
  }

  

`;