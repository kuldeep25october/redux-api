import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "../redux/actions/getUsers"
import Contact from "./contact"

const Contacts = () => {
    const dispatch = useDispatch();
    const { users } = useSelector(state => state.userReducer);

    useEffect(() => {
        dispatch(getUsers())
    }, []);

    return (
        <div>
            <h1>Contact Manager</h1>
            {
                users && users.map((user) => (
                    <Contact user={user} key={user.id} />

                ))
            }
        </div>
    )
}

export default Contacts