export const getCurrentDate = () => {
    const newDate = new Date();
    const year = newDate.getFullYear();
    let month = newDate.getMonth() + 1;
    let day = newDate.getDate();

    if (month < 9) { month = "0" + month }
    if (day < 9) { day = "0" + day }

    return `${year}-${month}-${day}`
};