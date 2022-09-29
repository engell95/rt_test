import React, {useEffect,useState } from "react";
import logo from './logo.svg';
import './App.css';
import {Layout, Menu,Modal} from 'antd';
import { EditOutlined,LoadingOutlined,SaveOutlined,CloseCircleOutlined } from "@ant-design/icons";
import {ListTable} from './components/PokeAll';
import {PokeService} from './services';
const { Header, Content, Footer } = Layout;

function App() {

  const [lstpokeall,setlstpokeall] = useState([] as Array<IModelLoginRequest>);

  useEffect(()=>{
    fetchListPokeall();
  },[]);
  
  const fetchListPokeall = async()=>{
  
    var result= PokeService.GetListPoke();
    
    result.then((data:any)=>{
        console.log(data);
    })
    .catch((error:any)=>{
  
        Modal.error({
            icon:<CloseCircleOutlined/>,
            type:"error",
            title:"Error",
            content:error.response.data
    
        });
    })//.finally(()=>{setLoading(false);});
  
  }

  return (
  <Layout className="layout-main">
    <Header>
      <label>PokeTest</label>
      <Menu
        theme="dark"
        mode="horizontal"
      />
    </Header>
    <Content  className="container">
      <div className="site-layout-content">
        <ListTable data={lstpokeall}/>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Created by ELOPEZM-DEV</Footer>
  </Layout>
  );
}

export default App;
