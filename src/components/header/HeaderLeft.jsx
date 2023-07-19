import { Button, Design } from '../../components';

function HeaderLeft({ servicesRef }) {
	return (
		<div className="left">
			<Design />
			<div className="left-content">
				<h2>Take Control of Your Business with SunScape</h2>
				<p>
				Get the complete 360 degree customer view with SunScape CRM today! Sign up for a free trial now.
				</p>
				<Button
					text1="Try"
					text2="NOW"
					onClick={() => alert('You clicked button')}
				/>
				<div
					className="scroll-down"
					onClick={() => servicesRef.current.scrollIntoView()}
				>
					<span>Scroll Down</span>
				</div>
			</div>
		</div>
	);
}

export default HeaderLeft;
