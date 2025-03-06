import styles from "./SocialLinks.module.css"
import facebookIcon from "../../../assets/images/icon-facebook.svg"
import youtubeIcon from "../../../assets/images/icon-youtube.svg"
import twitterIcon from "../../../assets/images/icon-twitter.svg"
import pinterestIcon from "../../../assets/images/icon-pinterest.svg"
import instagramIcon from "../../../assets/images/icon-instagram.svg"
import { socialLinks } from "../../../defs/definitions"

const icons = [facebookIcon, youtubeIcon, twitterIcon, pinterestIcon, instagramIcon]

const SocialLinks = () => {
  return (
    <ul className={styles.socialLinks}>
        {socialLinks.map((link, index) => (
            <li key={`social-link-${index + 1}`}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <img src={link.icon(icons[index])} alt={link.platform} title={link.platform} />
                </a>
            </li>
        ))}
    </ul>
  )
}

export default SocialLinks