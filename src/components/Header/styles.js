import styled from 'styled-components';

export const Container = styled.header`
  height: 60px;
  background-color: #fff;
  box-shadow: 0 1px 3px 0px rgba(150, 150, 150, 0.6);

  display: flex;
  align-items: center;

  .row {
    justify-content: space-between;
    margin: 0 5px;
  }
  .header__logo img {
    max-height: 30px;
  }

  .header__actions {
    a + a {
      margin-left: 8px;
    }
  }
`;