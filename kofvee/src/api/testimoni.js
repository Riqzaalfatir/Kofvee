import { testimoni } from "../mocks/testimoni";

export function getTestimoni() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                status: "Berhasil",
                data: testimoni
            })
        }, 800)
    })
}