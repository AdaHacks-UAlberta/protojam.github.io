import hero from "../assets/hero.svg";
import divider from "../assets/dividers/divider_hero.svg";

const Hero = () => {
	return (
		<section className="Hero" id="main">
			<div className="hero-content max-width">
				<img className="hero-image" src={hero} alt="Aliens helping each other decorate a space" />

				<article>
					<h1 className="hero-title">AdaHacks 2027</h1>
					<p className="hero-description">
						A 48-hour in-person hackathon dedicated to empowering women and gender-diverse individuals to grow as innovators, leaders, and creative-thinkers in a traditionally underrepresented industry. More details coming soon!
					</p>
					<p className="hero-date">February 26-28, 2027</p>
					<a href="https://adasteam.ca/#/" className="solid">
						Join our mailing list!
					</a>
					<p className="hero-signup-note">
					Get AdaHacks registration updates and other news from Ada’s Team.
					</p>
				</article>
			</div>

			<img className="divider" src={divider} aria-hidden="true" alt="" />
		</section>
	);
};

export default Hero;
