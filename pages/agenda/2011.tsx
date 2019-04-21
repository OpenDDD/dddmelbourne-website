import React, { Fragment } from 'react'
import AgendaPage, { AgendaPageParameters, AgendaPageProps } from '../../components/agendaPage'
import { SafeLink } from '../../components/global/safeLink'
import withPageMetadata from '../../components/global/withPageMetadata'
import ResponsiveVideo from '../../components/responsiveVideo'
import Sponsors from '../../components/sponsors'
import From2011 from '../../config/2011'

class Agenda2011 extends React.Component<AgendaPageProps> {
  static getAgendaPageParams(): AgendaPageParameters {
    return {
      conferenceInstance: '2011',
      numTracks: 3,
      sessionsUrl: '/static/agenda/2011.json',
      sponsors: [],
    }
  }

  render() {
    const SessionCell = this.props.SessionCell
    return (
      <Fragment>
        <div style={{ overflow: 'initial' }}>
          <table className="agenda-row table">
            <thead>
              <tr>
                <th style={{ width: '4%' }} />
                <th style={{ width: '32%' }}>
                  <strong>Web</strong>
                  <em>STREAM</em>
                </th>
                <th style={{ width: '32%' }}>
                  <strong>Mix</strong>
                  <em>STREAM</em>
                </th>
                <th style={{ width: '32%' }}>
                  <strong>Alt</strong>
                  <em>STREAM</em>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="breadth-row">
                <td className="time">8:30</td>
                <td colSpan={3} className="breadth">
                  Registration
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">9:00</td>
                <td colSpan={3} className="breadth">
                  Introduction
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">9:25</td>
                <td colSpan={3} className="breadth">
                  Changeover
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">9:35</td>
                <SessionCell sessionId="07bd9c20-58be-40ef-86d2-4efb881d5a25" />
                <SessionCell sessionId="ad45725f-76ae-479f-bd11-23b8f801082d" />
                <SessionCell sessionId="724ae5f2-6dee-46e6-bbf0-ec16f215c0ac" />
              </tr>

              <tr className="breadth-row">
                <td className="time">10:35</td>
                <td colSpan={3} className="breadth">
                  Morning Tea
                </td>
              </tr>

              <tr>
                <td className="time">
                  10:45
                </td>
                <SessionCell sessionId="4fc6ea7a-5888-4b3b-a0b7-3801f09f34c3" />
                <SessionCell sessionId="894d15c8-4c12-4a89-9fc7-85c06be7cf08" />
                <SessionCell sessionId="7da9f9fd-e488-4027-b5d5-a7da8e60cb72" />
              </tr>

              <tr className="breadth-row">
                <td className="time">11:45</td>
                <td colSpan={3} className="breadth">
                  Break
                </td>
              </tr>

              <tr>
                <td className="time">11:50</td>
                <SessionCell sessionId="c141dd48-6937-4da2-bc30-0b2bd19931fe" />
                <SessionCell sessionId="4fbbb1f8-5087-4f8c-81fa-0354f88491cc" />
                <SessionCell sessionId="ede5abc0-bbe4-47ab-ba5e-aa14b2415bea" />
              </tr>

              <tr className="breadth-row">
                <td className="time">12:50</td>
                <td colSpan={3} className="breadth">
                  Lunch
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">12:55</td>
                <SessionCell isLunchnote={true} sessionId="lunch-note" />
              </tr>

              <tr className="breadth-row">
                <td className="time">14:00</td>
                <SessionCell sessionId="111d7e03-6796-4fc5-9e64-0328541af414" />
                <SessionCell sessionId="98304155-6290-4f65-a96b-3384c6a2f4d8" />
                <SessionCell sessionId="fd601c16-90d8-490b-8f84-8ccdfa2a6a9c" />
              </tr>

              <tr className="breadth-row">
                <td className="time">15:00</td>
                <td colSpan={3} className="breadth">
                  Changeover
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">15:05</td>
                <SessionCell sessionId="09b80d84-90dd-4dc7-8b11-9fc2f36e43c4" />
                <SessionCell sessionId="8148c757-3f26-49e6-b475-3bb6cc4077e3" />
                <SessionCell sessionId="e05d0d04-94bb-4856-a055-120c170a3713" />
              </tr>

              <tr className="breadth-row">
                <td className="time">16:05</td>
                <td colSpan={3} className="breadth">
                  Afternoon Tea
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">16:10</td>
                <SessionCell sessionId="573050fa-e43f-4525-8378-f91ebf59125b" />
                <SessionCell sessionId="08902d43-ad30-4198-a46a-5fc3c743a68f" />
                <SessionCell sessionId="de4e7bc3-e140-4964-9014-715868962254" />
              </tr>

              <tr className="breadth-row">
                <td className="time">17:10</td>
                <td colSpan={3} className="breadth">
                  <strong>Closing</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 style={{ display: 'none' }}>Media</h2>

        <div className="text-center" style={{ display: 'none' }}>
          <ResponsiveVideo src={From2011.YouTubeKeynoteEmbedUrl} />
        </div>
        <br />
        <p style={{ display: 'none' }}>
          <SafeLink href={From2011.YouTubePlaylistUrl} target="_blank">
            YouTube Playlist
          </SafeLink>{' '}
          |{' '}
          <SafeLink href={From2011.FlickrAlbumUrl} target="_blank">
            Flickr Album
          </SafeLink>
        </p>
        <Sponsors show={true} sponsors={From2011.Sponsors} />
      </Fragment>
    )
  }
}

export default withPageMetadata(AgendaPage(Agenda2011, Agenda2011.getAgendaPageParams()))