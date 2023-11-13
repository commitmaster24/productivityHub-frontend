import React from 'react';
import { useQuery } from '@apollo/client';
import UserAvatar from './UserAvatar';
import CreateUserForm from './CreateUserForm';
import { GET_USERS } from '../graphql/queries';


const Users = ({selectUser}) => {
	const {loading, error, data} = useQuery(GET_USERS)
	if (loading) return "Loading..."
	if (error) return `Error ${error.message}`

	return(
		<div className='flex flex-wrap items-center pb-16'>
			{data.users.map(user => (
				<div key={user.id} className="lg:w-1/3 w-full text-center p-4 inline" onClick={() =>selectUser(user)}>
					<UserAvatar user={user} />
				</div>
			))}
			<CreateUserForm />
		</div>

	)
}

export default Users;

// featreus
// atomic