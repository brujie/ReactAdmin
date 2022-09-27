import React, { useEffect, useState } from 'react'
import { Card, List, PageHeader,Image } from 'antd';
export default function Home() {
  const [list, setList] = useState([]);
  const goList = (uuid) =>{
    window.open(`https://www.theone.art/news/${uuid}`)
  }
  useEffect(() => {
    React.$http.post('/api/market/api/dynamicNews/topList', {
      count: 8,
      type: 2
    }).then(res => {
      setList(res.data)
      console.log(list)
    })
  }, [])
  return (
    <div>
      <PageHeader
        title="首页"
        subTitle="This is a subtitle"
      ></PageHeader>
      <List
        grid={{
          gutter: 24,
          xs: 1,
          sm: 1,
          md: 2,
          lg: 3,
          xl: 3,
          xxl: 3,
        }}
        dataSource={list}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.name} style={{cursor:'pointer'}} onClick={()=>{goList(item.uuid)}}>
            <Image
              preview={false}
              src={item.cover}
            />
            </Card>
          </List.Item>
        )}
      />
    </div>
  )
}
