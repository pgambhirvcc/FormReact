import React, { useRef } from 'react'

const UnControlledForm = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const dobRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
        console.log(dobRef.current.value);
    }

  return (
         <div>
            <h1>UnControlled Forms</h1>

            <h4>Signup Form</h4>
            <form className='uncontrolled-form' onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="">Name</label>
                    <input ref={nameRef} type="text" placeholder="Enter your Name" />
                </div>

                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input ref={emailRef} type="email" placeholder="Enter your Email" />
                </div>

                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input ref={passwordRef}  type="password" placeholder="Enter your password" />
                </div>

                <div className="form-control">
                    <label htmlFor="">DOB</label>
                    <input ref={dobRef} type="date" placeholder="Enter your Date of Birth" />
                </div>

                <button>
                    Submit
                </button>
            </form>
            <hr />
        </div>
  )
}

export default UnControlledForm