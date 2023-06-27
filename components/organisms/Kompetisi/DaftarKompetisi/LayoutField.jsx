export default function LayoutField({ children }) {
  return (
    <div className="relative mt-16 rounded-3xl">
      <div className="bg-gradient-to-r from-[#E8E8E8]/80 to-[#DFE0FF]/60 dark:from-[#9A9A9A]/80 dark:to-[#595959]/60 dark:opacity-40 absolute inset-0 h-full rounded-3xl " />
      <div className="flex flex-col gap-10 pb-14">{children}</div>
    </div>
  );
}
