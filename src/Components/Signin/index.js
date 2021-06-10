import React, {useState} from 'react'
import {CircularProgress} from '@material-ui/core'
import {Redirect} from 'react-router-dom'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import { FormatLineSpacing } from '@material-ui/icons'
import {firebase} from '../../firebase'
import {PinDropSharp} from '@material-ui/icons'
function SignIn(props) {
    const [loading, setLoading] = useState(false)
    const formik = useFormik({
        initialValues: { // de biet input la loai gi
            email:'',
            password:'',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email, try again').required('The email is required'),
            password: Yup.string().required('The password is required')
        }),
        onSubmit: (values) => { //validate function
            //function se duoc goi khi click button // phai co du email mat khau moi dc
            setLoading(true)
            console.log(values);
            submitForm(values)
        }
    })
    const submitForm = (values) => {
        firebase.auth().signInWithEmailAndPassword(
            values.email,
            values.password
        ).then(()=>{
            //show succes
            props.history.push('/dashboard')
        }).catch(error => {
            setLoading(false)  
            alert(error) 
            // 
        })
    }
    return (
        <div className="container">
            <div className="signin_wrapper" style={{margin:'100px'}}>
                <form onSubmit={formik.handleSubmit}>
                    <h2>Please login</h2>
                    <input 
                        name="email" 
                        placeholder="Email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? 
                        <div className="error_label">
                            {formik.errors.email}
                        </div>
                    : null}
                    <input 
                        placeholder="enter your password"
                        name="password" 
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    {formik.touched.email && formik.errors.password ? 
                        <div className="error_label">
                            {formik.errors.password}
                        </div>
                    : null}
                    { loading ?
                        <CircularProgress color="secondary" className="progress"/>
                        : 
                        <button type="submit">Login</button>
                    }
                    
                </form>

            </div>
        </div>
    )
}
export default SignIn