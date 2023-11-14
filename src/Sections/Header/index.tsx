import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

export default window.innerWidth <= 390 ? HeaderMobile : HeaderDesktop;
