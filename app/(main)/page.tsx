import HomeSection from "./homepage/page";
import Parallax from "@/app/components/Parallax";
import NewSection from "@/app/NewFonts/NewSection";
import Secure from "@/app/components/Secure";


const Page = () => {
  return (
    <main className="overflow-hidden">
      <HomeSection />
      <Parallax />
      <NewSection />
      <Secure />
    </main>
  );
};

export default Page;
