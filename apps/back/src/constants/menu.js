import { adminRoot } from './defaultValues';

const data = [
  {
    id: 'dashboard',
    icon: 'iconsminds-dashboard',
    label: 'Dashboard',
    to: `${adminRoot}/blank-page`,
  },
  {
    id: 'users',
    icon: 'iconsminds-male-female',
    label: 'Users',
    to: `${adminRoot}/gogo`,
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.start',
        to: `${adminRoot}/gogo/start`,
      },
    ],
  },
  {
    id: 'meals',
    icon: 'iconsminds-chef-hat',
    label: 'Dishes',
    to: `${adminRoot}/second-menu`,
    // roles: [UserRole.Admin, UserRole.Editor],
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.second',
        to: `${adminRoot}/second-menu/second`,
      },
    ],
  },
  {
    id: 'ingredients',
    icon: 'iconsminds-pepper',
    label: 'Ingredients',
    to: `${adminRoot}/blank-page`,
  },
  {
    id: 'types',
    icon: 'iconsminds-data-center',
    label: 'Types',
    to: `${adminRoot}/blank-page`,
  },
  {
    id: 'exchanges',
    icon: 'iconsminds-handshake',
    label: 'Exchanges',
    to: `${adminRoot}/blank-page`,
  },
];
export default data;
