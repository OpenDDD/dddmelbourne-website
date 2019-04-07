import { Fragment } from 'react'
import React from 'react'
import { SafeLink } from '../components/global/safeLink'
import { Venue } from './types'

// tslint:disable:object-literal-sort-keys
const venue: Venue = {
  Name: 'Melbourne Convention and Exhibition Centre',
  Address: '1 Convention Centre Pl, South Wharf VIC 3006',
  Latitude: -37.8256,
  Longitude: 144.9531075,
  Afterparty: 'TBD',
  AfterpartyAddress: 'TBD',
  Wifi: 'MCEC has free wifi for all attendees limited to 512Kb download speed that needs to be renewed every hour.',
  Accommodation: null,
  Car: (
    <Fragment>
      Visit the MCEC website for {' '}
      <SafeLink href="https://mcec.com.au/visit/visit-information" target="_blank">
        paid parking options
      </SafeLink>
      .
    </Fragment>
  ),
  Parking: (
    <Fragment>
      If you’re being dropped off at the Exhibition Centre, Clarendon Street entrance is the closest entrance. If you’re getting a lift to the Convention Centre, the entrance near DFO is the closest drop off point. Visit MCEC {' '}
      <SafeLink href="https://mcec.com.au/visit/visit-information" target="_blank">
        for further guidance
      </SafeLink>
      .
    </Fragment>
  ),
  Train: (
    <Fragment>
      The closest station is Southern Cross. Once you exit the station, you can catch the 96, 109 or 12 tram routes and arrive at MCEC in just a few stops. See{' '}
      <SafeLink href="https://www.ptv.vic.gov.au/" target="_blank">
        Public Transport Victoria
      </SafeLink>{' '}
      to plan your journey.
    </Fragment>
  ),
  Tram: (
    <Fragment>
      Tram routes 96, 109 and 12 will all take you from Southern Cross St to the Clarendon Street entrance (Stop 124A Casino/MCEC). Tram routes 70, 75 will take you from Flinders Street St to Spencer Street (Stop 1 Spencer/Flinders Street), it’s just a short walk up Clarendon Street until you reach MCEC. See{' '}
      <SafeLink href="https://www.ptv.vic.gov.au/" target="_blank">
        Public Transport Victoria
      </SafeLink>{' '}
      to plan your journey.
    </Fragment>
  ),
  Bus: null
}

export default venue
