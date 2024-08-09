const message = document.getElementById('message');
const result = document.getElementById('result');
const btnCopy = document.getElementById('copy');
const noMessage = document.getElementById('noMessage');
const errorMessage = document.getElementById('errorMessage');

const encryptionCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

const encrypt = (stringEncrypted) => {
    for (let i = 0; i < encryptionCode.length; i++) {
        if (stringEncrypted.includes(encryptionCode[i][0])) {
            stringEncrypted = stringEncrypted.replaceAll(encryptionCode[i][0], encryptionCode[i][1]);
        }
    }
    return stringEncrypted;
};

const decrypt = (stringDencrypted) => {
    for (let i = 0; i < encryptionCode.length; i++) {
        if (stringDencrypted.includes(encryptionCode[i][1])) {
            stringDencrypted = stringDencrypted.replaceAll(encryptionCode[i][1], encryptionCode[i][0]);
        }
    }
    return stringDencrypted;
};

const validateEntry = (string) => {
    const accentRegex = /[áéíóúüÁÉÍÓÚÜàèìòùÀÈÌÒÙãõñçÃÕÑÇ]/;
    const uppercaseRegex = /[A-Z]/;
    if(accentRegex.test(string) || uppercaseRegex.test(string)) {
        noMessage.textContent = "";
        errorMessage.style.display = "block";
        errorMessage.classList.add('error-animation');
        return false;
    } else return true;
};

const resetStules = () => {
    result.style.backgroundImage = "none";
    noMessage.style.display = "none";
    errorMessage.style.display = "none";
    btnCopy.style.display = "block";
};

const btnEncrypt = () => {
    if(validateEntry(message.value)) {
        const messageEncrypted = encrypt(message.value);
        message.value = "";
        resetStules();
        result.value = messageEncrypted;
    }
};

const btnDecrypt = () => {
    if(validateEntry(message.value)) {
        const messageEncrypted = decrypt(message.value);
        message.value = "";
        resetStules();
        result.value = messageEncrypted;
    }
};

const copy = () => {
    navigator.clipboard.writeText(result.value)
        .then(() => alert('Texto copiado'))
};
