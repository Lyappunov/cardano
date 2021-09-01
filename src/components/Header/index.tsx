import React from "react";
import { Navbar } from "react-bootstrap";
import Link from "next/link";
import { Menu as MenuIcon } from "react-feather";
import { FaHashtag } from "react-icons/fa";

function Header() {
  return (
    <header className="navbar navbar-header navbar-header-fixed">
      <Link href="/" passHref>
        <a href={"/"} id="mainMenuOpen" className="burger-menu">
          <MenuIcon />
        </a>
      </Link>
      <Navbar className="navbar-brand d-flex align-items-center">
        <Link href="/" passHref>
          <a className="pt-1">
            <img width="160px" src="/images/logo_tokenaro.png" />
          </a>
        </Link>
        
      </Navbar>
      
      <style jsx>{`
        .title {
          margin-top: 2px;
          padding-left: 20px;
          display: flex;
          align-items: center;
        }
        .right {
          margin-right: 30px;
        }
      `}</style>
    </header>
  );
}

export { Header };
