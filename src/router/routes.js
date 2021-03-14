
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '',
      component: () => import('src/pages/homePage.vue'),
      name:'Home'
    },
      { path: '/about',
      component: () => import('src/pages/aboutPage.vue'),
      name:'About'
     }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
