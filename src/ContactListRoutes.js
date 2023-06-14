import {Routes, Route} from "react-router-dom";
import List from "./List";
import ContactForm from "./Form";
import NotFound from "./NotFound";
import { Layout } from "antd";

const contentStyle = {
    textAlign: 'start',
    minHeight: 120,
    lineHeight: '25px',
    color: '#fff',
    backgroundColor: '#10e2e9',
};

export default function ContactListRoutes() {
    return (
    <Layout>
        <Layout.Content style={contentStyle}>
            <Routes>
                <Route path='*' element={<List />}/>
                <Route path='/create' element={<ContactForm />}/>
                <Route path='/:contactId/edit' element={<ContactForm />}/>
                <Route path='/*' element={<NotFound />}/>
            </Routes>
        </Layout.Content>
    </Layout>
    )
}