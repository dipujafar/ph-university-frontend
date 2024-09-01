import { FieldValues, SubmitHandler } from "react-hook-form";
import PhForm from "../../components/form/PhForm";
import { Button, Col, Flex } from "antd";
import PhSelect from "../../components/form/PhSelect";

const nameOptions = [
  {
    value: "01",
    label: "Autumn"
  },
  {
    value: "02",
    label: "Summer"
  },
  {
    value: "03",
    label: "Fall"
  },
]

const CreateAcademicSemester = () => {
  const onSubmitm: SubmitHandler<FieldValues> = (data) => {
    const semesterData = {
      name: "something",
      value: "something"
    }
    console.log(semesterData);
  };

  return (
    <Flex justify="center" align="center">
    <Col span={6}>
    <PhForm onSubmit={onSubmitm}>
      <PhSelect label={"Name"} name="name" options={nameOptions}></PhSelect>
      <Button htmlType="submit">Submit</Button>
    </PhForm>
    </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
