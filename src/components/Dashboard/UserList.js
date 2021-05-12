import React from 'react';
import {Table} from 'react-bootstrap';

const Users = () => {

    return (
        <div className='Users' >
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role </th>
                        <th>

                        </th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>test</td>
                        <td>test@test</td>
                        <td>Admin</td>
                        <td>
                            <button onClick="">
                                Edit
                            </button>
                        </td>
                    </tr>


                </tbody>
            </Table>


        </div>
    )

}
export default Users;