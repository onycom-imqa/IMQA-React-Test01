import React from 'react'
import * as styles from './StylesHeader'
import SigninForm from '../forms/SigninForm'
import {Link} from 'react-router-dom'
import {useIMQA} from "imqa-react-sdk";
const SigninHeader=(props)=> {
    const IMQARef = useIMQA(); // 삽입
    return (
        <div ref={IMQARef}>
            <styles.Background>
                <styles.Container>
                    <Link to="/">
                        <styles.Logo  src="assets/images/logo/logo.svg"/>
                    </Link>
                    <styles.ButtonLink to="/signup">Sign Up</styles.ButtonLink>
                </styles.Container>
                <SigninForm />
            </styles.Background>
        </div>
    )
}

export default SigninHeader
