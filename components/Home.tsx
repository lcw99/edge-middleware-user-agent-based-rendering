import { useRouter } from 'next/router'
import Image from 'next/image'
import { Layout, Text, Page, Code, Link, Snippet } from '@vercel/examples-ui'

import board from '../public/board.jpg'

function Home() {
  const { route } = useRouter()
  const viewport = route.replace('/_viewport/', '')

  return (
    <Page>
      <section className="flex flex-col gap-6 mt-12">
        <Text variant="h2">Result</Text>
        <Text>
          This page is using this strategy, try it out in different devices and
          you will see the message below changing accordingly:
        </Text>
      </section>

      <p className="bg-black text-white font-mono text-center p-6 rounded-lg text-lg leading-6 mt-12">
        This page was loaded on a <b>{viewport}</b> device.
      </p>
    </Page>
  )
}

// Home.Layout = Layout

export default Home
