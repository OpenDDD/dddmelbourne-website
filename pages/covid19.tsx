import React from 'react'
import { SafeLink } from '../components/global/safeLink'
import withPageMetadata, { WithPageMetadataProps } from '../components/global/withPageMetadata'
import Page from '../layouts/withSidebar'

export default withPageMetadata((props: WithPageMetadataProps) => (
  <Page
    pageMetadata={props.pageMetadata}
    title="COVID-19 Response"
    description="The goal and history of DDD Melbourne and OpenDDD Inc."
  >
    <h1>COVID-19 Response</h1>
    <p>
      Hello all,
    </p>
    <p>
      We the organising committee at DDD Melbourne have been continuously monitoring the COVID-19 outbreak and the
      impact it is having on the health and wellbeing of our community. We hope that you are all safe and well.
    </p>
    <p>
      On the 17th March, the Australian Government put out advice recommending that
      <SafeLink href="https://www.health.gov.au/resources/publications/coronavirus-covid-19-what-you-need-to-know" target="_blank">
        indoor gatherings of more than 100 people be cancelled
      </SafeLink>. DDD Melbourne 2020 is scheduled for Saturday 3rd October, which is just over six months away. As
      we've seen over the last two months, a lot can change in that timeframe. The health and wellbeing of our
      attendees, speakers, sponsors and crew are our top priority, and so we are taking the decision on whether to
      hold, postpone, or cancel the event very seriously.
    </p>
    <p>
      We don't believe it's reasonable to ask our community to commit to purchasing tickets and preparing presentations
      while the status of the event is uncertain. As such, we will confirm the date before opening up both the ticket
      sales and the Call for Presentations. We aim to do this by mid April.
    </p>
    <p>
      We will be in close contact with our sponsors throughout the planning process, and we greatly appreciate their
      understanding and ongoing support through these uncertain times.
    </p>
    <p>
      In the meantime, our quarterly
      <SafeLink href="https://nights.dddmelbourne.com" target="_blank">
        DDD Melbourne By Night
      </SafeLink>
      events will continue to run, but will be held virtually. We look forward to seeing you all there.
    </p>
    <p>
      We care deeply about the Melbourne tech community, and now more than ever we could all use a bit of human
      (virtual) connection. If you are organising an event and would like some help running it virtually, please don't
      hesitate to reach out to us and we'd be more than happy to help.
    </p>
    <p>
      Warm regards,
    </p>
    <p>
      The DDD Melbourne team
    </p>
    <p>
      18th March 2020
    </p>
  </Page>
))
