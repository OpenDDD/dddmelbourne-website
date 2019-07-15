import React, { Fragment } from 'react'
import { Session, Sponsor } from '../../config/types'
import { onSelectCallback } from './Agenda'
import {
  StyledAgendaButton,
  StyledAgendaPresenter,
  StyledAgendaTitle,
  StyledRoom,
  StyledSection,
  StyledSponsor,
} from './AgendaSession.styled'

interface AgendaSessionsProps {
  sessions?: Session[]
  children?: React.ReactNode
  room?: string
  sponsor?: Sponsor
  fullWidth?: boolean
  isKeynote?: boolean
  onSelect?: onSelectCallback
  renderTitle?: (title: string) => React.ReactNode
  renderPresenters?: (presenters: string) => React.ReactNode
}

export const AgendaSessions: React.FC<AgendaSessionsProps> = ({
  sessions,
  children,
  room,
  sponsor,
  fullWidth,
  isKeynote,
  onSelect,
  renderTitle,
  renderPresenters,
}) => {
  return (
    <StyledSection fullWidth={fullWidth} session={typeof sessions !== 'undefined'}>
      {sessions.map(session => {
        const presenters = session ? session.Presenters.map(p => p.Name).join(', ') : ''
        return (
          <div>
            {session && (
              <StyledAgendaButton type="button" isKeynote={isKeynote} onClick={() => onSelect(session, sponsor)}>
                {renderPresenters ? (
                  renderPresenters(presenters)
                ) : (
                  <StyledAgendaPresenter isKeynote={isKeynote}>{presenters}</StyledAgendaPresenter>
                )}
                {renderTitle ? (
                  renderTitle(session.Title)
                ) : (
                  <StyledAgendaTitle isKeynote={isKeynote}>{session.Title}</StyledAgendaTitle>
                )}
                {sponsor && <StyledSponsor>Sponsored by: {sponsor.shortName || sponsor.name}</StyledSponsor>}
                {room && <StyledRoom showOnMobile={typeof session !== 'undefined' && !isKeynote}>{room}</StyledRoom>}
              </StyledAgendaButton>
            )}
            {children && (
              <Fragment>
                {children}
                {room && <StyledRoom showOnMobile={typeof session !== 'undefined' && !isKeynote}>{room}</StyledRoom>}
              </Fragment>
            )}
          </div>
        )
      })}
    </StyledSection>
  )
}

AgendaSessions.displayName = 'AgendaSessions'
