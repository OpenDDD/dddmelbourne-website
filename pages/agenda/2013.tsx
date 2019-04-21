import React, { Fragment } from 'react'
import AgendaPage, { AgendaPageParameters, AgendaPageProps } from '../../components/agendaPage'
import { SafeLink } from '../../components/global/safeLink'
import withPageMetadata from '../../components/global/withPageMetadata'
import ResponsiveVideo from '../../components/responsiveVideo'
import Sponsors from '../../components/sponsors'
import From2013 from '../../config/2013'

class Agenda2013 extends React.Component<AgendaPageProps> {
  static getAgendaPageParams(): AgendaPageParameters {
    return {
      conferenceInstance: '2013',
      numTracks: 4,
      sessionsUrl: '/static/agenda/2013.json',
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
                <th style={{ width: '24%' }}>
                  <strong>SUPERHEROES</strong>
                  <em>STREAM</em>
                </th>
                <th style={{ width: '24%' }}>
                  <strong>CODE MONKEYS</strong>
                  <em>STREAM</em>
                </th>
                <th style={{ width: '24%' }}>
                  <strong>PLUMBING</strong>
                  <em>STREAM</em>
                </th>
                <th style={{ width: '24%' }}>
                  <strong>WORKSHOPS</strong>
                  <em>STREAM</em>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="breadth-row">
                <td className="time">8:30</td>
                <td colSpan={4} className="breadth">
                  Registration
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">9:00</td>
                <td colSpan={4} className="breadth">
                  Welcome and housekeeping
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">9:15</td>
                <SessionCell isKeynote={true} sessionId="keynote" />
              </tr>

              <tr className="breadth-row">
                <td className="time">10:00</td>
                <td colSpan={4} className="breadth">
                  Morning Tea
                </td>
              </tr>

              <tr>
                <td className="time">10:30</td>
                <SessionCell sessionId="b712e23f-5138-4669-9f4b-7435054ba84c" />
                <SessionCell sessionId="fd345235-1157-4d61-bf45-a2713d1c5db5" />
                <SessionCell sessionId="0ed505d6-ee56-42b9-beef-763f53190402" />
                <SessionCell sessionId="javascript" />
              </tr>

              <tr className="breadth-row">
                <td className="time">11:30</td>
                <td colSpan={4} className="breadth">
                  Changeover
                </td>
              </tr>

              <tr>
                <td className="time">
                  11:45
                </td>
                <SessionCell sessionId="06ebebcf-1d4b-4a91-95c7-4c28e5949110" />
                <SessionCell sessionId="2ee79cb3-ad58-4673-bee3-6548d80a5c71" />
                <SessionCell sessionId="288504f3-57c7-477c-960a-6fce00386add" />
                <SessionCell sessionId="git" />
              </tr>

              <tr className="breadth-row">
                <td className="time">12:45</td>
                <td colSpan={4} className="breadth">
                  Lunch
                  <br />
                  <small className="room">Atrium</small>
                </td>
              </tr>

              <tr>
                <td className="time">14:00</td>
                <SessionCell sessionId="151c1900-5f3b-4ece-adb6-a3183811dd37" />
                <SessionCell sessionId="70df6334-58a4-40db-b442-3d7f701a844f" />
                <SessionCell sessionId="73d525db-50fb-49a8-b90a-0f431170710c" />
                <SessionCell sessionId="845057c0-3c6d-49d1-b69b-637ef09b989b" />
              </tr>

              <tr className="breadth-row">
                <td className="time">15:00</td>
                <td colSpan={4} className="breadth">
                  Changeover
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">15:15</td>
                <SessionCell sessionId="64e93494-be68-4337-9b49-ac6c721cc338" />
                <SessionCell sessionId="0219d40b-0dff-4dbd-9aa8-101996bccfa5" />
                <SessionCell sessionId="45ee2788-ba64-401c-a390-ca47dbfb96e9" />
                <SessionCell sessionId="angular" />
              </tr>

              <tr className="breadth-row">
                <td className="time">16:15</td>
                <td colSpan={4} className="breadth">
                  Afternoon Tea
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">16:30</td>
                <SessionCell sessionId="80387e00-b932-4068-b278-6bdd18520c90" />
                <SessionCell sessionId="1e54c2ed-3ea5-4c32-ba34-a40ae41a8f9f" />
                <SessionCell sessionId="0af7b349-7e01-437f-b852-35dace17e749" />
                <SessionCell sessionId="linqpad" />
              </tr>

              <tr className="breadth-row">
                <td className="time">17:30</td>
                <td colSpan={4} className="breadth">
                  <strong>Afterparty</strong>
                  <br />
                  <br />
                  <small className="room">The Glenferrie Hotel</small>
                  <br />
                  <small>324 Burwood Rd, Hawthorn VIC 3122</small>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 style={{ display: 'none' }}>Media</h2>

        <div className="text-center" style={{ display: 'none' }}>
          <ResponsiveVideo src={From2013.YouTubeKeynoteEmbedUrl} />
        </div>
        <br />
        <p style={{ display: 'none' }}>
          <SafeLink href={From2013.YouTubePlaylistUrl} target="_blank">
            YouTube Playlist
          </SafeLink>{' '}
          |{' '}
          <SafeLink href={From2013.FlickrAlbumUrl} target="_blank">
            Flickr Album
          </SafeLink>
        </p>
        <Sponsors show={true} sponsors={From2013.Sponsors} />
      </Fragment>
    )
  }
}

export default withPageMetadata(AgendaPage(Agenda2013, Agenda2013.getAgendaPageParams()))
