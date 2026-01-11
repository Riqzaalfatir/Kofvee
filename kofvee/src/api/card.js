import { cards } from "../mocks/data";


export function getCards() {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve({
                status: "Berhasil",
                data:cards
            })
        }, 800);
    })
}