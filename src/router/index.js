import Vue from 'vue'
import Router from 'vue-router'
// import Me from '@/components/Me'
import Me2 from '@/components/Me2'
// import Report from '@/components/Report'
import Reports1 from '@/components/Reports1'
import Reports2 from '@/components/Reports2'
import Registration from '@/components/Registration'
import Login from '@/components/Login'

Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//         path: '/',
//         name: 'Me',
//         component: Me
//     },
//     {
//         path: '/report/:kmom',
//         name: 'Redovisning',
//         component: Report
//     }
//   ]
// })

export default new Router({
  routes: [
    // {
    //     path: '/',
    //     name: 'Me',
    //     component: Me
    // },
    {
        path: '/',
        name: 'Me2',
        component: Me2
    },
    {
        path: '/reports/week/1',
        name: 'Redovisning kmom01',
        component: Reports1
    },
    {
        path: '/reports/week/2',
        name: 'Redovisning kmom02',
        component: Reports2
    },
    {
        path: '/registration',
        name: 'Registrering',
        component: Registration
    },
    {
        path: '/login',
        name: 'Logga in',
        component: Login
    }
  ]
})
