import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssueFilter = styled.ul`
  margin-bottom: 15px;

  button {
    font-family: Arial, Helvetica, sans-serif;
    width: 80px;
    height: 30px;
    border: 1px solid #666;
    border-radius: 5px;
    color: #666;
    background-color: #fff;
    font-size: 14px;
    margin-left: 2px;

    :hover {
      background-color: #7159c1;
      color: white;
    }
  }
`;

export const PageActions = styled.div`
  margin-top: 15px;


  span {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0 5px;
    color: #666;
  }

button {
    font-family: Arial, Helvetica, sans-serif;
    width: 80px;
    height: 30px;
    border: 1px solid #666;
    border-radius: 5px;
    color: #666;
    background-color: #fff;
    font-size: 14px;
    margin-left: 2px;

    :hover {
      background-color: #7159c1;
      color: white;
    }
`;

export const IssueList = styled.ul`
  padding-top: 15px;
  margin-top: 15px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;
  }

  & + li {
    margin-top: 10px;
  }

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid #eee;
  }

  div {
    flex: 1;
    margin-left: 15px;

    strong {
      font-size: 16px;

      a {
        text-decoration: none;
        color: #333;

        &:hover {
          /* ao passar mouse por cima */
          color: #7159c1;
        }
      }

      span {
        background: #eee;
        color: #333;
        border-radius: 2px;
        font-size: 12px;
        font-weight: 600;
        height: 20px;
        padding: 3px 4px;
        margin-left: 10px;
      }
    }

    p {
      margin-top: 5px;
      font-size: 12px;
      color: #999;
    }
  }
`;
