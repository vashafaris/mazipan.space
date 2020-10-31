import Head from 'next/head'
import { Fragment } from 'react'

import PostCard from '@/components/Post/Card'
import LayoutArticle from '@/components/layout-article'

import { getPostsByTag, getAllTags } from '@/lib/api'
import { SITE_METADATA, OG_IMAGE_HOME } from '@/lib/constants'

export default function Index ({ allPosts, tag }) {
  return (
    <>
      <LayoutArticle>
        <Fragment>
          <Head>
            <title>{tag} articles | mazipan.space</title>
            <meta name="description" content={`All articles under tag #${tag}`} />

            <meta property="og:site_name" content={SITE_METADATA.title} />
            <meta property="og:image" content={`${OG_IMAGE_HOME}`} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="article:author" content={'mazipanneh'} />
            <meta property="article:tag" content={`${tag}`} />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={`${tag} articles`} />
            <meta property="og:description" content={`All articles under tag #${tag}`} />
            <meta property="og:url" content={`${SITE_METADATA.url}/tag/${tag}`} />

            <meta name="twitter:image" content={`${OG_IMAGE_HOME}`} />
            <meta name="twitter:image:width" content="1200" />
            <meta name="twitter:image:height" content="630" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={`${tag} articles`} />
            <meta name="twitter:description" content={`All articles under tag #${tag}`} />
            <meta name="twitter:url" content={`${SITE_METADATA.url}/tag/${tag}`} />
            <meta name="twitter:creator" content={'@maz_ipan'} />
            <meta name="twitter:label1" content="Under tag" />
            <meta name="twitter:data1" content={`${tag}`} />
          </Head>
          <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
            #{tag}
          </h2>

          {allPosts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-8 row-gap-5 md:row-gap-8 mb-16">
              {allPosts.map((post) => (
                <PostCard
                  key={post.slug}
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                  slug={post.slug}
                  excerpt={post.excerpt}
                  tags={post.tags}
                />
              ))}
            </div>
          )}
        </Fragment>
      </LayoutArticle>
    </>
  )
}

export async function getStaticProps ({ params }) {
  const allPosts = getPostsByTag(params.tag, 'id')
  return {
    props: {
      allPosts,
      tag: params.tag
    }
  }
}

export async function getStaticPaths () {
  const tags = getAllTags('id')

  return {
    paths: tags.map((tag) => {
      return {
        params: {
          tag: tag
        }
      }
    }),
    fallback: false
  }
}
