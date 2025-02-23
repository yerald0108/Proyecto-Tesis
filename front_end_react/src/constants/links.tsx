import { FaFacebook, FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";



export const navbarLinks = [
    {
        id: 1,
        title: 'Inicio',
        href: '/',
    },
    {
        id: 2,
        title: 'Ilegalidades',
        href: '/ilegalidades',
    },
    {
        id: 3,
        title: 'Sobre Nosotros',
        href: '/nosotros',
    },
];

export const socialLinks = [
    {
        id: 1,
        title: 'Facebook',
        href: 'https://www.facebook.com/CubaINOTU/',
        icon: <FaFacebook />,
    },
    {
        id: 2,
        title: 'Twitter',
        href: 'https://www.twitter.com',
        icon: <FaXTwitter />,
    },
    {
        id: 3,
        title: 'Instagram',
        href: 'https://www.instagram.com',
        icon: <FaInstagram />,
    },
    {
        id: 4,
        title: 'Tiktok',
        href: 'https://www.tiktok.com',
        icon: <FaTiktok />,
    },
]