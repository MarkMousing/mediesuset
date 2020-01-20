/**
 * Funktion til at fetche data fra API med
 * Kaldes med URL som parameter og returnerer et array med data
 * @param {*} URL
 */
async function DataFromMediesuset(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err)
    }
}

// async function DataFromBageriet(url) {
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         return data;
//     } catch (err) {
//         console.log(err)
//     }
// }
