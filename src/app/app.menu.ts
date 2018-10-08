import { MenuItem } from '../fw/services/menu.service';

export let initialMenuItems: Array<MenuItem> = [
    {
        text: 'Dashboard',
        icon: 'glyphicon-dashboard',
        route: 'authenticated/dashboard',
        submenu: null
    },
    {
        text: 'Log Activity',
        icon: 'glyphicon-calendarTearOff',
        route: null,
        submenu: [            
            {
                text: 'Today activity',
                icon: 'glyphicon-dot',
                route: 'authenticated/activity-list/0',
                submenu: null
            },
            {
                text: 'Log Missed Days',
                icon: 'glyphicon-dot',
                route: 'authenticated/activity-list/5',
                submenu: null
            }
        ],
    },
    {
        text: 'Leadership',
        icon: 'glyphicon-flag',
        route: null,
        submenu: [            
            {
                text: 'Top 5',
                icon: 'glyphicon-flag',
                route: 'authenticated/country-list/5',
                submenu: null
            },
            {
                text: 'All',
                icon: 'glyphicon-flag',
                route: 'authenticated/country-list/0',
                submenu: null
            }
        ],
    },
    {
        text: 'Maintenance',
        icon: 'glyphicon-wrench',
        route: null,
        submenu: [
            {
                text: 'Metrics Meter',
                icon: 'glyphicon-th-list',
                route: 'authenticated/metrics-meter',
                submenu: null
            },
            {
                text: 'Pledge Maint',
                icon: 'glyphicon-th-list',
                route: 'authenticated/pledge-maint',
                submenu: null
            },
            {
                text: 'Settings',
                icon: 'glyphicon-cog',
                route: 'authenticated/settings',
                submenu: null
            }
        ]
    }
];