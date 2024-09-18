import { NAVIGATION_BAR_LINKS } from "@/constants";
import { Button } from "./ui/button";

const Header = () => {
   return (
      <header className="flex pt-14 justify-between items-center w-full h-24">
         <section className="flex justify-between items-center w-full gap-x-2 text-center">
            <article>
               <span className="font-extrabold text-md">X.POWER</span>
            </article>
            <article className="w-full flex">
               {NAVIGATION_BAR_LINKS.map((item) => (
                  <a
                     className="w-full"
                     href={`#${item.id}`}
                  >
                     {item.name}
                  </a>
               ))}
            </article>
         </section>
         <section className="w-full flex justify-end">
            <Button>ورود و ثبت نام</Button>
         </section>
      </header>
   );
};
export default Header;
