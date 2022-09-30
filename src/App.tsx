import React, { useEffect, useState } from "react";
import './App.css';
import { Layout, Modal, Card, Spin,Tabs } from 'antd';
import { CloseCircleOutlined } from "@ant-design/icons";
import { ListProfiles } from './components/Profiles';
import { ListTodos } from './components/Todos';
import { InfoService } from './services';
import { profile } from "console";
const { Header, Content, Footer } = Layout;

function App() {

  const [LstProfiles, setLstProfiles] = useState([] as Array<IModelProfile>);
  const [Profile, setProfile] = useState({} as IModelProfile);
  const [LstTodos, setLstTodos] = useState([] as Array<IModelTodo>);
  const [LstTodosxProfile, setLstTodosxProfile] = useState([] as Array<IModelTodosxProfile>);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    fetchListProfiles();
    fetchListTodos();
  }, []);

  useEffect(() => {
    if (LstTodos.length > 0) {
      MergeRequest();
    }
  }, [LstTodos, LstProfiles])

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
      });
  }

  const fetchListTodos = async () => {
    var result = InfoService.GetListTodos();
    result.then((data: any) => {
      setLstTodos(data);
    })
      .catch((error: any) => {
        Modal.error({
          icon: <CloseCircleOutlined />,
          type: "error",
          title: "Error",
          content: error.response.data
        });
      });
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

  const updatingTodos = (todo: any) => {
    let changeTodos = [...LstTodos]
    let item = changeTodos.find(x => x.id == todo.id);
    if (item) {
      item.completed = !item.completed;
    }
    setLstTodos(changeTodos);
  }

  const MergeRequest = () => {
    const TodoForProfile = LstProfiles.map((a) => ({
      ...LstTodos.find((p) => a.id === p.userId),
      ...a,
    }));
    setLstTodosxProfile(TodoForProfile);
  }

  const changeModal = () => {
    setIsModalVisible(!isModalVisible);
  }

  const onEdit = (profile: any) => {
    setProfile(profile);
    setIsModalVisible(!isModalVisible);
  }

  const items = [
    { label: 'Profiles', key: 'item-1', children: <ListProfiles showModal={isModalVisible} listdata={LstProfiles} onSave={updatingProfile} onChange={changeModal} onEdit={onEdit} formdata={Profile}/> }, // remember to pass the key prop
    { label: 'Todos for profiles', key: 'item-2', children: <ListTodos listdata={LstTodosxProfile} onChangeTodo={updatingTodos}/> },
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
