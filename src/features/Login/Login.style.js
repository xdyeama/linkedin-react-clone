import styled from 'styled-components'


export const Container = styled.div`
  display: grid;
  place-items: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 100px;
  padding-bottom: 100px;

  img{
    object-fit: contain;
    height: 150px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input{
      margin-bottom: 10px;
      border: 1px solid lightgray;
      width: 350px;
      height: 50px;
      border-radius: 5px;
      padding-left: 5px;

      :focus{
        background-color: lightblue;
        ::placeholder{
          color: transparent;
        }
      }
    }

    button{
      width: 365px;
      height: 50px;
      font-size: large;
      color: #fff;
      background-color: #0074b1;
      border-radius: 5px;
      cursor: pointer;
    }
  }

  span{
    color: #0074b1;
    cursor: pointer;
    margin-top: 20px;
  }

  p{
    margin-top: 20px;
  }
`