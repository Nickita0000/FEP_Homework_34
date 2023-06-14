import {fetchUser, save, setUserEdit} from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";
import './styles.css'
import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {Button, Form, Input, Space} from 'antd';

const TEMPLATE_PHONE = /^\d{3}(-\d{2}){2}$/;
const TEMPLATE_NAMES = /^[a-zA-Zа-яА-Я]*$/;

export default function ContactForm () {
    let { contactId } = useParams()
    const userEdit = useSelector((state) => state.userEdit)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if(contactId && !userEdit.id) {
            dispatch(fetchUser(contactId))
        }
    }, [dispatch, contactId, userEdit?.id])

    function onFinish(value) {
        const user = {
            ...userEdit,
            "name": value.name,
            "surname": value.surname,
            "phone": value.phone,
        }

        dispatch(save(user))
        navigate('/')
    }

    function onBackButtonClick() {
        navigate('/')
    }

    if (contactId && !userEdit?.id){
        return <div>Loading...</div>
    }

    return (
        <Form
            initialValues={userEdit}
            onFinish={onFinish}
            autoComplete="off"
            style={{padding: '10px'}}
        >
            <Form.Item
                label="Name"
                name="name"
                rules={[
                    {
                        required: true,
                        message: 'Please input name!',
                    },
                    {
                        pattern: TEMPLATE_NAMES,
                        message: 'Name must consist only of letters',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Surname"
                name="surname"
                rules={[
                    {
                        required: true,
                        message: 'Please input surname!',
                    },
                    {
                        pattern: TEMPLATE_NAMES,
                        message: 'Surname must consist only of letters',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Phone number"
                name="phone"
                rules={[
                    {
                        required: true,
                        message: 'Please input phone!',
                    },
                    {
                        pattern: TEMPLATE_PHONE,
                        message: 'Phone number must match the template xxx-xx-xx ',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item>
                <Space>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button onClick={() => onBackButtonClick()}>
                        Back to list
                    </Button>
                </Space>
            </Form.Item>
        </Form>
    )
}

