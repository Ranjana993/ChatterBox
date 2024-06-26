import { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import useSignup from "../hook/useSignUp";

const Register = () => {
const [input , setInput] = useState({
	fullName:"",
	username:"",
	gender:"",
	password:"",
	confirmPass :"",

})
	const { loading, signup } = useSignup();

	const handleSubmit =async (e) =>{
		e.preventDefault();
		console.log(input);
		await signup(input)
	}
	const handleCheckboxChange = (gender) => {
		setInput({ ...input, gender });
	};
	return (
		<div className='flex flex-col items-center  justify-center min-w-94 w-[90%] mx-auto lg:w-1/2' >
      <div className='w-full p-4 lg:p-8 rounded-lg shadow-md bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Register Here 
          {/* <span className='text-[#f0d647] italic'> Chatter One</span> */}
        </h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text'>Full Name</span>
						</label>
						<input type='text' placeholder='John Doe' className='w-full input input-bordered  h-12 bg-opacity-60' value={input.fullName}
							onChange={(e) => setInput({ ...input, fullName: e.target.value })} />
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-base label-text'>Username</span>
						</label>
						<input type='text' placeholder='johndoe' className='w-full input input-bordered h-12 bg-opacity-60' value={input.username}
							onChange={(e) => setInput({ ...input, username: e.target.value })} />
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-12 bg-opacity-60' 
							value={input.password}
							onChange={(e) => setInput({ ...input, password: e.target.value })}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='w-full input input-bordered h-12 bg-opacity-60'
							value={input.confirmPass}
							onChange={(e) => setInput({ ...input, confirmPass: e.target.value })}
						/>
					</div>
`
					<GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={input.gender} />

					<Link className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' to='/login'>
						Already have an account?
					</Link>

					<div>
						<button className='btn btn-block bg-[#FA3242] outline-none border-none hover:bg-[#d92232] text-white btn-sm mt-2 h-12' disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Register;
