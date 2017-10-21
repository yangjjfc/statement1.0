<template>
	<div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}" >
		<level-header></level-header>
		<sidebar class="sidebar-container"></sidebar>
		<div class="main-container">
			<div class="mian-nav">
				<Levelbar></Levelbar>
			</div>
			<app-main></app-main>
		</div>
	</div>
</template>

<script>
import { Levelbar, LevelHeader, AppMain, Sidebar } from './index';
export default {
    name: 'layout',
    components: {
        LevelHeader,
        Sidebar,
        AppMain,
        Levelbar 
    },
    computed: {       
        sidebar () {
            return this.$store.state.app.sidebar;
        }
    }
};
</script> 

<style rel="stylesheet/scss" lang="scss" scoped>
	@import '../../style/mixin.scss';
	.app-wrapper {
		position: relative;
		height: 100%;
		width: 100%;
		&.hideSidebar {
			.sidebar-container{
				width:36px;
				overflow: inherit;
			}
			.main-container {
				left: 36px;
			}
		}
		.sidebar-container {
			transition: width 0.28s ease-out;
			width: $menuWidth;
			height: 100%;
			position: fixed;
			top: $menuHeight;
			bottom: 0;
			left: 0;
			z-index: 1001;
			overflow-y: auto;
 			&::-webkit-scrollbar {display:none}
		}
		.mian-nav{
			height: 50px;
			line-height: 50px;
			background-color: #eef1f6;
			margin-bottom: 10px;
    		border-bottom: 1px solid #ccc;
		}
		.main-container {
			transition: left 0.28s ease-out;
			position: absolute;
			top:$menuHeight;
			left:$menuWidth;
			bottom:0;
			right: 0;
			overflow-y:auto;
		}
	}
</style>
