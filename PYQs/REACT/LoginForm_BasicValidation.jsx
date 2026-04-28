function LoginForm() {

    const handleLogin = (e) => {
        let pass=document.getElementById("password").value;
        let username=document.getElementById("username").value;
        let email=document.getElementById("email").value;
        let isvalidemail = email.includes('@gmail.com');
        let isvalidpass = pass.length >= 6 && pass.length <= 12 && pass.includes('@') && pass.includes('A');
        if(isvalidpass && isvalidemail && username === "username"){
            alert("Login Successful!");
        }
        else if(pass === "" || username === "" || email === ""){
            alert("Please fill all the fields");
        }
        else{
            alert("Invalid Credentials");
        }
        e.preventDefault();
    }
    return (
        <div>
            <h1>Login Form</h1>
            <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                <label>Username</label>
                <input type="text" id="username" />
                
                <label>Email ID</label>
                <input type="email" id="email" />
                
                <label>Password</label>
                <input type="password" id="password" />
                
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm;
