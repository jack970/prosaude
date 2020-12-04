import React from "react"
import propTypes from "prop-types"
import { Link } from "gatsby"

import * as S from "./style"

const PaginationTags = props => (
  <S.PaginationWrapper>
    {!props.isFirst && <Link to={props.prevPage}>← Página Anterior</Link>}
    <p>
      &nbsp; {` `} {props.currentPage} de {props.numPages}
    </p>

    {!props.isLast && <Link to={props.nextPage}>Próxima Página →</Link>}
  </S.PaginationWrapper>
)

PaginationTags.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string.isRequired,
  nextPage: propTypes.string.isRequired,
}

export default PaginationTags
