import Header from './components/Header.js'
import Banner from './components/Banner.js';
import ContainerFluid from './components/ContainerFluid.js'
import MusicBox from './components/MusicBox.js'
import LatestNews from './components/LatestNews.js'
import Albums from './components/Albums.js'
import Newsletter from './components/Newsletter.js'
import Footer from './components/Footer.js'


function App() {
  
  return (
    <div className="App">
    
      <div class="loader_bg">
        <div class="loader"><img src="images/loading.gif" alt="#" /></div>
      </div>

      <Header />
      <Banner />
      <ContainerFluid />
      <MusicBox />
      <LatestNews />
      <Albums />
      <Newsletter />
      <Footer />

                           
    </div>
  );
}

export default App;