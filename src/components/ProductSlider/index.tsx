import { Box, Container, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type dataT = {
	image: string;
	title: string;
	price: string;
	link: string;
};

interface Props {
	title: string;
	data: dataT[];
	delay: number;
}

const ProductSlider = ({ title, delay, data }: Props) => {
	return (
		<Container
			maxWidth="lg"
			sx={{ padding: { lg: "0px !important" }, margin: "100px auto 50px auto" }}
		>
			<Stack
				direction="column"
				spacing={3}
				sx={{ width: 1 }}
			>
				<Stack
					direction="row"
					alignItems={"center"}
					justifyContent={"space-between"}
					sx={{ width: 1 }}
				>
					<Typography sx={{ textTransform: "uppercase", fontSize: 17, fontWeight: 400 }}>
						{title}
					</Typography>
					<Stack
						direction="column"
						spacing={0}
						sx={{ cursor: "pointer" }}
					>
						<Typography
							color="secondary.main"
							sx={{ fontSize: 13.5, fontWeight: 400, textTransform: "uppercase" }}
						>
							view all products
						</Typography>
						<Box sx={{ width: 1, height: 1, backgroundColor: "#E1E1E1" }} />
					</Stack>
				</Stack>
				<Swiper
					spaceBetween={20}
					slidesPerView={1}
					style={{ width: "100%" }}
					autoplay={{ delay: delay, disableOnInteraction: false }}
					breakpoints={{
						640: {
							slidesPerView: 4,
							spaceBetween: 20,
						},
					}}
				>
					{data.map((item: dataT, index: number) => {
						return (
							<SwiperSlide key={index}>
								<Stack
									direction={"column"}
									spacing={1}
									sx={{ cursor: "pointer" }}
								>
									<img
										src={item.image}
										alt={item.title}
										style={{ width: "100%" }}
									/>
									<Stack
										direction="row"
										alignItems="center"
										justifyContent={"space-between"}
									>
										<Typography
											color="secondary.main"
											sx={{ fontSize: 18, fontWeight: 400, textTransform: "uppercase" }}
										>
											{item.title}
										</Typography>
										<Typography
											color="primary.main"
											sx={{ fontSize: 17, fontWeight: 400 }}
										>
											{item.price}
										</Typography>
									</Stack>
								</Stack>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</Stack>
		</Container>
	);
};

export default ProductSlider;
