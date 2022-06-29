import React from 'react'
import * as styles from './StylesHeader'
import EmailForm from '../forms/EmailForm'
import {Link} from 'react-router-dom'
import {useIMQA} from "imqa-react-sdk";
const HomeHeader=()=> {
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
                <styles.FeatureContainer>
                    <styles.FeatureTitle>Unlimited movies, TV shows, and more.</styles.FeatureTitle>
                    <styles.FeatureSubtitle>Watch anywhere. Cancel anytime.</styles.FeatureSubtitle>
                    <styles.Inner>
                        <EmailForm />
                    </styles.Inner>
                </styles.FeatureContainer>

            </styles.Background>
        </div>
    )
}

export default HomeHeader
