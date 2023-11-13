import React, {useState} from 'react'
import { useMutation } from '@apollo/client'
import { GET_USERS, CREATE_USER } from '../graphql/queries'

const CreateUserForm = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [addUser, { loading, error}] = useMutation(CREATE_USER, {
		refetchQueries: [GET_USERS]
	});

	if (loading) return <React.Fragment>"Submitting...;</React.Fragment>
	if (error) return <React.Fragment>Submission error! {error.message};</React.Fragment>

	const onSubmit = (e) => {
		e.preventDefault();
		addUser({variables: { name: name, email: email}})
		setName('')
		setEmail('')
	}

	return (
		<div className='lg:fixed bottom-0 left-0 w-full bg-white border-t border-gray-300'>
			<form className='lg:px-8 pt-2 pb-2' onSubmit={(e) => onSubmit(e)}>
				<div className='lg:flex flex-wrap flex-between items-center justify-center lg:p-0 p-6'>
					<h4 className='font-bold lg:pr-4 mb-2'>Create new user</h4>
					<div className='lg:px-4 mb-2'>
						<input className='border rounded w-full py-2 px-3' 
							type="text"
							value={name}
							placeholder="Name"
							onChange={e => setName(e.target.value)}
						/>
					</div>
					<div className='lg:px-4 mb-2'>
						<input className='border rounded w-full py-2 px-3' 
							type="text"
							value={email}
							placeholder="Email"
							onChange={e => setEmail(e.target.value)}
						/>
					</div>

					<button className='bg-blue-500 text-white px-4 py-2 rounded' type="submit" >
						CreateUser
					</button>
				</div>
			</form>
		</div>
	)
}

export default CreateUserForm;