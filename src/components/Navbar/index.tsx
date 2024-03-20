import { Container, Stack, Typography } from "@mui/material";
import logo from "../../assets/images/Logo.png";
import search from "../../assets/images/search.png";
import profile from "../../assets/images/profile.png";
import cart from "../../assets/images/cart.png";
import { Menu } from "@mui/icons-material";

const Navbar = () => {
	const navLinks = [
		{ title: "Home", path: "/", active: true },
		{ title: "Products", path: "/", active: false },
		{ title: "About", path: "/", active: false },
		{ title: "Blog", path: "/", active: false },
		{ title: "Contact", path: "/", active: false },
	];
	return (
		<Stack
			alignItems={"center"}
			justifyContent={"center"}
			sx={{ width: 1, height: 60, backgroundColor: "#fff" }}
		>
			<Container
				maxWidth="lg"
				sx={{ padding: { lg: "0px !important" } }}
			>
				<Stack
					direction="row"
					alignItems="center"
					justifyContent="space-between"
				>
					<img
						src={logo}
						alt="logo"
					/>
					<Stack
						direction={"row"}
						alignItems="center"
						spacing={4}
						sx={{ display: { md: "flex", xs: "none" } }}
					>
						{navLinks.map((link, index: number) => {
							return (
								<Typography
									key={index}
									sx={{
										textTransform: "uppercase",
										cursor: "pointer",
										fontWeight: 400,
										fontSize: 15,
										color: link.active ? "primary.main" : "secondary.main",
										zIndex: 10,
									}}
								>
									{link.title}
								</Typography>
							);
						})}
					</Stack>
					<Stack
						direction="row"
						alignItems={"center"}
						spacing={2}
						sx={{ display: { md: "flex", xs: "none" } }}
					>
						<img
							src={search}
							alt="search"
							style={{ cursor: "pointer", zIndex: 10 }}
						/>
						<img
							src={profile}
							alt="profile"
							style={{ cursor: "pointer", zIndex: 10 }}
						/>
						<img
							src={cart}
							alt="cart"
							style={{ cursor: "pointer", zIndex: 10 }}
						/>
					</Stack>
					<Menu
						color="secondary"
						sx={{ display: { md: "none", xs: "flex" }, cursor: "pointer", fontSize: 30 }}
					/>
				</Stack>
			</Container>
		</Stack>
	);
};

export default Navbar;
