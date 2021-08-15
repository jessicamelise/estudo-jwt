export const sendData = async (email, password) => {
  try {
    const setEmailPassword = await fetch(`http://localhost:8000/login`, {
      method: 'POST', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": email, 
        "password": password
      })
    });
    const response = await setEmailPassword.json();
    return response;
  }
  catch (err) {
    console.error('We got a problem to fetch the information', err);
  }
}