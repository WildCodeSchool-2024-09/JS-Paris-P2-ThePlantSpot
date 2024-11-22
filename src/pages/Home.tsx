import "./Home.css";
import Quiz from "../components/Quiz";
import PhotoWoman from "../img/illustrations/GreenIllustrated.png";
import GreenOasisPicture from "../img/photo/GreenOasisPicture.jpeg";
import IndoorPlantsPicture from "../img/photo/IndoorPlantsPicture.jpeg";

const Home = () => {
	return (
		<body>
			<div className="upper-body">
				<div className="textes">
					<h2 className="green-path"> The green path </h2>
					<h3 className="find-spot">
						<br />
						Where Every Plant Find Its Spot
					</h3>
				</div>
				<img className="woman-ia" src={PhotoWoman} alt="green" />
			</div>
			<>
				<h2> site</h2>
				<Quiz />
			</>
			<div className="other-informations">
				<div className="exceptional-plant-varieties">
					<div className="text">
						<h3>Exceptional Plant Varieties</h3>
						<p>
							We are here to guide you in choosing the indoor plants that suit
							your needs. Whether it's a Kentia palm, a ficus, or succulents,
							discover easy-to-care-for species that are perfect for air
							purification, thrive in low light, or are safe for your pets. Our
							mission is to help you transform your space with plants that bring
							life, style, and serenity, all while matching your lifestyle. 🌿
						</p>
					</div>
					<img
						className="green-oasis-img"
						src={GreenOasisPicture}
						alt="Green oasis"
					/>
				</div>

				<div className="easy-care">
					<img
						className="indoor-plants-img"
						src={IndoorPlantsPicture}
						alt="Indoor plants"
					/>
					<div className="text">
						<h3>Easy Care</h3>
						<p>
							Caring for your indoor plants becomes a true pleasure with The
							Plant Spot. We guide you step by step to understand and meet the
							specific needs of your plants, helping them thrive to their
							fullest potential. From choosing the right spot and watering
							schedule to ensuring proper soil, light, and care, we provide
							simple tips to create a lush, vibrant indoor space you’ll love.
						</p>
					</div>
				</div>
			</div>
		</body>
	);
};

export default Home;
