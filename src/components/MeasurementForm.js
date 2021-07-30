import PropTypes from 'prop-types';

const MeasurementForm = ({ exercise }) => (
  <div>
    <img src={`/svg/${exercise.icon}.svg`} alt={exercise.name} />
    <h3>{exercise.name}</h3>
    <br />
  </div>
);

MeasurementForm.propTypes = {
  exercise: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default MeasurementForm;
