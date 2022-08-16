import React from 'react';
import {useHistory} from "react-router-dom";
import { back_btn, back_btn_white } from '../../assets/icons';

import './style.css';


const BackHandler = () => {

    const history = useHistory();

    return (
        <div className="back-handler-container">
            <div className="back-icon-container" onClick={() => history.goBack()}>
                {/* <FontAwesomeIcon icon={faArrowLeft} size="2x"/> */}
                <img src={back_btn} className="action-back-btn"/>
                {/* <span>Back</span> */}
            </div>
        </div>
    )
}

export default BackHandler
