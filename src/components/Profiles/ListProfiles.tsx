import React, { useState } from "react";
import { Table, Button, Modal, Form, Col, Input, Divider, Row } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { EditOutlined, CloseCircleOutlined, SaveOutlined } from "@ant-design/icons";
var _ = require('lodash');

const ListProfiles = ({ showModal, listdata, onChange, onSave,onEdit,formdata }: PropProfile) => {

    //const [formData, setformData] = useState({} as IModelProfile);

    const EditRender = (text: string, record: IModelProfile, index: number) => {
        return (
            <Button key={record.id} icon={<EditOutlined />} type="ghost" onClick={()=>{onEdit(record)}}></Button>
        );
    }

    const columns: ColumnsType<IModelProfile> = [
        {
            title: 'Id',
            dataIndex: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name'
        },
        {
            title: 'Phone',
            dataIndex: 'phone'
        },
        {
            title: 'Email',
            dataIndex: 'email'
        }
        ,
        {
            title: 'Action',
            dataIndex: 'action',
            render: EditRender
        }
    ];

    return (
        <React.Fragment>
            <Table scroll={{x:500}} columns={columns} dataSource={_.cloneDeep(listdata)} rowKey="id" />
            <Modal title="Info Client." open={showModal} destroyOnClose={true} onCancel={onChange} footer={false} >
                <Form initialValues={formdata} onFinish={onSave}>
                    <Col>
                        <Form.Item name="id" required={true} hidden>
                            <Input disabled />
                        </Form.Item>
                    </Col >
                    <Col>
                        <Form.Item label="Name" name="name"
                            rules={[{ required: true, message: "Name is requerid!" }]} >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item label="Phone" name="phone" rules={[{ required: true, message: "Phone is requerid!" }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item label="Email" name="email" rules={[{ required: true, message: "Email is requerid!" }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Divider />
                    <Row justify="space-around">
                        <Button type="default" onClick={onChange} icon={<CloseCircleOutlined />} >
                            Close
                        </Button>
                        <Button type="primary" htmlType="submit" icon={<SaveOutlined />}>
                            Save
                        </Button>
                    </Row>
                </Form>
            </Modal>
        </React.Fragment>
    );
};

export { ListProfiles };