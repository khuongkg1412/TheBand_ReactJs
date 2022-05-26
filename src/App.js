import Header from './component/header';
import Slider from './component/slider';
import Content from './component/content';
import Footer from './component/footer';
import './assets/css/styles.css';
import './assets/css/mobile.css';


function App() {

  return (
    <div id="main">
      <Header />
      <Slider />
      <Content />
      <Footer />
    </div>
  );

}

export default App;
