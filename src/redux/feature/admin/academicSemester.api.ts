import { baseApi } from "../../api/baseApi";

const academicSemesterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemester: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        params.append(args[0].name, args[0].value)
        return {
        url: "/academic-semester",
        method: "GET",
        params: params
      }
      },
       transformResponse: (response) =>{
        console.log(response);
        return "test"
       }
    }),
    addAcademicSemester: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: "academic-semesters/create-academic-semester",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useGetAllSemesterQuery, useAddAcademicSemesterMutation } =
  academicSemesterApi;
