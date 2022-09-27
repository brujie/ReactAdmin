import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import moment from 'moment'

import { Descriptions, PageHeader, Tag, Card  } from 'antd';
function ArticleView(props) {
  const [articleObj, setArticleObj] = useState(null);
  useEffect(() => {
    React.$http.get(`/articleList/${props.match.params.id}`).then(res => {
      setArticleObj(res)
    })
    console.log(articleObj)
  }, [])
  return (
    articleObj &&  <PageHeader
      ghost={false}
      onBack={() => window.history.back()}
      title={articleObj.title}
      subTitle="文章详情"
    >
      
       <Descriptions size="small" column={3}>
        <Descriptions.Item label="发布者">{articleObj.author}</Descriptions.Item>
        <Descriptions.Item label="文章类型">
          {articleObj.caltegoryId}
        </Descriptions.Item>
        <Descriptions.Item label="发布时间">{moment(articleObj.createTime).format('YYYY/MM/DD HH:mm:ss')}</Descriptions.Item>
        <Descriptions.Item label="审核状态">
          {articleObj.auditState == 0 ? <Tag color="orange">审核中</Tag> : <Tag color="green">发布中</Tag>}
        </Descriptions.Item>
        <br />
        <br />
        <Descriptions.Item label="阅读量">{parseInt(Math.random() * 100)}</Descriptions.Item>
        <Descriptions.Item label="点赞量">{parseInt(Math.random() * 100)}</Descriptions.Item>
        <Descriptions.Item label="收藏量">{parseInt(Math.random() * 100)}</Descriptions.Item>
        <Descriptions.Item label="文章内容"></Descriptions.Item>
      </Descriptions>
      <Card>
      <div dangerouslySetInnerHTML = {{ __html: articleObj.content }} />
      </Card>
    </PageHeader>
  )
}

export default withRouter(ArticleView);