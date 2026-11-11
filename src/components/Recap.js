import divider from "../assets/dividers/divider_about.svg";

const canvaUrl =
	"https://www.canva.com/design/DAHao84_iAs/BXEv9Ay7vDtR5KTNkyJiuQ/view";

const Recap = () => (
	<section
		className="Register"
		id="recap"
		aria-labelledby="recap-title"
		style={{background: "var(--clr-primary-100)", color: "var(--clr-primary-400)", scrollMarginTop: "5rem",
		}}
	>
		<article className="max-width">
			<h2 className="section-title" id="recap-title">
				AdaHacks 2026 Recap
			</h2>

			<iframe
				title="AdaHacks 2026 recap slideshow"
				src={`${canvaUrl}?embed`}
				loading="lazy"
				allowFullScreen
				style={{
					display: "block",
					width: "100%",
					maxWidth: "56rem",
					aspectRatio: "16 / 9",
					margin: "1.5rem auto 0.75rem",
					border: 0,
					borderRadius: "0.5rem",
				}}
			/>

			<p className="section-description">
				Check out 2026's iteration of the hackathon!
			</p>

		</article>

		<img
			src={divider}
			alt=""
			style={{ display: "block", width: "100%" }}
		/>
	</section>
);

export default Recap;