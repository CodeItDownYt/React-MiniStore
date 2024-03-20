import { Box, Container, Stack, Typography } from "@mui/material";
import ActionButton from "../ActionButton";
import watch from "../../assets/images/watch.png";

const Header = () => {
	return (
		<Box
			sx={{
				backgroundColor: "background.default",
				width: 1,
				height: "500px",
				display: "flex",
				alignItems: "center",
			}}
		>
			<Container
				maxWidth="lg"
				sx={{ padding: { lg: "0px !important" } }}
			>
				<Stack
					direction="row"
					alignItems="center"
					justifyContent={"space-between"}
				>
					<Stack
						direction="column"
						alignItems={{ md: "start", xs: "center" }}
						spacing={2.5}
						sx={{ textAlign: { md: "unset", xs: "center" } }}
					>
						<Typography
							sx={{
								fontWeight: 300,
								fontSize: { lg: "80px", xs: "70px" },
								color: "secondary.main",
								textTransform: "uppercase",
							}}
						>
							Our Products
							<br /> are great
						</Typography>
						<ActionButton content="Start Shopping" />
					</Stack>
					<Box sx={{ width: 1, display: { md: "contents", xs: "none" } }}>
						<img
							src={watch}
							alt="watch"
							style={{ width: "44.5%", zIndex: 0 }}
						/>
					</Box>
				</Stack>
			</Container>
		</Box>
	);
};

export default Header;
