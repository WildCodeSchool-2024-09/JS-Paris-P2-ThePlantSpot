import logo from "./img/illustrations/Logo.png";

const Header = () => {
	return (
		<nav
			style={{
				backgroundColor: "#94AB6F",
				color: "#FFFFFF",
				padding: "8px 5rem",
				display: "flex",
				height: "140px",
				position: "sticky",
				top: "0%",
				alignItems: "center",
				transition: "all 1s ease",
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<img
					src={logo}
					alt="logo"
					style={{ width: "7rem", height: "7rem", paddingBottom: "8px" }}
				/>

				<div
					style={{
						width: "175px",
						height: "1px",
						backgroundColor: "#FFFFFF",
						marginTop: "8px",
					}}
				/>
			</div>

			<h1
				style={{
					marginLeft: "10rem",
					fontWeight: "lighter",
					fontSize: "6em",
				}}
			>
				The Plant <span style={{ fontWeight: "bold" }}>Spot</span>
			</h1>

			<hr
				style={{
					height: "111px",
					marginTop: "1.5rem",
					marginRight: "2rem",
				}}
			/>
			<ul
				style={{
					listStyleType: "none",
					textAlign: "left",
					fontSize: "1.5rem",
				}}
			>
				<li>Home</li> <li>contact</li> <li>catalogue</li>
			</ul>
		</nav>
	);
};

export default Header;
