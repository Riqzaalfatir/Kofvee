import { blogData } from "../mocks/blog";

export function getBlogs() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                status: "Berhasil",
                data: blogData
            })
        }, 800)
    })
}