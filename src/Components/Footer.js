import React from 'react'

function Footer() {
    let year=new Date().getFullYear()
  return (
    <div className='footer'>
        <div className='footcontent'>
            <p className='copy'>&copy;{year}goldenTips,All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer