import {createApi} from "@reduxjs/toolkit/query/react";
import baseQuery from "@/app/api/baseQuery";
import {Task} from "@/types/Task";
import {CreateTaskRequest} from "@/types/CreateTaskRequest.type";
import {UpdateTaskRequest} from "@/types/UpdateTaskRequest.type";

export const taskApi = createApi({
  reducerPath: 'taskApi',
  baseQuery,
  tagTypes: ['tasks'],
  endpoints: (builder) => ({
    getAllTasks: builder.query<Task[], void>({
      query() {
        return {
          url: 'tasks'
        }
      },
      providesTags: ['tasks']
    }),
    createTask: builder.mutation<Task, CreateTaskRequest>({
      query(request){
        return {
          url: 'tasks',
          method: 'POST',
          body: JSON.stringify(request)
        }
      },
      invalidatesTags: ['tasks']
    }),
    updateTask: builder.mutation<Task, UpdateTaskRequest>({
      query(request) {
        return {
          url: 'tasks',
          method: 'PUT',
          body: JSON.stringify(request)
        }
      },
      invalidatesTags: ['tasks']
    }),
    deleteTask: builder.mutation<void, string>({
      query(id) {
        return {
          url: `tasks/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: ['tasks']
    })
  })
})

export const {
  useGetAllTasksQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation
} = taskApi;
