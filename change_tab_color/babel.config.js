module.exports = {
    // 将来webpack调用babel-loader时候 会先加载plugins使用 插件的插件
    plugins:[['@babel/plugin-proposal-decorators',{ legacy:true}]]
}