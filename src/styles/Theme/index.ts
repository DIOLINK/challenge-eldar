import { alpha, createTheme, responsiveFontSizes } from '@mui/material'

import { COLORS, COLORS_BRIGHT } from '../Colors'
import { alegreya, lato } from '../Fonts'

const ICON_SIZE = '2rem'
export const MIN_WIDTH = 320

export const SHADOWS = {
  boxShadow1: `-2px -2px 5px ${COLORS.cadet_blue}`,
  boxShadow2: `2px 2px 5px ${COLORS.jet_stream}`,
  boxShadow3: `0px 4px 1px 1px ${COLORS.cadet_blue}`,
  dropShadow1: `3px 8px 3px ${COLORS.eerie_black}`,
  textShadow1: `0px 2px 0px ${COLORS.eerie_black}`,
  textShadow2: `2px 4px 5px ${COLORS_BRIGHT.purple_heart}`,
  textShadow: `1px 1px 2px ${COLORS_BRIGHT.purple_heart}`,
}
export const BORDERS = {
  boderdImg: `4px solid ${alpha(COLORS.eerie_black, 0.3)}`,
  boderdIcon: `3px solid ${alpha(COLORS.eerie_black, 0.3)}`,
}

export const bright_linear_gradient = `0deg, ${COLORS_BRIGHT.electric_purple}, ${COLORS_BRIGHT.fuchsia}, ${COLORS_BRIGHT.purple_heart}, ${COLORS_BRIGHT.violet}`

export const bright_linear_gradient2 = `90deg, ${COLORS_BRIGHT.fuchsia}, ${COLORS_BRIGHT.vivid_sky_blue}`
export const color_linear_gradient = `45deg, ${COLORS.stratos}, ${COLORS.cadet_blue}`
export const bright_linear_gradient3 = `90deg, ${alpha(
  COLORS_BRIGHT.fuchsia,
  0.3
)}, ${alpha(COLORS_BRIGHT.vivid_sky_blue, 0.3)}`
export const boxShadows = `-10px 0 20px -5px ${COLORS_BRIGHT.fuchsia_70},-10px 0 20px -5px ${COLORS_BRIGHT.fuchsia_50},-10px 0 20px -5px ${COLORS_BRIGHT.fuchsia_30},-10px 0 20px -5px ${COLORS_BRIGHT.fuchsia_10},10px 0 20px -5px ${COLORS_BRIGHT.vivid_sky_blue_70},10px 0 20px -5px ${COLORS_BRIGHT.vivid_sky_blue_50},10px 0 20px -5px ${COLORS_BRIGHT.vivid_sky_blue_30},10px 0 20px -5px ${COLORS_BRIGHT.vivid_sky_blue_10}`
export const shadows = {
  boxShadow1: `-2px -2px 5px ${COLORS.coral_orange}`,
  boxShadow2: `2px 2px 5px ${COLORS.light_orange}`,
}

let theme = createTheme()
theme = createTheme({
  palette: {
    background: { default: COLORS.silver },
    primary: {
      main: COLORS.independence,
      contrastText: COLORS.jet_stream,
    },
    secondary: {
      main: COLORS.jet_stream,
      contrastText: COLORS.jet_stream,
    },
  },
  typography: {
    fontFamily: [lato.style.fontFamily, alegreya.style.fontFamily].join(','),
  },
  breakpoints: {
    values: {
      xs: 333,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        color: COLORS.dark_green,
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: COLORS.coral_orange,
          boxShadow: theme.shadows[5],
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: 30,
        },
        secondary: {
          fontSize: 20,
          color: COLORS.dark_green,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          padding: '4px 32px',
        },
        textPrimary: {
          padding: '2px 0px',
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        input: {
          display: 'block !important',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
        },
        body: {
          padding: '0 !important',
          margin: '0 !important',
          overflow: 'unset !important',
        },
        section: {
          marginBottom: 33,
        },
        '@-moz-document url-prefix()': {
          html: {
            overflowY: 'auto',
            scrollbarColor: `${COLORS.cadet_blue} ${COLORS.silver}`,
            scrollbarWidth: 'thin',
          },
        },
        '*::-webkit-scrollbar': {
          width: '0.2rem',
        },
        '*::-webkit-scrollbar-track': {
          boxShadow: `inset ${shadows.boxShadow1}, inset ${shadows.boxShadow2}`,
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: COLORS.silver,
          borderRadius: 25,
        },
      },
    },
  },
})
export default theme = responsiveFontSizes(theme)
