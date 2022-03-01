import '../styles/style.scss'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function MyApp({ Component, pageProps }) {
  return (
    <div class="site-wrapper">
      <Header />
        <Component {...pageProps} />
      <Footer />
    </div>
  )
}

