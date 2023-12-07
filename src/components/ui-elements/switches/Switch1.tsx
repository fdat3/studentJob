interface Switch1Props {
  index: number;
}
export default function Switch1({ index }: Switch1Props) {
  return (
    <>
      <div className="switch-style1">
        <div className="form-check form-switch mb20">
          <input
            className="form-check-input"
            type="checkbox"
            id={`flexSwitchCheckDefault${index}`}
          />
          <label
            className="form-check-label"
            htmlFor={`flexSwitchCheckDefault${index}`}
          >
            Items
          </label>
        </div>
      </div>
    </>
  );
}
