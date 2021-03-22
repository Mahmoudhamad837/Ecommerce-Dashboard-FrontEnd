import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Users',
    icon: 'person-outline',
    link: '/pages/users',
    home: true,
  },
  {
    title: 'Products',
    icon: 'layers-outline',
    link: '/pages/products'
  },
  {
    title: 'Categories',
    icon: 'layers-outline',
    link: '/pages/categories'
  },
  {
    title: 'Orders',
    icon: 'menu-outline',
    link: '/pages/orders'
  }
];
