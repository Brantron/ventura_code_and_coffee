import ReactGA from 'react-ga'
import isDevEnvironment from './isDevEnvironment'
ReactGA.initialize('G-3VCYJ1C1LT')

const debugEvent = (data: any) => {
  if (typeof window !== 'object') return
  if (
    isDevEnvironment() ||
    window.location.search.includes('analytics_debug')
  ) {
    console.log('🧙‍♂️🧙‍♂️🧙‍♂️  ANALYTICS  🧙‍♂️🧙‍♂️🧙‍♂️')
    console.table(data)
  }
}

export const pageView = () => {
  const url = window.location.pathname + window.location.search
  debugEvent({ type: 'pageView', url })
  ReactGA.pageview(url)
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
