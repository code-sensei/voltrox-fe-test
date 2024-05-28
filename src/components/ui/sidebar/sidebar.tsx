import FeedsIcon from "@/components/icons/FeedsIcon";
import Image from "next/image";
import SideBarItem from "./components/sidebar-item/sidebar-item";
import { ComparisonIcon, FriendsIcon, MessagesIcon, ProfileIcon, SettingsIcon } from "@/components/icons";
import s from "./sidebar.module.css";
import { usePathname } from "next/navigation";

const sidebarItems: {
    title: string,
    href: string | null,
    icon: React.ReactNode,
}[] = [
    {
        title: "Feeds",
        href: "/",
        icon: <FeedsIcon />,
    },
    {
        title: "Comparison",
        href: "/comparison",
        icon: <ComparisonIcon />,
    },
    {
        title: "Friends",
        href: null,
        icon: <FriendsIcon />,
    },
    {
        title: "Messages",
        href: null,
        icon: <MessagesIcon />,
    },
    {
        title: "Profile",
        href: null,
        icon: <ProfileIcon />,
    },
    {
        title: "Settings",
        href: null,
        icon: <SettingsIcon />,
    },
]

const SideBar = () => {

    const currentPath = usePathname();
    console.log(currentPath);

    return (
        <aside className={s.main}>
            <Image 
                height={27}
                width={120}
                src={'/svgs/logo.svg'}
                alt="logo"
            />
            <div className="w-full">
                { sidebarItems.map((item, index) => {
                    return (
                        <SideBarItem key={`sidebar-item-${index}`}
                            href={item.href ? item.href : '#'}
                            icon={item.icon}
                            text={item.title}
                            active={item.href === currentPath}
                        ></SideBarItem>
                    )
                })}
            </div>
        </aside>
    )
}

export default SideBar;