const permission = {
    state: {
        sidebar: {
            opened: !parseInt(sessionStorage.getItem('sidebarStatus'))
        }
    },
    mutations: {
        // 设置路由
        TOGGLE_SIDEBAR: state => {
            if (state.sidebar.opened) {
                sessionStorage.setItem('sidebarStatus', 1);
            } else {
                sessionStorage.setItem('sidebarStatus', 0);
            }  
            state.sidebar.opened = !state.sidebar.opened;
        }  
    },
    actions: {
        ToggleSideBar ({ commit }) {
            commit('TOGGLE_SIDEBAR');
        }    
    } 
};

export default permission;