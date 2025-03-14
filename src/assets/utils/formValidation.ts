export const validateInputIsNotNull = (value: string) => value.trim().length !== 0;

export const validateOnlyLetters = (text: string) => {
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/;
    return regex.test(text);
}

export const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
};