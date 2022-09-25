import ReactGA from 'react-ga4'
import isDevEnvironment from './isDevEnvironment'

const initializeAnalytics = () => {
  if (typeof window !== 'object') return
  if (!window.gaInitialized && window.ENV.GOOGLE_ANALYTICS_ID) {
    window.gaInitialized = true
    ReactGA.initialize(window.ENV.GOOGLE_ANALYTICS_ID)
  }
}

const isDebugMode = () => {
  return (
    isDevEnvironment() || window.location.search.includes('analytics_debug')
  )
}

const debugEvent = (data: any) => {
  initializeAnalytics()
  if (isDebugMode()) {
    const title = (data.action ?? data.type).toUpperCase()
    console.groupCollapsed(
      '%c %s: ',
      'color: #43B02A; font-style: italic; font-weight: normal',
      `📊  ${title}  📊`
    )
    for (const [key, value] of Object.entries(data)) {
      console.log(
        `%c ${key}: %c'${value}'`,
        'color:black;font-weight:bolder;',
        'color:#2E8B57;font-weight:bolder;'
      )
    }
    console.groupEnd()
  }
}

export const pageView = () => {
  const url = window.location.pathname + window.location.search
  debugEvent({ type: 'pageView', url })
  ReactGA.send({ hitType: 'pageview', page: url })
}

export const trackLinkClick = (url: string) => {
  trackEvent({ category: 'Link', action: 'Click', label: url })
}

interface EventObject {
  category: string
  action: string
  label?: string
  value?: number
}

const trackEvent = (data: EventObject) => {
  debugEvent({ type: 'event', ...data })
  ReactGA.event(data)
}
// EXAMPLE EVENTS:
// ReactGA.event({
//   category: 'User',
//   action: 'Created an Account'
// });

// ReactGA.event({
//   category: 'Social',
//   action: 'Rated an App',
//   value: 3
// });

// ReactGA.event({
//   category: 'Editing',
//   action: 'Deleted Component',
//   label: 'Game Widget'
// });

// ReactGA.event({
//   category: 'Promotion',
//   action: 'Displayed Promotional Widget',
//   label: 'Homepage Thing',
//   nonInteraction: true
// });
