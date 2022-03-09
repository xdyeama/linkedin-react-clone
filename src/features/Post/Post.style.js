import styled from "styled-components";


export const Container = styled.div`
  background-color: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 10px;

  .post__header{
    display: flex;
    margin-bottom: 10px;


    .post__info{
      margin-left: 10px;

      p{
        font-size: 12px;
        color: gray;
      }

      h2{
        font-size: 15px;
      }
    }

  }

  .post__body{
    overflow-wrap: anywhere;
  }

  .post__buttons{
    display:flex;
    align-items: center;
    justify-content: space-evenly;
  }
`