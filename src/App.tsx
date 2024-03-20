import Banner from "./components/Banner";
import CommentsSlider from "./components/CommentsSlider";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Instagram from "./components/Instagram";
import LatestPosts from "./components/LatestPosts";
import Navbar from "./components/Navbar";
import ProductSlider from "./components/ProductSlider";
import Subscribe from "./components/Subscribe";
import { BlogPosts, comments, instaPosts, iphones, smartWatches } from "./data";

function App() {
	return (
		<>
			<Navbar />
			<Header />
			<Features />
			<ProductSlider
				title="mobile & tablets"
				data={iphones}
				delay={7000}
			/>
			<ProductSlider
				title="smart watches"
				data={smartWatches}
				delay={5000}
			/>
			<Banner />
			<LatestPosts
				title="latest posts"
				posts={BlogPosts}
			/>
			<CommentsSlider
				comments={comments}
				delay={5000}
			/>
			<Subscribe />
			<Instagram images={instaPosts} />
			<Footer />
		</>
	);
}

export default App;
