import React from "react";
import window_logo from "../Assets/Img/window_logo.png";
import styled from "styled-components";

export default function Bottem(){
    return(
        <>
            <div>
                <Window src={window_logo} alt="window logo" />
                <div>Start</div>
            </div>
        </>
    );
}

const Window = styled.img`
    width: 100px;
    height: auto;
`;