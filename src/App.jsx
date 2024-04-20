import React from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

const App = () => {
  return (
    <div>
      <>
        <Navbar title="TextS" />
        <div className="container my-5">
          <TextForm Heading="Enter Your Text " />
        </div>


      </>
    </div>
  )
}

export default App