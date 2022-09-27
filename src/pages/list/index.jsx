import GoodsTable from '../../compontens/GoodsTable'
import UseGetGoodsList from '../../hooks/getGoodsList'
import { Button } from 'antd';

export default function List() {
  const { list } = UseGetGoodsList({
    typeMarket: 2,
    commodityCategoryIdList: ["af94b94273604ed578289410b5b5b465", "118176c83bf937ad1a97131eade59979", "4d4caad7d37950c1d1600c391e477fbd", "46dfd47af2a729734d4affe01f07ecbd", "645ed5e69322b1c4bf95674bf98985bc", "70dc7631a702f711834615168544c50a", "b4e96cbb8618c3e34224a31b8898503a", "3236857a5d43c0c71eb88f0290242697", "1031e2921fcea250710387fcac8f760c", "2df26b5ca83db6d67a6fdd7b2bb7fb64", "1740151dcf257b79402cd7a5fd3efc7a", "f21962887bcdf05432e4e4d07fdb1420", "d8d8cd27e14712724ab222874279544b", "6b5bea2bce6a28591a1532e3755f37b4", "6977d034782a6ce38e1ff47cf964768f", "bef964cb5a95cb4837fe6b44f5bcd06c", "216c9ad6028db4fdb5475d2658409381", "9158b0b3949b16f0e37e54fbd4bbec0b", "7f3cfc0e41c3e4d0b25bd92234009a8a", "1068258265e45be6cb4011b75d2d8dbb", "304a599039031451b5301b16951e094b", "418ffe566ee5c40ba298cb0b1bb43915", "754260c668721eaec504b29ed8fa3760", "ffa4dbdb9b15be098817a167c37ba52c", "26dd6413eb1c8cf0b41f10ad676e9f8f", "17a5affb91eb2761b8b2cfaef9eed5a4", "c9a06b43987e15312ccfc5ef53ebfcf4", "f0a18eca4f4360cf932944185461b2bd", "8ef46fad551e7dd1906eaa87a03bf7f5", "4b1f8e318c2b91516e5aa7a8bb23b9d1", "a3aaa8ca7856c7ac770ac02f7153f16b", "0a2719639907dcb4e8d3570f6c3f7fab", "675f8dc233293b8c2d0fc794a42c3cd1", "a5531319024bec23f6683c9cd92dfa3c", "86a6a44d3ba810817ecb1b8c7a8c2b30", "66356cd65da71c9f58f36f64fc05a775"]
  });
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
