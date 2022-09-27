import { Table, Image, Button } from 'antd';

export default function GoodsTable(props) {
  const columns = [
    {
      title: '名称',
      dataIndex: 'commodity',
      render: (text, record) => {
        if (text !== '')
          return (
            <div>{text.name}</div>
          )
      }
    },
    {
      title: '主图',
      dataIndex: 'commodity',
      render: (text, record) => {
        if (text !== '')
          return (
            <Image
              preview={true}
              src={text.cover}
              width={60}
            />
          )
      }
    },
    {
      title: '价格',
      dataIndex: 'price',
    },
    {
      title: '状态',
      dataIndex: 'statusSale',
    },
    {
      title: '作者',
      dataIndex: 'author',
      render: (text, record) => {
        if (text !== '')
          return (
            <div>{text.name}</div>
          )
      }
    },
    {
      title: 'Action',
      key: 'x',
      render: (column) => {
        return <div>
          {props.button(column.id)}
        </div>
      },
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={props.dataSource} rowKey={item => item.id}/>
    </div>
  )
}
