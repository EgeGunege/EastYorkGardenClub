import PropTypes from 'prop-types';

const FaceBookIcon = ({ className }) => {
    return (
        <svg className={className} enableBackground="new 0 0 32 32" version="1.1" viewBox="0 0 32 32" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="Flat_copy">
                <g>
                    <path d="M16,0C7.163,0,0,7.163,0,16c0,8.836,7.163,16,16,16s16-7.164,16-16C32,7.163,24.837,0,16,0z" fill="#333333" />
                </g>
                <path d="M13.69,24.903h3.679v-8.904h2.454l0.325-3.068h-2.779l0.004-1.536c0-0.8,0.076-1.229,1.224-1.229h1.534V7.097h-2.455c-2.949,0-3.986,1.489-3.986,3.992v1.842h-1.838v3.069h1.838V24.903z" fill="#FFFFFF" />
            </g>
        </svg>
    )
}
FaceBookIcon.propTypes = {
    className: PropTypes.string.isRequired,
};

const MyIcons = ({ iconName, className }) => {
    switch (iconName) {
        case 'facebook':
            return <FaceBookIcon className={className} />;
        default:
            return null;
    }
};

MyIcons.propTypes = {
    iconName: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
};

export default MyIcons;