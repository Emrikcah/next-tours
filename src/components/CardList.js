import React from 'react'
import Card from './Card'

const CardList = ({tours,deleteTours}) => {
   return (
      <section className='w-min-width xl:w-fixed-width pt-12'>
         <div className="mb-12 text-center">
            <h1 className='text-5xl mb-3 font-bold'>Our Tours</h1>
            <div className=" bg-blue-300 w-40 mx-auto h-1"></div>
         </div>
         
      {tours.map(tour =>{
         return <Card key={tour.id} tour={tour} deleteTours={deleteTours}/>
      })}
         
         
      </section>
   )
}


export default CardList

