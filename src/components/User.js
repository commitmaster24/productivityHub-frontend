import React from 'react'
import { useQuery } from '@apollo/client'
import UserAvatar from './UserAvatar'
import Tasks from './Tasks'
import Notes from './Notes'
import { GET_USER } from '../graphql/queries'

const User = ({user, selectUser}) => {
	const {loading, error, data} = useQuery(GET_USER, {variables: {id: user.id}})
	if (loading) return "Loading..."
	if (error) return `Error: ${error.message}`

	return (
		<React.Fragment>
			<div className='flex flex-wrap my-4'>
				<button className='bg-gray-200 hover:bg-gray-600 text-gray-900 font-bold py-2 px-4 rounded' 
				onClick={()=>selectUser(null)}>
					Back
				</button>
			</div>
			<div className='flex flex-wrap items-start mb-4'>
				<div className='lg:w-1/4 w-full rounded text-center'>
					<UserAvatar user={user} />
				</div>
				<div className='px-4 flex-1 w-full max-h-[32rem] overflow-y-scroll'>
					<Tasks tasks={data.user.taskMasters} user={user} />
				</div>
				
				<div className='px-4 flex-1 w-full max-h-[32rem] overflow-y-scroll'>
					<Notes notes={data.user.noteGenius} user={user} />
				</div>
			</div>
		</React.Fragment>
	)
}

export default User;

// 