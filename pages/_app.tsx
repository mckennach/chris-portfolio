import '../styles/style.scss';

import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'

import { useRouter } from "next/router";

import HeadComp from '../components/Head/HeadComp';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';




const analytics = Analytics({
  app: 'Portfolio',
  plugins: [
    googleAnalytics({
      measurementIds: ['G-99JR2QH82M']
    })
  ]
});

analytics.page();

const contentful = require("contentful");
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "swia5e5p8fcy",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "tF-ApWrit1ZCqHHrC9IgkRaL0ObyzHbvMFjbyyM8sK8"
});


// // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
client
  .getEntries()
  .then(entry => {
    const test = client.parseEntries(entry)
    // console.log(test);
  })
  .catch(err => console.log(err));


const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <div className="site-wrapper">
      <div className="container">
        <HeadComp {...router} />
        <Header />
          <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  )
}




// Before: export default App;
export default MyApp;
