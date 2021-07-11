import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Main',
    isTitle: true,
  },
  {
    label: 'Dashboard',
    icon: 'home',
    link: '/dashboard',
  },
  {
    label: 'Shopify Apps',
    isTitle: true,
  },
  {
    label: 'Upsells',
    icon: 'mail',
    subItems: [
      {
        label: 'All',
        link: '/dashboard/upsells/',
      },
      {
        label: 'New',
        link: '/dashboard/upsells/create',
      },
    ],
  },
  // {
  //   label: 'Comments',
  //   icon: 'message-square',
  //   subItems: [
  //     {
  //       label: 'All',
  //       link: '/dashboard/comments/',
  //     },
  //     {
  //       label: 'New',
  //       link: '/dashboard/comments/create',
  //     },
  //   ],
  // },
];
