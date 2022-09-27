import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Layout, Dropdown, Menu, Avatar } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined
} from '@ant-design/icons';
import { connect } from 'react-redux'
const { Header } = Layout;

function TopHeader(props) {
  console.log(props)
  // const [collapsed, setCollapsed] = useState(false);
  // setCollapsed(!collapsed)
  const changeCCollapsed = () => {
    //修改为使用redux
    props.changeCollapsed()
  }


  const menu = (
    <Menu>
      <Menu.Item>
        {JSON.parse(localStorage.getItem('token'))}
    </Menu.Item>
      <Menu.Item danger onClick={() => {
        localStorage.removeItem("token");
        props.history.replace("login")
      }}>
        退出登录
    </Menu.Item>
    </Menu>
  )
  return (
    <Header
      style={{
        padding: '0 40px 0 20px',
        background: '#fff'
      }}
    >
      {
        props.isCollapsed ? <MenuUnfoldOutlined onClick={changeCCollapsed} /> : <MenuFoldOutlined onClick={changeCCollapsed} />
      }

      <div style={{ float: 'right' }}>
        <span style={{ padding: '0 16px', }}>
          欢迎登录: {JSON.parse(localStorage.getItem('token'))}
       </span>
        <Dropdown
          overlay={menu}
          placement="bottom"
          arrow={{
            pointAtCenter: true,
          }}
        >
          <Avatar icon={<UserOutlined />} />
        </Dropdown>

      </div>
    </Header>
  )
}
const mapStateToProps = (state) =>{
  const { isCollapsed } = state.changeCollapsed;
  return {
    isCollapsed
  }
}

const mapDispatchToProps ={
  changeCollapsed(){
    return {
      type:"change_collapsed"
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(TopHeader))