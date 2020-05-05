import styled from "styled-components"

export const SearchWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: opacity 0.4s;
  .ais-InstantSearch__root {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
  }
  .ais-Hits {
    margin-top: 3rem;
  }
  .ais-SearchBox,
  .ais-Stats {
    padding: 0.5rem 3rem;
  }
  .ais-Stats {
    color: #222;
    font-weight: 700;
  }
  .ais-SearchBox-input {
    background: none;
    border: none;
    border-bottom: 1px solid #fdb700;
    color: black;
    display: flex;
    font-size: 1.6rem;
    padding: 0.5rem;
    width: 100%;
    &::placeholder {
      color: #F4F9FC;
    }
  }
  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }
`