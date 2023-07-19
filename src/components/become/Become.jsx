import './Become.css';
import mobile from '../../images/mobile.png';
import { Element } from '../../components';
import { elementContent } from '../element/ElementData';
import { forwardRef } from 'react';

const Become = forwardRef(({ button, design, circles }, ref) => {
	return (
		<div className="become-bg">
			{design}
			<div className="wrapper">
				<div className="become" id="become" ref={ref}>
					<h2>Try our CRM and start Profiting?</h2>
					<div className="become-content">
						<div className="become-text">
							<p>
							Take Control of Your Business with SunScape.
							Streamline your sales, marketing, and customer service using SunScape
							</p>
							<p>the all-in-one CRM to grow your business..</p>
							{button}
						</div>
						<div className="become-design">
							{circles}
							<div className="become-box">
								<img src={mobile} alt="mobile" />
								{elementContent?.slice(0, 4).map((item, index) => (
									<Element key={index} text={item.text} style={item.style} />
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
});

export default Become;
