import { gql } from '@apollo/client';

export const GET_USERS = gql`
	{
		users{
			id 
			name
			email
			notesCount
			tasksCount
		}
	}
`

export const CREATE_USER = gql`
	mutation CreateUser($name: String!, $email: String!){
		createUser(input: { name: $name, email: $email}){
			user{
				id 
				name
				email
				notesCount
				tasksCount
			}
			errors
		}
	}
`

export const GET_USER = gql`
	query User($id: ID!){
		user(id: $id){
			taskMasters {
				name
				description
				dueDate
			}
			noteGenius{
				name
				content
			}
		}
	}
` 

export const CREATE_TASK = gql`
	mutation CreateUser($name: String!, $description: String!, $dueDate: String!, $userId: String!){
		createTask(input: { name: $name, description: $description, dueDate: $dueDate, userId: $userId }){
			task{
				id
				name
				dueDate
				description
			}
			errors
		}
	}
`

export const DESTROY_TASK = gql`
	mutation destroyTask($name: Interger!){
		task{
			id,
			name
		}
		errors
	}
`