import { Container, Stack, TextField, Typography } from "@mui/material";
import ActionButton from "../ActionButton";

const Subscribe = () => {
	return (
		<Container
			maxWidth="lg"
			sx={{
				boxSizing: "border-box",
				padding: { lg: "0px !important" },
				margin: "80px auto 50px auto",
				display: "grid",
				placeItems: "center",
			}}
		>
			<Stack
				direction={{ lg: "row", xs: "column" }}
				alignItems="center"
				justifyContent={"space-between"}
				spacing={4}
				sx={{
					width: 1,
					boxSizing: "border-box",
					backgroundColor: "#272727",
					padding: { lg: "80px", xs: "30px 20px" },
				}}
			>
				<Stack
					direction="column"
					spacing={0.5}
				>
					<Typography sx={{ color: "#fff", fontSize: 30, fontWeight: 400 }}>
						Subscribe Us Now
					</Typography>
					<Typography sx={{ color: "#fff", fontSize: 16, fontWeight: 300 }}>
						Get latest news, updates and deals directly mailed to your inbox.
					</Typography>
				</Stack>
				<Stack
					direction={"row"}
					alignItems="center"
				>
					<TextField
						placeholder="Your Email address"
						sx={{
							backgroundColor: "#fff",
							color: "#3A3A3A",
							width: { lg: 400, xs: 150 },
							height: 53,
							borderRadius: "0px !important",
						}}
					/>
					<ActionButton
						content="subscribe"
						type="primary"
						width="160px"
						noRadius
					/>
				</Stack>
			</Stack>
		</Container>
	);
};

export default Subscribe;
