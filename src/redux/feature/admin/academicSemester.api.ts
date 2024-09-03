import { baseApi } from "../../api/baseApi";

const academicSemesterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemester: builder.query({
      query: () => ({
        url: "/academic-semester",
        method: "GET",
      }),
    }),
    addAcademicSemester: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: "/academic-semester/create-academic-semester",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useGetAllSemesterQuery, useAddAcademicSemesterMutation } =
  academicSemesterApi;
