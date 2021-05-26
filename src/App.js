import './App.css';
import { AppDiv } from './Styles';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Header from './components/Header';

function App() {

  return <AppDiv>
    <Header />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
  </AppDiv>
}

export default App;
