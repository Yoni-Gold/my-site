import styled from 'styled-components';
import image1 from './media/image1.jpg';
import image2 from './media/image2.jpg';
import image3 from './media/image3.png';
import image4 from './media/image4.jpg';

export const AppDiv = styled.div`
    display: grid;
    grid-template-columns: auto;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const HeaderDiv = styled.div`
    height: 100vh;
    display: grid;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h1`
    color: gold;
    font-size: 5vw;
    font-weight: 1;
    font-family: 'Major Mono Display';
    margin: 2vh;
`;

export const Span = styled.span`
    display: inline-block;    
    transition: all 1s;
    cursor: default; 
`;

export const ContactInfoDiv = styled.div`
    display: flex;
    color: gold;
    width: 30vw;
    align-items: center;
    justify-content: space-around;
    width: 100%;
`;

export const SubTitle = styled.div`
    color: gold;
    font-size: 2vw;
    margin: 10vh;
    font-family: 'Montserrat Alternates';
`;

export const InfoTitle = styled.h2`
    color: gold;
    font-size: 2vw;
    font-family: 'Montserrat Alternates';
    font-weight: bold;
`;

export const TextBackgroundLeft = styled.div`
    position: absolute;
    color: gold;
    text-align: left;
    left: 0;
    width: 65%;
    height: 100%;
    background-image: linear-gradient(90deg, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0));
`;

export const TextBackgroundRight = styled.div`
    position: absolute;
    color: gold;
    text-align: left;
    right: 0;
    width: 65%;
    height: 100%;
    background-image: linear-gradient(90deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 50%);
`;

export const TextDivLeft = styled.div`
    width: 60%;
    padding: 20px;
    font-size: 1vw;
    font-family: 'Bahnschrift';
`;

export const TextDivRight = styled.div`
    width: 60%; 
    right: 0; 
    position: absolute; 
    padding: 20px;
    font-size: 1vw;
    font-family: 'Bahnschrift';
`;

export const Div1 = styled.div`
    position: relative;
    background-image: url(${image1});
    height: 50vh;
    width: 50vw;
    margin: 20vh 40px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center right 15%;
    box-shadow: 10px 10px 0px 0px gold;
`;

export const Div2 = styled.div`
    position: relative;
    background-image: url(${image2});
    height: 50vh;
    width: 50vw;
    margin: 20vh 40px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center left 30%;
    box-shadow: 10px 10px 0px 0px gold;
`;

export const Div3 = styled.div`
    position: relative;
    background-image: url(${image3});
    height: 50vh;
    width: 50vw;
    margin: 20vh 40px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    box-shadow: 10px 10px 0px 0px gold;
`;

export const Div4 = styled.div`
    position: relative;
    background-image: url(${image4});
    height: 50vh;
    width: 50vw;
    margin: 20vh 40px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    box-shadow: 10px 10px 0px 0px gold;
`;

export const SideBarDiv = styled.div`
    background-color: gold;
    position: fixed;
    display: grid;
    left: 0px;
    top: 20vh;
    width: 50px;
    height: 400px;
    z-index: 10;
`;

export const WraperDiv = styled.div`
    border-color: gold;
    border-style: double;
    border-width: 4px;
    padding: 80px;
    margin: 30px;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: -25px;
        right: -25px;
        width: 50px;
        height 50px;
        border: 2px solid gold;
        border-radius: 50%;
        background: black;
    }

    
    &::after {
        content: '';
        position: absolute;
        bottom: -25px;
        left: -25px;
        width: 50px;
        height 50px;
        border: 2px solid gold;
        border-radius: 50%;
        background: black;
    }
`;

