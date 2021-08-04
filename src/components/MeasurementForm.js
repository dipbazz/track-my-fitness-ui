import PropTypes from 'prop-types';

const MeasurementForm = ({ exercise, measurements, measurementChange }) => (
  <div className="p-5 bg-white my-4 shadow-sm rounded-sm">
    <div className="flex items-center justify-between">
      <img className="w-16" src={`/svg/${exercise.icon}.svg`} alt={exercise.name} />
      <h3 className="font-medium text-xl">{exercise.name}</h3>
      <div>
        <input
          onChange={measurementChange}
          value={measurements[exercise.id] || ''}
          className="border border-gray-300 mr-3 px-3 py-2 rounded w-20 sm:w-auto"
          name={exercise.id}
          type="number"
          placeholder="10"
          required
        />
        <span>{exercise.unit}</span>
      </div>
      <div>
        <span>/</span>
        <span className="ml-2 font-light">{exercise.target}</span>
      </div>
    </div>
  </div>
);

MeasurementForm.propTypes = {
  exercise: PropTypes.objectOf(PropTypes.any).isRequired,
  measurementChange: PropTypes.func.isRequired,
  measurements: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default MeasurementForm;
