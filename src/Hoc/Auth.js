// Hoc = high order component
import React from 'react'
import {Redirect} from 'react-router-dom'
import {firebase} from '../firebase'
function AuthGuard(Component) {
    class AuthHoc extends React.Component {
        // su dung class vi props easy hon va hieu qua hon 
         authCheck = () => {
            const user = firebase.auth().currentUser;
            // ko co user thi se ra null 
            if (user) {
                return <Component {...this.props}/>
            } else {
                return <Redirect to ="/" />
            }
        }
        render() {
            return this.authCheck();
        }
    } 
    return AuthHoc;
}
export default AuthGuard