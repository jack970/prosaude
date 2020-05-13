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
      allMarkdownRemark(
        sort: { 
          order: DESC, fields: frontmatter___date 
        }
        filter: {
          fileAbsolutePath: { glob: "**/posts/*.md" }
        }) {
        edges {
          node {
            excerpt(pruneLength: 200)
            frontmatter {
              title
              date
              tags
            }

            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const menuLink = data.site.siteMetadata
  const allPosts = data.allMarkdownRemark.edges

  const emptyQuery = ""

  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = event => {
    console.log(event.target.value)
    const query = event.target.value

    const posts = allPosts || []

    const filteredData = posts.filter(post => {
      const { title, tags } = post.node.frontmatter
      return (
        title.toLowerCase().includes(query.toLowerCase()) ||
        (tags &&
          tags
            .join("")
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
  const posts = hasSearchResults ? filteredData : allPosts
  

  //dropdown mobile
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <S.AcessarClasses>
    <MDBNavbar color="transparent" light text='center' expand="md" style={{padding: '.5rem 3rem'}}>
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
              <MDBDropdownToggle nav>
                <S.Input
                  type="text" 
                  placeholder=""
                  aria-label="Search"
                  onBlur={e => e.target.value= ''}
                  onChange={handleInputChange}
                />
                <S.Span aria-hidden="true">
                    <i className="fa fa-search searchicon" aria-hidden="true" />
                </S.Span> 
              </MDBDropdownToggle>
              <MDBDropdownMenu basic id='search'>
                {posts.map(({node}) => {
                  const { excerpt } = node
                  const { title, date, tags } = node.frontmatter

                  return(
                    <>
                      <MDBDropdownItem>
                        <b>{title}</b> <br />
                        {excerpt} <br />
                        teste
                      </MDBDropdownItem>
                      <MDBDropdownItem divider />
                    </>
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