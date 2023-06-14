import { Button, Space } from 'antd';
import {remove, setUserEdit} from "./redux/actions";

export function getColumns(dispatch, navigate) {

    function onDeleteBtnClick(user) {
        dispatch(remove(user.id))
    }

    function onEditBtnClick(user) {
        dispatch(setUserEdit({id: ''}))
        navigate(`/${user.id}/edit`)
    }

    return [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Surname',
            dataIndex: 'surname',
            key: 'surname',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, user) => (
                <Space wrap>
                    <Button onClick={() => onEditBtnClick(user)} type="primary">Edit</Button>
                    <Button onClick={() => onDeleteBtnClick(user)} type="primary" danger>Delete</Button>
                </Space>
            )
        },
    ]
}