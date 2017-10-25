<template>
    <section class="container_setion">
        <!--工具条-->
        <el-row>
            <el-col :span="24" class="toolbar">
                <el-form :inline="true" @submit.native.prevent="">
                    <el-form-item>
                        <curs-dropdown value="请选择要查询的医院" classx="w180" :list="list"></curs-dropdown>
                    </el-form-item>
                    <el-form-item>
                        <el-select v-model="from.search_state.value" placeholder="请选择" class="w120 " size="small" @change="change">
                            <el-option v-for="item in from.search_state.options" :label="item.label" :value="item.value" :key="item.value"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <curs-dropdown value="请选择要查询的医院" classx="w180" :list="list"></curs-dropdown>
                    </el-form-item>
                    <el-form-item>
                        <datePicker :startTime.sync='from.startTime' :endTime.sync='from.endTime' classx="w140" type="month"></datePicker>
                    </el-form-item>
                    <el-form-item>
                        <el-input placeholder="请输入物资编号/ERP编码" v-model.trim="from.no"    @keyup.native.enter="getList(1)" class="w200" size="small"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="getList(1)" size="small">筛选</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="reset" size="small">重置</el-button>
                    </el-form-item>
                    <el-form-item label="统计项">
                        <el-checkbox-group v-model="checkList">
                            <el-checkbox label="数量"></el-checkbox>
                            <el-checkbox label="金额"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span="24" class="toolbar">
                <el-table :data="tableDate" border style="width: 100%" border v-if="isshow">
                    <el-table-column prop="date" label="序号" width="80" ></el-table-column>
                    <el-table-column prop="date" label="医院名称" min-width="150" ></el-table-column>
                    <el-table-column prop="date" label="物资编码" min-width="150" ></el-table-column>
                    <el-table-column prop="date" label="ERP编码" min-width="150" ></el-table-column>
                    <el-table-column prop="date" label="物资名称" min-width="150"></el-table-column>
                    <el-table-column prop="date" label="规格型号" min-width="150"></el-table-column>
                    <el-table-column prop="date" label="单位" min-width="150" ></el-table-column>
                    <el-table-column prop="date" label="品牌" min-width="150" ></el-table-column>
                    <el-table-column label="期初结存" align="center"  v-if="showNum||showMen">
                        <el-table-column prop="name" label="数量"  align="center"  v-if="showNum" ></el-table-column>
                        <el-table-column prop="name" label="金额"  align="center" v-if="showMen" ></el-table-column>
                    </el-table-column>
                    <el-table-column label="采购入库" align="center" min-width="160" v-if="showNum||showMen">
                        <el-table-column prop="name" label="数量"  align="center"  v-if="showNum" ></el-table-column>
                        <el-table-column prop="name" label="金额"  align="center" v-if="showMen" ></el-table-column>
                    </el-table-column>
                    <el-table-column label="盘盈入库" align="center" min-width="160" v-if="showNum||showMen">
                         <el-table-column prop="name" label="数量"  align="center"  v-if="showNum" ></el-table-column>
                        <el-table-column prop="name" label="金额"  align="center" v-if="showMen" ></el-table-column>
                    </el-table-column>
                    <el-table-column label="其他入库" align="center" min-width="160" v-if="showNum||showMen">
                         <el-table-column prop="name" label="数量"  align="center"  v-if="showNum" ></el-table-column>
                        <el-table-column prop="name" label="金额"  align="center" v-if="showMen" ></el-table-column>
                    </el-table-column>
                    <el-table-column label="入库合计" align="center" min-width="160" v-if="showNum||showMen"> 
                        <el-table-column prop="name" label="数量"  align="center"  v-if="showNum" ></el-table-column>
                        <el-table-column prop="name" label="金额"  align="center" v-if="showMen" ></el-table-column>
                    </el-table-column>
                    <el-table-column label="领用出库" align="center" min-width="160" v-if="showNum||showMen">
                        <el-table-column prop="name" label="数量"  align="center"  v-if="showNum" ></el-table-column>
                        <el-table-column prop="name" label="金额"  align="center" v-if="showMen" ></el-table-column>
                    </el-table-column>
                    <el-table-column label="盘亏出库" align="center" min-width="160" v-if="showNum||showMen">
                        <el-table-column prop="name" label="数量"  align="center"  v-if="showNum" ></el-table-column>
                        <el-table-column prop="name" label="金额"  align="center" v-if="showMen" ></el-table-column>
                    </el-table-column>
                    <el-table-column label="其他出库" align="center" min-width="160" v-if="showNum||showMen">
                       <el-table-column prop="name" label="数量"  align="center"  v-if="showNum" ></el-table-column>
                        <el-table-column prop="name" label="金额"  align="center" v-if="showMen" ></el-table-column>
                    </el-table-column>
                    <el-table-column label="出库合计" align="center" min-width="160" v-if="showNum||showMen">
                        <el-table-column prop="name" label="数量"  align="center"  v-if="showNum" ></el-table-column>
                        <el-table-column prop="name" label="金额"  align="center" v-if="showMen" ></el-table-column>
                    </el-table-column>
                    <el-table-column label="期末结存" align="center" min-width="160" v-if="showNum||showMen">
                         <el-table-column prop="name" label="数量"  align="center"  v-if="showNum" ></el-table-column>
                        <el-table-column prop="name" label="金额"  align="center" v-if="showMen" ></el-table-column>
                    </el-table-column>
                </el-table>
            </el-col>
    
            <el-col :span="24">
    
            </el-col>
            <el-col :span="24" class="toolbar" v-show="total>0">
                <pagination :total="total" :pageSize.sync="pageSize" :pageIndex.sync="pageIndex" @change="getList"></pagination>
            </el-col>
        </el-row>
    </section>
</template>
<script>
import datePicker from '@/components/datePicker';
import cursDropdown from '@/components/cursDropdown';
const URL = {
    LIST: 'scm.platformSupplier.pageSupplier', // 分页列表
    DETAIL: 'scm.platformSupplier.findEnterprise', // 详情-
    ENABLE: 'scm.platformSupplier.addERPAuth' // 开通erp-

};
export default {
    name: 'supplier',
    data () {
        return {
            list: [{
                name: 12312312
            }, {
                name: 12312312
            }, {
                name: 12312312
            }, {
                name: 12312312
            }, {
                name: 12312312
            }, {
                name: 12312312
            }, {
                name: 12312312
            }, {
                name: 12312312
            }, {
                name: 12312312
            }, {
                name: 12312312
            }],
            isshow: true,
            checkList: ['数量', '金额'],
            total: 0,
            pageSize: 20,
            pageIndex: 1,
            from: {
                search_state: {
                    options: [{
                        value: -1,
                        label: '库存级次'
                    },
                    {
                        value: 2,
                        label: '一级库房'
                    },
                    {
                        value: 4,
                        label: '二级库房'
                    }],
                    value: -1
                },
                keywords: '',
                startTime: '',
                endTime: ''
            },
            tableDate: [] // 列表数据
        };
    },
    computed: {
        showNum () {
            this.isshow = false;
            setTimeout(() => {
                this.isshow = true;
            }, 200); // issues element table 暂时无法支持动态表格
          
            return this.checkList.includes('数量');
        },
        showMen () {
            this.isshow = false;
            setTimeout(() => {
                this.isshow = true;
            }, 200); // issues element table 暂时无法支持动态表格
            return this.checkList.includes('金额');
        }
    }, 
    methods: {
        // 获取列表
        getList () {
            this.showList = true;
        },
        // 重置
        reset () {
            this.pageIndex = 1;
            this.from.keywords = '';
            this.from.search_state.value = -1;
            this.getList(1);
        },
        // select change event
        change () {
            this.getList(1);
        }
    },
    mounted () {
    },
    components: {
        datePicker,
        cursDropdown

    }
};

</script>

<style lang="scss">

</style>
