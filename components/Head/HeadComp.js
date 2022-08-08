
import Head from 'next/head';
const HeadComp = (router) => {
    const { route } = router;
    const pageTitle = route !== '/' ? `| ${route.substring(1).charAt(0).toUpperCase() + route.slice(2)}` : "";
   
    return (
      <Head>
          <title>Chris McKenna {pageTitle}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          
      </Head>
    )
  }

  export default HeadComp;