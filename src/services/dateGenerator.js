export const getCurrentDate = () => {
    const newDate = new Date();

    return newDate.toISOString().slice(0,10)
};