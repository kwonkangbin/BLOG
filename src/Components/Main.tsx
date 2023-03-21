import React from "react";
import mycomputer from "../Assets/Img/mycomputer_icon.png";
import styled from "styled-components";

export default function Main(){
    return(
        <Container>
            <div>
                <img src={mycomputer} alt="MyComputer" />
                <span>My Computer</span>
            </div>
        </Container>
    );
}

const Container = styled.div`
    padding: 30px 30px 30px 30px;
    > div{
        display: flex;
        flex-direction: column;
        width: fit-content;
        align-items: center;

        > img{
            width: 60px;
            height: auto;
        }
        > span{
            color: white;
            margin-top: 5px;
            width: fit-content;
            font-size: 15px;
        }
    }
`;