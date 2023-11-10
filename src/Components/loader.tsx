import React from 'react'

const Loader = React.memo(function Loader() {
    return (
        <div className='flex flex-wrap p-16 justify-center'>
            <div className="loader"></div>
        </div>
    )
})

export default Loader