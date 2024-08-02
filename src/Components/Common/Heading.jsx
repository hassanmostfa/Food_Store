import React from 'react'

const Heading = ({subtitle , title}) => {
    return (
        <div className="my-5">
            <h3 className='subtitle'>{subtitle}</h3>
            <h1 className='title'>{title}</h1>
        </div>
    )
}

export default Heading