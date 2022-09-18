import { extendTheme, theme as defaultTheme } from "@chakra-ui/react"

const theme = extendTheme({
    ...defaultTheme,
    colors:{
        ...defaultTheme.colors,
    },
    fonts:{
        heading: "'Pacifico', sans-serif;",
        body: "'Pacifico', sans-serif;",
    },
})

export default theme
