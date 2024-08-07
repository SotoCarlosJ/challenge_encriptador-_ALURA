const message = document.getElementById('message');
const result = document.getElementById('result');
const btnCopy = document.getElementById('copy');
const noMessage = document.getElementById('noMessage');

const encrypt = (param) => {
    const encryptionCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    let stringEncrypted = param.toLowerCase();
    for (let i = 0; i < encryptionCode.length; i++) {
        if (stringEncrypted.includes(encryptionCode[i][0])) {
            stringEncrypted = stringEncrypted.replaceAll(encryptionCode[i][0], encryptionCode[i][1]);
        }
    }
    return stringEncrypted;
};

const decrypt = (param) => {
    const encryptionCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    let stringDencrypted = param.toLowerCase();
    for (let i = 0; i < encryptionCode.length; i++) {
        if (stringDencrypted.includes(encryptionCode[i][1])) {
            stringDencrypted = stringDencrypted.replaceAll(encryptionCode[i][1], encryptionCode[i][0]);
        }
    }
    return stringDencrypted;
};

const btnEncrypt = () => {
    const messageEncrypted = encrypt(message.value);
    message.value = "";
    result.style.backgroundImage = "none";
    noMessage.style.display = "none";
    btnCopy.style.display = "block";
    result.value = messageEncrypted
};

const btnDecrypt = () => {
    const messageEncrypted = decrypt(message.value);
    message.value = "";
    result.value = messageEncrypted
};

const copy = () => navigator.clipboard.writeText(result.value);
