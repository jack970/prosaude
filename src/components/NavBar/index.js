import React, { useState } from "react";
import * as S from './style'
import {MDBNavbar, 
  MDBNavbarNav, 
  MDBDropdownItem, 
  MDBDropdownMenu, 
  MDBNavItem, 
  MDBNavbarToggler, 
  MDBCollapse, 
  MDBDropdown, 
  MDBDropdownToggle} from "mdbreact";
import { useStaticQuery, graphql, Link } from 'gatsby'
import kebabCase from "lodash/kebabCase"

const NavBar = () => {
  const data = useStaticQuery(graphql`
    query SiteHeaderQuery {
      site {
        siteMetadata {
          menuHeader {
            label
            submenu {
              url
              label
            }
          }
        }
      }
      allStrapiProsaudePosts(
        sort: { 
          order: DESC, fields: date 
        }) {
        edges {
          node {
              title
              date(formatString: "DD [/] MM [/] YYYY")
              tags
              id
              description
          }
        }
      }
    }
  `)
  const menuLink = data.site.siteMetadata
  const allPosts = data.allStrapiProsaudePosts.edges

  const emptyQuery = ""

  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = event => {
    const query = event.target.value

    const posts = allPosts || []

    const filteredData = posts.filter(post => {
      const { title, tags } = post.node
      return (
        title.toLowerCase().includes(query.toLowerCase()) ||
        (tags &&
          tags
            .toLowerCase()
            .includes(query.toLowerCase()))
      )
    })

    setState({
      query,
      filteredData,
    })
  }

  
  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : []
  

  //dropdown mobile
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <S.AcessarClasses>
    <MDBNavbar color="transparent" light text='center' expand="md" style={{padding: '0.5rem 5rem 0.5rem 1rem'}}>
      <MDBNavbarToggler onClick={toggle} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav> 
        { menuLink.menuHeader.map((menu, i) => (
          <MDBNavItem key={i}>
           <MDBDropdown>
             <MDBDropdownToggle nav caret>
               <span >{menu.label}</span>
             </MDBDropdownToggle>
             <MDBDropdownMenu>
               {menu.submenu.map((subMenu, i) => (
                  <MDBDropdownItem key={i}>
                    <Link to={subMenu.url}>
                      {subMenu.label}
                    </Link>
                  </MDBDropdownItem>
               ))}
             </MDBDropdownMenu>
           </MDBDropdown>
         </MDBNavItem>
          ))}
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBDropdown>
            <form action='/pesquisa' method="post" name="pesquisa">
              <MDBDropdownToggle nav id="search">
                <S.Input
                  type="text" 
                  placeholder=""
                  aria-label="Search"
                  onChange={handleInputChange}
                />
                <S.Span aria-hidden="true">
                    <i className="fa fa-search searchicon" aria-hidden="true" />
                </S.Span> 
              </MDBDropdownToggle>
              <MDBDropdownMenu basic>
                {posts.map(({node}, i) => {
                  const { title, description, date, tags } = node
                  return(
                    <div key={i}>
                      <Link to={kebabCase(title)} id='link'>
                        <MDBDropdownItem>
                          <b>{title}</b> <br />
                          <p style={{whiteSpace: 'break-spaces',  
                                    fontSize: '0.8rem',
                                    color: '#B2A3A0',
                                    paddingLeft: '.4rem'
                        }}>
                            {description}
                          </p>
                          <div style={{fontSize: '.8rem'}}>
                            <mark style={{
                                backgroundColor: '#FDB700', 
                                fontWeight: '700',
                                color: '#fff',
                                fontSize: '14px ',
                                padding: '0 5px', 
                                borderRadius: '2rem'}}
                              >{tags}</mark>
                            <p className="dark-grey-text" style={{fontWeight: '500'}}>
                                {date}
                            </p>
                          </div>
                          <MDBDropdownItem divider />
                        </MDBDropdownItem>
                      </Link>
                    </div>
                )})}
              </MDBDropdownMenu>
            </form>
          </MDBDropdown>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
    </S.AcessarClasses>
  )
}
export default NavBar;