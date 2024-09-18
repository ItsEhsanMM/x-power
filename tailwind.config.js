/** @type {import('tailwindcss').Config} */
export default {
   darkMode: ["class"],
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

   theme: {
      extend: {
         fontSize: {
            sm: ["16px", "30px"],
            md: ["29px", "45px"],
         },
         container: {
            padding: "100px",
         },
         colors: {
            "dark-blue": "#060B25",
            primary: "#6F4EFD",
            text: "#ffffff",
         },
         borderRadius: {
            lg: "var(--radius)",
            md: "calc(var(--radius) - 2px)",
            sm: "calc(var(--radius) - 4px)",
         },
      },
   },
   plugins: [require("tailwindcss-animate")],
};
