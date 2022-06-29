import React from 'react'
import * as styles from './StylesEmailForm'
import {useIMQA} from "imqa-react-sdk";

const EmailForm = ()=> {
    const IMQARef = useIMQA(); // 삽입
    return (
        <div ref={IMQARef}>
            <styles.Container>
                <styles.Text>
                    Ready to watch? Enter your email to create or restart your membership.
                </styles.Text>
                <styles.Input placeholder="Email address" />
                <styles.Button onClick={()=>alert("😁")}>
                    Get Started
                    <img src="assets/images/icons/chevron-right.png" alt="chevron-right" />
                </styles.Button>
            </styles.Container>
        </div>
    )
}

export default EmailForm
