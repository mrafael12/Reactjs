import React, { Component } from 'react'
import UserForm from './UserForm'

class User extends Component {
	render() {
		let list = [
			{
				name: "Rafael Paula",
				email: "mrafaelspp@gmail.com"
			},
			{
				name: "João Paulo",
				email: "jpaulo@gmail.com"
			}
		]
		return (
			<div>
			<UserForm></UserForm>
				<table border="1">
					<tr>
						<th>Name</th>
						<th>Email</th>
					</tr>
					{list.map((item) => {
						return <tr>
							<td>
								{item.name}
							</td>
							<td>
								{item.email}
							</td>
						</tr>
					})}
				</table>
			</div>	
		);
	}
}

export default User