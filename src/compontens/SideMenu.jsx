import React from 'react'
import { withRouter} from 'react-router-dom'
import { Layout, Menu  } from 'antd';
import { connect } from 'react-redux'
const { Sider } = Layout;
const menuList = [
  {
    key:'/home',
    title:'首页',
  },
  {
    key:'/list',
    title:'唯一艺术',
    children:[
      {
        key:'/derive',
        title:'衍生品',
      },
      {
        key:'/copyRight',
        title:'版权品',
      },
      {
        key:'/list',
        title:'平台空投',
      }
    ]
  },
  {
    key:'/articleList',
    title:'文章列表',
    children:[
      {
        key:'/articleAdd',
        title:'编写文章',
      },
      {
        key:'/articleDraft',
        title:'草稿箱',
      },
      {
        key:'/articleType',
        title:'文章分类',
      }
    ]
  },
  {
    key:'/audit',
    title:'发布管理',
    children:[
      {
        key:'/audit',
        title:'文章审核',
      }
    ]
  },
  {
    key:'/echartView',
    title:'图表渲染',
  }
]
function SideMenu(props) {
  const renderMenu = (menuList) =>{
    return menuList.map(item =>{
      if(item.children){
        return <Menu.SubMenu key={item.key} title={item.title}>
          {renderMenu(item.children)}
        </Menu.SubMenu>
      } 
      return <Menu.Item key={item.key} onClick={()=>{props.history.push(item.key)}}>{item.title}</Menu.Item>
    })
  }
  const selectKeys = [props.location.pathname];
  const selectOpenKeys = ['/' + props.location.pathname.split('/')[1]];
  return (
    // breakpoint="lg" // 取消折叠
    // collapsed 修改为redux状态数据
    <Sider
      collapsed={props.isCollapsed}
      collapsedWidth="65"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo"></div>
      <Menu
        theme="dark"
        mode="inline"
        defaultOpenKeys={selectOpenKeys}
        selectedKeys={selectKeys}
      >
        {renderMenu(menuList)}
      </Menu>
    </Sider>
  )
}
// 获取redux中的状态,使用props接收
const mapStateToProps = (state)=>{
  const { isCollapsed } = state.changeCollapsed;
  return {
    isCollapsed
  }
}

export default connect(mapStateToProps)(withRouter(SideMenu))
