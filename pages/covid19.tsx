import React from 'react'
import { SafeLink } from '../components/global/safeLink'
import withPageMetadata, { WithPageMetadataProps } from '../components/global/withPageMetadata'
import Page from '../layouts/withSidebar'

export default withPageMetadata((props: WithPageMetadataProps) => (
  <Page
    pageMetadata={props.pageMetadata}
    title="Status of This Year's Event"
    description="Our statement on COVID-19 and the status of this year's event."
  >
    <h1>Status of This Year's Event</h1>
    <p>
      Hello all,
    </p>
    <p>
      We the organising committee at DDD Melbourne have been continuously monitoring the COVID-19 outbreak and the
      impact it is having on the health and wellbeing of our community. We hope that you are all safe and well.
    </p>
    <p>
      It is with great sadness that we have made the tough decision to cancel this year's event. There is just over
      five months until our planned date of Saturday 3rd October. Although we are hopeful that circumstances improve
      before then, the simple fact is that there is too much uncertainty for us to commit to this date. Uncertainty
      that it will be safe for the health of our attendees, speakers, sponsors and crew, and also uncertainty that our
      sponsors will be able to commit to supporting us when many businesses are already struggling to support their
      staff.
    </p>
    <p>
      This has been an extremely difficult decision for us to make, especially because it is precisely during such
      difficult times that we all look to our communities for support. You may be aware that we host quarterly DDD BY
      Night events, with last month's event being the first to be held fully online. To keep our community engaged
      through these difficult times we will be looking to step up our online events throughout the year. If you haven't
      already, please join our{' '}
      <SafeLink href="http://nights.dddmelbourne.com/" target="_blank">
        Meetup Group
      </SafeLink>{' '} to hear about upcoming events.
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
      5th May 2020
    </p>
  </Page>
))
