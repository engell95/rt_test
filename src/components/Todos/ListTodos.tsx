import React, { useState } from "react";
import { Table, Tag,Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { CheckOutlined , CloseOutlined } from "@ant-design/icons";
var _ = require('lodash');

const ListTodos = ({ listdata,onChangeTodo }: PropTodo) => {

  const ActionRender = (text: string, record: IModelTodosxProfile, index: number) => {
    return (
        <React.Fragment>
          <Button key={record.id} icon={record.completed ? <CloseOutlined  /> : <CheckOutlined  />} type="ghost" onClick={(e)=> {onChangeTodo(record)}}></Button>
        </React.Fragment>
    );
  }

  const CompletedRender = (text: string, record: IModelTodosxProfile, index: number) => {
    return (
        <React.Fragment>
          <Tag color={record.completed ? "green" : "volcano"}>{record.completed ? "True :)" : "False :("}</Tag>
        </React.Fragment>
    );
  }

  const columns: ColumnsType<IModelTodosxProfile> = [
    {
      title: 'Id',
      dataIndex: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
    },
    {
      title: 'Title todo',
      dataIndex: 'title'
    },
    {
      title: 'Completed',
      dataIndex: 'completed',
      render: CompletedRender
    },
    {
      title: 'Action',
      dataIndex: 'Action',
      render: ActionRender
    }
  ];

  return (
    <React.Fragment>
      <Table scroll={{x:500}} columns={columns} dataSource={_.cloneDeep(listdata)} rowKey="id" />
    </React.Fragment>
  );
};

export { ListTodos };