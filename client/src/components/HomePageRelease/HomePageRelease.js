import {HomePageReleaseStyled} from './HomePageRelease.styled'

const HomePageRelease = (props) => {

  return (
    <HomePageReleaseStyled>
      <h1>{props.header}</h1>
      <p>{props.info}</p>
      <img src={props.image} />
    </HomePageReleaseStyled>
  )
}

export default HomePageRelease