export default function SponsorCard({ image, blue }) {
  return (
    <div
      className={`p-6 lg:px-8 relative border-2 border-dashed rounded-2xl grid place-items-center ${
        blue
          ? "border-[#363EF3] dark:border-[#363BB6]"
          : "border-[#B807D4] dark:border-[#710083]"
      }`}
    >
      <img
        src="/assets/LandingPage/sponsor-adidas.svg"
        alt="Logo Sponsor"
        className="object-cover w-full h-full "
      />
    </div>
  );
}
