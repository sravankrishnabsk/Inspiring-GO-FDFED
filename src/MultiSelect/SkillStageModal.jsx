
import "./SkillStageModal.css"

function SkillStageModal({  onSelectStage, onClose }) {

  const handleStageSelection = (stage) => {
    onSelectStage(stage);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>How would you rate yourself on this skill?</h2>
        <ul>
          <li>
            <label>
              <input

                type="radio"
                name="stage"
                value="Beginner"
                onChange={() => handleStageSelection('Beginner')}
              />
              Beginner
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                name="stage"
                value="Intermediate"
                onChange={() => handleStageSelection('Intermediate')}
              />
              Intermediate
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                name="stage"
                value="Expert"
                onChange={() => handleStageSelection('Expert')}
              />
              Expert
            </label>
          </li>
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default SkillStageModal;
