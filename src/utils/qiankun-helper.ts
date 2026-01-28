/**
 * 跳转到指定URL并更新历史记录（fix：子应用页面间多次跳转后，浏览器导航回退时回到首页）
 * @param url - 要跳转的目标URL地址
 * @param state - 可选参数，用于存储历史记录的状态信息，默认为空对象
 */
export const jumpTo = (url: string, state: Record<string, string> = {}) => {
  // 使用history API进行页面跳转，并更新历史记录
  history.pushState(state, '', url)
}
