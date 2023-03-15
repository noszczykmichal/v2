import "./Hamburger.scss";
import useMobileNav from "../../../utils/hooks/useMobileNav";

function Hamburger() {
  const { menuOpen, onClickHandler } = useMobileNav();

  let attachedClasses = ["box__inner", "box__inner--side-nav-closed"];

  if (menuOpen) {
    attachedClasses = ["box__inner", "box__inner--side-nav-open"];
  }

  return (
    <button type="button" className="hamburger" onClick={onClickHandler}>
      <div className="hamburger__box">
        <div className={attachedClasses.join(" ")} />
      </div>
    </button>
  );
}

export default Hamburger;
