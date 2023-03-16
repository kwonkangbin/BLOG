import React from "react";
import window_logo from "../Assets/Img/window_logo.png";
import styled from "styled-components";

export default function Bottem(){
    return(
        <Container>
            <div>
                <img src={window_logo} alt="window logo" />
                <div>Start</div>
            </div>
        </Container>
    );
}

const Container = styled.div`
    position: fixed;
    bottom: 0;
    width: 100vw;
    background-color: #dadada;

    > div { 
        > img {
            width: 33px;
            height: auto;
        }
    }
`;