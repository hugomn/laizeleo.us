import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Gravatar from "react-gravatar";
import { Grid, Cell } from "styled-css-grid";
import { FaFacebook as FacebookIcon } from "react-icons/fa";
import { FaTwitter as TwitterIcon } from "react-icons/fa";
import { FaLinkedin as LinkedinIcon } from "react-icons/fa";
import { FaInstagram as InstagramIcon } from "react-icons/fa";
import { FaDribbble as DribbleIcon } from "react-icons/fa";
import { FaGithub as GithubIcon } from "react-icons/fa";
import { media } from "../constants/responsive";

const Wrapper = styled(Grid)`
  margin-top: ${props => props.theme.welcome.marginTop};
  margin-bottom: ${props => props.theme.welcome.marginBottom};
  font-family: ${props => props.theme.blog.author.fontFamily};
  font-size: ${props => props.theme.blog.author.fontSize};
  line-height: ${props => props.theme.blog.author.lineHeight};
`;

const ProfilePicture = styled(Gravatar)`
  display: block;
  border-radius: 50%;
  border: 4px solid #ecf0f1;
`;

const Bio = styled.span`
  color: ${props => props.theme.blog.author.time.color};
  display: block;
  font-size: 0.8rem;
  br {
    display: none;
  }
  ${media.md`
    br { display: block; }
    font-size: 1rem;
  `}
`;

const SocialLinks = styled.ul`
  margin-top: 6px;
  list-style: none;
  li {
    display: inline-block;
    margin-right: 5px;
  }
`;

const A = styled.a`
  color: ${props => props.theme.colors.black};
  text-decoration: none;
  font-size: 1.5rem;
  display: inline-block;
  padding: ${props => props.theme.socialLinks.a.padding};
  transition: 0.3s;
  opacity: 0.8;
  &:hover {
    opacity: 1;
    color: ${props => props.theme.socialLinks.a.hover.color};
    transition: 0.3s;
  }
`;

const Name = styled.span`
  font-size: 1.6rem;
  font-family: ${props => props.theme.fonts.SansSerif};
  margin-bottom: 0.3rem;
  ${media.md`
    font-size: 2.1rem;
  `}
`;

const Welcome = ({ author, className }) => {
  return (
    <Wrapper columns={"153px 1fr"} className={className}>
      <Cell middle>
        <ProfilePicture email={author.email} alt={author.name} size={128} />
      </Cell>
      <Cell middle>
        <Name>Lunara & Hugo</Name>
        <Bio>Save the date! 02/05/2020</Bio>
        <SocialLinks>
          <li>
            <A href="https://facebook.hugomagalhaes.com" target="_blank" rel="noreferrer noopener">
              <FacebookIcon />
            </A>
          </li>
          <li>
            <A href="https://twitter.hugomagalhaes.com" target="_blank" rel="noreferrer noopener">
              <TwitterIcon />
            </A>
          </li>
          <li>
            <A href="https://linkedin.hugomagalhaes.com" target="_blank" rel="noreferrer noopener">
              <LinkedinIcon />
            </A>
          </li>
          <li>
            <A href="https://instagram.hugomagalhaes.com" target="_blank" rel="noreferrer noopener">
              <InstagramIcon />
            </A>
          </li>
          <li>
            <A href="https://dribbble.hugomagalhaes.com" target="_blank" rel="noreferrer noopener">
              <DribbleIcon />
            </A>
          </li>
          <li>
            <A href="https://github.hugomagalhaes.com" target="_blank" rel="noreferrer noopener">
              <GithubIcon />
            </A>
          </li>
        </SocialLinks>
      </Cell>
    </Wrapper>
  );
};

Welcome.propTypes = {
  author: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default Welcome;
