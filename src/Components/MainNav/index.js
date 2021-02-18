import React, { useState } from 'react';
import {
    Link
} from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap'

function MainNav(){
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(
        <Navbar color="dark" dark expand="md">
          <Link to="/">Raziel Blog</Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link to="/posts" className="nav-link">Ver posts</Link>
              </NavItem>
              <NavItem>
                <Link to="/write-post" className="nav-link">Escribe un post</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    )
}

export default MainNav