import GoodsTable from '../../compontens/GoodsTable'
import UseGetGoodsList from '../../hooks/getGoodsList'
import { Button } from 'antd';
export default function List() {
  const { list, buy } = UseGetGoodsList({ typeMarket: 1 });
  return (
    <GoodsTable
      dataSource={list}
      button={
        (id) => <Button size="small"
          onClick={() => buy(id)}
        >购买</Button>
      }
    />
  )
}
