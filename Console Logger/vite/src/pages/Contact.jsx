import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/Header";

const ContactHome = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
    });
  }, []);

  return (
    <>
    <Header />
    <div
      data-aos="fade-up"
      className="flex flex-col justify-center items-center w-full h-[calc(100vh-220px)]"
    >
      <h1 className="text-[70px] font-medium tracking-[0.01rem]">Let's work together.</h1>
      <a
        className="text-[65px] font-semibold tracking-[0.01rem] text-black/50 hover:text-black/30 no-underline"
        href="https://wa.me/917808447703"
      >
        Get in touch.
      </a>
    </div>
    </>
  );
};

export default ContactHome;
