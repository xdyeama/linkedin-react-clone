import styled from 'styled-components'


export const Container = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 999;
  border-bottom: 0.1px solid lightgray;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  
  .header__left{
    display: flex;
    flex: 1;
    padding: 10px;
    margin-left: 10%;
  }

  .header__left > img {
    object-fit: contain;
    height: 40px;
    margin-right: 10px;
  }
  
  .header__right{
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0;
    margin: 0;
    margin-right: 5%;
  }

  .header__search{
    padding: 10px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    height: 22px;
    width: auto;
    color: gray;
    background-color: #eef3f8;
  }

  .header__search > input {
    outline: none;
    border: none;
    background: none;
  }
`;
