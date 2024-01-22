import {fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: (typeof window !== 'undefined' && localStorage.getItem('BASE_URL')) || process.env.NEXT_PUBLIC_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    headers.set("Content-Type", "application/json")
    return headers
  },
})

export default baseQuery;
