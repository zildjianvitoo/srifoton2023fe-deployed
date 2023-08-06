import AuthSidebar from "@/components/AuthSidebar";
import LayoutMain from "@/components/LayoutMain";
import Navbar from "@/components/Navbar";
import LayoutCredentials from "@/components/organisms/Credentials/LayoutCredentials";

export default function Kompetisi() {
  return (
    <>
      <Navbar />
      <LayoutMain>
        <div className="flex flex-col lg:flex-row  w-full mx-auto mt-10 lg:gap-16 lg:w-[85%]">
          <div className="lg:w-[22rem] lg:mt-10">
            <AuthSidebar />
          </div>
          <div className="w-full">
            <LayoutCredentials id="dashboard-data-diri" authPage>
              <div className="z-10 flex flex-col justify-start w-full ">
                <h1 className="text-[#494B7C] text-4xl lg:text-6xl font-bold text-center -translate-y-4">
                  Data Diri
                </h1>
              </div>
            </LayoutCredentials>
          </div>
        </div>
      </LayoutMain>
    </>
  );
}
