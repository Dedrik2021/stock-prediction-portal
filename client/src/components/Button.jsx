export default function Button({ text, className, url }) {
	return (
		<a href={url} className={`btn ${className}`}>
			{text}
		</a>
	);
}
