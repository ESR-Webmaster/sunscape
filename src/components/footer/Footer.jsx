import {
	FaEnvelope,
	FaFacebookF,
	FaLinkedinIn,
	FaMapPin,
	FaPhoneAlt,
	FaTwitter,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

function footer({ button }) {
	return (
		<div className="wrapper">
			<div className="footer">
				<div className="footer-top">
					<div className="logo">
						<Link to="/">SunScape</Link>
						<span></span>
					</div>
					{button}
					<div className="social">
						<FaFacebookF className="social-icon" />
						<FaTwitter className="social-icon" />
						<FaLinkedinIn className="social-icon" />
					</div>
				</div>
				<div className="footer-bottom">
					<div className="copyright">
						<p>2023 SunScape. All Right Reserved</p>
					</div>
					<div className="contacts">
						<span>
							<FaPhoneAlt className="icon" />
							<span>+1 (203) 260-3736</span>
						</span>
						<span>
							<FaEnvelope className="icon" />
							<span>info@sunscape.solar</span>
						</span>
						<span>
							<FaMapPin className="icon" />
							<span>290 ABC Avenue, XYZ</span>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default footer;
