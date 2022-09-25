const withCssDefaults = ({
  classes,
  overrides,
}: {
  classes: string
  overrides: string
}) => {
  const combined = [classes, overrides].filter(Boolean).join(' ')
  const accumulator: { [key: string]: string } = {}

  const bigAcc = Object.values(
    combined.split(' ').reduce((acc, val) => {
      let key = val
      if (!val.includes('font-') && !val.includes('text-')) {
        const lastIndex = val.lastIndexOf('-')

        key = val.slice(0, lastIndex)
      }

      acc[`${key}`] = val
      return acc
    }, accumulator)
  )
  return bigAcc.join(' ')
}

export default withCssDefaults
