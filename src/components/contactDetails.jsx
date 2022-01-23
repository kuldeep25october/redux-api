import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getUser } from "../redux/actions/getUsers"
const ContactDetails = () => {
    const {id} = useParams()
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.userReducer);
    useEffect(() => {
        if (id) {
            dispatch(getUser(id))
        }

    },[id])

    return (
        <div>
            <h2>{user.first_name}</h2>
            <h3>{user.email}</h3>
            <img src={user.avatar} alt="avatar" />
        </div>
    )
}

export default ContactDetails