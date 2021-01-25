import styled from "styled-components"
import { Link } from "gatsby"

export const MenuDropdown = styled.div`
  position: relative;
  display: flex;
`

export const MenuDropdownButton = styled.button`
  font-weight: 600;
  background-color: transparent;
  color: #333;
  padding: 16px;
  font-size: 16px;
  text-transform: uppercase;
  border: none;
`

export const MenuContent = styled.div``

export const MenuDropdownContent = styled.div`
  display: none;
  position: absolute;
  index: 100;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

  ${MenuContent}:hover & {
    display: block;
  }
`

export const MenuDropdownLink = styled(Link)`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
`
