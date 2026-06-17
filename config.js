
// ============管理员编辑区【在这里加学长学姐账号，随便改】============
const rawUser = {
  // 格式："学号":{code:"队内邀请码",balance:算力余额点数}
  "202201001": {code:"ky2026dx",balance:999},
  "202201002": {code:"ky2026dx",balance:666},
  "2023boshi01": {code:"admin2026",balance:1999}
}
// 自动Base64加密，前端源码无法直接查看账号余额，保护队内数据
const ENCRYPT_USER_DATA = btoa(JSON.stringify(rawUser))
