import { createMuiTheme, Theme } from "@material-ui/core"

const palette = {
    primary: { main: "#b39ddb", contrastText: "#ffffff" },
    secondary: { main: "#26a69a", contrastText: "#000000" },
}

const DARK = createMuiTheme({
    palette: {
        type: "dark",
        ...palette,
    },
    overrides: {},
})

const LIGHT = createMuiTheme({
    palette: {
        type: "light",
        ...palette,
    },
})

export const theme: { theme: { LIGHT: Theme; DARK: Theme } } = {
    theme: { LIGHT, DARK },
}
