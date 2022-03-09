import styled from 'styled-components'


export const Container = styled.div`
  position: sticky;
  top: 115px;
  flex: 0.2;
  border-radius: 10px;
  text-align: center;
  height: fit-content;

  .sidebar__avatar{
    margin-bottom: 10px;
  }

  .sidebar__top{
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid lightgray;
    border-bottom: 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: white;
    padding-bottom: 10px;
  }

  .sidebar__top > h4{
    color: gray;
    font-size: 12px;
  }

  .sidebar__top > h2{
    font-size: 18px;
  }

  .sidebar__top > img{
    margin-bottom: -20px;
    width: 100%;
    height: 60px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    object-fit: cover;
  }

  .sidebar__stat{
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .sidebar__stat > p{
    color: gray;
    font-size: 13px;
    font-weight: 600px;
  }

  .sidebar__statNumber{
    font-weight: bold;
    color: #0a66c2 !important;
  }
  
  .sidebar__stats{
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid lightgray;
    background-color: white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .sidebar__bottom{
    text-align: left;
    padding: 10px;
    border: 1px solid lightgray;
    border-bottom: 0;
    background-color: white;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
  }
  
  .sidebar__bottom-btn{
    color: #0a66c2 !important;
    font-size: 15px;
    font-weight: 100;
    padding-top: 5px;
    padding-bottom: 5px;
    :hover{
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .w__icon{
    display: flex;
    justify-content: space-between;
  }

  .add-icon{
    height: 25px;
    width: 25px;
    color: black !important;
    border-radius: 50%;

    :hover{
      background-color: lightgray;
    }
  }

  .discover-more__btn{
    border: 1px solid lightgray;
    background-color: white;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 20px;

    :hover{
      background-color: lightgray;
      cursor: pointer;
    }
    p{
      color: gray;
      font-weight: 600;
    }
  }
  
  .sidebar__bottom-bot{
    text-align: left;
    padding: 10px;
    border: 1px solid lightgray;
    border-bottom: 0;
    background-color: white;
    border-radius: 10px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;

    .sidebar__recentItem{
      display: flex;
      flex-direction:row;
      padding: 5px;
      font-size: 1em;
      font-weight: 600;
      color: teal;

      .sidebar__hash{
        margin-right: 5px;
      }
    }
  }
`
