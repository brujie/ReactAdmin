import React, { useEffect, useState } from 'react'
import { Button, Modal, message, Table, Tag } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom'
import moment from 'moment'
const { confirm } = Modal;
function ArticleDraft(props) {
  const [listData, setListData] = useState([]);
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
    },
    // {
    //   title: '内容',
    //   dataIndex: 'content',
    //   key: 'content',
    // },
    {
      title: '作者',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: '发布状态',
      dataIndex: 'auditState',
      key: 'auditState',
      render: (value) => {
        return value !== 0 ? <Tag color="green">待发布</Tag> : <Tag color="orange">待发布</Tag>
      }
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
      render:(value)=>{
        return <span>{moment(value).format('YYYY/MM/DD HH:mm:ss')}</span>
      }
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (column) => (
        <div>
          <Button size="small" onClick={() => handleView(column)}>查看</Button>
          <Button size="small" onClick={() => handleEdit(column)} type="primary" style={{ margin: '0 15px' }}>编辑</Button>
          <Button size="small" onClick={() => handlePublish(column)} style={{ marginRight: '15px' }}>发布</Button>
          <Button size="small" onClick={() => handleDel(column)} danger>删除</Button>
        </div>
      ),
    },
  ];

  const handleView = (column) => {
    console.log(column)
    props.history.push(`/articleView/${column.id}`)
  }
  const handleEdit = (column) => {
    props.history.push(`/articleUpdate/${column.id}`)
  }
  const handlePublish = (column) =>{
    
    React.$http.patch(`/articleList/${column.id}`,{
      "auditState": 1,
    }).then(res => {
      message.success("修改成功!")
      React.$http.get('/articleList').then(res => {
        setListData(res)
      })
    })
  }
  const handleDel = (column) => {
    confirm({
      title: '警告',
      icon: <ExclamationCircleOutlined />,
      content: '确定删除吗?',
      okText: '确定',
      okType: 'danger',
      cancelText: '取消',
      onOk() {
        React.$http.delete(`/articleList/${column.id}`).then(res => {
          message.success("删除成功!")
          React.$http.get('/articleList').then(res => {
            setListData(res)
          })
        })
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  useEffect(() => {
    React.$http.get('/articleList').then(res => {
      setListData(res.filter(item =>{
        return item.auditState === 0
      }))
    })
    console.log(listData)
  }, [])
  return (
    <div>
      <Table dataSource={listData} columns={columns} rowKey={item => item.id} />
    </div>
  )
}

export default withRouter(ArticleDraft); 