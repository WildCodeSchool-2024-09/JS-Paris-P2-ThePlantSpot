import scissors from "../img/picto/difficulties.png";
import water from "../img/picto/drop.png";
import blooming from "../img/picto/hibiscus.png";
import sun from "../img/picto/sun.png";
import temperature from "../img/picto/thermometer.png";
const Articles: React.FC = () => {
	const articleStyle: React.CSSProperties = {
		width: "20%",
		height: "250px",
		border: "1px solid #ddd",
		borderRadius: "20px 0px",
		textAlign: "left",
		backgroundColor: "#624F25",
		paddingLeft: "10px",
	};

	const containerStyle: React.CSSProperties = {
		display: "flex",
		justifyContent: "space-between",
		flexWrap: "wrap",
		padding: "0px 50px 10px 50px",
	};

	return (
		<div style={containerStyle}>
			<article style={articleStyle}>
				<h4>Common Name</h4>
				<h5>Latin Name</h5>
				<h6>Family</h6>
				{/* biome-ignore lint/a11y/useAltText: <explanation> */}
				<img style={{ width: "2rem", height: "2rem" }} src={sun} />
				{/* biome-ignore lint/a11y/useAltText: <explanation> */}
				<img
					style={{ width: "2rem", height: "2rem", marginLeft: "1rem" }}
					src={water}
				/>
				{/* biome-ignore lint/a11y/useAltText: <explanation> */}
				<img
					style={{ width: "2rem", height: "2rem", marginLeft: "1rem" }}
					src={temperature}
				/>
				{/* biome-ignore lint/a11y/useAltText: <explanation> */}
				<img
					style={{ width: "2rem", height: "2rem", marginLeft: "1rem" }}
					src={blooming}
				/>
				{/* biome-ignore lint/a11y/useAltText: <explanation> */}
				<img
					style={{ width: "2rem", height: "2rem", marginLeft: "1rem" }}
					src={scissors}
				/>
			</article>
			<article style={articleStyle}>
				<h4>Common Name</h4>
				<h5>Latin Name</h5>
				<h6>Family</h6>
				{/* biome-ignore lint/a11y/useAltText: <explanation> */}
				<img style={{ width: "2rem", height: "2rem" }} src={sun} />
				{/* biome-ignore lint/a11y/useAltText: <explanation> */}
				<img
					style={{ width: "2rem", height: "2rem", marginLeft: "1rem" }}
					src={water}
				/>
				{/* biome-ignore lint/a11y/useAltText: <explanation> */}
				<img
					style={{ width: "2rem", height: "2rem", marginLeft: "1rem" }}
					src={temperature}
				/>
				{/* biome-ignore lint/a11y/useAltText: <explanation> */}
				<img
					style={{ width: "2rem", height: "2rem", marginLeft: "1rem" }}
					src={blooming}
				/>
				{/* biome-ignore lint/a11y/useAltText: <explanation> */}
				<img
					style={{ width: "2rem", height: "2rem", marginLeft: "1rem" }}
					src={scissors}
				/>
			</article>
			<article style={articleStyle}>
				<h4>Common Name</h4>
				<h5>Latin Name</h5>
				<h6>Family</h6>
				{/* biome-ignore lint/a11y/useAltText: <explanation> */}
				<img style={{ width: "2rem", height: "2rem" }} src={sun} />
				{/* biome-ignore lint/a11y/useAltText: <explanation> */}
				<img
					style={{ width: "2rem", height: "2rem", marginLeft: "1rem" }}
					src={water}
				/>
				{/* biome-ignore lint/a11y/useAltText: <explanation> */}
				<img
					style={{ width: "2rem", height: "2rem", marginLeft: "1rem" }}
					src={temperature}
				/>
				{/* biome-ignore lint/a11y/useAltText: <explanation> */}
				<img
					style={{ width: "2rem", height: "2rem", marginLeft: "1rem" }}
					src={blooming}
				/>
				{/* biome-ignore lint/a11y/useAltText: <explanation> */}
				<img
					style={{ width: "2rem", height: "2rem", marginLeft: "1rem" }}
					src={scissors}
				/>
			</article>
		</div>
	);
};

export default Articles;
