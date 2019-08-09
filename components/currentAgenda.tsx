import { Moment } from 'moment'
import React, { Fragment } from 'react'
import Conference from '../config/conference'
import { Session, Sponsor } from '../config/types'
import ActionButton from './actionButton'
import { Agenda } from './Agenda/Agenda'
import {
  StyledAddress,
  StyledAgendaRow,
  StyledAgendaRowList,
  StyledFeedbackActions,
  StyledTrackHeader,
  StyledUpNext,
} from './Agenda/Agenda.styled'
import { AgendaProvider } from './Agenda/AgendaContext'
import { AgendaSession } from './Agenda/AgendaSession'
import { StyledAgendaPresenter } from './Agenda/AgendaSession.styled'
import { AgendaSessions } from './Agenda/AgendaSessions'
import { AgendaTime } from './Agenda/AgendaTime'
import { theme } from './utils/styles/theme'

interface CurrentAgendaProps {
  date: Moment
  sessions?: Session[]
  sessionsUrl: string
  sponsors: Sponsor[]
  acceptingFeedback: boolean
  feedbackLink?: string
  selectedSessionId?: string
}

export const CurrentAgenda: React.FC<CurrentAgendaProps> = ({
  date,
  sessions = [],
  sessionsUrl,
  sponsors,
  acceptingFeedback,
  feedbackLink,
  selectedSessionId,
}) => {
  const secondaryTheme = {
    backgroundColor: theme.colors.secondary,
  }
  const blueTheme = {
    backgroundColor: theme.colors.blueRoom,
  }
  const greenTheme = {
    backgroundColor: theme.colors.greenRoom,
  }
  const redTheme = {
    backgroundColor: theme.colors.redRoom,
  }
  const orangeTheme = {
    backgroundColor: theme.colors.orangeRoom,
  }
  const prupleTheme = {
    backgroundColor: theme.colors.purpleRoom,
  }
  return (
    <Fragment>
      <p>Tap on a session to see more details&hellip;</p>
      {acceptingFeedback && (
        <StyledFeedbackActions>
          <ActionButton
            action={{ Title: 'Conference Feedback', Url: Conference.ConferenceFeedbackLink, Category: 'conference' }}
          />
          <ActionButton
            action={{ Title: 'Session feedback', Url: Conference.SessionFeedbackLink, Category: 'conference' }}
          />
        </StyledFeedbackActions>
      )}
      <Agenda
        sessions={sessions}
        sessionsUrl={sessionsUrl}
        acceptingFeedback={acceptingFeedback}
        feedbackLink={feedbackLink}
        selectedSessionId={selectedSessionId}
        render={(agendaSessions, nextSessionGroup, onSelect) => {
          return (
            <AgendaProvider
              onSelect={onSelect}
              sessions={agendaSessions}
              sponsors={sponsors}
              rooms={Conference.RoomNames}
            >
              {Conference.ShowNextSessions && nextSessionGroup && nextSessionGroup.sessions.length > 0 && (
                <StyledUpNext>
                  <h2>Up next</h2>
                  <StyledAgendaRow>
                    <AgendaTime time={nextSessionGroup.timeStart.clone()} />
                    {nextSessionGroup.sessions.map((session, index) => (
                      <AgendaSession
                        key={session.Id}
                        sessionId={session.Id}
                        fullWidth={nextSessionGroup.sessions.length === 1}
                        room={index}
                        alwaysShowRoom={true}
                      />
                    ))}
                  </StyledAgendaRow>
                </StyledUpNext>
              )}
              <StyledAgendaRowList>
                <li style={secondaryTheme}>Time</li>
                <li style={blueTheme}>Goldfields Theatre</li>
                <li style={greenTheme}>Eureka Room 1</li>
                <li style={redTheme}>Eureka Room 2</li>
                <li style={orangeTheme}>Eureka Room 3</li>
                <li style={prupleTheme}>JuniorDev</li>
              </StyledAgendaRowList>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 8, minutes: 0 })} />
                <AgendaSession room="Melbourne Convention Centre - Foyer" fullWidth>
                  <StyledTrackHeader>Registration</StyledTrackHeader>
                  <StyledAddress>
                    Melbourne Convention and Exhibition Centre
                    <br />1 Convention Centre Pl, South Wharf
                  </StyledAddress>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 8, minutes: 45 })} />
                <AgendaSession room="Goldfields Theatre" fullWidth>
                  <StyledTrackHeader>Welcome and housekeeping</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 9, minutes: 0 })} />
                <AgendaSession
                  sessionId="b67e6e68-ea07-4bf2-b8d6-deb77c7bb9db"
                  room="Goldfields Theatre"
                  renderPresenters={presenters => (
                    <StyledAgendaPresenter isKeynote>Keynote: {presenters}</StyledAgendaPresenter>
                  )}
                  fullWidth
                  isKeynote
                  alwaysShowRoom
                />
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 9, minute: 45 })} />
                <AgendaSession fullWidth>
                  <StyledTrackHeader>Morning tea</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>

              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 10, minutes: 15 })} />
                <AgendaSession room="Goldfields Theatre" sessionId="44f3ab17-52bf-43df-915d-a9f1cd2decf5" />
                <AgendaSession room="Eureka Room 1" sessionId="1ad725d0-da57-484c-b363-cb8fbcc1bb3b" />
                <AgendaSession room="Eureka Room 2" sessionId="80081d86-2371-4c03-9dbf-78874d311cac" />
                <AgendaSession room="Eureka Room 3" sessionId="876f300e-c8a1-488f-9d67-b94655c61e67" />
                <AgendaSession room="JuniorDev" sessionId="61ec6c7b-65bf-47f4-980a-a5043bb1f658" />
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 11, minutes: 0 })} />
                <AgendaSession fullWidth>
                  <StyledTrackHeader>Changeover</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 11, minute: 15 })} />
                <AgendaSession room="Goldfields Theatre" sessionId="80f58dce-fff6-4c9d-9e5f-536ecac3cf78" />
                <AgendaSession room="Eureka Room 1" sessionId="1eff322d-e7f7-4d47-a474-738025ed068f" />
                <AgendaSession room="Eureka Room 2" sessionId="431b57f6-be91-4b56-a4e3-cf0df13a61ec" />
                <AgendaSession room="Eureka Room 3" sessionId="531eb2c2-e4b2-43c8-868f-e2b31a138970" />
                <AgendaSession room="JuniorDev" sessionId="1ab27723-dac5-4bea-a66a-3c3ef81836eb" />
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 12, minute: 0 })} />
                <AgendaSession fullWidth>
                  <StyledTrackHeader>Changeover</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 12, minute: 15 })} />
                <AgendaSession room="Goldfields Theatre" sessionId="aeb1a7d8-8f0d-476a-8b04-dcc0ac85583d" />
                <AgendaSession room="Eureka Room 1" sessionId="6738e367-d528-469f-8706-5693321ffee9" />
                <AgendaSession room="Eureka Room 2" sessionId="a712613f-826b-475c-9ba5-8a299b482e38" />
                <AgendaSession room="Eureka Room 3" sessionId="ec2e9258-5779-4a9b-931f-3ca43cebd182" />
                <AgendaSession room="JuniorDev" sessionId="2633de08-2d54-49ca-ad8a-6c1868627d92" />
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 12, minute: 35 })} />
                <AgendaSession fullWidth>
                  <StyledTrackHeader>Lunch</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 13, minute: 35 })} />
                <AgendaSession room="Goldfields Theatre" sessionId="9c0d43ec-25b4-4e38-9d80-1ce5566b4e22" />
                <AgendaSession room="Eureka Room 1" sessionId="e2eeecf8-d878-47af-b676-64c2eeb869ff" />
                <AgendaSession room="Eureka Room 2" sessionId="1372ab63-42fe-4357-8099-05b911a6b895" />
                <AgendaSession room="Eureka Room 3" sessionId="a6902460-f114-4d04-8c42-79051275c032" />
                <AgendaSession room="JuniorDev" sessionId="fb3884d6-0081-4edd-bf2c-8f48e9353964" />
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 14, minute: 20 })} />
                <AgendaSession fullWidth>
                  <StyledTrackHeader>Changeover</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 14, minute: 35 })} />
                <AgendaSession room="Goldfields Theatre" sessionId="5a8030cd-0a3d-48f5-8106-d61012032a27" />
                <AgendaSession room="Eureka Room 1" sessionId="1ff00730-7315-46ab-8894-202d32161a8b" />
                <AgendaSession room="Eureka Room 2" sessionId="9cd0d9fd-98d3-46a9-8803-05da7b163bfb" />
                <AgendaSession room="Eureka Room 3" sessionId="8e6dea80-4928-49a9-8a30-490f2e82fd0d" />
                <AgendaSession room="JuniorDev" sessionId="208b50ae-b13d-4041-95a4-1d11a3e9cbf7" />
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 14, minute: 55 })} />
                <AgendaSession fullWidth>
                  <StyledTrackHeader>Afternoon Tea</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 15, minute: 25 })} />
                <AgendaSession room="Goldfields Theatre" sessionId="ae3a2ce9-c0a2-451c-a4b6-246fe9eb711a" />
                <AgendaSession room="Eureka Room 1" sessionId="ca70ba13-26c4-4583-a6fe-1710a5a30362" />
                <AgendaSession room="Eureka Room 2" sessionId="510bdecd-c23b-43d6-944b-86423b0b10f0" />
                <AgendaSession room="Eureka Room 3" sessionId="c212d5d9-76a5-44ab-b73a-ffcba4d2d26a" />
                <AgendaSessions
                  room="JuniorDev"
                  sessionIds={['ca4fae67-13b2-42ea-a4b7-b5e00bf442ea', '3d89ac57-d69c-4a00-bb9b-0f31d7bd0002']}
                />
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 16, minute: 10 })} />
                <AgendaSession fullWidth>
                  <StyledTrackHeader>Changeover</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 16, minute: 25 })} />
                <AgendaSession room="Goldfields Theatre" sessionId="619a1e2b-26d0-4af3-8c96-ed6de432402c" />
                <AgendaSession room="Eureka Room 1" sessionId="8737fcc4-eb38-4871-b81e-6e3812218c42" />
                <AgendaSession room="Eureka Room 2" sessionId="207baae6-4ff5-49db-80ad-9527c57b88f6" />
                <AgendaSession room="Eureka Room 3" sessionId="ca8dce34-a2da-4379-ad62-ee67642ee602" />
                <AgendaSessions
                  room="JuniorDev"
                  sessionIds={['18a87e6e-23ba-4c9f-a939-0ef92bc03e04', '712a9de9-e4eb-4570-96d6-47c906e69ccb']}
                />
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 17, minute: 10 })} />
                <AgendaSession fullWidth>
                  <StyledTrackHeader>Changeover</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 17, minute: 15 })} />
                <AgendaSession
                  sessionId="94a556e1-398d-4988-888e-bb2538ba90a7"
                  room="Goldfields Theatre"
                  fullWidth
                  alwaysShowRoom
                  isKeynote
                  renderPresenters={presenters => <StyledAgendaPresenter>Locknote: {presenters}</StyledAgendaPresenter>}
                />
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 18, minute: 0 })} />
                <AgendaSession room="Goldfields Theatre" alwaysShowRoom fullWidth>
                  <StyledTrackHeader>Thank yous and wrap up</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 18, minute: 30 })} />
                <AgendaSession sponsorId="github" room="General Assembly" fullWidth alwaysShowRoom>
                  <StyledTrackHeader>Afterparty</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
            </AgendaProvider>
          )
        }}
      />
    </Fragment>
  )
}

CurrentAgenda.displayName = 'CurrentAgenda'
