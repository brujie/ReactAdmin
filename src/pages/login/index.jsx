import React from 'react'
import { withRouter } from 'react-router-dom'
import bg from '../../assets/images/login_bg.jpg'
import { Button, Form, Input } from 'antd';
const imgStyle = {
  width: '100%',
  height: '100%',
  backgroundImage: 'url(' + bg + ')',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}
const formStyle = {
  width: '500px',
  background: 'rgb(255, 255, 255)',
  padding: '40px 40px 0 40px',
  borderRadius: '8px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: '.9'
}

function Login(props) {
  const onFinish = (values)=>{
    const { Username,Password} = values;
    console.log(Username,Password)
    localStorage.setItem('token',JSON.stringify(Username))
    props.history.push("/")
  }
  return (
    <div style={imgStyle}>
      <div style={formStyle}>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
          onFinish={onFinish}
        >
          <Form.Item
            name="Username"
            label="用户名"
            rules={[
              {
                required: true,
                message: '请输入用户名!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="Password"
            label="密码"
            rules={[
              {
                required: true,
                message: '请输入密码!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default withRouter(Login)
