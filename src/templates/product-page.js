import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

export const ProductTemplate = ({
  name
}) => {

  return (
    <div>

     {name}
    </div>
  )
}

ProductTemplate.propTypes = {
  name: PropTypes.node.isRequired,
}

const ProductPost = ({ data }) => {
  const { markdownRemark: product } = data

  return (
      <ProductTemplate
        name={product.frontmatter.name}
      />
  )
}

ProductPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ProductPost

export const pageQuery = graphql`
  query ProductByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        name
        description
      }
    }
  }
`