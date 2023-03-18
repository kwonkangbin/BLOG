import React from "react";
import window_logo from "../Assets/Img/window_logo.png";
import styled from "styled-components";

export default function Bottem(){
    return(
        <Container>
            <button>
                <div></div>
                <img src={window_logo} alt="window logo" />
                <span>Start</span>
            </button>
        </Container>
    );
}

const Container = styled.div`
    position: fixed;
    bottom: 0;
    width: 100vw;
    background-color: #dadada;
    padding: 7px 0 7px 12px;

    > button { 
        display: flex;
        flex-direction: row;
        align-items: center;

        background: #7C7C7C;
        border-bottom: 4px inset rgba(0,0,0,.5);
        border-left: 4px inset #f0f8ff;
        border-right: 4px inset rgba(0,0,0,.5);
        border-top: 4px inset #f0f8ff;
        cursor: pointer;

        &:focus,
        &:hover {
            background: #BCBCBC;
        }
        
        > img {
            width: 35px;
            height: auto;
        }

        > span{
            font-size: 17px;
            font-weight: 700;
            margin-left: 5px;
        }
    }
`;