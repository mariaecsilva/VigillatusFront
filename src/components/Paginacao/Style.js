import styled from 'styled-components';

export const UlPaginacao = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 5px;
  margin-rigth: 10px;
  list-style: none;
`

export const LiPaginacao = styled.li`
    margin: 0 5px;

    button {
        margin: 0 5px;
        padding: 8px 16px;
        border: 1px solid #ccc;
        border-radius: 5px;
        cursor: pointer;
    }

    .active {
        background-color: #333;
        color: white;
    }
`