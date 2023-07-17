import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from "react";
import axios from "axios";
import {getUserList, remove} from "../features/users/userSlices.jsx";

function User() {
    const users = useSelector(state => state.user.users);
    const dispatch = useDispatch();
    const [status, setStatus] = useState(false);
    const handleClick = () => {
        setStatus(true);
    }
    const handleRemove = (id) => {
        if (confirm('Delete?')) dispatch(remove(id));
    }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                dispatch(getUserList(res.data));
            })
    }, []);

    let listUser;
    if (status) {
        listUser =
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.website}</td>
                        <td>
                            <button onClick={() => handleRemove(user.id)}>
                                Delete user
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
    }

    return (
        <div>
            <h1>User list</h1>
            <button onClick={handleClick}>Get users</button>
            {listUser}
        </div>
    )
}

export default User;