function validateLogin(email, password) {
  if (email.length > 0 && password.length > 0) {
    if (password.length > 6) {
      return true;
    }
  }
  return false;
}

function login(email, password) {
  const isValid = validateLogin(email, password);
  if (isValid) {
    console.log("Login berhasil untuk: " + email);
    return true;
  } else {
    console.log("Login gagal");
  }
}