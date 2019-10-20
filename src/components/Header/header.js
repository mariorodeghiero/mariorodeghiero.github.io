import PropTypes from "prop-types"
import React from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  ToastHeader,
} from "reactstrap"

import * as S from "./styled"

const Header = ({ siteTitle }) => (
  <S.Header>
    <Navbar expand="md">
      <NavbarBrand href="/">{siteTitle}</NavbarBrand>
      <Collapse navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/about">About Me</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about">Projects</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  </S.Header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
