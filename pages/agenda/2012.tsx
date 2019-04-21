import React, { Fragment } from 'react'
import AgendaPage, { AgendaPageParameters, AgendaPageProps } from '../../components/agendaPage'
import { SafeLink } from '../../components/global/safeLink'
import withPageMetadata from '../../components/global/withPageMetadata'
import ResponsiveVideo from '../../components/responsiveVideo'
import Sponsors from '../../components/sponsors'
import From2012 from '../../config/2012'

class Agenda2012 extends React.Component<AgendaPageProps> {
  static getAgendaPageParams(): AgendaPageParameters {
    return {
      conferenceInstance: '2012',
      numTracks: 3,
      sessionsUrl: '/static/agenda/2012.json',
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
                  <strong>Mixed Fruit</strong>
                  <em>STREAM</em>
                </th>
                <th style={{ width: '32%' }}>
                  <strong>Web and Mobile</strong>
                  <em>STREAM</em>
                </th>
                <th style={{ width: '32%' }}>
                  <strong>Windows &amp; .NET</strong>
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
                  Welcome
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">9:10</td>
                <SessionCell sessionId="55168c89-f1d0-4996-bdf3-b8b68bad686b" />
                <SessionCell sessionId="95435371-427e-4004-842b-0ce5f9e9c400" />
                <SessionCell sessionId="0f6ffa23-2424-4216-9675-12969b9d793a" />
              </tr>

              <tr className="breadth-row">
                <td className="time">9:30</td>
                <td colSpan={3} className="breadth">
                  Changeover
                </td>
              </tr>

              <tr>
                <td className="time">
                  9:45
                </td>
                <SessionCell sessionId="b5209401-0544-4e19-98a3-c6fbd5d33c74" />
                <SessionCell sessionId="873144e7-0024-4d78-8b32-e48df3909720" />
                <SessionCell sessionId="e47d8124-b97b-4866-9e21-9dcc3b239888" />
              </tr>

              <tr className="breadth-row">
                <td className="time">10:45</td>
                <td colSpan={3} className="breadth">
                  Morning Tea
                </td>
              </tr>

              <tr>
                <td className="time">11:15</td>
                <SessionCell sessionId="e9c823cf-c933-4549-8881-505717024cb1" />
                <SessionCell sessionId="a4d49a37-0aa4-487a-90ca-b0cd4484004c" />
                <SessionCell sessionId="6fbf1ef6-f74b-4f9a-a21b-867aa76f6ab7" />
              </tr>

              <tr className="breadth-row">
                <td className="time">12:15</td>
                <td colSpan={3} className="breadth">
                  Lunch
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">13:45</td>
                <SessionCell sessionId="76827ae7-29bd-4fdf-84bc-7f0f7ed276db" />
                <SessionCell sessionId="be1cd427-346d-4ef4-8e8d-7b87551a73b6" />
                <SessionCell sessionId="f3b89bd0-28ce-440f-9159-c21471bf2b6b" />
              </tr>

              <tr className="breadth-row">
                <td className="time">14:45</td>
                <td colSpan={3} className="breadth">
                  Changeover
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">15:00</td>
                <SessionCell sessionId="4ffd1514-da73-4b56-84aa-05887a8f43d4" />
                <SessionCell sessionId="e089077f-e069-4475-8149-291b2815f4cc" />
                <SessionCell sessionId="e23c89ef-e027-41d0-bbff-5470a51e5ca4" />
              </tr>

              <tr className="breadth-row">
                <td className="time">16:00</td>
                <td colSpan={3} className="breadth">
                  Afternoon Tea
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">16:15</td>
                <SessionCell sessionId="5ceef8c3-d2f9-4a34-b299-de33da36eae2" />
                <SessionCell sessionId="2e8d698a-0d48-41a4-9fac-119db931771c" />
                <SessionCell sessionId="39521eb7-63e1-45bb-a597-6e99327955b3" />
              </tr>

              <tr className="breadth-row">
                <td className="time">17:15</td>
                <td colSpan={3} className="breadth">
                  <strong>Closing</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 style={{ display: 'none' }}>Media</h2>

        <div className="text-center" style={{ display: 'none' }}>
          <ResponsiveVideo src={From2012.YouTubeKeynoteEmbedUrl} />
        </div>
        <br />
        <p style={{ display: 'none' }}>
          <SafeLink href={From2012.YouTubePlaylistUrl} target="_blank">
            YouTube Playlist
          </SafeLink>{' '}
          |{' '}
          <SafeLink href={From2012.FlickrAlbumUrl} target="_blank">
            Flickr Album
          </SafeLink>
        </p>
        <Sponsors show={true} sponsors={From2012.Sponsors} />
      </Fragment>
    )
  }
}

export default withPageMetadata(AgendaPage(Agenda2012, Agenda2012.getAgendaPageParams()))
