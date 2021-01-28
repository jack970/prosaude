import React from "react"
import * as S from "./style"

const RecomendPosts = ({ next, previous }) => {
  return (
    <S.RecommendedWrapper>
      {previous && (
        <S.RecommendedLink to={previous.fields.slug} className="previous">
          <div>
            Anterior <br />
            <h1 className="h5">{previous.title}</h1>
          </div>
        </S.RecommendedLink>
      )}
      {next && (
        <S.RecommendedLink to={next.fields.slug} className="next">
          <div>
            Próximo <br />
            <h1 className="h5">{next.title}</h1>
          </div>
        </S.RecommendedLink>
      )}
    </S.RecommendedWrapper>
  )
}

export default RecomendPosts
