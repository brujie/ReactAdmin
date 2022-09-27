const { override, fixBabelImports} = require('customize-cra')

// react-app-rewired使用
// http://wmm66.com/index/article/detail/id/165.html
// 按需引入antd配置
module.exports = override(
  fixBabelImports('import',{
    libraryName: 'antd',
    libraryDirector: 'es',
    style: 'css'
  })
)
  