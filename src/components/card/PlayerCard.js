import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import * as styles from './StylesPlayerCard'
import {useIMQA} from "imqa-react-sdk";

const PlayerCard=(props)=> {
    const IMQARef = useIMQA(); // 삽입
    const [showPlayer,setShowPlayer]=useState(false)
    return (
        <div ref={IMQARef}>
            <styles.Container>
                <styles.Button onClick={()=>setShowPlayer((showPlayer)=>!showPlayer)}>Play </styles.Button>
                {
                    showPlayer ? ReactDOM.createPortal(
                        <styles.Overlay onClick={()=>setShowPlayer(false)}>
                            <styles.Inner>
                                <video controls>
                                    <source src="/assets/videos/video.mp4"/>
                                </video>
                                <styles.Close />
                            </styles.Inner>
                        </styles.Overlay>,
                        document.body
                    ):null
                }
            </styles.Container>
        </div>
    )
}

export default PlayerCard;
