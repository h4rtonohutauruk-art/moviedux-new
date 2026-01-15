import logo from './logo.svg';
import './App.css';
import './styles.css'
import Header from './components/header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className='container'>
          <Header></Header>
      </div>
      {/* <footer className="footer">
            <p className='footer'>Footer content here</p>
      </footer> */}
      <Footer></Footer>
      
    </div>
  );
}

export default App;
