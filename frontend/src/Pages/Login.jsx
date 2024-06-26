import { useState } from "react";
import {Link} from "react-router-dom"

const Login = () => {
	const [input, setInput] = useState({
		username: "",
		password: "",
	})


	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-8 rounded-lg shadow-md bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Login And Start Chat With Your 
          <span className='text-[#f0d647] italic'> Chatter One</span>
				</h1>

				<form>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text'>Username</span>
						</label>
						<input type='text' placeholder='Enter username' className='w-full input input-bordered h-12 bg-opacity-60' value={input.username}
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
					<Link to='/register' className='text-sm  hover:underline hover:text-blue-800 mt-2 inline-block'>
						{"Don't"} have an account?
					</Link>

					<div>
            <button className='btn btn-block bg-[#FA3242] outline-none border-none hover:bg-[#d92232] text-white btn-sm mt-2 h-12'>Login</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Login;
