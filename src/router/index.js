import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import 'es6-promise/auto'
import Me from '@/components/Me'
// import Me2 from '@/components/Me2'
// import Report from '@/components/Report'
// import Reports1 from '@/components/Reports1'
// import Reports2 from '@/components/Reports2'
import Report from '@/components/Report'
import Registration from '@/components/Registration'
import Login from '@/components/Login'
import Addoredit from '@/components/Addoredit'
import Customer from '@/components/Customer'



Vue.use(Router)

Vue.use(Vuex)

// export default new Router({
//   routes: [
//     {
//         path: '/',
//         name: 'Me',
//         component: Me
//     },
//     {
//         path: '/reports/week/:kmom',
//         name: 'Redovisning',
//         component: Report
//     },
// {
//     path: '/registration',
//     name: 'Registrering',
//     component: Registration
// },
// {
//     path: '/login',
//     name: 'Logga in',
//     component: Login
// }
//   ]
// })

export default new Router({
  routes: [
    {
        path: '/',
        name: 'Me',
        component: Me
    },
    // {
    //     path: '/',
    //     name: 'Me2',
    //     component: Me2
    // },
    {
        path: '/reports/week/:week',
        name: 'Redovisning',
        component: Report
    },
    // {
    //     path: '/reports/week/:week',
    //     name: 'Redovisning kmom02',
    //     component: Reports2
    // },
    {
        path: '/registration',
        name: 'Registrering',
        component: Registration
    },
    {
        path: '/login',
        name: 'Logga in',
        component: Login
    },
    {
        path: '/addoredit',
        name: 'Lägg till eller redigera',
        component: Addoredit
    },
    {
        path: '/customer',
        name: 'Hej och hå',
        component: Customer
    }
  ]
})
