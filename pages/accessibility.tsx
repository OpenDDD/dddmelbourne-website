import React from 'react'
import withPageMetadata, { WithPageMetadataProps } from '../components/global/withPageMetadata'
import Page from '../layouts/withSidebar'

export default withPageMetadata((props: WithPageMetadataProps) => (
  <Page
    pageMetadata={props.pageMetadata}
    title="Accessibility"
    description={'Accessibility at ' + props.pageMetadata.conference.Name + '.'}
  >
    <h1>Accessibility</h1>
    <p>
      We're committed to making {props.pageMetadata.conference.Name} a diverse and inclusive conference. The event will be held at
      Melbourne Convention and Exhibition Centre (MCEC) which has fantastic access and accessible features.
      Full details can be found on the <a href="https://mcec.com.au/-/media/mcec/documents/visit-information/mel0070_297x210_accessibility-features_document_online_fa.ashx?la=en">MCEC's Accessibility Doc</a>.
    </p>

    <p>Some of the features available are:</p>
    <ul>
      <li>Close proximity to public transport</li>
      <li>Well signed entry points to venue</li>
      <li>Drop off points for cars and taxis</li>
      <li>Onsite parking available at a cost</li>
      <li>Automated outer doors</li>
      <li>Good surface conditions</li>
      <li>Individual, accessible toilet facilities as well as ambulant facilities within general toilet facilities</li>
      <li>Accessible lifts for wheelchairs, the visually impaired and those who are hard of hearing</li>
      <li>Good air circulation throughout the venue</li>
      <li>Good acoustics and/or hearing augmentation system (hearing loop)</li>
      <li>Evacuation procedures in place taking into account people with a disability</li>
    </ul>

    <h2>Parents' Facilities</h2>

    <p>
      Children are most welcome at the event. We will be providing onsite childcare free of charge which requires prior reservation
      or you are welcome to take your little ones with you throughout the day.
      MCEC has a dedicated Parents’ Room close to the conference festivities.
      All DDD staff on the day will have Working With Children checks.
    </p>

    <h2>Wheelchair Accessibility</h2>
    <p>Some of things we aim to provide are:</p>
    <ul>
      <li>Food service that makes it easy for people with vision or mobility impairment to get food.</li>
      <li>Wheelchair accessible stage.</li>
    </ul>

    <h2>Hearing Loop</h2>
    <p>
      We have Hearing Loop facilities and headphones available for those without hearing aids that require additional aid.
      Please mark if you require this on your ticket registration, so we can prepare and arrange this in advance.
      If you find yourself in need on the day, please speak to one of our clearly marked organisers who will be able to help you.
    </p>

    <h2>Flashing Lights, strobes, and other special effects</h2>
    <p>
      There will be some visual effects throughout the day, most prominently in speaker presentations.
      We’ll check slide decks beforehand, and we use our “What to Expect” slide to flag anything that you might
      need to know about, prior to each talk.
    </p>

    <h2>What to Expect Slide</h2>
    <p>
      Each talk will have a slide at the beginning of what to expect. This can include trigger warnings about
      potentially distressing content, audio and visual warnings and any other information as required.
    </p>

    <h2>Chill out areas</h2>
    <p>
      Conferences and events can be overwhelming at times and we get that you may need some down time.
      There are many quiet seating areas distributed around the convention centre and outside or may we suggest a relaxing stroll along the Yarra.
    </p>

    <h2>Green Room</h2>
    <p>
      Speakers will be provided with a dedicated room to prepare before speaking…or work on those last minute slides :)
    </p>

    <h2>Prayer Rooms</h2>
    <p>
      Male and female prayer rooms are located in Melbourne Convention Centre. Contact one of the team for directions.
    </p>

    <h2>Staffed Registration and Information Table</h2>
    <p>
      The registration desk will remain open throughout the day. This is the best point of contact for speaking with a staff member
      who can help you with questions, resolve problems, and take feedback. This is the best place to report a Code of Conduct violation on the day,
      as it can be immediately escalated to the designated code of conduct staff member.
    </p>

    <h2>Staffed Registration and Information Table</h2>
    <p>
      The registration desk will remain open throughout the day. This is the best point of contact for speaking with a staff member
      who can help you with questions, resolve problems, and take feedback. This is the best place to report a Code of Conduct violation on the day,
      as it can be immediately escalated to the designated code of conduct staff member.
</p>

    <h4>Important emergency numbers</h4>

    <p>In the event of an emergency, dial 000 and follow instruction from the phone operator.</p>
    <ul>
      <li>
        <strong>Police:</strong>{' '}
        <a href={props.pageMetadata.conference.ImportantContacts.Police.MapUrl}>
          {props.pageMetadata.conference.ImportantContacts.Police.Details}
        </a>
      </li>
      <li>
        <strong>Centre Against Sexual Assault 24 hour line:</strong>{' '}
        {props.pageMetadata.conference.ImportantContacts.CentreAgainstSexualAssault.Details}
      </li>
      <li>
        <strong>Emergency Medical:</strong>{' '}
        <a href={props.pageMetadata.conference.ImportantContacts.EmergencyMedical.MapUrl}>
          {props.pageMetadata.conference.ImportantContacts.EmergencyMedical.Details}
        </a>
      </li>
      <li>
        <strong>Non Emergency Medical:</strong>{' '}
        <a href={props.pageMetadata.conference.ImportantContacts.NonEmergencyMedical.MapUrl}>
          {props.pageMetadata.conference.ImportantContacts.NonEmergencyMedical.Details}
        </a>
      </li>
    </ul>

    <h2>Reserved Seating</h2>
    <p>
      If you would like to reserve seating to ensure that your needs are met with sounds, audio, accessibility,
      please email diversity@dddmelbourne.com. If you see a reserved seating sign, please leave that seat available unless it is for you.
      If you are having trouble yourself, please see one of the staff who will find you an appropriate seat.
    </p>

    <h2>Staff Briefing</h2>
    <p>
      All of the {props.pageMetadata.conference.Name} volunteer staff have a commitment to making the event awesome and to make a welcoming and inclusive event.
      All staff will be briefed prior to the event in how to handle different situations, including code of conduct violations,
      being familiar with the events time table, access areas, and emergency procedures.
    </p>

    <p>
      Please contact us prior to the event if you have any specific requirements. We will try very hard to accommodate requests,
      but may require extra time and planning, so please get in touch as early as possible at
      <a
        className="maillink"
        href={`mailto:${props.pageMetadata.conference.Socials.Email}?subject=Accessibility%20oRequirements`}
      >
        {props.pageMetadata.conference.Socials.Email}
      </a>
    </p>

  </Page>
))
