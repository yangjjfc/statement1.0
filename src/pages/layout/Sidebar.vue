<template>
    <el-menu mode="vertical" theme="dark" unique-opened :default-active="$route.path" :collapse="isCollapse">
      <sidebar-item :routes='routers'></sidebar-item>
    </el-menu>
</template>


<script>
import { mapGetters } from 'vuex';
import SidebarItem from './SidebarItem';
export default {
    components: { SidebarItem },
    computed: {
        ...mapGetters([
            'routers',
            'sidebar'  
        ]),
        isCollapse () {
            return !this.sidebar.opened;
        }
    }
};
</script>
     