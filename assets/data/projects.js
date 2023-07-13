let currentID = 0;
const createID = () => {
  currentID = currentID + 1;
  return currentID;
}

const projectList = [
    { 
      name: 'Jerde',
      id: createID(),
      url: 'https://www.jerde.com/',
      details: 'Javascript, ES6, Webpack, MySQL, Cloudflare, Cloudways, PHP, SCSS | With Ludlow Kingsley',
      imgUrl: '/projects/jerde.jpeg'
    },
    {
      name: 'Papaya Pet Care',
      id: createID(),
      url: 'https://papayapet.com',
      details: 'Javascript, ES6, Webpack, MySQL, Cloudflare, Cloudways, PHP, SCSS | With Ludlow Kingsley',
      imgUrl: '/projects/papaya-1.png'
    },
    {
      name: 'Afton Bloom',
      id: createID(),
      url: 'https://aftonbloom.com/',
      details: 'Javascript, ES6, Webpack, MySQL, Cloudflare, Cloudways, PHP, SCSS | With Ludlow Kingsley',
      imgUrl: '/projects/afton-bloom.jpeg'
    },
    {
      name: 'Stella Center',
      id: createID(),
      url: 'https://stellacenter.com/treatments/sgb-dual-sympathetic-reset',
      details: 'Javascript, ES6, Webpack, MySQL, Cloudflare, Cloudways, PHP, SCSS | With Ludlow Kingsley',
      imgUrl: '/projects/stella-1.webp'
    },
    {
      name: 'Meet Eddi Soap',
      id: createID(),
      url: 'https://meeteddi.com/',
      details: 'Shopify, Liquid, ES6, SCSS',
      imgUrl: '/projects/eddi.webp'
    },
    {
      name: 'Groundwork Coffee',
      id: createID(),
      url: 'https://www.groundworkcoffee.com/',
      details: 'Shopify, Liquid, ES6, SCSS | With Ludlow Kingsley',
      imgUrl: '/projects/groundwork.webp'
    },
    {
      name: 'Ovation Hollywood',
      id: createID(),
      url: 'https://www.ovationhollywood.com/',
      details: 'Javascript, ES6, Webpack, MySQL, Cloudflare, Cloudways, PHP, SCSS | With Ludlow Kingsley',
      imgUrl: '/projects/ovation.jpeg'
    },
    {
      name: 'Universal Studios Website',
      id: createID(),
      url: 'https://www.universalstudioslot.com',
      details: 'Javascript, ES6, Webpack, MySQL, Cloudflare, Cloudways, PHP, SCSS | With Ludlow Kingsley',
      imgUrl: '/projects/universal.jpeg'
    },
    {
      name: 'Universal Studios Mobile App',
      id: createID(),
      url: 'https://apps.apple.com/us/app/on-the-lot-universal-studios/id1562372055',
      details: 'React Native, PHP | With Ludlow Kingsley',
      imgUrl: '/projects/uni.png'
    },
    {
      name: 'Nadel',
      id: createID(),
      url: 'https://www.nadel.com/',
      details: 'Javascript, ES6, Webpack, MySQL, Cloudflare, Cloudways, PHP, SCSS | With Ludlow Kingsley',
      imgUrl: '/projects/nadel.png'
    },
    {
      name: 'Malek Living',
      id: createID(),
      url: 'https://malekliving.com/',
      details: 'Javascript, ES6, Webpack, MySQL, Cloudflare, Cloudways, PHP, SCSS | With Ludlow Kingsley',
      imgUrl: '/projects/malek.png'
    },
    {
      name: 'Ludlow Kingsley',
      id: createID(),
      url: 'https://www.ludlowkingsley.com/',
      details: 'Javascript, ES6, Webpack, MySQL, Cloudflare, Cloudways, PHP, SCSS | With Ludlow Kingsley',
      imgUrl: '/projects/ludlow.png'
    }
];  


export default projectList;