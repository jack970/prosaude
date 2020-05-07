import React, { useState } from "react";
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
          link
          label
          sublink {
            link
            label
          }
        }
      }
    }
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }){
        edges {
          node {
            objectID: id
            fields {
              slug
            }
            frontmatter {
              title
              date_timestamp: date
              thumbnail {
                publicURL
              }
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              description
            }
          }
        }
      }
  }
  `)
  
  const allPosts = data.allMarkdownRemark.edges

  const emptyQuery = ""

  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = event => {
    console.log(event.target.value)
    const query = event.target.value

    const posts = data.allMarkdownRemark.edges || []

    const filteredData = posts.filter(post => {
      const { description, title, tags } = post.node.frontmatter
      return (
        description.toLowerCase().includes(query.toLowerCase()) ||
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

  const menuLink = data.site.siteMetadata
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <MDBNavbar color="transparent" light text='center' expand="md">
      <MDBNavbarToggler onClick={toggle} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav center='true'>
        { menuLink.menuHeader.map((menu, i) => (
          <MDBNavItem key={i}>
           <MDBDropdown>
             <MDBDropdownToggle nav caret>
               <span className="mr-2">{menu.label}</span>
             </MDBDropdownToggle>
             <MDBDropdownMenu>
               <MDBDropdownItem href="#!">{menu.sublink.label}</MDBDropdownItem>
             </MDBDropdownMenu>
           </MDBDropdown>
         </MDBNavItem>
          ))}
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBDropdown>
            <MDBDropdownToggle nav>
              <form action='/pesquisa'
                      method='GET'>
                  <div className="md-form my-0">
                    <input 
                      className="form-control mr-sm-2" 
                      type="text" 
                      placeholder="Pesquisar" 
                      aria-label="Search"
                      onChange={handleInputChange}
                    />
                  </div>
              </form>
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              {posts.map(({node}, i) => {
                const { title} = node.frontmatter
                const { slug } = node.fields
                return(
                  <Link to={slug}>
                    <MDBDropdownItem key={i}>{title}</MDBDropdownItem>
                  </Link>
              )})}
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  )
}
export default NavBar;