import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getImage, StaticImage, GatsbyImage } from "gatsby-plugin-image"
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
  let { tweets, twitterProfile } = useStaticQuery(
    graphql`
      {
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
                user_mentions {
                  id
                  id_str
                  indices
                  name
                  screen_name
                }
                hashtags {
                  text
                  indices
                }
                urls {
                  display_url
                  expanded_url
                }
                media {
                  media_url_https
                  media_sharp {
                    childImageSharp {
                      gatsbyImageData(
                        height: 100
                        placeholder: BLURRED
                        quality: 90
                      )
                    }
                  }
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
      }
    `
  )
  tweets = tweets.edges
  twitterProfile = twitterProfile.user

  let getText = node => {
    let transform = t => he.decode(t).replace(/https?:\/\/t.co\/\w+/gm, "")
    let text = []
    let raw = node.full_text
    let offset = 0
    if (node?.entities?.hashtags) {
      for (let hashtag of node.entities.hashtags) {
        let before = raw.substring(0, hashtag.indices[0] - offset)
        let inside = raw.substring(
          hashtag.indices[0] - offset,
          hashtag.indices[1] - offset
        )
        let after = raw.substring(hashtag.indices[1] - offset)
        text.push(
          <span key={"before-" + hashtag.indices[0]}>{transform(before)}</span>
        )
        text.push(
          <a
            href={"https://twitter.com/hashtag/" + hashtag.text}
            className="tweet-link tweet-link-inline"
            key={"content-" + hashtag.indices[0]}
            target="_blank"
            rel="noopener noreferrer"
          >
            {transform(inside)}
          </a>
        )
        offset = hashtag.indices[1]
        raw = after
      }
    }
    if (node?.entities?.user_mentions) {
      for (let mention of node.entities.user_mentions) {
        let before = raw.substring(0, mention.indices[0] - offset)
        let inside = raw.substring(
          mention.indices[0] - offset,
          mention.indices[1] - offset
        )
        let after = raw.substring(mention.indices[1] - offset)
        text.push(
          <span key={"before-" + mention.indices[0]}>{transform(before)}</span>
        )
        text.push(
          <a
            href={"https://twitter.com/" + mention.screen_name}
            className="tweet-link tweet-link-inline"
            key={"content-" + mention.indices[0]}
            target="_blank"
            rel="noopener noreferrer"
          >
            {transform(inside)}
          </a>
        )
        offset = mention.indices[1]
        raw = after
      }
    }
    let transformed = transform(raw)
    if (transformed.length > 0 && transformed.trim().length > 0) {
      text.push(<span key="remainder">{transformed}</span>)
    }
    if (node?.entities?.urls?.length > 0) {
      for (let i in node.entities.urls) {
        let { expanded_url, display_url } = node.entities.urls[i]
        text.push(
          i === "0" ? (
            <br key={"break-" + i} />
          ) : (
            <span key={"space-" + i}>&nbsp;</span>
          )
        )
        text.push(
          <a
            href={expanded_url}
            className="tweet-link-inline"
            key={`${node.id}-link-${i}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {display_url}
          </a>
        )
      }
    }
    return text
  }

  return (
    <div className="widget twitter">
      <div className="twitter-header">
        <div className="twitter-title">
          <FaTwitter className="fa-sm" />
          <h2>Tweets</h2>
        </div>
        <div className="profile-details">
          <StaticImage
            src="./../data/icon.png"
            layout="fixed"
            width={48}
            quality={100}
            className="profile-image"
            alt="Twitter Profile Icon"
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
            className="tweet-wrapper link-no-style"
            key={node.id}
          >
            <div className="tweet highlightsection">
              <p className="tweet-content">{getText(node)}</p>
              {node.entities.media !== null && node.entities.media.length > 0
                ? node.entities.media.map(
                    ({ media_url_https, media_sharp }) => (
                      <GatsbyImage
                        key={media_url_https}
                        alt="Tweet Media Content"
                        image={getImage(media_sharp)}
                        className="tweet-image"
                      ></GatsbyImage>
                    )
                  )
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
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default TwitterWidget
