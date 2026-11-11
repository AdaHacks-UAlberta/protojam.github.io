import supporters from "../assets/supporters.json";
import { ReactComponent as SupportersDivider } from "../assets/dividers/divider_supporters.svg";

const Supporters = () => {
	return (
		<section className="Supporters" id="supporters">
			<article className="max-width">
				<h2 className="section-title">Supporters</h2>
				<div className="supporter-callout">
					<h3>Support AdaHacks 2027</h3>
					<p>We’re looking for sponsors and partners to help make AdaHacks 2027 possible!</p>

					<ul className="supporter-package-links">
						<li>
							<a href={`${process.env.PUBLIC_URL}/sponsor-partner-packages/adahacks-2027-sponsorship-package.pdf`}>
								Sponsorship Package (PDF)
							</a>
						</li>
						<li>
							<a href={`${process.env.PUBLIC_URL}/sponsor-partner-packages/adahacks-2027-partnership-package.pdf`}>
								Partnership Package (PDF)
							</a>
						</li>
					</ul>

					<a className="solid" href="mailto:adasteam@ualberta.ca?subject=Supporting%20AdaHacks%202027">
						Email us!
					</a>
				</div>

				<p className="section-description">
					A special thanks to our AdaHacks supporters, old and new!
				</p>

				{/* <h2 className="section-title">COMING SOON!</h2> */}

				<ul className="tier-list">
					{Object.keys(supporters).map((supporter_tier, i) => {
						const tier_array = supporters[supporter_tier];

						if (tier_array.length > 0)
							return (
								<li className={`tier ${supporter_tier}`} key={`tier-${i}`}>
									<h3 className="tier-title">{supporter_tier}</h3>
									<ul className={`supporter-list ${supporter_tier}`}>
										{tier_array.map(({ sponsorName, sponsorImage, sponsorLink }, i) => (
											<li className="supporter" key={i}>
												{sponsorLink ? (
													<a href={sponsorLink} target="_blank" rel="noreferrer">
														<img src={sponsorImage} alt={`${sponsorName} logo`} />
													</a>
												) : (
													<img src={sponsorImage} alt={`${sponsorName} logo`} />
												)}
											</li>
										))}
									</ul>
								</li>
							);
						else return "";
					})}
				</ul>
			</article>

		<SupportersDivider className="divider supporters-divider" aria-hidden="true" />
		</section>
	);
};

export default Supporters;