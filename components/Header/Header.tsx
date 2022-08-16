import Link from 'next/link'
import { useRouter } from "next/router";

const Header = () => {
    const router = useRouter();
    return (
      <header className="component--header" role="banner">
        <div className="component--header__logo-wrapper">
            <Link href="/">
                <a><h1>Chris McKenna</h1></a>
            </Link>
        </div>
        <nav className="component--header__navigation">
            <ul className="component--header__ul">
                <li className={router.pathname == "/projects" ? "active component--header__li" : "component--header__li"}>
                    <Link href="/projects" >
                        <a>Projects</a>
                    </Link>
                </li>
                <li className={router.pathname == "/photos" ? "active component--header__li" : "component--header__li"}>
                    <Link href="/photos">
                        <a>Photos</a>
                    </Link>
                </li>
                <li className="component--header__li external">
                    <Link href="mailto:hello@mckennach.com" passHref>

                        <a href="" target="_blank" rel="noreferrer">Contact</a>
                    </Link>
                </li>
            </ul>
        </nav>
      </header>
    )
  }

  export default Header;