import React from "react"
// Correct the imports here
import { Snackbar, Alert } from "@mui/material"
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"
import "./AlertMessage.scss"

// import "./index.scss"
const SUCCESS_CODE = 200
const INFO_ALERT = "info"

const AlertMessage = ({code, message, setMessage, style, type, duration}) => {
    const successIcon = <CheckCircleOutlineIcon fontSize="inherit" />
    
    return (
        <div>      
            <Snackbar
                anchorOrigin={{ horizontal:"center", vertical:"top" }}
                open={!!message}
                autoHideDuration={duration || 5000}
                onClose={() => setMessage(null)}
            >
                <Alert
                    className={type === INFO_ALERT ? "info-alert-message" : "custom-alert-message"}
                    style={{
                        ...style
                    }}
                    variant="filled"
                    severity={code === SUCCESS_CODE ? "success" : "error"}
                    // severity="success"
                    iconMapping={{
                        success: successIcon
                    }}
                >
                    <span className="t-s3">{message}</span>
                </Alert>
            </Snackbar>
        </div>
    )
}

export default AlertMessage
