import './App.css';
import Article from './pages/Article';
import Items from './pages/Article/Items';
import Footer from './pages/Footer';
import Header from './pages/Heder';
import Title from './pages/Title';

function App() {
  return (
    <div className='bg-dark-subtle'>
      <Title />
      <div className='container' style={{ marginTop: 25 }}>
        <Header />
        <Items />
        <Footer />
      </div>
    </div>
  );
}

export default App;
