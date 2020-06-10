import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .header__logo img {
    height: 30px;
  }

  .header__actions {
    display: flex;
    align-items: center;

    button + button {
      margin-left: 8px;
    }
    button {
      background: transparent;
      border: none;
    }
    .button__cart {
      position: relative;

      .counter__cart {
        background-color: rgba(222,66,66,1);
        color: #fff;
        font-size: 12px;
        padding: 0 3px;

        position: absolute;
        top: -3px;
        right: 0;
      }
    }
  }

`;