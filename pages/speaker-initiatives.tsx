import Link from 'next/link'
import React from 'react'
import withPageMetadata, { WithPageMetadataProps } from '../components/global/withPageMetadata'
import Page from '../layouts/withSidebar'

export default withPageMetadata((props: WithPageMetadataProps) => (
  <Page
    pageMetadata={props.pageMetadata}
    title="Speaker Initiatives"
    description="Initiatives taken by DDD Melbourne to assist speakers in preparing for conferences."
  >
    <h1>Speaker Initiatives</h1>
    <p>
      Our goal is to encourage people that wouldn't normally speak at conferences to give it a go!{' '}
      {props.pageMetadata.conference.Name} being a community conference provides new and experienced speakers the
      assitance and support required to prepare for a conference talk. Some of our events are listed below:
    </p>

    <ul>
      <li>
        <a href="https://ti.to/ddd-by-night/may-abstract-writing-workshop">May - Abstract Writing Workshop</a>
      </li>
      <li>
        <a href="https://ti.to/ddd-by-night/april-abstract-writing-workshop">April - Abstract Writing Workshop</a>
      </li>
      <li>Speaker training for selected speakers. More details to come.</li>
    </ul>

    <h2>DDD By Night</h2>
    <p>
      We also run a free evening event called DDD By Night which involves a series of lightning talks delivered for the
      community by the community.
    </p>

    <p>
      <Link href="https://dddbynight.dddmelbourne.com">
        <a className="btn btn-secondary">Find out more about DDD By Night</a>
      </Link>
    </p>
  </Page>
))
