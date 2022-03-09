import styled from 'styled-components'


export const Container = styled.div`
  flex: 0.2;
  position: sticky;
  top: 115px;
  border: 1px solid lightgray;
  border-radius: 10px;
  background-color: white;
  height: fit-content;
  padding-bottom: 10px;

  .widgets__header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;

    h2{
      font-size: 1rem;
      font-weight: 400;
    }
  }

  .widgets__article{
    display: flex;
    padding: 10px;
    cursor: pointer;

    :hover{
      background-color: whitesmoke;
    }

    .widgets__article-left{
      color: #0177b7;
      margin-right: 5px;
    }

    .widgets__article-right{
      margin-left: 5px;
      flex: 1;

      h4{
        font-size: 14px;
      }

      p{
        font-size: 12px;
        color: gray;
      }
    }
  }
`