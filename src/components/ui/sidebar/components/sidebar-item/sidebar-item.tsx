import s from './sidebar-item.module.css'

interface ISideBarItem {
    icon: React.ReactNode,
    text: string,
    href: string,
    active?: boolean,
    onClick?: () => void,
    className?: string,
}

const SideBarItem = ({ 
    icon, 
    text,
    href,
    active = false,
    onClick,
    className,
}: ISideBarItem) => {

    return (
        <>
            <div className={`${s.main}`}>
                <a 
                    href={href}
                    className={`${s.link} ${active && s.active}`}>
                    {icon}
                    <p>
                        {text}
                    </p>
                </a>
            </div>
        </>
    )
}

export default SideBarItem;