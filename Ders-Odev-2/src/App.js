import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import PageContent from './components/PageContent';


function App() {
  return (<>
    <Navbar></Navbar>
    <Header></Header>
    <PageContent></PageContent>
    <Footer></Footer>
  </>
  );
}

export default App;
