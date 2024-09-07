import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        getAllstudentData: builder.query({
            query: ()=>({
                url: "/students",
                method: "GET"
            })
        }),
        addStudent: builder.mutation({
            query: ()=>({
                url: "/users/create-student",
                method: "POST"
            })
        })
    })
});

export const {useAddStudentMutation, useGetAllstudentDataQuery} = userManagementApi