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
    > div{
        > img{
            width: 80px;
            height: auto;
        }
        > span{
            color: white;
            font-size: 15px;
        }
    }
`;