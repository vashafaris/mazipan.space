import { lighten, darken, setSaturation } from 'polished';
import * as React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import RehypeReact from 'rehype-react';
import HyvorTalk from 'hyvor-talk-react';
import SharePost from './SharePost';
import LikeButton from './LikeButton';

import { colors } from '../styles/colors';

export const PostFullContent = styled.section`
  position: relative;
  margin: 0 auto;
  padding: 70px 100px 0;
  min-height: 230px;
  font-size: 1.7rem;
  line-height: 1.6em;
  background: var(--bg-content);
  border-radius: 5px;

  @media (max-width: 1170px) {
    padding: 5vw 7vw 0;
  }
  @media (max-width: 800px) {
    font-size: 1.9rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  dl,
  pre,
  blockquote,
  .post-full-comments,
  .footnotes {
    min-width: 100%;
  }

  li {
    word-break: break-word;
  }

  li p {
    margin: 0;
  }

  a {
    text-decoration: none;
    word-break: break-word;
  }

  a:hover {
    color: var(--text-link-color);
    text-decoration: none;
  }

  small {
    display: inline-block;
    line-height: 1.6em;
  }

  li:first-of-type {
    margin-top: 0;
  }

  .gatsby-resp-image-link {
    box-shadow: none;
  }

  img,
  video {
    display: block;
    margin: 1.5em auto;
    max-width: 1040px;
    height: auto;
  }

  @media (max-width: 1040px) {
    img,
    video {
      width: 100%;
    }
  }

  img[src$='#full'] {
    max-width: none;
    width: 100vw;
  }

  img + br + small {
    display: block;
    margin-top: -3em;
    margin-bottom: 1.5em;
    text-align: center;
  }

  /* Override third party iframe styles */
  iframe {
    margin: 0 auto !important;
  }

  blockquote {
    margin: 0 0 1.5em;
    padding: 0 1.5em;
    border-left: ${colors.blue} 3px solid;
  }

  blockquote p {
    margin: 0 0 1em 0;
    color: inherit;
    font-size: inherit;
    line-height: inherit;
    font-style: italic;
  }

  blockquote p:last-child {
    margin-bottom: 0;
  }

  code {
    padding: 0 5px 2px;
    font-size: 0.8em;
    line-height: 1em;
    font-weight: 400 !important;
    background: ${colors.whitegrey};
    border-radius: 3px;
  }

  p code {
    word-break: break-all;
  }

  pre {
    overflow-x: auto;
    /* margin: 1.5em 0 3em; */
    padding: 20px;
    max-width: 100%;
    /* border: color(var(--darkgrey) l(-10%)) 1px solid; */
    border: ${darken('0.01', colors.darkgrey)} 1px solid;
    color: ${colors.whitegrey};
    font-size: 1.4rem;
    line-height: 1.5em;
    /* background: color(var(--darkgrey) l(-3%)); */
    background: ${darken('0.03', colors.darkgrey)};
    border-radius: 5px;
  }

  pre code {
    padding: 0;
    font-size: inherit;
    line-height: inherit;
    background: transparent;
  }

  pre code :not(span) {
    color: inherit;
  }

  /* .fluid-width-video-wrapper { */
  .gatsby-resp-iframe-wrapper {
    margin: 1.5em 0 3em;
  }

  hr {
    margin: 4vw 0;
  }

  hr:after {
    content: '';
    position: absolute;
    top: -15px;
    left: 50%;
    display: block;
    margin-left: -10px;
    width: 1px;
    height: 30px;
    background: ${lighten('0.1', colors.lightgrey)};
    box-shadow: #fff 0 0 0 5px;
    transform: rotate(45deg);
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--text-subtitle-color);
  }

  h1 {
    margin: 0.5em 0 0.2em 0;
    font-size: 4.6rem;
    font-weight: 700;
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 2.8rem;
    }
  }

  h2 {
    margin: 0.5em 0 0.2em 0;
    font-size: 3.6rem;
    font-weight: 700;
  }

  @media (max-width: 500px) {
    h2 {
      font-size: 2.6rem;
    }
  }

  h3 {
    margin: 0.5em 0 0.2em 0;
    font-size: 2.8rem;
    font-weight: 700;
  }

  @media (max-width: 500px) {
    h3 {
      font-size: 2.2rem;
    }
  }

  h4 {
    margin: 0.5em 0 0.2em 0;
    font-size: 2.8rem;
    font-weight: 700;
  }

  @media (max-width: 500px) {
    h4 {
      font-size: 2.2rem;
    }
  }

  h5 {
    display: block;
    margin: 0.5em 0;
    padding: 1em 0 1.5em;
    border: 0;
    font-size: 3.2rem;
    line-height: 1.35em;
    text-align: center;
  }

  @media (min-width: 1180px) {
    h5 {
      max-width: 1060px;
    }
  }

  @media (max-width: 500px) {
    h5 {
      padding: 0 0 0.5em;
      font-size: 2.2rem;
    }
  }

  h6 {
    margin: 0.5em 0 0.2em 0;
    font-size: 2.3rem;
    font-weight: 700;
  }

  @media (max-width: 500px) {
    h6 {
      font-size: 2rem;
    }
  }

  /* Tables */
  table {
    display: inline-block;
    overflow-x: auto;
    margin: 0.5em 0 2.5em;
    max-width: 100%;
    width: auto;
    border-spacing: 0;
    border-collapse: collapse;
    font-size: 1.6rem;
    white-space: nowrap;
    vertical-align: top;
  }

  table {
    -webkit-overflow-scrolling: touch;
    background: radial-gradient(ellipse at left, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 75%) 0
        center,
      radial-gradient(ellipse at right, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 75%) 100% center;
    background-attachment: scroll, scroll;
    background-size: 10px 100%, 10px 100%;
    background-repeat: no-repeat;
  }

  table td:first-of-type {
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    background-size: 20px 100%;
    background-repeat: no-repeat;
  }

  table td:last-child {
    background-image: linear-gradient(
      to left,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    background-position: 100% 0;
    background-size: 20px 100%;
    background-repeat: no-repeat;
  }

  table th {
    color: ${colors.darkgrey};
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 0.2px;
    text-align: left;
    text-transform: uppercase;
    /* background-color: color(var(--whitegrey) l(+4%)); */
    background-color: ${lighten('0.04', colors.whitegrey)};
  }

  table th,
  table td {
    padding: 6px 12px;
    /* border: color(var(--whitegrey) l(-1%) s(-5%)) 1px solid; */
    border: ${setSaturation('0.05', darken('0.01', colors.whitegrey))} 1px solid;
  }

  @media (max-width: 500px) {
    padding: 0;
    :before {
      display: none;
    }
    :after {
      display: none;
    }
  }

  .gatsby-resp-image-image{
    border-radius: 5px;
  }
`;

const LangWrapper = styled.div`
  border: 2px solid var(--text-link-color);
  border-radius: 5px;
  padding: 1em;
  margin-bottom: .5em;
`;

const renderAst = new RehypeReact({
  createElement: React.createElement,
  // components: { 'interactive-counter': Counter },
  components: {},
}).Compiler;

const Ast = ({ ast, ...props }: any) => {
  ast.properties = props;
  return renderAst(ast);
};

export interface PostContentProps {
  htmlAst: any;
  title: string;
  desc: string;
  slug: string;
  lang: string;
  enready?: boolean;
}

const PostContent: React.FC<PostContentProps> = ({ htmlAst, title, desc, slug, lang, enready }) => {
  return (
    <PostFullContent className="post-full-content">
      {
        lang === 'id' && enready && (
          <LangWrapper>📌 Baca artikel dalam <Link to={`/${slug}/en/`}>bahasa inggris</Link></LangWrapper>
        )
      }
      {/* TODO: this will apply the class when rehype-react is published https://github.com/rhysd/rehype-react/pull/11 */}
      <Ast className="post-content" ast={htmlAst} />
      <LikeButton slug={slug}/>
      <SharePost title={title} desc={desc}/>
      <HyvorTalk.Embed websiteId={600} />
    </PostFullContent>
  );
};

export default PostContent;
