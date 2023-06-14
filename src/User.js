import { remove, setUserEdit} from "./redux/actions";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

export default function User({ user }) {


    return(
        <tr>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>{user.phone}</td>
            <td>
                <button onClick={onEditBtnClick}>Edit</button>
                <button onClick={onDeleteBtnClick}>Delete</button>
            </td>
        </tr>
    )
}