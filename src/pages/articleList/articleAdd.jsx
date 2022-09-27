import React, { useState, useEffect, useRef } from 'react';
import { SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Button, message, Steps, Form, Input, Select,notification,PageHeader } from 'antd';
import ArticleEditor from '../../compontens/ArticleEditor.jsx'
const { Step } = Steps;
const caltegory = [
  {
    title: '新闻',
    value: '1',
    id: 1
  },
  {
    title: '财经',
    value: '2',
    id: 2
  },
  {
    title: '娱乐',
    value: '3',
    id: 3
  },
];
export default function ArticleAdd(props) {
  const [current, setCurrent] = useState(0);
  const [formInfo,setFormInfo] = useState({});
  const [content,setContent] = useState("");
  const next = () => {
    if (current === 0) {
      formRef.current.validateFields().then(res => {
        setFormInfo(res)
        setCurrent(current + 1);
      })
    } else {
      if(content === "" || content === "<p></p>"){
        message.error("文章内容不能为空!")
      } else {
        console.log(formInfo,content)
        setCurrent(current + 1);
      }
    }
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const handleSave = (auditState) =>{
    const user = JSON.parse((localStorage.getItem('token')))
    React.$http.post('/articleList',{
      ...formInfo,
      "content":content,  
      "author":user,  
      "auditState":auditState,
      "publishState":0,
      "createTime": Date.now(),
    }).then(res =>{
      notification.info({
        message: `通知`,
        description:
         `${auditState == 0 ? '您可以到草稿箱查看内容':'您可以到文章分类列表查看内容'}`,
        placement:"bottomRight",
      });
      props.history.push(auditState == 0 ? '/articleDraft':'/articleType')
    })
  }
  // useEffect(()=>{

  // },[])
  const formRef = useRef(null)
  return (
    <div className="step-wrap">
         <PageHeader
      ghost={false}
      onBack={() => window.history.back()}
      title="文章新增"
    >
      <Steps current={current}>
        <Step status="finish" title="基本信息" description="文章标题以及分类" icon={<UserOutlined />} />
        <Step status="wait" title="文章内容" description="文章正文" icon={<SolutionOutlined />} />
        <Step status="wait" title="编写完成" description="文章发布" icon={<SmileOutlined />} />
      </Steps>
      <div className="step-content">
        <div className={current == 0 ? '' : 'hidden'}>
          <Form
            ref={formRef}
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            <Form.Item
              label="文章标题"
              name="title"
              rules={[{ required: true, message: '文章标题不可以为空!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="文章类别"
              name="caltegoryId"
              rules={[{ required: true, message: '文章类别不可以为空!' }]}
            >
              <Select>
                {
                  caltegory.map(item => (
                    <Select.Option key={item.id} value={item.id}>{item.title}</Select.Option>
                  ))
                }
              </Select>
            </Form.Item>
          </Form>
        </div>
        <div className={current == 1 ? '' : 'hidden'}>
          <ArticleEditor getContent={(value)=>{
            setContent(value)
          }}/>
        </div>
        <div className={current == 2 ? '' : 'hidden'}></div>
      </div>
      <div className="step-options">
        {current < 2 && (
          <Button type="primary" onClick={() => next()}>
            下一步
          </Button>
        )}
        {current === 2 && (
          <div>
            <Button type="primary" onClick={
              () => handleSave(1)}>
              提交审核
            </Button>
            <Button type="primary" 
            style={{
              margin: '0 8px',
            }}
            onClick={()=>{handleSave(0)}}
            >
              保存草稿
            </Button>
            <Button
              style={{
                margin: '0 8px',
              }}
              onClick={() => prev()}
            >
              上一步
          </Button>
          </div>
        )}
        {current > 0 && current != 2 && (
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => prev()}
          >
            上一步
          </Button>
        )}
      </div>
      </PageHeader>
    </div>
  )
}
