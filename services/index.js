import useSWR from "swr";

const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function getCategoriesWithProjects (url) {
    console.log("callled")
    const response = await fetch(url)

    console.log("req : ", response)
    return await response.json()
}

export const useGetCategoriesWithProjects = () => {
    const {data, error, } = useSWR(`${API_URL}api/project-categories?populate=*`, getCategoriesWithProjects)

    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}