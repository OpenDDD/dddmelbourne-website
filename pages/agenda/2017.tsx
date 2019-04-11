import React, { Fragment } from 'react'
import AgendaPage, { AgendaPageParameters, AgendaPageProps } from '../../components/agendaPage'
import { SafeLink } from '../../components/global/safeLink'
import withPageMetadata from '../../components/global/withPageMetadata'
import ResponsiveVideo from '../../components/responsiveVideo'
import Sponsors from '../../components/sponsors'
import From2017 from '../../config/2017'

class Agenda2018 extends React.Component<AgendaPageProps> {
  static getAgendaPageParams(): AgendaPageParameters {
    return {
      conferenceInstance: '2017',
      numTracks: 7,
      sessionsUrl: '/static/agenda/2017.json',
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
                <th style={{ width: '13.7%' }}>
                  <strong style={{ background: '#01b6ad' }}>Aqua</strong>
                  <em>
                    K309
                  </em>
                </th>
                <th style={{ width: '13.7%' }}>
                  <strong style={{ background: '#54a6d6' }}>Blue</strong>
                  <em>
                    K321
                  </em>
                </th>
                <th style={{ width: '13.7%' }}>
                  <strong style={{ background: '#66ad4a' }}>Green</strong>
                  <em>
                    B214
                  </em>
                </th>
                <th style={{ width: '13.7%' }}>
                  <strong style={{ background: '#cd9152' }}>Orange</strong>
                  <em>
                    B215
                  </em>
                </th>
                <th style={{ width: '13.7%' }}>
                  <strong style={{ background: '#9e55c0' }}>Purple</strong>
                  <em>
                    K213
                  </em>
                </th>
                <th style={{ width: '13.7%' }}>
                  <strong style={{ background: '#e3d800' }}>Yellow</strong>
                  <em>
                    K212
                  </em>
                </th>
                <th style={{ width: '13.7%' }}>
                  <strong style={{ background: '#ad4a54' }}>Junior Dev</strong>
                  <em>
                    1<sup>st</sup> Floor
                  </em>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="breadth-row">
                <td className="time">8:00</td>
                <td colSpan={7} className="breadth">
                  Registration
                  <br />
                  <small className="room">Foyer</small>
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">8:45</td>
                <td colSpan={7} className="breadth">
                  Welcome and housekeeping
                  <br />
                  <small className="room">Main Hall</small>
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">9:00</td>
                <SessionCell isKeynote={true} sessionId="keynote" room="Main Hall" />
              </tr>

              <tr className="breadth-row">
                <td className="time">09:45</td>
                <td colSpan={7} className="breadth">
                  Morning Tea
                  <br />
                  <small className="room">Main Hall</small>
                </td>
              </tr>

              <tr>
                <td className="time">
                  10:30
                </td>
                <SessionCell sessionId="5cd8f694-f8de-4f8a-bcae-071670641919" />
                <SessionCell sessionId="94240edd-22a6-4aef-8542-226f105298a3" />
                <SessionCell sessionId="9eb0154e-daeb-4415-90cd-a1f9fae646e1" />
                <SessionCell sessionId="c2eabea3-501c-46c9-8d2e-91553082f50e" />
                <SessionCell sessionId="db81e5d9-8b6f-4fe4-8e34-7bd24f1459b0" />
                <SessionCell sessionId="f7be17b4-bca9-4d79-b08e-861e63fa4a9a" />
                <SessionCell sessionId="" />
              </tr>
              <tr className="breadth-row">
                <td className="time">11:15</td>
                <td colSpan={7} className="breadth">
                  Changeover
                </td>
              </tr>


              <tr>
                <td className="time" rowSpan={2}>
                  12:00
                </td>
                <SessionCell sessionId="a1b6fff5-1a0b-49c0-a7af-f1daeaf650bc" rowSpan={2} />
                <SessionCell sessionId="136443a9-4d1e-4e85-b3f9-5e8aa6017784" rowSpan={2} />
                <SessionCell sessionId="503061c3-37c3-4e9a-a2f5-0e164b23b6ad" rowSpan={2} />
                <SessionCell sessionId="2edafe97-2ff0-4350-86ab-b0f7daa45667" />
                <SessionCell sessionId="108dc100-d48f-4cea-b2d7-41d170aba98b" rowSpan={2} />
                <SessionCell sessionId="a64224e2-8a2d-4b56-adcb-a0a5e6eed6e6" rowSpan={2} />
                <SessionCell sessionId="a64224e2-8a2d-4b56-adcb-a0a5e6eed6e6" rowSpan={2} />
              </tr>
              <tr>
                <SessionCell sessionId="4c2e5038-1149-443f-80f4-fbf208c785b9" />
              </tr>

              <tr className="breadth-row">
                <td className="time">12:15</td>
                <td colSpan={7} className="breadth">
                  Lunch
                  <br />
                  <small className="room">Main Hall</small>
                </td>
              </tr>

              <tr>
                <td className="time" rowSpan={2}>
                  12:00
                </td>
                <SessionCell sessionId="4f00bc59-752f-4e1c-8742-14059d49a8bc" rowSpan={2} />
                <SessionCell sessionId="eec877bd-97bf-492b-8c6a-abb4625de3db" rowSpan={2} />
                <SessionCell sessionId="0d2e9072-af7d-4380-857f-8e04992ac5c0" rowSpan={2} />
                <SessionCell sessionId="f57c0054-0a3c-4882-b7b1-12f8308ba039" rowSpan={2} />
                <SessionCell sessionId="b7192823-b51a-4dac-af27-de229367464f" rowSpan={2} />
                <SessionCell sessionId="a56f1309-4872-4809-bb08-83161e4af498" rowSpan={2} />
                <SessionCell sessionId="c3d69f45-72d1-4868-a011-420f11e82699" />
              </tr>
              <tr>
                <SessionCell sessionId="c3d69f45-72d1-4868-a011-420f11e82699" />
              </tr>

              <tr className="breadth-row">
                <td className="time">14:00</td>
                <td colSpan={7} className="breadth">
                  Changeover
                </td>
              </tr>

              <tr>
                <td className="time">14:15</td>
                <SessionCell sessionId="5382b81b-73fe-4e2e-8053-ec25ed7c0d99" />
                <SessionCell sessionId="3f7b5a67-95d9-4978-91d5-2f6fd3d2b317" />
                <SessionCell sessionId="c111ddd6-1aa1-4860-8ba7-f0b0dd1a2d96" />
                <SessionCell sessionId="8cf53f1a-e23f-4997-aec6-bf4d8bffa099" />
                <SessionCell sessionId="0ecbab75-961a-4206-9ed7-33149f5fa924" />
                <SessionCell sessionId="e87fb00b-959a-4a87-8247-e365847d002d" />
                <SessionCell sessionId="8022ce14-3878-4183-bbf9-f02b3b42bfe2" />
              </tr>

              <tr className="breadth-row">
                <td className="time">15:00</td>
                <td colSpan={7} className="breadth">
                  Afternoon Tea
                  <br />
                  <small className="room">Main Hall</small>
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">15:30</td>
                <SessionCell sessionId="8d35ea03-e324-45e3-bdd8-433afdbccd03" />
                <SessionCell sessionId="0e871481-eb76-4fdf-b77f-7f515a76c45c" />
                <SessionCell sessionId="0e871481-eb76-4fdf-b77f-7f515a76c45c" />
                <SessionCell sessionId="8dae06ec-2727-4679-a612-d9ec67313ef3" />
                <SessionCell sessionId="324fff5c-5df4-4b70-ab83-c4489c13391a" />
                <SessionCell sessionId="33bd03be-b33c-46bd-86e7-eee5ea492b72" />
                <SessionCell sessionId="" />
              </tr>

              <tr className="breadth-row">
                <td className="time">14:00</td>
                <td colSpan={7} className="breadth">
                  Changeover
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">16:30</td>
                <SessionCell isLocknote={true} sessionId="locknote" />
              </tr>

              <tr className="breadth-row">
                <td className="time">17:15</td>
                <td colSpan={7} className="breadth">
                  <strong>Thank yous and wrap up</strong>
                  <br />
                  <small className="room">Main Hall</small>
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">17:10</td>
                <td colSpan={7} className="breadth">
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
          <ResponsiveVideo src={From2017.YouTubeKeynoteEmbedUrl} />
        </div>
        <br />
        <p style={{ display: 'none' }}>
          <SafeLink href={From2017.YouTubePlaylistUrl} target="_blank">
            YouTube Playlist
          </SafeLink>{' '}
          |{' '}
          <SafeLink href={From2017.FlickrAlbumUrl} target="_blank">
            Flickr Album
          </SafeLink>
        </p>
        <Sponsors show={true} sponsors={From2017.Sponsors} />
      </Fragment >
    )
  }
}

export default withPageMetadata(AgendaPage(Agenda2018, Agenda2018.getAgendaPageParams()))
