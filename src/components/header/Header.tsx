import { useEffect, useRef } from "react";
import './header.css';

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 50) {
          headerRef.current.classList.add("scrolled");
        } else {
          headerRef.current.classList.remove("scrolled");
        }
      }
    };

    const handleButtonClick = () => {
      if (dropdownRef.current) {
        dropdownRef.current.classList.toggle("show");
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        dropdownRef.current.classList.remove("show");
      }
    };

    window.addEventListener("scroll", handleScroll);

    const btn = buttonRef.current;
    if (btn) {
      btn.addEventListener("click", handleButtonClick);
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (btn) {
        btn.removeEventListener("click", handleButtonClick);
      }
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header ref={headerRef} id="header">
      <div className="logo">
        <a href="#Home">
          <img
            src="/Portfolio/logo.png"
            alt="Logo"
            className="img-logo"
            style={{ width: '200px', height: '80px', objectFit: 'contain' }}
          />
        </a>
      </div>
      <nav className="links">
        <a href="#Home">Home</a>
        <a href="#Experience">Experience</a>
        <a href="#Skills">Skills</a>
        <a href="#Projects">Projects</a>
        <a href="#contact">Contact</a>
        <a className="resume" href="/Portfolio/cv-francais.pdf" download>
          Resume
        </a>
      </nav>

      <button className="menu-button" ref={buttonRef} id="my-button">
        <img
          src="/Portfolio/list-ul-alt-svgrepo-com.png"
          alt="not Supported"
          style={{ width: '40px', height: 'auto' }}
        />
      </button>

      <div className="welcome-phrase">
        <h2>Welcome</h2>
      </div>

      <div className="dropdown-container" ref={dropdownRef}>
        <div id="dropdownMenu" />
        <a href="#Home">Home</a>
        <a href="#Experience">Experience</a>
        <a href="#Skills">Skills</a>
        <a href="#Projects">Projects</a>
        <a href="#contact">Contact</a>
        <a className="resume" href="/Portfolio/cv-anglais.pdf" download>
          Resume
        </a>
      </div>
    </header>
  );
};

export default Header;
