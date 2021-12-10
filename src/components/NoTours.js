import React from 'react'
import Button from './Button'

const NoTours = ({getData}) => {
   return (
      <div className='text-center'>
         <h2 className='text-4xl font-bold'>No Tours Are left</h2>
         <Button handleClick={getData} textColor='text-blue-900'>
            Reset
         </Button>
      </div>
   )
}

export default NoTours
