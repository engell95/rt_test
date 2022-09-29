import React, { useEffect, useState } from "react";
import './App.css';
import { Layout, Modal, Card, Spin,Tabs } from 'antd';
import { CloseCircleOutlined } from "@ant-design/icons";
import { ListProfiles } from './components/Profiles';
import { ListTodos } from './components/Todos';
import { InfoService } from './services';
const { Header, Content, Footer } = Layout;

function App() {

  const [LstProfiles, setLstProfiles] = useState([] as Array<IModelProfile>);
  const [LstTodo, setLstTodo] = useState([] as Array<IModelTodo>);
  const [lsttodos, setlsttodos] = useState([] as Array<IModelTodos>);
  const [Loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    fetchListProfiles();
    fetchListTodos();
  }, []);

  useEffect(() => {
    if (LstTodo.length > 0) {
      MergeRequest();
    }
  }, [LstTodo, LstProfiles])

  //Region services
  const fetchListProfiles = async () => {
    var result = InfoService.GetListProfiles();
    result.then((data: any) => {
      setLstProfiles(data);
    })
      .catch((error: any) => {
        Modal.error({
          icon: <CloseCircleOutlined />,
          type: "error",
          title: "Error",
          content: error.response.data
        });
      }).finally(() => { setLoading(false); });
  }

  const fetchListTodos = async () => {
    var result = InfoService.GetListTodos();
    result.then((data: any) => {
      setLstTodo(data);
    })
      .catch((error: any) => {
        Modal.error({
          icon: <CloseCircleOutlined />,
          type: "error",
          title: "Error",
          content: error.response.data
        });
      }).finally(() => { setLoading(false); });
  }

  const updatingProfile = (profile: any) => {
    let changeProfiles = [...LstProfiles]
    let item = changeProfiles.find(x => x.id == profile.id);
    if (item) {
      item.name = profile.name;
      item.email = profile.email;
      item.phone = profile.phone;
      item.website = profile.website;
      item.message = profile.message;
    }
    setLstProfiles(changeProfiles);
    setIsModalVisible(false);
  }

  const MergeRequest = () => {
    const TodoForProfile = LstProfiles.map((a) => ({
      ...LstTodo.find((p) => a.id === p.userId),
      ...a,
    }));
    setlsttodos(TodoForProfile);
  }

  const changeModal = () => {
    setIsModalVisible(!isModalVisible);
  }

  const items = [
    { label: 'Profiles', key: 'item-1', children: <ListProfiles showModal={isModalVisible} data={LstProfiles} onSave={updatingProfile} onChange={changeModal} /> }, // remember to pass the key prop
    { label: 'Todos for profiles', key: 'item-2', children: <ListTodos data={lsttodos} /> },
  ];

  return (
    <Layout  style={{minHeight:"100vh"}}>
      <Header>
        <label style={{color:"white",fontWeight:'bold'}}>RT-test</label>
      </Header>
      <Content className="container">
        <div className="site-layout-content">          
          <Tabs items={items} />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center',fontWeight:'bold' }}>Created by ELOPEZM-DEV</Footer>
    </Layout>
  );
}

export default App;
