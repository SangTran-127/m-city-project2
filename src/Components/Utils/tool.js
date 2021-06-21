import React from 'react'
import {Link} from 'react-router-dom'
import mcitylogo from '../../Resources/images/logos/manchester_city_logo.png'
import {toast} from 'react-toastify'
import {firebase} from '../../firebase'
export const CityLogo = (props) => {
    const template = <div
        className="img_cover"
        style ={{
            width: props.width,
            height: props.height,
            background:`url(${mcitylogo}) no-repeat`
        }}
    ></div>
    if (props.link) {
        // nếu true thì cái logo đó click được vào link
        return (
            <Link className="link_logo" to ={props.linkTo}>
                {template}
            </Link>
        )
    } else {
        return template
    }
}
export const showToastError = msg => {
    toast.error(msg, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    
}
export const showToastSuccess = msg => {
    toast.success(msg, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
}
export const logoutHandler = (name) => {
    firebase.auth().signOut()
    .then(() => {
        showToastSuccess(`Good bye ${name}`)
    }).catch(error => {
        showToastError(error.message)
    })
}