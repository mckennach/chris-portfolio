import Image from 'next/image'

const Home = () => {
    return (
      <main className="page--home">
        <div className="page--home__heading">
          <h2 className="page--home__title">Hello, I&apos;m <span>Chris McKenna</span>.</h2>
          <div className="page--home__desc">
            <p>I&apos;m a Front End Developer from Brooklyn, New York.</p>
          </div>
        </div>
        <div className="page--home__img-container">
          {/* <img src="/chris.jpeg" alt="Chris McKenna"/> */}
          <Image
            src="/chris.jpeg"
            alt="Chris McKenna"
            layout="fill"
          />
        </div>
      </main>
    );

};

export default Home;
  