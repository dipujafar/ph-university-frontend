import { useGetAllSemesterQuery } from "../../../redux/feature/admin/academicSemester.api";


const AcademicSemester = () => {

    const data = useGetAllSemesterQuery([{name: "name", value: "Autumn"}]);
    console.log(data);
    
    return (
        <div>
            Academic Semester
        </div>
    );
};

export default AcademicSemester;