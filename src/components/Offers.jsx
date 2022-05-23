import React from 'react'


const Offers = (props) => {
  return (
    <section className="offers">
        <div className="container">
           {props.offers.map((offers,index)=>(
             <img key={index} className="offer" src= {offers}/>
           ))}
        </div>
    </section>
  )
}

export default Offers