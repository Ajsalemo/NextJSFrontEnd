export default function HeroImage({ path }) {
  return (
    <div className="relative">
      <img
        src={require(`images/${path}?trace`).trace}
        className="absolute top-0 left-0"
      />
      <img
        src={require(`images/${path}?jpg`)}
        className="absolute top-0 left-0"
      />{" "}
    </div>
  );
}
