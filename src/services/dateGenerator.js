export const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDay();

    if (month < 9) { month = "0" + month }
    if (day < 9) { day = "0" + day }

    return `${year}-${month}-${day}`
};