import React from 'react'

const Title = ({title , head , headsecondery , description , style , btnTxt}) => {
  return (
    <div className={style}>
        <p className='cmnTitle'>{title}</p>
        <h2 className='cmnHead mt-1 '>{head}</h2>
        <h4 className='cmnHeadingSecondary mt-6 '>{headsecondery}</h4>
        <p className='cmnPera mt-6'>{description}</p>
        <button className="cmnButton mt-10 ">{btnTxt}</button>
    </div>
  )
}

export default Title