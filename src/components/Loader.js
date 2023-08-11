import React from 'react'
import { HashLoader } from 'react-spinners'

const Loader = () => {
    return (
        <>
            <div className="loader-section">
                <div className="loader">
                    <HashLoader color="#209cff" />
                </div>
            </div>
        </>
    )
}

export default Loader
