import React from 'react'

export default function Home({user}) {
   return (
    user?
    <div>
      <p>Welcome back {user.name}!  Train your brain in minutes per day using our science tested memory pattern techniques.  With Science!</p>
    </div>
    :
    <div>
      <p>Welcome to Flashing Cards!  Train your brain in minutes per day using our science tested memory pattern techniques.  With Science!</p>
    </div>
   ) 
}
