import Index from './Index'
import ChinhTri from './ChinhTri'
import ThoiSu from './ThoiSu'

export const route =  [
    {
        path: '/',
        component: Index,
        name: 'Index',
    },
    {
        path: '/chinhtri',
        component: ChinhTri,
        name: 'ChinhTri',
    },
    {
        path: '/thoisu',
        component: ThoiSu,
        name: 'ThoiSu',
    },
];
