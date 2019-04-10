import React from 'react'
import { SafeLink } from '../components/global/safeLink'
import withPageMetadata, { WithPageMetadataProps } from '../components/global/withPageMetadata'
import Page from '../layouts/withSidebar'

export default withPageMetadata((props: WithPageMetadataProps) => (
  <Page
    pageMetadata={props.pageMetadata}
    title="About"
    description="The goal and history of DDD Melbourne and OpenDDD Inc."
  >
    <h1>About DDD Melbourne</h1>
    <p>
      {props.pageMetadata.conference.TagLine}. {props.pageMetadata.conference.Goal} We do this by:
    </p>
    <ul>
      <li>Making the ticket price as low as possible ({props.pageMetadata.conference.TicketPrice})</li>
      <li>Running the event on a Saturday</li>
      <li>Allowing anyone to submit about any software industry related topic</li>
      <li>Having a democratically chosen agenda</li>
      <li>Focussing on creating a safe and inclusive environment where everyone is welcome</li>
    </ul>
    <p className="text-center">
      <img src="/static/images/logo.png" alt="DDD Melbourne logo" style={{ width: '250px' }} />
      <img src="/static/images/logo-2019.png" alt="DDD Melbourne 2019 logo" style={{ width: '250px' }} />
    </p>
    <p>
      Furthermore, {props.pageMetadata.conference.Name} aims to both create opportunities for underrepresented
      minorities, juniors and first-time speakers to present as well as influence the wider software industry to
      encourage such opportunities more broadly.
    </p>
    <h2>What do we do with the money we raise?</h2>
    <p>
      DDD Melbourne is run by Oz Dev Inc., a non-profit association. All funds raised as part of running DDD Melbourne,
      selling merchandise on{' '}
      <SafeLink href="https://www.redbubble.com/people/dddmelbourne" target="_blank">
        Red Bubble
      </SafeLink>{' '}
      or any other activities are used for:
    </p>
    <ul>
      <li>Running current, or future, DDD Melbourne or DDD By Night events</li>
      <li>
        Sponsoring events or meetup groups in the VIC software industry that align to the purpose and goals of DDD
        Melbourne
      </li>
      <li>Other activities that contribute to the VIC software industry and align to our purpose and goals</li>
    </ul>
    <h2>What does DDD stand for?</h2>
    <p>
      DDD Melbourne started out its life as part of the Developer! Developer! Developer! series of events and while our
      heritage is as a developer-focussed conference, DDD Melbourne is not just for developers, but for all
      professionals in the software industry. These days we don't expand DDD - it's not an acronym for us anymore, but
      if people insist then we might say Designer, Developer and Data Scientist, or is it DevOps, Data architect,
      distributed tester?
    </p>
    <p>The original DDD Melbourne logo was:</p>
    <p className="text-center">
      <img src="/static/images/logo-old.png" alt="DDD Melbourne logo" style={{ width: '250px' }} />
    </p>
    <p>
      Developer! Developer! Developer! started in 2005 in the United Kingdom as a community conference organised by
      software developers for software developers.{' '}
      <SafeLink href="https://en.wikipedia.org/wiki/Developer!_Developer!_Developer!" target="_blank">
        It's since spread all over the UK and Australia
      </SafeLink>
      .
    </p>
    <p>DDD was set up with a number of key elements in mind, which hold true for all DDD conferences held worlwide:</p>
    <ul>
      <li>It is free / low cost</li>
      <li>It is on a Saturday</li>
      <li>An open submissions process</li>
      <li>A democratically chosen agenda</li>
    </ul>
    <h2>Sister events</h2>
    <p>We have a number of sister events across Australia:</p>
    <p className="text-center">
      <SafeLink href="https://dddperth.com/" target="_blank">
        <img src="/static/images/logo-dddperth.png" alt="DDD Perth logo" style={{ width: '200px' }} />
      </SafeLink>{' '}
      <SafeLink href="http://dddsydney.com.au/" target="_blank">
        <img src="/static/images/logo-dddsydney.png" alt="DDD Sydney logo" style={{ width: '200px' }} />
      </SafeLink>{' '}
      <SafeLink href="http://dddbrisbane.com/" target="_blank">
        <img src="/static/images/logo-dddbrisbane.png" alt="DDD Brisbane logo" style={{ width: '200px' }} />
      </SafeLink>
    </p>
  </Page>
))
