import { createTheme } from "@mui/material";

const lightTheme = createTheme({
	direction: "ltr",
	palette: {
		mode: "light",
		primary: { main: "#72AEC8" },
		secondary: { main: "#272727" },
		background: { default: "#edf1f3" },
	},
	typography: {
		fontFamily: [`Jost`, `sans-serif`].join(","),
	},
});

export default lightTheme;
