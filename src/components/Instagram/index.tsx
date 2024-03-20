import { Box, Container, Stack, Typography } from "@mui/material";

type ImageT = {
	link: string;
	src: string;
	alt: string;
};

interface Props {
	images: ImageT[];
}

const Instagram = ({ images }: Props) => {
	return (
		<Container
			maxWidth="lg"
			sx={{
				padding: { lg: "0px" },
				margin: "80px auto 50px auto",
				display: "grid",
				placeItems: "center",
			}}
		>
			<Stack
				direction="column"
				alignItems="center"
				justifyContent={"center"}
				spacing={3}
				sx={{ width: 1 }}
			>
				<Typography
					sx={{ textTransform: "uppercase", fontSize: 27, fontWeight: 400, color: "#272727" }}
				>
					Visit Our Instagram
				</Typography>
				<Stack
					direction={{ md: "row", xs: "column" }}
					alignItems="center"
					justifyContent="space-between"
					spacing={2}
					sx={{ width: 1, boxSizing: "border-box" }}
				>
					{images.map((image: ImageT, index: number) => {
						return (
							<Box
								key={index}
								sx={{ width: { md: 1, xs: "300px" } }}
							>
								<img
									src={image.src}
									alt={image.alt}
									style={{ width: "100%" }}
								/>
							</Box>
						);
					})}
				</Stack>
			</Stack>
		</Container>
	);
};

export default Instagram;
