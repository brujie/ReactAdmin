import React, {
  useEffect,
  useState
} from 'react'

function UseGetGoodsList(params) {
  const {
    typeMarket,
    commodityCategoryIdList
  } = params;
  const [list, setList] = useState([]);
  useEffect(() => {
    React.$http.post('/api/market/api/saleRecord/list/v2', {
      "authorId": null,
      "chainContract": null,
      "commodityCategoryId": null,
      "commodityCategoryIdList": commodityCategoryIdList && [...commodityCategoryIdList] || [],
      "commodityId": null,
      "highPrice": "",
      "lowPrice": "",
      "pageCount": 1,
      "pageSize": 20,
      "seriesWorks": null,
      "seriesWorksId": null,
      "sort": {
        "field": 2,
        "upOrDown": 1
      },
      "statusSell": 1,
      "topicId": null,
      "typeMarket": typeMarket,
      "commodityTraitList": [],
      "sig": "YAkxch3UHVu6f6qIkqeDFPBRQmusz8oys5crMxhTYJTQd2D1eaGLNGfR3pY1C+zUhKoay9LBcT1UPioG7oZRQA=="
    }).then(res => {
      setList(res.data.records)
    })
  }, [])

  const buy = (id) =>{
    window.open(`https://www.theone.art/goods/${id}`,'__blank')
  }
  return {
    list,
    buy
  }
}

export default UseGetGoodsList;