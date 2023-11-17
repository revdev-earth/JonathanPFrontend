import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

export default window.innerWidth <= 1024 ? HeaderMobile : HeaderDesktop;
