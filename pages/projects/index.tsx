import Link from 'next/link'
import projectList from '../../assets/data/projects';
import LoginComponent from '../../components/Login/Login';
import { withPasswordProtect } from "@storyofams/next-password-protect";
import Image from 'next/image'
 

const ProjectList = props => {
    const { projectList } = props;

    if(!projectList || projectList.length < 0) return null;
    return (
        <ul className="cols-3 page--projects__ul">
            {
                projectList.map((project,i) => {
                    const { name, url, details, imgUrl, id } = project;
                    return (
                        <li className="page--projects__li" data-id={id} key={i}>
                            <a href={url} target="_blank" rel="noreferrer">
                                <figure className="page--projects__figure">
                                    <div className="page--projects__img-container">
                                        <Image src={imgUrl} alt={name} layout="fill"/>
                                    </div>
                                    <figcaption>
                                        <h3 className="page--projects__project-title">{name}</h3>
                                        <p className="page--projects__details">{details}</p>
                                    </figcaption>
                                </figure>
                            </a>
                        </li>
                    );
                })
            }
        </ul>
        
    ); 
}

  const Projects = props => {

    return (
        <main className="page--projects">
            <div className="page--projects__container">
                <div className="page--projects__heading">
                    <h2 className="page--projects__title">Projects</h2>
                    <div className="page--projects__desc">
                        <p>A collections of stand-out web and mobile projects I&apos;ve worked on over the years.</p>
                    </div>
                </div>
                <ProjectList projectList={projectList} />
            </div>
        </main>  
    );
  };

//   export default Projects;
export default process.env.PASSWORD_PROTECT
  ? withPasswordProtect(Projects, {
    // Options go here (optional)
    loginComponent: LoginComponent
  })
  : Projects;