type HamburgerProps = {
  onClick: () => void;
};
const Hamburger = (props: HamburgerProps) => {
  return (
    <label className="hamburger-menu">
      <input onClick={props.onClick} type="checkbox" />
    </label>
  );
};
export default Hamburger;
