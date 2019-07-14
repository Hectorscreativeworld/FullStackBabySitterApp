import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import './Footer.css'

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <Nav
          style={{
            marginTop: '2rem',
            paddingBottom: '2rem',
            justifyContent: 'center'
          }}
        >
          <p>
            Made with <span className="icon icon-insta" /> Love
          </p>

          <NavLink disabled href="#">
            Contact us
          </NavLink>
        </Nav>
      </div>
    )
  }
}
