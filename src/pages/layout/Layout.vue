<template>
	<div class="app-wrapper" :class="{hideSidebar:false}" >
		<level-header></level-header>
			<sidebar class="sidebar-container"></sidebar>
			<div class="main-container">
				<div class="mian-top">
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
				left: 36px;
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
		.mian-top{
			height: 50px;
			line-height: 50px;
			background-color: #eef1f6;
		}
		.main-container {
			min-height: 100%;
			transition: left 0.28s ease-out;
			position: fixed;
			top:50px;
			left:180px;
			bottom:0;
			right: 0;
			overflow-y:auto;
		}
	}
</style>
