import PropTypes from 'prop-types';

const ExerciseCard = ({ exercise, measurement }) => (
  <div className="flex items-center bg-white rounded p-5">
    <img className="w-20 mr-5" src={`/svg/${exercise.icon}.svg`} alt={exercise.name} />
    <div className="text-left">
      <p className="font-semibold">{exercise.name}</p>
      <p className="mt-2">
        <span className="pr-2 text-2xl">{measurement.quantity}</span>
        <span className="pr-1">{exercise.unit}</span>
        <span className="pr-1 text-xl">/</span>
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
