// export const metadata: Metadata = {
//   title: "Voltrox HQ",
//   description: "Feeds App Frontend for Voltrox HQ",
// };

import AppBar from "@/components/ui/navbar/navbar";
import SideBar from "@/components/ui/sidebar/sidebar";
import s from './layout.module.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-[100vw] flex flex-row gap-x-4 justify-start items-start overflow-y-hidden">
      <SideBar></SideBar>
      <main className={s.main}>
        <AppBar></AppBar>
        {children}
      </main>
    </div>
  );
}
