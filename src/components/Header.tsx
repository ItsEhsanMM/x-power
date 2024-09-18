import { NAVIGATION_BAR_LINKS } from "@/constants";
import { Button } from "./ui/button";

const Header = () => {
   return (
      <header className="flex pt-14 justify-between items-center w-full h-28">
         <section className="flex justify-between items-center size-full gap-x-2 text-center">
            <article className="h-full items-center justify-center flex">
               <span className="font-extrabold text-md">X.POWER</span>
            </article>
            <article className="size-full hidden lg:flex">
               {NAVIGATION_BAR_LINKS.map((item) => (
                  <a
                     key={item.id}
                     className="size-full flex items-center justify-center"
                     href={`#${item.id}`}
                  >
                     {item.name}
                  </a>
               ))}
            </article>
         </section>
         <section className="size-full flex justify-end items-center">
            <Button>ورود و ثبت نام</Button>
         </section>
      </header>
   );
};
export default Header;
