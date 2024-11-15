import Photo from "../img/illustrations/GreenIllustrated.png";
import Articles from "./Articles";
const Body_home = () => {
	return (
		// biome-ignore lint/a11y/useHtmlLang: <explanation>
		<html style={{ backgroundColor: "#94AB6F" }}>
			<body>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						padding: "2rem",
					}}
				>
					<div
						style={{
							display: "flex",
							justifyContent: "left",
						}}
					>
						<h2 style={{ marginLeft: "3rem" }}> The green path </h2>
						<h3 style={{ fontSize: "50px", width: "8ch" }}>
							{" "}
							<br />
							Where Every Plant Find Its Spot
						</h3>
					</div>
					<img
						src={Photo}
						alt="green"
						style={{ width: "500px", height: "400px ," }}
					/>
				</div>
				<div
					style={{
						display: "flex",
						padding: "2rem",
						marginTop: "4rem",
					}}
				>
					<div style={{ display: "flex", flexDirection: "column" }}>
						<h3
							style={{
								fontSize: "30px",
								fontWeight: "bold",
								paddingRight: "5rem",
							}}
						>
							{" "}
							Who we are
						</h3>
						<p style={{ width: "40ch" }}>
							The Plant Spot is a user-friendly online platform designed to help
							plant enthusiasts of all levels find the ideal houseplants for
							their homes, based on specific needs, preferences, and
							environmental conditions. Whether you're a seasoned plant parent
							or a beginner looking for your first indoor garden, The Plant Spot
							offers tailored recommendations to ensure your plants thrive in
							your unique space.
						</p>
					</div>

					<hr
						style={{
							height: "200px",
							marginTop: "7rem",
						}}
					/>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							marginRight: "7.5rem",
						}}
					>
						<h3 style={{ fontSize: "30px", fontWeight: "bold" }}>QUIZZ</h3>
					</div>
				</div>
				<div style={{ backgroundColor: "#FBF6F1" }}>
					<h3
						style={{
							display: "flex",
							justifyContent: "left",
							color: "#000000",
							marginLeft: "3rem",
							fontSize: "60px",
						}}
					>
						Most Popular Plants !
					</h3>
					{/* Utilisez le composant Articles */}
					<Articles />
				</div>
			</body>
		</html>
	);
};

export default Body_home;
