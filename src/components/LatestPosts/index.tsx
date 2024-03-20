import { Box, Container, Stack, Typography } from "@mui/material";

type postT = {
	image: string;
	title: string;
	date: string;
	link: string;
	category: string;
};

interface ProductSliderProps {
	title: string;
	posts: postT[];
}

const LatestPosts = ({ title, posts }: ProductSliderProps) => {
	return (
		<Container
			maxWidth={"lg"}
			sx={{ padding: { lg: "0px" }, margin: "80px auto 50px auto" }}
		>
			<Stack
				direction="column"
				spacing={3}
				sx={{ width: 1 }}
			>
				<Stack
					direction="row"
					alignItems="center"
					justifyContent="space-between"
					sx={{ width: 1 }}
				>
					<Typography
						sx={{
							textTransform: "uppercase",
							fontSize: 27,
							fontWeight: 400,
						}}
					>
						{title}
					</Typography>
					<Stack
						direction="column"
						spacing={0}
						sx={{ cursor: "pointer" }}
					>
						<Typography
							color="secondary.main"
							sx={{
								fontSize: 13.5,
								fontWeight: 400,
							}}
						>
							READ MORE
						</Typography>
						<Box
							sx={{
								width: 1,
								height: 3,
								backgroundColor: "#E1E1E1",
							}}
						/>
					</Stack>
				</Stack>
				<Stack
					direction={{ lg: "row", xs: "column" }}
					alignItems="center"
					justifyContent="space-between"
					spacing={2}
					sx={{ width: 1 }}
				>
					{posts.map((post: postT, index: number) => {
						return (
							<Stack
								key={index}
								direction="column"
								spacing={1}
								sx={{ cursor: "pointer" }}
							>
								<img
									src={post.image}
									alt={post.title}
									style={{ width: "100%" }}
								/>
								<Typography
									sx={{
										color: "#848484",
										fontWeight: 400,
										fontSize: 13,
										textTransform: "uppercase",
									}}
								>
									{post.date} - {post.category}
								</Typography>
								<Typography
									sx={{
										color: "#272727",
										fontWeight: 400,
										fontSize: 20,
										textTransform: "uppercase",
									}}
								>
									{post.title}
								</Typography>
							</Stack>
						);
					})}
				</Stack>
			</Stack>
		</Container>
	);
};

export default LatestPosts;
