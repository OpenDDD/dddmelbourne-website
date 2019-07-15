import React, { Fragment } from 'react'
import AgendaPage, { AgendaPageParameters, AgendaPageProps } from '../../components/agendaPage'
import { SafeLink } from '../../components/global/safeLink'
import withPageMetadata from '../../components/global/withPageMetadata'
import ResponsiveVideo from '../../components/responsiveVideo'
import Sponsors from '../../components/sponsors'
import From2018 from '../../config/2018'

class Agenda2018 extends React.Component<AgendaPageProps> {
  static getAgendaPageParams(): AgendaPageParameters {
    return {
      conferenceInstance: '2018',
      numTracks: 4,
      sessionsUrl: '/static/agenda/2018.json',
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
                  <strong style={{ background: '#54a6d6' }}>Main Hall</strong>
                  <em>
                    1<sup>st</sup> Floor
                  </em>
                </th>
                <th style={{ width: '24%' }}>
                  <strong style={{ background: '#66ad4a' }}>Yarra Room</strong>
                  <em>
                    2<sup>nd</sup> Floor
                  </em>
                </th>
                <th style={{ width: '24%' }}>
                  <strong style={{ background: '#ad4a54' }}>Supper Room</strong>
                  <em>
                    3<sup>rd</sup> Floor
                  </em>
                </th>
                <th style={{ width: '24%' }}>
                  <strong style={{ background: '#ca7b29' }}>Junior Dev</strong>
                  <em>
                    1<sup>st</sup> Floor
                  </em>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="breadth-row">
                <td className="time">8:00</td>
                <td colSpan={4} className="breadth">
                  Registration
                  <br />
                  <small className="room">Foyer</small>
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">9:00</td>
                <td colSpan={4} className="breadth">
                  Welcome and housekeeping
                  <br />
                  <small className="room">Main Hall</small>
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">9:15</td>
                <SessionCell isKeynote={true} sessionId="594ece25-f804-4a79-8500-161babbec3d2" room="Main Hall" />
              </tr>

              <tr className="breadth-row">
                <td className="time">10:00</td>
                <td colSpan={4} className="breadth">
                  Morning Tea
                  <br />
                  <small className="room">Main Hall</small>
                </td>
              </tr>

              <tr>
                <td className="time" rowSpan={2}>
                  10:30
                </td>
                <SessionCell sessionId="4b4e8c52-7d63-47ae-adca-9a228099819d" rowSpan={2} />
                <SessionCell sessionId="b7108d0e-bcfd-4738-b231-c1a380609373" rowSpan={2} />
                <SessionCell sessionId="a1c08893-0444-4a89-90d0-24cef5e20bff" rowSpan={2} />
                <SessionCell sessionId="202bfd14-d7b4-413a-8d91-3227970bd91d" />
              </tr>
              <tr>
                <SessionCell sessionId="2ff74bfe-ab9e-4cbf-b304-842f41870eb6" />
              </tr>
              <tr className="breadth-row">
                <td className="time">11:15</td>
                <td colSpan={4} className="breadth">
                  Changeover
                </td>
              </tr>

              <tr>
                <td className="time">11:30</td>
                <SessionCell sessionId="d104878e-79ef-4d40-81cc-045d396bc663" />
                <SessionCell sessionId="dc818ccb-639b-414a-bf6a-d4d3a8ce0f03" />
                <SessionCell sessionId="12bdca97-f489-4191-914a-db1c763aa5b5" />
                <SessionCell sessionId="570485c2-2102-436c-97f7-c3065b908355" />
              </tr>

              <tr className="breadth-row">
                <td className="time">12:15</td>
                <td colSpan={4} className="breadth">
                  Lunch
                  <br />
                  <small className="room">Main Hall</small>
                </td>
              </tr>

              <tr>
                <td className="time">13:15</td>
                <SessionCell sessionId="77920952-0229-4430-bf7a-aee27323dd3d" />
                <SessionCell sessionId="d95a3a34-5c01-4f59-b59c-48b29a62cb99" />
                <SessionCell sessionId="b06f971d-7fef-440a-bbe4-913ded5319ba" />
                <SessionCell sessionId="51ba3f2f-b392-4a46-8cd3-1d07eeebdd91" />
              </tr>

              <tr className="breadth-row">
                <td className="time">14:00</td>
                <td colSpan={4} className="breadth">
                  Changeover
                </td>
              </tr>

              <tr>
                <td className="time">14:15</td>
                <SessionCell sessionId="247f0452-a9cf-4867-bef3-2112e9931886" />
                <SessionCell sessionId="116a8329-aaa6-449a-a5d2-24d00d5e4fff" />
                <SessionCell sessionId="8ef77b38-292b-46ab-ad5c-7a3c07e66146" />
                <SessionCell sessionId="6c441bab-cf12-443e-a77d-44edb0e6db6a" />
              </tr>

              <tr className="breadth-row">
                <td className="time">15:00</td>
                <td colSpan={4} className="breadth">
                  Afternoon Tea
                  <br />
                  <small className="room">Main Hall</small>
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">15:30</td>
                <SessionCell sessionId="baed0437-b817-4ff5-8bc1-0ac10ee7307c" />
                <SessionCell sessionId="e7bbf226-4f1a-41a3-8393-2c0c5de9764f" />
                <SessionCell sessionId="d5bfc25b-f8c6-4762-8d62-89efe3176456" />
                <SessionCell sessionId="d2c1f8a3-75bd-4e75-9731-fc03ff351d9b" />
              </tr>

              <tr className="breadth-row">
                <td className="time">14:00</td>
                <td colSpan={4} className="breadth">
                  Changeover
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">16:30</td>
                <SessionCell sessionId="ab611921-8c48-4f75-9c8a-e22579c5f1c7" />
                <SessionCell sessionId="c28761b5-cb4c-4abb-9a74-ac8129203e85" />
                <SessionCell sessionId="4fa335ae-f910-4df8-9037-d6eb6738d448" />
                <SessionCell sessionId="56c58b7c-eb9a-4789-b270-025e38c6a9f1" />
              </tr>

              <tr className="breadth-row">
                <td className="time">17:15</td>
                <td colSpan={4} className="breadth">
                  <strong>Thank yous and wrap up</strong>
                  <br />
                  <small className="room">Main Hall</small>
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">18:00</td>
                <td colSpan={4} className="breadth">
                  <strong>Afterparty</strong>
                  <br />
                  <br />
                  <small className="room">The Carlton Club</small>
                  <br />
                  <small>193 Bourke St, Melbourne VIC 3000</small>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 style={{ display: 'none' }}>Media</h2>

        <div className="text-center" style={{ display: 'none' }}>
          <ResponsiveVideo src={From2018.YouTubeKeynoteEmbedUrl} />
        </div>
        <br />
        <p style={{ display: 'none' }}>
          <SafeLink href={From2018.YouTubePlaylistUrl} target="_blank">
            YouTube Playlist
          </SafeLink>{' '}
          |{' '}
          <SafeLink href={From2018.FlickrAlbumUrl} target="_blank">
            Flickr Album
          </SafeLink>
        </p>
        <Sponsors show={true} hideUpsell={true} sponsors={From2018.Sponsors} />
      </Fragment>
    )
  }
}

export default withPageMetadata(AgendaPage(Agenda2018, Agenda2018.getAgendaPageParams()))
