import { FieldValues, SubmitHandler } from "react-hook-form";
import PhForm from "../../components/form/PhForm";
import { Button, Col, Flex } from "antd";
import PhSelect from "../../components/form/PhSelect";
import { semesterOption } from "../../constants/semester";
import { monthOption } from "../../constants/month";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../schema/academicSemester.schema";




const CreateAcademicSemester = () => {
  const onSubmitm: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
 

  return (
    <Flex justify="center" align="center">
    <Col span={6}>
    <PhForm onSubmit={onSubmitm} resolver={zodResolver(academicSemesterSchema)}>
      <PhSelect label={"Name"} name="name" options={semesterOption}></PhSelect>
      <PhSelect label={"Start Month"} name="startMonth" options={monthOption}></PhSelect>
      <PhSelect label={"End Month"} name="endMonth" options={monthOption}></PhSelect>
      <Button htmlType="submit">Submit</Button>
    </PhForm>
    </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
