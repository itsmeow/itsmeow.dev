import { GatsbyImage } from "gatsby-plugin-image"
import Avatar from "./avatar"

const Banner = ({ image }) => {
  return (
    <>
      <div className="banner-pane">
        <div className="banner-container">
          <div className="title-wrapper">
            <div className="title-front">
              <Avatar />
            </div>
          </div>
          <div className="banner">
            <div className="image-wrapper">
              <GatsbyImage
                image={image}
                alt="Banner"
                align="center"
              ></GatsbyImage>
            </div>
          </div>
        </div>
      </div>
      <Avatar className="avatar-small" />
    </>
  )
}

export default Banner
