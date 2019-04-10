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
      {props.pageMetadata.conference.Name} being a community conference provides new and experienced speakers the
      assitance and support required to prepare for a conference talk. Some of our events are listed below :
    </p>

    <ul>
      <li>
        <a href="https://ti.to/ddd-by-night/april-abstract-writing-workshop">DDD By Night Abstract Writing Workshop</a>
      </li>
    </ul>

    <p>
      <Link href="/about">
        <a className="btn btn-secondary">Find out more about {props.pageMetadata.conference.Name}</a>
      </Link>
    </p>
  </Page>
))
