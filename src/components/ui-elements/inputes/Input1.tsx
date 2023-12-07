interface Input1Props {
  label: string;
  placeholder: string;
}
export default function Input1({ label, placeholder }: Input1Props) {
  return (
    <>
      <div className="form-style1">
        <label className="form-label fw500 fz16 dark-color">{label}</label>
        <input type="text" className="form-control" placeholder={placeholder} />
      </div>
    </>
  );
}
