import { RemixBrowser } from '@remix-run/react'
import { hydrate } from 'react-dom'
import reportWebVitals from './components/utils/reportWebVitals'
import { sendToVercelAnalytics } from './components/utils/vitals'

hydrate(<RemixBrowser />, document)

reportWebVitals(sendToVercelAnalytics)
