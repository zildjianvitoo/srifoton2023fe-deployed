export default function LayoutField({ children }) {
  return (
    <div className="relative mt-16 rounded-3xl">
      <div className="bg-gradient-to-r from-[#337EF0]/[15%] to-[#FC39FC]/[15%]  dark:from-[#337EF0]/20 dark:to-[#FC39FC]/20  absolute inset-0 h-full rounded-3xl " />
      <div className="flex flex-col gap-10 pb-14">{children}</div>
    </div>
  );
}

// dark:opacity-[35%]
