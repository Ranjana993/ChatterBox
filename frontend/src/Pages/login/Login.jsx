import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-8 rounded-lg shadow-md bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Login And Start Chat With Your  &nbsp;
					<span className='text-yellow-500 underline'>Chatter One</span>
				</h1>

				<form onSubmit={handleSubmit} className="mt-4">
					<div>
						<label className='label p-2'>
							<span className='text-base label-text font-bold'>Username</span>
						</label>
						<input
							type='text'
							placeholder='Enter username'
							className='w-full input input-bordered h-12 bg-opacity-60'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-12 bg-opacity-60'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<Link to='/signup' className='text-sm mt-4 hover:underline hover:text-blue-600  inline-block'>
						{"Don't"} have an account?
					</Link>

					<div>
						<button className='btn btn-block bg-[#FA3242] outline-none border-none hover:bg-[#d92232] text-white btn-sm mt-2 h-12' disabled={loading}>
							{loading ? <span className='loading loading-spinner '></span> : "Login"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Login;
