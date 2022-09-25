import { RemixBrowser } from '@remix-run/react'
import { hydrate } from 'react-dom'
import reportWebVitals from './utils/reportWebVitals'
import { sendToVercelAnalytics } from './utils/vitals'

hydrate(<RemixBrowser />, document)

reportWebVitals(sendToVercelAnalytics)
