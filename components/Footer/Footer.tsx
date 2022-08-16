import Link from 'next/link'

const currentYear = () => new Date().getFullYear();
export default function Footer() {
    return (
      <footer className="component--footer">
        <div className="component--footer__container">
            
            <div className="component--footer__copyright">
                <p>© { currentYear() } Chris McKenna, All rights reserved.</p>
            </div>
            
            <nav className="component--footer__nav">
                <ul className="component--footer__ul">
                    <li className="component--footer__li">
                        <Link href="mailto:hello@mckenna.com" passHref>
                            <a target="_blank" rel="noreferrer">hello@mckennach.com</a>
                        </Link>
                    </li>
                    <li className="component--footer__li">
                        <Link href="https://github.com/mckennach" passHref>
                            <a target="_blank" rel="noreferrer">Github</a>
                        </Link>
                    </li>
                    <li className="component--footer__li">
                        <Link href="https://www.instagram.com/creeesmck/" passHref>
                            <a target="_blank" rel="noreferrer">Instagram</a>
                        </Link>
                    </li>
                    <li className="component--footer__li">
                        <Link href="https://www.linkedin.com/in/mckennach/" passHref>
                            <a target="_blank" rel="noreferrer">Linkedin</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
      </footer>
    )
  }