import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { IconContext } from "react-icons"
import {
  FaTwitter,
  FaUsers,
  FaRetweet,
  FaHeart,
  FaCalendar,
} from "react-icons/fa"
import he from "he"

const TwitterWidget = () => {
  let { tweets, twitterProfile, iconImage } = useStaticQuery(
    graphql`
      query {
        tweets: allTwitterStatusesUserTimelineTweets {
          edges {
            node {
              full_text
              favorite_count
              retweet_count
              created_at
              id
              id_str
              user {
                name
                url
                profile_image_url_https
                screen_name
              }
              entities {
                urls {
                  display_url
                  expanded_url
                }
                media {
                  display_url
                  expanded_url
                  media_url_https
                }
              }
            }
          }
        }
        twitterProfile: twitterStatusesUserTimelineTweets {
          user {
            url
            screen_name
            profile_image_url_https
            name
            followers_count
          }
        }
        iconImage: file(relativePath: { eq: "icon.webp" }) {
          childImageSharp {
            fixed(width: 48, quality: 100, webpQuality: 100) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    `
  )
  tweets = tweets.edges
  twitterProfile = twitterProfile.user
  return (
    <div className="widget twitter">
      <div className="twitter-header">
        <div className="twitter-title">
          <FaTwitter className="fa-sm" />
          <h2>Tweets</h2>
        </div>
        <div className="profile-details">
          <Img
            className="profile-image"
            alt="Twitter Profile Icon"
            fixed={iconImage.childImageSharp.fixed}
          />
          <div className="profile-text">
            <a
              href={twitterProfile.url}
              className="twitter-name"
              target="_blank"
              rel="noopener noreferrer"
            >{`@${twitterProfile.screen_name}`}</a>
            <div className="twitter-followers">
              <FaUsers className="fa-sm" />{" "}
              <span>{twitterProfile.followers_count} Followers</span>
            </div>
          </div>
        </div>
      </div>
      <div className="tweets">
        {tweets.map(({ node }) => (
          <a
            href={
              "https://twitter.com/" +
              twitterProfile.screen_name +
              "/status/" +
              node.id_str
            }
            target="_blank"
            rel="noopener noreferrer"
            className="tweet link-no-style highlightsection"
            key={node.id}
            style={{ display: "block" }}
          >
            <p className="tweet-content">
              {he.decode(node.full_text.split(`#`)[0].split(`https`)[0])}
            </p>
            {node.entities.urls.length > 0
              ? node.entities.urls.map(({ display_url, expanded_url }) => (
                  <a
                    href={expanded_url}
                    className="tweet-link"
                    key={`${node.id}-link`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {display_url}
                  </a>
                ))
              : null}
            {node.entities.media !== null && node.entities.media.length > 0
              ? node.entities.media.map(({ media_url_https }) => (
                  <img
                    key={media_url_https}
                    alt="Tweet Media Content"
                    src={media_url_https}
                    className="tweet-image"
                  ></img>
                ))
              : null}
            <div className="tweet-footer">
              <div className="retweets meta-item">
                <IconContext.Provider value={{ color: "rgb(23, 191, 99)" }}>
                  <FaRetweet className="fa-swap-opacity fa-xs" />{" "}
                </IconContext.Provider>
                <span>{node.retweet_count}</span>
              </div>
              <div className="favorites meta-item">
                <IconContext.Provider value={{ color: "rgb(224, 36, 94)" }}>
                  <FaHeart className="fa-swap-opacity fa-xs" />{" "}
                </IconContext.Provider>
                <span>{node.favorite_count}</span>
              </div>
              <div className="date meta-item">
                <FaCalendar className="fa-xs" />{" "}
                {node.created_at.split(` `, 3).join(` `)}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default TwitterWidget
