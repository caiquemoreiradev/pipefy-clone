import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;
  opacity: ${props => props.done ? 0.6 : 1};

  & + div {
      border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
      display: flex;
      align-items: center;
      height: 40px;
      justify-content: space-between;

      h2 {
          font-weight: 500;
          font-size: 16px;
          padding: 0 10px;
      }

      button {
          width: 42px;
          height: 42px;
          border-radius: 18px;
          background: #3b5bfd;
          opacity: 0.7;
          border: 0;
          margin-right: 10px;
          cursor: pointer;
      }
  }

  .header {
      background: #FFF;
      height: 70px;
      padding-left: 30px;
      padding-right: 30px;
  }

  .icons {
      display: flex;
      align-items: center;
  }

  ul {
      margin-top: 30px;
  }
`;
