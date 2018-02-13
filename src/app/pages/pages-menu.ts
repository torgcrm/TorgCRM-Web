import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Orders',
    icon: 'nb-compose',
    link: '/pages/orders',
  },
  {
    title: 'Customers',
    icon: 'nb-person',
    link: '/pages/customers',
  },
  {
    title: 'Catalog',
    icon: 'nb-grid-b-outline',
    children: [
      {
        title: 'Main page',
        link: '/pages/catalog/main-page',
        icon: 'nb-keypad',
      },
      {
        title: 'Items',
        link: '/pages/catalog/items',
        icon: 'nb-keypad',
      },
      {
        title: 'Category',
        link: '/pages/catalog/category',
        icon: 'nb-grid-a-outline',
      },
    ],
  },
  {
    title: 'Menu',
    icon: 'nb-list',
    link: '/pages/menu',
  },
  {
    title: 'Pages',
    icon: 'nb-layout-default',
    link: '/pages/pages',
  },
  {
    title: 'News',
    icon: 'ion-document',
    link: '/pages/news',
  },
  {
    title: 'Reports',
    icon: 'nb-bar-chart',
    children : [
      {
        title: 'Sales',
        link: '/pages/reports/sales',
        icon: 'nb-bar-chart',
      },
      {
        title: 'Top customers',
        link: '/pages/reports/top-customers',
        icon: 'nb-bar-chart',
      },
      {
        title: 'Geo report',
        link: '/pages/reports/top-customers',
        icon: 'nb-bar-chart',
      },
      {
        title: 'Ad reports',
        link: '/pages/reports/top-customers',
        icon: 'nb-bar-chart',
      },
    ],
  },
  {
    title: 'Settings',
    icon: 'nb-gear',
    children : [
      {
        title: 'Projects',
        link: '/pages/settings/projects',
        icon: 'ion-clipboard',
      },
    ],
  },
  // {
  //   title: 'Auth',
  //   icon: 'nb-locked',
  //   children: [
  //     {
  //       title: 'Login',
  //       link: '/auth/login',
  //     },
  //     {
  //       title: 'Register',
  //       link: '/auth/register',
  //     },
  //     {
  //       title: 'Request Password',
  //       link: '/auth/request-password',
  //     },
  //     {
  //       title: 'Reset Password',
  //       link: '/auth/reset-password',
  //     },
  //   ],
  // },
];
