function emailReg(text) {
    const rule = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  
    return rule.test(String(text).toLowerCase());
}
  
function pwReg(text) {
    const rule = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{8,16}$/;

    return rule.test(String(text).toLowerCase());
}

export function emailValidation (e) {
    const value = e.currentTarget.value;
  
    return emailReg(value);
}

export function pwValidation (e) {
    const value = e.currentTarget.value;

    return pwReg(value);
}