import React from "react";
import Hero from "./components/Home/Hero";
import AboutPreview from "./components/Home/AboutPreview";
import CoveredFields from "./components/Home/CoveredFields";
import Reviews from "./components/Home/Reviews";
import WhyChooseKasa from "./components/Home/WhyChooseUs";
import HowItWorks from "./components/Home/HowItWorks";
import WhyKasa from "./components/Home/whyKasa";
import Steps from "./components/Home/Steps";
// import BrandsWeUse from "./components/Home/BrandsWeUse";
import InteriorSolutions from "./components/Home/InteriorSolutions";
// import FeaturedProjects from "./components/project/FeaturedProjects";

function page() {
	return (
		<>
			<Hero />
			<AboutPreview />
			<CoveredFields />
			<HowItWorks />
			<WhyChooseKasa />
			<Reviews />

			<Steps />
			<InteriorSolutions />
			<WhyKasa />
			{/* <FeaturedProjects /> */}
			{/* <BrandsWeUse /> */}
		</>
	);
}

export default page;
