import PropTypes from "prop-types";

const PortfolioCard = ({ name, location, tr, type, id }) => {
  return (
    <div className="bg-white rounded-lg my-4" >
        <img src={`src/assets/portfolio/${id}.jpg`} alt="" className="h-60 rounded-t-lg" />
      <div className="p-2 h-24 text-center">
        <div className="font-semibold">{name}</div>
        <div>{location}</div>
        <div>{tr}</div>
        <div>{type}</div>
      </div>
    </div>
  );
};

PortfolioCard.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tr: PropTypes.string.isRequired,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
};

export default PortfolioCard;