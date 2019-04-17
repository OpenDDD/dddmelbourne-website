import React, { Fragment } from 'react'
import AgendaPage, { AgendaPageParameters, AgendaPageProps } from '../../components/agendaPage'
import { SafeLink } from '../../components/global/safeLink'
import withPageMetadata from '../../components/global/withPageMetadata'
import ResponsiveVideo from '../../components/responsiveVideo'
import Sponsors from '../../components/sponsors'
import From2014 from '../../config/2014'

class Agenda2014 extends React.Component<AgendaPageProps> {
  static getAgendaPageParams(): AgendaPageParameters {
    return {
      conferenceInstance: '2014',
      numTracks: 4,
      sessionsUrl: '/static/agenda/2014.json',
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
                  <strong style={{ background: '#66ad4a' }}>Green</strong>
                  <em>ATC 101 - MAIN HALL</em>
                </th>
                <th style={{ width: '24%' }}>
                  <strong style={{ background: '#54a6d6' }}>Blue</strong>
                  <em>AMDC 301 - LEVEL 3</em>
                </th>
                <th style={{ width: '24%' }}>
                  <strong style={{ background: '#ad4a54' }}>Red</strong>
                  <em>AMDC 501 - LEVEL 5</em>
                </th>
                <th style={{ width: '24%' }}>
                  <strong style={{ background: '#cd9152' }}>Orange</strong>
                  <em>AMDC 505 - LEVEL 5</em>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="breadth-row">
                <td className="time">8:30</td>
                <td colSpan={5} className="breadth">
                  Registration
                  <br />
                  <small className="room" style={{ color: 'rgb(102, 173, 74)' }}>Foyer</small>
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">9:00</td>
                <td colSpan={5} className="breadth">
                  Welcome and housekeeping
                  <br />
                  <small className="room" style={{ color: 'rgb(102, 173, 74)' }}>ATC 101 - MAIN HALL</small>
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">9:10</td>
                <SessionCell isKeynote={true} sessionId="keynote" room="ATC 101 - MAIN HALL" roomStyle={{ color: 'rgb(102, 173, 74)' }} />
              </tr>

              <tr className="breadth-row">
                <td className="time">10:00</td>
                <td colSpan={5} className="breadth">
                  Morning Tea
                </td>
              </tr>

              <tr>
                <td className="time">10:15</td>
                <SessionCell sessionId="3a84281d-ba48-499e-ad77-bac3160a2233" />
                <SessionCell sessionId="66236637-27ee-489c-9d8c-d6de9de672ea" />
                <SessionCell sessionId="f9f0c08e-71c0-4082-843e-0aec53f1919f" />
                <SessionCell sessionId="workshop1" />
              </tr>

              <tr className="breadth-row">
                <td className="time">11:00</td>
                <td colSpan={5} className="breadth">
                  Changeover
                </td>
              </tr>

              <tr>
                <td className="time">
                  11:15
                </td>
                <SessionCell sessionId="342c8945-f1bb-4dd6-bcb6-4a33402d4f2e" />
                <SessionCell sessionId="09d38ade-b83a-487b-8816-16babb035b9f" />
                <SessionCell sessionId="dc84b8cc-ad31-4e0f-bc98-55ad9f421d0b" />
                <SessionCell sessionId="workshop1" />
              </tr>

              <tr className="breadth-row">
                <td className="time">12:00</td>
                <td colSpan={5} className="breadth">
                  Lunch
                  <br />
                  <small className="room" style={{ color: 'rgb(102, 173, 74)' }}>Atrium</small>
                </td>
              </tr>

              <tr>
                <td className="time">13:00</td>
                <SessionCell sessionId="024c64d4-1485-454d-a3c1-077dba8cf379" />
                <SessionCell sessionId="28960b64-2c00-4903-95dc-eac2df38e1f9" />
                <SessionCell sessionId="98456d17-ba82-44b8-a94d-19b1fd1f520d" />
                <SessionCell sessionId="workshop2" />
              </tr>

              <tr className="breadth-row">
                <td className="time">13:45</td>
                <td colSpan={5} className="breadth">
                  Changeover
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">14:00</td>
                <SessionCell sessionId="allsopp" />
                <SessionCell sessionId="1f9ee938-dfa3-4118-9ee1-08d4e910bb58" />
                <SessionCell sessionId="cee4b28c-a54b-4be3-97a8-b2e4abfc233a" />
                <SessionCell sessionId="workshop2" />
              </tr>

              <tr className="breadth-row">
                <td className="time">13:45</td>
                <td colSpan={5} className="breadth">
                  Afternoon Tea
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">15:00</td>
                <SessionCell sessionId="1f1471ee-79d2-4e49-b1f2-3228d7c0b6f3" />
                <SessionCell sessionId="17102e0d-ba68-499c-bb51-0b9cf39b26a5" />
                <SessionCell sessionId="5c22ad22-dc66-4de8-9f65-b228302505ea" />
                <SessionCell sessionId="" />
              </tr>

              <tr className="breadth-row">
                <td className="time">15:45</td>
                <td colSpan={5} className="breadth">
                  Changeover
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">16:00</td>
                <SessionCell isLocknote={true} sessionId="locknote" room="ATC 101 - MAIN HALL" roomStyle={{ color: 'rgb(102, 173, 74)' }} />
              </tr>

              <tr className="breadth-row">
                <td className="time">17:00</td>
                <td colSpan={5} className="breadth">
                  <strong>Give aways and wrap up</strong>
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">17:30</td>
                <td colSpan={5} className="breadth">
                  <strong>Afterparty</strong>
                  <br />
                  <br />
                  <small className="room" style={{ color: 'rgb(102, 173, 74)' }}>The Glenferrie Hotel</small>
                  <br />
                  <small>324 Burwood Rd, Hawthorn VIC 3122</small>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 style={{ display: 'none' }}>Media</h2>

        <div className="text-center" style={{ display: 'none' }}>
          <ResponsiveVideo src={From2014.YouTubeKeynoteEmbedUrl} />
        </div>
        <br />
        <p style={{ display: 'none' }}>
          <SafeLink href={From2014.YouTubePlaylistUrl} target="_blank">
            YouTube Playlist
          </SafeLink>{' '}
          |{' '}
          <SafeLink href={From2014.FlickrAlbumUrl} target="_blank">
            Flickr Album
          </SafeLink>
        </p>
        <Sponsors show={true} sponsors={From2014.Sponsors} />
      </Fragment>
    )
  }
}

export default withPageMetadata(AgendaPage(Agenda2014, Agenda2014.getAgendaPageParams()))
