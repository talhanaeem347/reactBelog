const checkName = (name) => (/^[a-zA-Z]+$/).test(name);

const checkImage = (image) => image.length > 3 ? true : false;
const checkMessage = (message) => {
    const msgRegex = /^[a-zA-Z0-9]+$/;
    return msgRegex.test(message);
}
export const formValidation = ({ name, message, image }) =>
    (checkName(name) && checkMessage(message) && checkImage(image))
        ? true : false;
