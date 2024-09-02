import { useGetAllSemesterQuery } from "../../redux/feature/admin/academicSemester.api";


const AcademicSemester = () => {

    const {data} = useGetAllSemesterQuery(undefined);
    console.log(data);
    
    return (
        <div>
            Academic Semester
        </div>
    );
};

export default AcademicSemester;