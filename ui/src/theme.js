import {createMuiTheme} from "@material-ui/core/styles";

const defaultTheme = createMuiTheme();

export default createMuiTheme({
    /*    palette: {
            text: {
                primary: 'red',
                secondary: 'blue'
            }
        },*/

    overrides: {
        MuiBadge: {
            badge: {
                right: 2,
                // The border color match the background color.
                border: `2px solid ${defaultTheme.palette.type === 'light' ? defaultTheme.palette.grey[200] : defaultTheme.palette.grey[900]}`,
            },
        },
        MuiDivider: {
            root: {
                marginTop: '2%',
                marginBottom: '3%'
            }
        },
        MuiSnackbarContent: {
            root: {
                backgroundColor: `${defaultTheme.palette.type === 'light' ? defaultTheme.palette.grey[200] : defaultTheme.palette.grey[900]}`,
                color: `${defaultTheme.palette.text.primary}`,
                margin: '2%',
                paddingLeft: "0"
            },
            action: {
                marginTop: '-40%',
                marginRight: '-8%'
            }
        },
        MuiIconButton: {
            root: {
                "&:hover": {
                    backgroundColor: "transparent"
                }
            }
        },
        MuiTypography: {
            body2: {
                fontSize: '11px'
            }
        }
    }
});
