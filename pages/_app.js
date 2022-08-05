import '../styles/style.scss'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="site-wrapper">
      <div className="container">
        <Header />
          <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  )
}

