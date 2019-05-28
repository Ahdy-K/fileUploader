import React from 'react'
import PropTypes from 'prop-types'

const UploadProgress = ({uploadProgress}) => {
    return (
        <div className="progress">
            <div className="progress-bar" role="progressbar" style={{width:`${uploadProgress}%`}} aria-valuenow={uploadProgress} aria-valuemin="0" aria-valuemax="100">{uploadProgress}%</div>
        </div>
    )
}

UploadProgress.propTypes = {
    uploadProgress : PropTypes.number.isRequired,
}

export default UploadProgress
