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

    @media (max-width: 1000px) {
        margin: 2vw;
        font-size: 5vh;
    }
`;

export const Span = styled.span`
    display: inline-block;    
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

    @media (max-width: 1000px) {
        font-size: 2vh;
    }
`;

export const InfoTitle = styled.h2`
    color: gold;
    font-size: 2vw;
    font-family: 'Montserrat Alternates';
    font-weight: bold;

    @media (max-width: 1000px) {
        font-size: 2vh;
    }
`;

export const TextBackgroundLeft = styled.div`
    position: absolute;
    color: gold;
    text-align: left;
    left: 0;
    width: 65%;
    height: 100%;
    background-image: linear-gradient(90deg, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0));

    @media (max-width: 1000px) {
        width: 100%;
        height: 65%;
        top: 0;
        background-image: linear-gradient(rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0));
        }
`;

export const TextBackgroundRight = styled.div`
    position: absolute;
    color: gold;
    text-align: left;
    right: 0;
    width: 65%;
    height: 100%;
    background-image: linear-gradient(90deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 50%);

    @media (max-width: 1000px) {
        width: 100%;
        height: 65%;
        bottom: 0;
        background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 50%);
        }
`;

export const TextDivLeft = styled.div`
    width: 60%;
    padding: 20px;
    font-size: 1vw;
    font-family: 'Bahnschrift';

    @media (max-width: 1000px) {
        top: 0;
        left: 0;
        font-size: 1vh;
    }
`;

export const TextDivRight = styled.div`
    width: 60%; 
    right: 0; 
    position: absolute; 
    padding: 20px;
    font-size: 1vw;
    font-family: 'Bahnschrift';

    @media (max-width: 1000px) {
        bottom: 0;
        left: 0;
        font-size: 1vh;
    }
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

