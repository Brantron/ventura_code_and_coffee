import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'
// TODO batch these metrics [https://github.com/GoogleChrome/web-vitals#batch-multiple-reports-together]

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    getCLS(onPerfEntry)
    getFID(onPerfEntry)
    getFCP(onPerfEntry)
    getLCP(onPerfEntry)
    getTTFB(onPerfEntry)
  }
}

export default reportWebVitals
