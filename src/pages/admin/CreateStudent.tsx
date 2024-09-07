import { FieldValues, SubmitHandler } from "react-hook-form";
import PhForm from "../../components/form/PhForm";
import PHinput from "../../components/form/PHinput";
import { Button, Col, Row } from "antd";

const CreateStudent = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const formData = new FormData();

    formData.append("data", JSON.stringify(data));

    console.log(Object.fromEntries(formData));
  };
  return (
    <div>
      <Row>
        <Col span={24}>
          <PhForm onSubmit={onSubmit}>
            <Row gutter={8}>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHinput type="text" name="name" label="Name"></PHinput>
              </Col>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHinput type="text" name="name" label="Name"></PHinput>
              </Col>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHinput type="text" name="name" label="Name"></PHinput>
              </Col>
            </Row>
            <Button htmlType="submit">Submit</Button>
          </PhForm>
        </Col>
      </Row>
    </div>
  );
};

export default CreateStudent;
