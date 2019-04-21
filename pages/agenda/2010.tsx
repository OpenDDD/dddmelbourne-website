import React, { Fragment } from 'react'
import AgendaPage, { AgendaPageParameters, AgendaPageProps } from '../../components/agendaPage'
import { SafeLink } from '../../components/global/safeLink'
import withPageMetadata from '../../components/global/withPageMetadata'
import ResponsiveVideo from '../../components/responsiveVideo'
import Sponsors from '../../components/sponsors'
import From2010 from '../../config/2010'

class Agenda2010 extends React.Component<AgendaPageProps> {
  static getAgendaPageParams(): AgendaPageParameters {
    return {
      conferenceInstance: '2010',
      numTracks: 2,
      sessionsUrl: '/static/agenda/2010.json',
      sponsors: [],
    }
  }

  render() {
    return (
      <Fragment>
        <div style={{ overflow: 'initial' }}>
          <table className="agenda-row table">
            <thead>
              <tr>
                <th style={{ width: '32%' }}>
                  <strong>404 Agenda Not Found</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="breadth-row">
                <td>
                  <section style={{ padding: '40px 0', background: '#fff' }}>
                    <div className="container">
                      <div className="row">
                        <div className="col-sm-12 ">
                          <div className="col-sm-10 col-sm-offset-1  text-center">
                            <div style={{ backgroundImage: 'url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)', height: '400px', backgroundPosition: 'center' }}>
                            </div>

                            <div style={{ marginTop: '-50px' }}>
                              <h3 className="h2">Look like you're lost</h3>

                              <p>the agenda you are looking is lost forever!</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 style={{ display: 'none' }}>Media</h2>

        <div className="text-center" style={{ display: 'none' }}>
          <ResponsiveVideo src={From2010.YouTubeKeynoteEmbedUrl} />
        </div>
        <br />
        <p style={{ display: 'none' }}>
          <SafeLink href={From2010.YouTubePlaylistUrl} target="_blank">
            YouTube Playlist
          </SafeLink>{' '}
          |{' '}
          <SafeLink href={From2010.FlickrAlbumUrl} target="_blank">
            Flickr Album
          </SafeLink>
        </p>
        <Sponsors show={true} sponsors={From2010.Sponsors} />
      </Fragment>
    )
  }
}

export default withPageMetadata(AgendaPage(Agenda2010, Agenda2010.getAgendaPageParams()))
