import { HeaderDiv ,  Title , SubTitle , Span , ContactInfoDiv } from '../Styles';
import DescriptionIcon from '@material-ui/icons/Description';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function Header()
{
    return <HeaderDiv>
        <Title id="title">
            <Span data-aos="fade-up" data-aos-delay="100">Y</Span>
            <Span data-aos="fade-down" data-aos-delay="120">O</Span>
            <Span data-aos="fade-up" data-aos-delay="140">N</Span>
            <Span data-aos="fade-down" data-aos-delay="160">A</Span>
            <Span data-aos="fade-up" data-aos-delay="180">T</Span>
            <Span data-aos="fade-down" data-aos-delay="200">A</Span>
            <Span data-aos="fade-up" data-aos-delay="220">N</Span>
        </Title>
        <Title>
            <Span data-aos="fade-down" data-aos-delay="100">G</Span>
            <Span data-aos="fade-up" data-aos-delay="120">O</Span>
            <Span data-aos="fade-down" data-aos-delay="140">L</Span>
            <Span data-aos="fade-up" data-aos-delay="160">D</Span>
            <Span data-aos="fade-down" data-aos-delay="180">E</Span>
            <Span data-aos="fade-up" data-aos-delay="200">N</Span>
            <Span data-aos="fade-down" data-aos-delay="220">B</Span>
            <Span data-aos="fade-up" data-aos-delay="240">E</Span>
            <Span data-aos="fade-down" data-aos-delay="260">R</Span>
            <Span data-aos="fade-up" data-aos-delay="280">G</Span>
        </Title>
        <SubTitle data-aos="zoom-in" data-aos-delay="700">Full Stack Developer</SubTitle>
        <ContactInfoDiv>
        <a href='https://drive.google.com/file/d/1aNik8LrMt9fPwfj3o-QI8RL83e5f2ZmT/view' target='_blank' rel="noopener noreferrer">
            <DescriptionIcon data-aos="zoom-in-left" data-aos-delay="900" style={{ fontSize: '5vh' }} />
        </a>
        <a href="mailto:yonatan.r.gold@gmail.com.com">
            <EmailIcon data-aos="zoom-in-left" data-aos-delay="900" style={{ fontSize: '5vh' }} />
        </a>
        <a href='https://www.linkedin.com/in/yonatan-goldenberg-45a35a1b7/' target='_blank' rel="noopener noreferrer">
            <LinkedInIcon data-aos="zoom-in-right" data-aos-delay="900" style={{ fontSize: '5vh' }} />
        </a>
        <a href='https://github.com/Yoni-Gold' target='_blank' rel="noopener noreferrer">
            <GitHubIcon data-aos="zoom-in-right" data-aos-delay="900" style={{ fontSize: '5vh' }} />
        </a>
        </ContactInfoDiv>
        <SubTitle><KeyboardArrowDownIcon onClick={() => {document.getElementById('div1').scrollIntoView({ behavior: 'smooth' , block: "center"})}} data-aos="fade-up" data-aos-delay="1500" data-aos-anchor="#title" style={{fontSize: '10vw' , cursor: 'pointer'}}/></SubTitle>
        </HeaderDiv>
}

export default Header;