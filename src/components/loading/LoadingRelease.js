import React from 'react'
import * as styles from './StylesLoading'
import {useIMQA} from "imqa-react-sdk";
const Loading=(props)=> {
    const IMQARef = useIMQA(); // 삽입
    return (
        <div ref={IMQARef}>
            <styles.ReleaseBody />
        </div>
    )
}

export default Loading
