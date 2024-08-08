const message = document.getElementById('message');
const result = document.getElementById('result');
const btnCopy = document.getElementById('copy');
const noMessage = document.getElementById('noMessage');
const errorMessage = document.getElementById('errorMessage');

const encryptionCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

const encrypt = (param) => {
    let stringEncrypted = "";
    for (let i = 0; i < encryptionCode.length; i++) {
        if (param.includes(encryptionCode[i][0])) {
            stringEncrypted = param.replaceAll(encryptionCode[i][0], encryptionCode[i][1]);
        }
    }
    return stringEncrypted;
};

const decrypt = (param) => {
    let stringDencrypted = "";
    for (let i = 0; i < encryptionCode.length; i++) {
        if (param.includes(encryptionCode[i][1])) {
            stringDencrypted = param.replaceAll(encryptionCode[i][1], encryptionCode[i][0]);
        }
    }
    return stringDencrypted;
};

const validateEntry = (string) => {
    const accentRegex = /[áéíóúüÁÉÍÓÚÜàèìòùÀÈÌÒÙãõñçÃÕÑÇ]/;
    const uppercaseRegex = /[A-Z]/;
    if(accentRegex.test(string) || uppercaseRegex.test(string)) {
        noMessage.textContent = "";
        errorMessage.style.display = "block"
        return false;
    } else return true;
};

const btnEncrypt = () => {
    if(validateEntry(message.value)) {
        const messageEncrypted = encrypt(message.value);
        message.value = "";
        result.style.backgroundImage = "none";
        noMessage.style.display = "none";
        errorMessage.style.display = "none"
        btnCopy.style.display = "block";
        result.value = messageEncrypted
    }
};

const btnDecrypt = () => {
    const messageEncrypted = decrypt(message.value);
    message.value = "";
    result.value = messageEncrypted
};

const copy = () => {
    navigator.clipboard.writeText(result.value)
        .then(() => alert('Copied to clipboard!'))
        .catch(err => console.error('Failed to copy: ', err));
};
