import PropTypes from 'prop-types';

export default function Section ({ title, children, ...props }) {
	return (
		<section {...props} className="section">
			<h2>{title}</h2>
			{children}
		</section>
	)
}

Section.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node,
};

Section.defaultProps = {
	children: null,
};