export default () => {
  if (typeof window !== 'object') return false
  return window.ENV.environment === 'development'
}
