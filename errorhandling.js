function login(username, password) {

    try {

        if (!username) {
            throw new Error("Username cannot be empty.");
        }

        if (!password) {
            throw new Error("Password cannot be empty.");
        }

        console.log("Login Successful");

    }
    catch(error) {

        console.log("Login Failed");
        console.log(error.message);

    }
    finally {

        console.log("Login Attempt Finished");

    }
}

login("Prem", "1234");
login("", "1234");
login("Prem", "");