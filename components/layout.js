import Head from 'next/head'
import Link from 'next/link'
import VisibilityToggle from '../components/signup';
import HeroSection from '../components/hero';
import AboutSection from '../components/about';
import MusicSection from '../components/music';
import '../styles/styles.sass'

export default ({ children }) => {
  /*
   * Added this to toggle the is-active class. See:
   * 
   * https://bulma.io/documentation/components/navbar/#navbar-menu
   * https://github.com/jgthms/bulma/issues/856
   */
  const toggleStyles = (event) => {
    document.querySelector('#burger').classList.toggle('is-active')
    document.querySelector('#navbarmenu').classList.toggle('is-active')
  }

  return (
    <div>
      <Head>
        <title>jvarness</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <header>
        <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item">
              <img src="/static/pllogo.png" />
            </a>
            <a id="burger" onClick={toggleStyles} 
                role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarmenu">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div id="navbarmenu" className="navbar-menu">
            
            <div className="navbar-end">
              <div className="navbar-item">
				<div className="navbar-start">
					<Link href="#hero">
						<a className="navbar-item">Home</a>
					</Link>
					<Link href="#about">
						<a className="navbar-item">About</a>
					</Link>
					<Link href="#music">
						<a className="navbar-item">Music</a>
					</Link>
						
				</div>
                
              </div>
            </div>
          </div>
        </nav>
		<style jsx>{`
			.navbar{
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        background: #ECE9E6;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #FFFFFF, #ECE9E6);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #FFFFFF, #ECE9E6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

			}
		`}</style>
      </header>
	  <HeroSection />
	  <AboutSection />
	  <MusicSection />
	  
      {children}
      <footer className="footer">
        <div className="content has-text-centered">
          <span>I'm the footer</span>
        </div>
      </footer>
    </div>
  )
}