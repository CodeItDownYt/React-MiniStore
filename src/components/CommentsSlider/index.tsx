import { Container, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import comma from "../../assets/images/comma.png";
import stars from "../../assets/images/stars.png";

type CommentT = {
	body: string;
	name: string;
};

interface Props {
	delay: number;
	comments: CommentT[];
}

const CommentsSlider = ({ delay, comments }: Props) => {
	return (
		<Container
			maxWidth="lg"
			sx={{ padding: { lg: "0px !important" }, margin: "100px auto 50px auto" }}
		>
			<Swiper
				spaceBetween={20}
				slidesPerView={1}
				style={{ width: "100%" }}
				autoplay={{ delay: delay, disableOnInteraction: false }}
				breakpoints={{
					640: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
				}}
			>
				{comments.map((comment: CommentT, index: number) => {
					return (
						<SwiperSlide
							key={index}
							style={{ width: "fit-content" }}
						>
							<Stack
								direction="column"
								alignItems="center"
								justifyContent="center"
								spacing={1}
							>
								<img
									src={comma}
									alt="comma"
								/>
								<Typography
									sx={{
										fontWeight: 300,
										fontSize: { lg: 32, xs: 32 },
										color: "#3A3A3A",
										textAlign: "center",
									}}
								>
									{comment.body}
								</Typography>
								<img
									src={stars}
									alt="stars"
								/>
								<Typography
									sx={{
										fontWeight: 500,
										fontSize: 14,
										color: "#272727",
									}}
								>
									{comment.name}
								</Typography>
							</Stack>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</Container>
	);
};

export default CommentsSlider;
