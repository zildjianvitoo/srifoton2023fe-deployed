export default function Accordion({ toggle, isOpen }) {
  return (
    <div
      className="justify-start text-white  collapse collapse-plus"
      onClick={toggle}
    >
      <input type="radio" name="my-accordion-3" checked={isOpen} />
      <div className="text-xl font-medium cursor-pointer lg:text-2xl collapse-title">
        Click to open this one and close others
      </div>
      <div className="collapse-content">
        <p>hello</p>
      </div>
    </div>
  );
}
