<template>
  <div class='menu-wrapper'>
    <template v-for="item in routes">
      <li class="el-menu-item submenu-title-noDropdown" style="padding-left: 20px;" v-if="item.virtual" @click="toggleSideBar"> 
        <icon-svg v-if='item.icon' :icon-class="item.icon"></icon-svg>
        <span>{{item.name}}</span>  
      </li>
      <router-link v-if="!item.hidden&&item.noDropdown&&item.children.length>0" :to="item.path+'/'+item.children[0].path">
        <el-menu-item :index="item.path+'/'+item.children[0].path" class='submenu-title-noDropdown'>
          <em></em>
          <icon-svg v-if='item.icon' :icon-class="item.icon"></icon-svg>
          <span>{{item.children[0].name}}</span>
        </el-menu-item>
      </router-link>
  
      <el-submenu :index="item.name" v-if="!item.noDropdown&&!item.hidden&&!item.virtual">
        <template slot="title">
          <em></em>
          <icon-svg v-if='item.icon' :icon-class="item.icon"></icon-svg>
          <span>{{item.name}}</span>
        </template>
        <template v-for="child in item.children" v-if='!child.hidden'>
  
          <sidebar-item class='nest-menu' v-if='child.children&&child.children.length>0' :routes='[child]'> </sidebar-item>
  
          <router-link v-else :to="item.path+'/'+child.path">
            <el-menu-item :index="item.path+'/'+child.path">
              <icon-svg v-if='child.icon' :icon-class="child.icon"></icon-svg>
              <span>{{child.name}}</span>
            </el-menu-item>
          </router-link>
  
        </template>
  
      </el-submenu>
  
    </template>
  </div>
</template>

<script>
export default {
    name: 'SidebarItem',
    props: {
        routes: {
            type: Array
        }
    },  
    methods: {
        toggleSideBar () {
            this.$store.dispatch('ToggleSideBar');
        }
    }
};
</script>

