import MobileNavbar from "../components/navbar/MobileNavbar";
import SideBar from "../components/sidebar/Sidebar";
import { ThemeProvider } from "../providers/theme-provider";


export const metadata = {
  title: "Question Time App",
  description: "Question Time Management Platform",
};

export default function DashLayout({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <MobileNavbar />
      <section className="w-full relative flex">
        <SideBar />
        <main className="w-full p-2 pt-20 md:pt-2 max-w-[1150px] px-4 mx-auto xl:max-w-full xl:overflow-x-auto md:ml-[240px] xl:ml-[240px]">
          {children}
        </main>
      </section>
    </ThemeProvider>
  );
}
