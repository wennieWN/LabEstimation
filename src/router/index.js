import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Center from '@/views/Center'
import StepOne from '@/views/user/StepOne'
import StepTwo from '@/views/user/StepTwo'
import StepTwo1 from '@/views/user/StepTwo1'
import StepThree from '@/views/user/StepThree'
import StepFour from '@/views/user/StepFour'
import GenerateReport from '@/components/estimation/GenerateReport'
import EditReport from '@/components/estimation/EditReport'
import VER from  '@/views/user/view_estimated_report'
import MVER from '@/views/manager/ManagerEstView_report'
import ManagerStepTwo from '@/views/manager/ManagerStepTwo'
import ManagerStepThree from '@/views/manager/ManagerStepThree'
import ManagerIFPUGReport from '@/views/manager/ManagerReport'
// 引入样式
import 'vue-easytable/libs/themes-base/index.css'
// 导入 table 和 分页组件
import {VTable,VPagination} from 'vue-easytable'

// 注册到全局
Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)


Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/login',
        name: 'Login',
        component: Login
    }, {
        path: '/register',
        name: 'Register',
        component: Register
    }, {
        path: '/center',
        name: 'Center',
        component: Center
    }, {
        path: '/stepone',
        name: 'StepOne',
        component: StepOne
    }, {
        path: '/steptwo',
        name: 'StepTwo',
        component: StepTwo
    },{
      path: '/steptwo1',
      name: 'StepTwo1',
      component: StepTwo1
    }, {
      path: '/generatereport',
      name: 'GenerateReport',
      component: GenerateReport
    }, {
      path: '/editreport',
      name: 'EditReport',
      component: EditReport
    },
      {
        path: '/ver',
        name: 'VER',
        component: VER
      },
      {
        path: '/mver',
        name: 'MVER',
        component: MVER
      },
      {
        path: '/stepthree',
        name: 'StepThree',
        component:StepThree
      },
     {
        path: '/stepfour',
        name: 'StepFour',
        component:StepFour
      },
      {
        path: '/managersteptwo',
        name: 'ManagerStepTwo',
        component:ManagerStepTwo
      },
      {
        path: '/managerstepthree',
        name: 'ManagerStepThree',
        component:ManagerStepThree
      },
      {
        path: '/managerIFPUGreport',
        name: 'ManagerIFPUGReport',
        component:ManagerIFPUGReport
      }]
})
