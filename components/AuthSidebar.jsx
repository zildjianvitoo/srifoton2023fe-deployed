import Link from "next/link";
import { useRouter } from "next/router";
import { PiUserCircleFill } from "react-icons/pi";
export default function AuthSidebar() {
  const router = useRouter();

  const activeStyle =
    "bg-gradient-to-r from-[#F0D0F0] to-[#D2E2FD] dark:from-[#452E79] dark:to-[#183569] rounded-xl ";

  return (
    <div className="flex flex-col text-[#494B7C] relative mt-24 mb-10  font-medium w-full">
      <Link
        href="/dashboard"
        className={`flex items-center gap-2 p-2 cursor-pointer ${
          router.pathname === "/dashboard" && activeStyle
        }`}
      >
        <PiUserCircleFill className="text-xl" />
        <p className="text-xl">Data Akun</p>
      </Link>
      <Link
        href="/dashboard/data-diri"
        className={`flex items-center gap-2 p-2 cursor-pointer ${
          router.pathname === "/dashboard/data-diri" && activeStyle
        }`}
      >
        <PiUserCircleFill className="text-xl" />
        <p className="text-xl">Data Akun</p>
      </Link>
      <Link
        href="/dashboard/kegiatan"
        className={`flex items-center gap-2 p-2 cursor-pointer ${
          router.pathname === "/dashboard/kegiatan" && activeStyle
        }`}
      >
        <PiUserCircleFill className="text-xl" />
        <p className="text-xl">Data Akun</p>
      </Link>
    </div>
  );
}
