import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchAPI, setUserEdit} from "./redux/actions";
import {useNavigate} from "react-router-dom";
import {Row,Table, Button} from 'antd';
import {getColumns} from "./getColumns";

export default function List() {
    const list = useSelector((state) => state.list)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=> {
        dispatch(fetchAPI())
    }, [dispatch])

    function onAddButtonClick() {
        dispatch(setUserEdit({}))
        navigate('/create')
    }

    return (
        <div>

            <Row justify={"end"} style={{padding: '10px'}}>
                    <Button onClick={() => onAddButtonClick()}>
                        New contact
                    </Button>
            </Row>


            <Table rowKey={'id'} columns={getColumns(dispatch, navigate)} dataSource={list} />
        </div>
    )
}