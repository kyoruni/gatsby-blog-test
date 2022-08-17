import * as React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

const Menu = () => {
  const data = useStaticQuery(graphql`
    query MenuQuery {
      site {
        siteMetadata {
          menu {
            label
            path
          }
        }
      }
    }
  `)

  let menuItems = []

  data.site.siteMetadata.menu.forEach(menuItem => {
    menuItems.push(<li><Link to={menuItem.path}>{menuItem.label}</Link></li>)
  })
  return (
    <ul className="menu">
      {menuItems}
    </ul>
  )
}

export default Menu