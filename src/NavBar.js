import React, { useState } from 'react';

function NavBar() {
    return (
    <Navbar>
      <NavItem icon="A"></NavItem>
      <NavItem icon="B"></NavItem>
      <NavItem icon="C"></NavItem>
      <NavItem icon="Dropdown">
        <DropdownMenu />
      </NavItem>
    </Navbar>
    );
}


function Navbar(props) {
    return (
      <nav className="navbar">
        <ul className ="navbar-nav">{ props.children }</ul>
      </nav>
    )
  }
  
  function NavItem(props) {
    const[open, setOpen] = useState(false);
  
  
    return(
      <li className="nav-item">
        <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
          {props.icon}
        </a>
        {open && props.children}
      </li>
    )
  }
  
  function DropdownMenu() {
  
    function DropdownItem(props) {
      return (
      <a href="#" className='menu-item'>
        {props.children}
      </a>
      )
    }
    return (
      
      <div className='dropdown'>
          <DropdownItem>
            adfdfdbc
          </DropdownItem>
      </div>
    )
  }

  export default NavBar;