import React from 'react'

const Notes = ({notes, user}) => {
	return (
		<React.Fragment>
			<div className='lg:pl-18'>
				<h1 className='font-bold text-xl mb-4 bg-amber-200 px-4 py-3 rounded'>Notes of {user.name}</h1>
				{notes.map(note => (
					<div key={notes.id}>
						<div className='p-6 shadow mb-4 text-lg'>
							<p><strong>Title: </strong>{note.name}</p>
							<p><strong>Content: </strong>{note.content}</p>
						</div>
					</div>
				))}
			</div>
		</React.Fragment>
	)
}

export default Notes