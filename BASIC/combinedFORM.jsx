import { useState } from "react";

function CombinedForm(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [topic, setTopic] = useState("General Inquiry");
    const [agree, setAgree] = useState(false);

    const [error, setError] = useState("");
    const [submittedData, setSubmittedData] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(name === ""){
            setError("Name should not be empty!");
            return;
        }

        if(!email.includes("@")){
            setError("Enter valid email!");
            return;
        }

        if(password.length < 8){
            setError("Password must be at least 8 characters!");
            return;
        }

        if(message === ""){
            setError("Message cannot be empty!");
            return;
        }

        if(!agree){
            setError("You must agree to terms and conditions!");
            return;
        }

        setError("");
        setSuccess(true);

        setSubmittedData({
            name,
            email,
            password,
            message,
            topic
        });

        // Optional: Reset form after submit
        setName("");
        setEmail("");
        setPassword("");
        setMessage("");
        setTopic("General Inquiry");
        setAgree(false);
    };

    return(
        <div className="form-container">
            <h2>Complete Registration Form</h2>

            <form onSubmit={handleSubmit}>

                <label>Name</label>
                <input 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label>Email</label>
                <input 
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label>Password</label>
                <input 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <label>Message</label>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>

                <label>Topic</label>
                <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                >
                    <option>General Inquiry</option>
                    <option>Feedback</option>
                    <option>Support</option>
                    <option>Complaint</option>
                </select>

                <br/><br/>

                <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                />
                <label>I agree to terms and conditions</label>

                <br/><br/>

                <button type="submit">Submit</button>

            </form>

            {/* Error Message */}
            {error && <p style={{color:"red"}}>{error}</p>}

            {/* Success Message */}
            {success && <p style={{color:"green"}}>Form submitted successfully!</p>}

            {/* Submitted Data */}
            {submittedData && (
                <div className="result">
                    <h3>Submitted Details</h3>
                    <p><b>Name:</b> {submittedData.name}</p>
                    <p><b>Email:</b> {submittedData.email}</p>
                    <p><b>Password:</b> {submittedData.password}</p>
                    <p><b>Message:</b> {submittedData.message}</p>
                    <p><b>Topic:</b> {submittedData.topic}</p>
                </div>
            )}

        </div>
    );
}

export default CombinedForm; 