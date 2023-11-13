import React from 'react'

function Tasks({user, tasks}) {

	return (
		<React.Fragment>
			<div className='lg:pl-18'>
				<h1 className='font-bold text-xl mb-4 bg-amber-200 px-4 py-3 rounded'>Tasks of {user.name}</h1>
				{tasks.map(task => (
					<div key={task.id}>
						<div className='p-6 shadow mb-4 text-lg'>
							<p><strong>Title: </strong>{task.name}</p>
							<p><strong>Due Date: </strong>{task.dueDate}</p>
							<p><strong>Description: </strong>{task.description}</p>
						</div>
					</div>
				))}
			</div>
		</React.Fragment>
	)
}

export default Tasks