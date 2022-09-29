import React, { useState } from "react";
import { Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
var _ = require('lodash');

const ListTodos = ({ data }: PropTodo) => {

  const columns: ColumnsType<IModelTodos> = [
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
      render: (e) => <Tag color={e.completed ? "green" : "volcano"}>{e.completed ? "True :)" : "False :("}</Tag>
    }
  ];

  return (
    <React.Fragment>
      <Table scroll={{x:500}} columns={columns} dataSource={_.cloneDeep(data)} rowKey="id" />
    </React.Fragment>
  );
};

export { ListTodos };