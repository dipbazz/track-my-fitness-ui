import PropTypes from 'prop-types';

const ExerciseCard = ({ exercise, measurement }) => (
  <div className="flex">
    <img className="w-16" src={`/svg/${exercise.icon}.svg`} alt={exercise.name} />
    <div>
      <p>{exercise.name}</p>
      <p>
        <span>{measurement.quantity}</span>
        <span>{exercise.unit}</span>
        <span>/</span>
        <span>{exercise.target}</span>
      </p>
    </div>
  </div>
);

ExerciseCard.propTypes = {
  exercise: PropTypes.objectOf(PropTypes.any).isRequired,
  measurement: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ExerciseCard;
