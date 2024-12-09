interface Props {
  label: string;
  name: string;
  type: string;
  defaultValue?: string;
  size?: string;
}

const FormInput = ({ label, name, type, defaultValue, size }: Props) => {
  return (
    <div className="form-control ">
      <label className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered ${size}`}
      />
    </div>
  );
};
export default FormInput;
