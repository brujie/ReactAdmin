import React, { useEffect, useState } from 'react'
import { Button, message, Table, Tag } from 'antd';
import { withRouter } from 'react-router-dom'
import moment from 'moment'


function Audit(props) {
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
        return value !== 0 ? <Tag color="green">发布中</Tag> : <Tag color="orange">待审核</Tag>
      }
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
      render: (value) => {
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
          <Button size="small" onClick={() => handleUpdateStaus(column)} type="primary" style={{ margin: '0 15px' }}>审核</Button>
        </div>
      ),
    },
  ];
  const [listData, setListData] = useState([]);
  const handleView = (column) => {
    console.log(column)
    props.history.push(`/articleView/${column.id}`)
  }
  const handleUpdateStaus = (column) =>{
    if(column.auditState === 1){
      message.warning("无需修改状态!")
      return 
    }
    React.$http.patch(`/articleList/${column.id}`,{
      "auditState": 1,
    }).then(res => {
      message.success("审核成功!")
      React.$http.get('/articleList').then(res => {
        setListData(res)
      })
    })
  }
  useEffect(() => {
    React.$http.get('/articleList').then(res => {
      setListData(res)
    })
    console.log(listData)
  }, [])
  return (
    <div>
      <Table dataSource={listData} columns={columns} rowKey={item => item.id} />
    </div>
  )
}

export default withRouter(Audit);


