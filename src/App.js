import Header from './components/Header/Header.js'
import Banner from './components/Banner/Banner.js';
import ContainerFluid from './components/ContainerFluid/ContainerFluid.js'
import MusicBox from './components/MusicBox/MusicBox.js'
import LatestNews from './components/LatestNews/LatestNews.js'
import Albums from './components/Albums/Albums.js'
import Newsletter from './components/NewsLetter/Newsletter.js'
import Footer from './components/Footer/Footer.js'


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