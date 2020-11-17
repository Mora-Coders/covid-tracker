import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
    {
        title: 'Dashboard',
        icon: 'home-outline',
        link: '/main/dashboard',
        home: true,
    },
    {
        title: 'People',
        icon: 'people',
        children: [
            {
                title: 'Add',
                icon: 'edit',
                link: '/main/people/add',
            },
            {
                title: 'View',
                icon: 'list',
                link: '/main/people/list',
            },
        ],
    },
    {
        title: 'Analytics',
        icon: 'bar-chart-2',
        children: [
        ],
    },
];