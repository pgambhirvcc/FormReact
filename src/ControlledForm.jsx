import { useState } from "react";

const ControlledForm = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [dob, setDob] = useState();

    const handleName = (event) => {
        setName(event.target.value);
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleDob = (event) => {
        setDob(event.target.value);
    }

    const handleSubmit =(event) => {
        event.preventDefault();

        console.log(name, email, password, dob);
    }

    return (
        <div>
            <h1>Controlled Forms</h1>

            <h4>Signup Form</h4>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="">Name</label>
                    <input value={name} onChange={handleName} type="text" placeholder="Enter your Name" />
                </div>

                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input value={email} onChange={handleEmail} type="email" placeholder="Enter your Email" />
                </div>

                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input value={password} onChange={handlePassword} type="password" placeholder="Enter your password" />
                </div>

                <div className="form-control">
                    <label htmlFor="">DOB</label>
                    <input value={dob} onChange={handleDob} type="date" placeholder="Enter your Date of Birth" />
                </div>

                <button>
                    Submit
                </button>
            </form>
            <hr />
        </div>
    )
}

export default ControlledForm;