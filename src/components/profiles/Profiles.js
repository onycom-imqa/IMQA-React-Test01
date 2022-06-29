import React from 'react'
import * as styles from './StylesProfiles'
import {useIMQA} from "imqa-react-sdk";

const Profiles=(props)=> {
    const IMQARef = useIMQA(); // 삽입
    return (
        <div ref={IMQARef}>
            <styles.Container>
                <styles.Title>Who's watching?</styles.Title>
                <styles.List>
                    <styles.Item onClick={props.click}>
                        <styles.Picture src={props.photoURL ? `/assets/images/users/${props.photoURL}.png` : `/assets/images/misc/loading.gif` }/>
                        <styles.Name>{props.displayName}</styles.Name>
                    </styles.Item>
                </styles.List>
            </styles.Container>
        </div>
    )
}

export default Profiles
