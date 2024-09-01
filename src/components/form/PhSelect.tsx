import { Form, Select, Space } from "antd";
import { Controller } from "react-hook-form";

type TSelecterProps = {
  name: string;
  label: string;
  options: {value: string, label: string, disabled?: boolean}[]
};

const PhSelect = ({ label, name,  options }: TSelecterProps) => {
  return (
    <Controller
    name={name}
      render={({field}) => (
        <Form.Item label={label}>
          <Select
           {...field}
            options={ options}
          />
        </Form.Item>
      )}
    />
  );
};

export default PhSelect;
