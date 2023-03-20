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
    height: 52px;
    background-color: #dadada;
    padding: 3px 0 3px 4px;

    display: flex;
    align-items: center;

    > button { 
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-left: 5.6px;
        width: 100px;
        height: 40px;

        background: #BCBCBC;
        border-bottom: 4px inset #939393;
        border-left: 4px inset #bebdbd;
        border-right: 4px inset #939393;
        border-top: 4px inset #bebdbd;
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