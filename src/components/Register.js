import { useEffect } from "react";

const Register = () => (
	<section className="Register" id="register" aria-labelledby="register-title">
		<article className="max-width">
			<div style={{
				maxWidth: "48rem",
				margin: "0 auto",
				padding: "clamp(1.5rem, 5vw, 3rem)",
				borderRadius: "1rem",
				background: "white",
				color: "var(--clr-primary-400)",
				textAlign: "center",
			}}>
				<h2 id="register-title">Registration coming soon!</h2>
				<p style={{ marginTop: "0.75rem" }}>
					Something’s in the works for AdaHacks 2027...
				</p>
				<a
					className="solid"
					href="https://adasteam.ca/#/"
					style={{ display: "inline-block", marginTop: "1.25rem" }}
				>
					Join our mailing list!
				</a>
				<p style={{ marginTop: "0.75rem" }}>
					Get an email when AdaHacks 2027 registration opens. Alternatively, follow our Instagram or join our Discord server linked below for direct updates!
				</p>
			</div>
		</article>
	</section>
);

export default Register;
