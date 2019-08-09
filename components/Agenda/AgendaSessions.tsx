import React, { Fragment } from 'react'
import { useAgendaContext } from './AgendaContext'
import {
  StyledAgendaButton,
  StyledAgendaPresenter,
  StyledAgendaTitle,
  StyledRoom,
  StyledSection,
  StyledSponsor,
} from './AgendaSession.styled'

interface AgendaSessionsProps {
  sessionIds?: string[]
  children?: React.ReactNode
  room?: string
  alwaysShowRoom?: boolean
  sponsorId?: string
  fullWidth?: boolean
  isKeynote?: boolean
  renderTitle?: (title: string) => React.ReactNode
  renderPresenters?: (presenters: string) => React.ReactNode
}

export const AgendaSessions: React.FC<AgendaSessionsProps> = ({
  sessionIds,
  children,
  room,
  alwaysShowRoom,
  sponsorId,
  fullWidth,
  isKeynote,
  renderTitle,
  renderPresenters,
}) => {
  return (
    <StyledSection fullWidth={fullWidth} session={typeof sessionIds !== 'undefined'}>
      {sessionIds.map(sessionId => {
        const { onSelect, getSession, getSponsor, getRoom } = useAgendaContext()
        const session = sessionId ? getSession(sessionId) : false
        const sponsor = sponsorId ? getSponsor(sponsorId) : undefined
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
                {typeof room !== 'undefined' && <StyledRoom showOnMobile={!alwaysShowRoom}>{getRoom(room)}</StyledRoom>}
              </StyledAgendaButton>
            )}
            {children && (
              <Fragment>
                {children}
                {typeof room !== 'undefined' && (
                  <StyledRoom showOnMobile={session !== false && !alwaysShowRoom}>{getRoom(room)}</StyledRoom>
                )}
              </Fragment>
            )}
          </div>
        )
      })}
    </StyledSection>
  )
}

AgendaSessions.displayName = 'AgendaSessions'
