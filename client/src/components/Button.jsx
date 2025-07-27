import { Link } from "react-router-dom";

export default function Button({ text, className, url }) {
	return (
		<Link to={url} className={`btn ${className}`}>
			{text}
		</Link>
	);
}
