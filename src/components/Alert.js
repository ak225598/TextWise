import React from 'react'
function Alert(props) {
    return (
        <div className="d-flex justify-content-end my-2 mx-5" style={{height : '30px'}}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show bg-success text-white mx-4 my-0 p-1 fs-6`} role="alert">
                <strong>{props.alert.type}</strong> : {props.alert.msg}
            </div>}
        </div>
    )
}

export default Alert