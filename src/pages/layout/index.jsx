import React from 'react'
import SideMenu from '../../compontens/SideMenu'
import TopHeader from '../../compontens/TopHeader'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from '../home/index.jsx'
import CopyRight from '../list/copyRight.jsx'
import Derive from '../list/derive.jsx'
import List from '../list/index.jsx'
import ArticleAdd from '../articleList/articleAdd'
import ArticleDraft from '../articleList/articleDraft'
import ArticleType from '../articleList/articleType'
import ArticleView from '../articleList/articleView'
import ArticleUpdate from '../articleList/articleUpdate'
import EchartView from '../echartView/index.jsx'
import Audit from '../audit/index'
import { Layout, Spin } from 'antd'
import { connect } from 'react-redux'
const { Content } = Layout;

function BaseLayout(props) {
  return (
    <Layout>
      <SideMenu />
      <Layout>
        <TopHeader />
        <Content>
          <div
            style={{
              padding: 12,
              height: '95%',
              margin: '16px',
              background: '#fff',
              overflowY: 'auto'
            }}
          >
            <Spin spinning={props.isLoading}>
              <Switch >
                <Route path="/home" component={Home}></Route>
                <Route path="/list" component={List}></Route>
                <Route path="/copyRight" component={CopyRight}></Route>
                <Route path="/derive" component={Derive}></Route>
                <Route path="/articleAdd" component={ArticleAdd}></Route>
                <Route path="/articleDraft" component={ArticleDraft}></Route>
                <Route path="/articleType" component={ArticleType}></Route>
                <Route path="/articleView/:id" component={ArticleView}></Route>
                <Route path="/articleUpdate/:id" component={ArticleUpdate}></Route>
                <Route path="/echartView" component={EchartView}></Route>
                <Route path="/audit" component={Audit}></Route>
                <Redirect from="/" to="/home" exact></Redirect>
              </Switch>
            </Spin>
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}
const mapStateToProps = (state) => {
  const { isLoading } = state.changeLoading;
  return {
    isLoading
  }
}
export default connect(mapStateToProps)(BaseLayout)