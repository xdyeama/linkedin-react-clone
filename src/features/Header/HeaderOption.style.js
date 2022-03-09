import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #616161;
  flex: 1;
  cursor: pointer;

  :hover{
    color: black;
  }

  .headerOption__title{
    font-size: 0.9em;
    font-weight: 500;
  }

  .avatar__img{
    object-fit:contain;
    width: 25px !important;
    height: 25px !important;
    border-radius: 50%;
  }
`;