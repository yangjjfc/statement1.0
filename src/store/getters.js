export default {
    userInfo: (state) => state.user.userInfo,
    token: (state) => state.userInfo && state.userInfo.token, // 用户token
    enterpriseNo: (state) => state.userInfo && state.userInfo.enterpriseNo,
    userno: (state) => state.userInfo && state.userInfo.userNo,
    clientid: (state) => state.userInfo && state.userInfo.clientId,
    loginAccount: (state) => state.userInfo && state.userInfo.loginAccount,
    routers: state => state.permission.routers,
    roles: (state) => state.user.roles,
    sidebar: state => state.app.sidebar
};