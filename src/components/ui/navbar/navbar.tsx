import Image from 'next/image'
import { NotificationIcon, SearchIcon } from '@/components/icons';
import s from './navbar.module.css'
import { usePathname } from 'next/navigation';

const AppBar = () => {

    const currentPath = usePathname();

    return (
        <nav className={s.main}>
            <div className={s.left}>
                { currentPath === '/' ? 
                    'Feeds' : 
                    `${currentPath.split('/')[1][0].toUpperCase() + currentPath.substring(2)}` 
                }
            </div>
            <div className={s.right}>
                <div className={s.icon}>
                    <SearchIcon />
                </div>
                <div className={s.icon}>
                    <NotificationIcon />
                </div>
                <div className={s.user}>
                    <Image 
                        alt=""
                        src="/svgs/avatars/avatar-1.svg"
                        height={50}
                        width={50}
                    />
                    <div className={s.username}>
                        <small>Username</small>
                        <p>Jackson</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default AppBar;