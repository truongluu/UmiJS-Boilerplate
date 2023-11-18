import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  locale: { default: 'en-US' },
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: 'Home',
      path: '/home',
      component: './Home',
    },
    {
      name: 'Access',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD Example',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'npm',
});
