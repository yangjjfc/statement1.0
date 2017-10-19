<template>
	<div class="app-wrapper" :class="{hideSidebar:false}" >
		<level-header></level-header>
		<sidebar class="sidebar-container"></sidebar>
		<div class="main-container">
			<!--<navbar></navbar>-->
			<app-main></app-main>
		</div>
	</div>
</template>

<script>
import { LevelHeader, AppMain, Sidebar } from './index';
export default {
    name: 'layout',
    components: {
        LevelHeader,
        Sidebar,
        AppMain
    },
    computed: {       
        
    }
};
</script> 

<style rel="stylesheet/scss" lang="scss" scoped>
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
				margin-left: 36px;
			}
		}
		.sidebar-container {
			transition: width 0.28s ease-out;
			width: 180px;
			height: 100%;
			position: fixed;
			top: 50px;
			bottom: 0;
			left: 0;
			z-index: 1001;
			overflow-y: auto;
 			&::-webkit-scrollbar {display:none}
		}
		.main-container {
			min-height: 100%;
			transition: margin-left 0.28s ease-out;
			margin-left: 180px;
		}
	}
</style>
