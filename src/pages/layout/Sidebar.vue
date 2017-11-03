<template>
    <el-menu mode="vertical"  unique-opened :default-active="$route.path" :collapse="isCollapse" text-color="#44667f" active-text-color="#2c9cea">
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
     