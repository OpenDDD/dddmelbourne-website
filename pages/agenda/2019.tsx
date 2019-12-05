import React, { Fragment } from 'react'
import AgendaPage, { AgendaPageParameters, AgendaPageProps } from '../../components/agendaPage'
import { SafeLink } from '../../components/global/safeLink'
import withPageMetadata from '../../components/global/withPageMetadata'
import ResponsiveVideo from '../../components/responsiveVideo'
import Sponsors from '../../components/sponsors'
import From2019 from '../../config/2019'

class Agenda2019 extends React.Component<AgendaPageProps> {
  static getAgendaPageParams(): AgendaPageParameters {
    return {
      conferenceInstance: '2019',
      numTracks: 4,
      sessionsUrl: '/static/agenda/2019.json',
      sponsors: [],
    }
  }

  render() {
    // const SessionCell = this.props.SessionCell
    return (
      <Fragment>
        <div style={{ overflow: 'initial' }}>2019 Agenda Coming soon...</div>
        <h2 style={{ display: 'none' }}>Media</h2>

        <div className="text-center" style={{ display: 'none' }}>
          <ResponsiveVideo src={From2019.YouTubeKeynoteEmbedUrl} />
        </div>
        <br />
        <p style={{ display: 'none' }}>
          <SafeLink href={From2019.YouTubePlaylistUrl} target="_blank">
            YouTube Playlist
          </SafeLink>{' '}
          |{' '}
          <SafeLink href={From2019.FlickrAlbumUrl} target="_blank">
            Flickr Album
          </SafeLink>
        </p>
        <Sponsors show={true} hideUpsell={true} sponsors={From2019.Sponsors} />
      </Fragment>
    )
  }
}

export default withPageMetadata(AgendaPage(Agenda2019, Agenda2019.getAgendaPageParams()))
