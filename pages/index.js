import Head from 'next/head'

import Prismic from 'prismic-javascript'
import { Client } from 'utils/prismicHelpers'

import DefaultLayout from 'layouts'

const Landing = ({ landing, posts }) => {
  return (
    <DefaultLayout>
      <Head>
        <title>Discipline</title>
      </Head>
      <h1>Discipline Sandbox</h1>
    </DefaultLayout>
  )
}

export async function getStaticProps({ preview = null, previewData = {} }) {

  const { ref } = previewData

  const landing = await Client().getSingle('landing') || {}

  const posts = await Client().query(
    Prismic.Predicates.at('document.type', 'post'), {
      pageSize: 100,
      ...(ref ? { ref } : null)
    },
  ).catch(error => {
    console.log(error)
  }) || {}

  return {
    props: {
      landing,
      posts: posts ? posts.results : [],
      preview
    }
  }
}

export default Landing
