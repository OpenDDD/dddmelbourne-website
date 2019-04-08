import Link from 'next/link'
import React from 'react'
import { SafeLink } from '../components/global/safeLink'
import withPageMetadata, { WithPageMetadataProps } from '../components/global/withPageMetadata'
import Page from '../layouts/withSidebar'

export default withPageMetadata((props: WithPageMetadataProps) => (
  <Page
    pageMetadata={props.pageMetadata}
    title="Opportunity Program"
    description="We’re committed to bringing in as many individuals who couldn’t attend otherwise as possible."
  >
    <h1>Opportunity Program</h1>
    <p>We’re dedicated to diversity, inclusion and even more so—equal opportunity. We realize that buying a ticket to a conference for many isn’t a trivial expense, but it can be a turning point in someone’s career.</p>

    <p>We’re committed to bringing in as many individuals who couldn’t attend otherwise as possible. We want you to feel like you belong and build a lasting, inclusive, safe community. As organisers, we see it as our responsibility to help diversify the face of the Australian tech industry. We strongly encourage members of underrepresented groups to apply.</p>

    <p><em>Please note that the scholarships cover conference registration only, so you will have to arrange travel and accommodation if you live outside of Melbourne, Australia.</em></p>

    <h2 id="eligibility">Eligibility</h2>

    <p>Applicants for a free Opportunity Program ticket have to fulfill at least one of the below requirements:</p>

    <ul>
      <li>be a member of an underrepresented group in tech, including, but not limited to women, LGBTQI+, African Australian, Indigenous Australian people, people with disabilities, and people facing economic or social hardships</li>
      <li>be unable to attend without financial assistance.</li>
    </ul>

    <p>It’s important to remember that:</p>

    <ul>
      <li>Previous conference attendance doesn’t disqualify an application</li>
      <li>No technology experience or knowledge is required—we’re here to learn!</li>
      <li>Yes, you deserve it ✨</li>
    </ul>

    <p>How to apply</p>

    <ul>
      <li>All information will be kept confidential except the review committee.<br /></li>
      <li>You’ll be notified of the result no matter the outcome.</li>
    </ul>

    <p><a href={"https://goo.gl/forms/oUIJjsPuyW3RB5QB3"} className="btn agenda">Apply Here</a></p>

    <p>Applications close: 31st August<br />
      Application notification: 2nd Septmeber</p>

    <h2 id="how-can-i-tell-you-care-about-inclusion">How can I tell you care about inclusion?</h2>

    <p>Our approach to diversity and inclusion is multidimensional, spanning much further than the Opportunity Ticket program.</p>

    <p>We provide comprehensive information about our Call for Submissions process. We actively reach out to underrepresented individuals encouraging them to partake in our conference. Not everyone wants to be in the spotlight of open submissions, we recognise this and provided an alternate pathway for speaker submissions through an In-House selection panel.</p>

    <p>DDD Melbourne operates under an enforceable <a href="/code-of-conduct">Code of Conduct</a>. We treat harassing behavior very seriously and are committed to providing a safe, welcoming experience for everyone. We continuously train ourselves in response mechanisms.</p>

    <p>Sponsors<br />
      The number of passes we’re able to give out relies heavily on the amount of sponsors. If your organization can help or you’re an individual willing to donate <a href="mailto:dddmelbourne@gmail.com">talk</a> to us to get involved.</p>

    <p>We’re grateful for the generous support our sponsors and community for making the Opportunity Program possible.</p>

    <h4 id="credit">Credit</h4>

    <p>This initiative has been inspired by{' '}
      <SafeLink href="https://2018.jsconfau.com/scholarship" target="_blank">
        JSConfAu
      </SafeLink>{' '}
    </p>
  </Page >
))
