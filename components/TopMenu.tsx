import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'
import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import './TopMenu.less'

interface LinkItem {
  text: string
  to: string
}

interface LinkGroup {
  text: string
  links: LinkItem[]
  id: string
}

export type TopMenuLink = LinkItem | LinkGroup

export interface TopMenuProps {
  links: TopMenuLink[]
}

const TopMenu = ({ links }: TopMenuProps): JSX.Element => {
  return (
    <Navbar variant='dark' expand='md' className='top-nav-bar'>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='m-auto'>
          {links.map((l) => {
            if ('to' in l) {
              return (
                <Link href={l.to} passHref key={l.to}>
                  <Nav.Link href={l.to} key={l.to}>
                    {l.text}
                  </Nav.Link>
                </Link>
              )
            }

            return (
              <NavDropdown title={l.text} id={l.id} key={l.text}>
                {l.links.map((li) => (
                  <Link href={li.to} passHref key={li.to}>
                    <NavDropdown.Item href={li.to}>{li.text}</NavDropdown.Item>
                  </Link>
                ))}
              </NavDropdown>
            )
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default TopMenu
