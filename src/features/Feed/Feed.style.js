import styled from 'styled-components'


export const Container = styled.div`
  flex: 0.6;
  margin: 0 20px;

  .feed__input-container{
    background-color: white;
    padding: 10px;
    padding-bottom: 20px;
    border-radius: 10px;
    margin-bottom: 20px;

    .feed__input{
      border: 1px solid lightgray;
      border-radius: 30px;
      display: flex;
      padding: 10px;
      color: gray;
      padding-left: 15px;

      form{
        display: flex;
        width: 100%;

        input{
          border: none;
          flex: 1;
          margin-left: 10px;
          outline-width: 0;
          font-weight: 600;
        }

        button{
          display: none
        }
      }
    }
  }

  .feed__input-attachments{
    display: flex;
    justify-content: space-evenly;
    
  }
`