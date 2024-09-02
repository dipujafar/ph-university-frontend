import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TInputPros = {
  type: string;
  name: string;
  label?: string;
};

const PHinput = ({ type, name, label }: TInputPros) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <Controller
        name={name}
        render={({ field, fieldState: {error} }) => (
          <Form.Item label={label}>
            <Input {...field} type={type} id={name} />
            {error && <small style={{color: "red"}}>{error?.message}</small>}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PHinput;
