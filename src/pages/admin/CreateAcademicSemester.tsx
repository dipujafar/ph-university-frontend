import { FieldValues, SubmitHandler } from "react-hook-form";
import PhForm from "../../components/form/PhForm";
import { Button, Col, Flex } from "antd";
import PhSelect from "../../components/form/PhSelect";
import { semesterOption } from "../../constants/semester";
import { monthOption } from "../../constants/month";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../schema/academicSemester.schema";
import { useAddAcademicSemesterMutation } from "../../redux/feature/admin/academicSemester.api";
import { toast } from "sonner";

const currentYear = new Date().getFullYear();
const yearOptions = [0,1,2,3,4].map((number)=>(
  {
    value: String(currentYear + number ),
    label: String(currentYear + number)
  }
));

const CreateAcademicSemester = () => {
  const [addAcademicSemester] = useAddAcademicSemesterMutation();

  const onSubmitm: SubmitHandler<FieldValues> = async(data) => {
    const  name = semesterOption[Number(data?.name)].label;

    const semesterData = {
      name, 
      code: data.name,
      year: data.year,
      startData: data.startData, 
      endDate: data?.endData,
    }
     try{
      const res = await addAcademicSemester(semesterData);
     }
     catch(error){
      toast.error("Somethine went wrong")
     }
  };
  return (
    <Flex justify="center" align="center">
    <Col span={6}>
    <PhForm onSubmit={onSubmitm} resolver={zodResolver(academicSemesterSchema)}>
      <PhSelect label={"Name"} name="name" options={semesterOption}></PhSelect>
      <PhSelect label={"Year"} name="year" options={yearOptions}></PhSelect>
      <PhSelect label={"Start Month"} name="startMonth" options={monthOption}></PhSelect>
      <PhSelect label={"End Month"} name="endMonth" options={monthOption}></PhSelect>
      <Button htmlType="submit">Submit</Button>
    </PhForm>
    </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
