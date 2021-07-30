import PropTypes from 'prop-types';

const MeasurementForm = ({ exercise, measurements, measurementChange }) => (
  <div className="">
    <div className="flex items-center">
      <img className="w-16" src={`/svg/${exercise.icon}.svg`} alt={exercise.name} />
      <h3>{exercise.name}</h3>
      <input
        onChange={measurementChange}
        value={measurements[exercise.id] || ''}
        className="border border-gray-500 px-2"
        name={exercise.id}
        type="number"
        placeholder="10"
        required
      />
      <span>{exercise.unit}</span>
      <span>/</span>
      <span>{exercise.target}</span>
    </div>
  </div>
);

MeasurementForm.propTypes = {
  exercise: PropTypes.objectOf(PropTypes.any).isRequired,
  measurementChange: PropTypes.func.isRequired,
  measurements: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default MeasurementForm;
