import React from 'react'
import * as styles from './StylesHeader'
import SignupForm from '../forms/SignupForm'
import {Link} from 'react-router-dom'
import {useIMQA} from "imqa-react-sdk";
const SignupHeader=(props)=> {
    const IMQARef = useIMQA(); // 삽입
    return (
        <div ref={IMQARef}>
            <styles.Background>
                <styles.Container>
                    <Link to="/">
                        <styles.Logo  src="assets/images/logo/logo.svg"/>
                    </Link>
                    <styles.ButtonLink to="/signin">Sign In</styles.ButtonLink>
                </styles.Container>
                <SignupForm />
            </styles.Background>
        </div>
    )
}

export default SignupHeader
