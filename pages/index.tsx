import React from 'react'
import EventDetails from '../components/eventDetails'
import withPageMetadata, { WithPageMetadataProps } from '../components/global/withPageMetadata'
import ImageStrip from '../components/imageStrip'
import ImportantDates from '../components/importantDates'
import Keynotes from '../components/Keynotes'
import Sponsors from '../components/sponsors'
import arrayShuffle from '../components/utils/arrayShuffle'
import getConferenceActions from '../config/actions'
import Conference from '../config/conference'
import { Image } from '../config/types'
import Page from '../layouts/main'

interface IndexProps {
  imageStrip: Image[]
}

class Index extends React.Component<IndexProps & WithPageMetadataProps> {
  static getInitialProps() {
    return {
      imageStrip: arrayShuffle(Conference.ImageStrip),
    }
  }

  render() {
    const conference = this.props.pageMetadata.conference
    const dates = this.props.pageMetadata.dates
    const actions = getConferenceActions(conference, dates)
    return (
      <Page pageMetadata={this.props.pageMetadata} isHome={true} title="Home">
        <EventDetails conference={conference} dates={dates} primaryAction={actions[0]} />
        <ImportantDates conference={conference} actions={actions} currentDate={this.props.pageMetadata.currentDate} />
        <Keynotes conference={conference} />
        <ImageStrip images={this.props.imageStrip} />
        <div className="container">
          <Sponsors
            show={!conference.HideSponsors}
            sponsors={conference.Sponsors}
            hideUpsell={conference.HideSponsorshipUpsell}
          />
        </div>
        <section className="ddd-by-night">
          <div className="content">
            <img src="/static/images/ddd-by-night/ddd-night-logo.png" alt="DDD By Night" />
            <p>Free evening event.</p>
            <p>
              <a href="https://nights.dddmelbourne.com" className="btn" target="_blank">
                Find Out More
              </a>
            </p>
          </div>
        </section>
      </Page>
    )
  }
}

export default withPageMetadata(Index)
