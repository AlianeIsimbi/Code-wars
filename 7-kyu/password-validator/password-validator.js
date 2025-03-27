function password(str) {
    return str.length >= 8 && /[A-Z]/.test(str) && /[a-z]/.test(str) && /[0-9]/.test(str);
}