import React from 'react'
import { Container } from './Widgets.style'
import { Info, FiberManualRecord } from '@material-ui/icons'


function Widgets() {

  const newsArticle = (head, sub) => (
    <div className="widgets__article">
      <div className="widgets__article-left">
        <FiberManualRecord />  
      </div>
      <div className="widgets__article-right">
        <h4>{head}</h4>  
        <p>{sub}</p>
      </div>  
    </div>
  )

  return (
    <Container className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>

      {newsArticle("I am back", "I am the greatest of all time")}
      {newsArticle("I am going to Dubai", "Dubai wooooooow")}
      {newsArticle("Coronavirus is dead", "No Covid anymore uhuuuuuu")}
    </Container>
  )
}

export default Widgets