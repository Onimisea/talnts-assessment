import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/talnts_logo.svg";
import { Input } from "@/components/ui/input";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Separator } from "@/components/ui/separator";
import { RegisterSlider } from "@/components/RegisterSlider";

export const metadata: Metadata = {
  title: "Register | Talnts Technologies Inc",
};

export default function Home() {
  return (
    <div className="w-full flex flex-col md:flex-row min-h-screen font-jakarta items-center flex-wrap gap-12 md:gap-0">
      <div className="w-full md:w-[45%] bg-green-500">
        <RegisterSlider />
      </div>

      <div className="w-full md:w-[45%] flex flex-col justify-between px-8 bg-white">
        <Link href="/" className="flex items-center gap-2 ">
          <Image src={logo} alt="Talnts App" width={30} height={30} />
          <span className="text-md text-black">App</span>
        </Link>

        <div className="w-full flex flex-col gap-8 mt-6">
          <div className="flex flex-col gap-3">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
              Register
            </h2>
            <p className="text-[#121212]">
              Enter your email address below to continue
            </p>
          </div>

          <div className="flex flex-col justify-between h-[300px] w-full">
            <div className="flex flex-col gap-3 justify-between">
              <h2 className="text-[18px] font-bold">Email Address</h2>

              <div className="w-full h-[50px] border-[0.5px] border-[#c4c4c4] rounded-[30px] relative overflow-hidden flex items-center justify-between">
                <Input
                  type="text"
                  placeholder="Android"
                  className="border outline-none focus-visible:border-none focus-visible:outline-none focus-visible:ring-0 shadow-none w-full h-full rounded-[30px] pl-6 pr-12 text-black "
                />

                <HiOutlineEnvelope
                  size={16}
                  className="absolute right-6 text-[#c4c4c4]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-8 justify-between">
              <Button className="text-[14px] bg-primary_blue hover:bg-grey_dark text-white duration-500 rounded-[30px] px-16 py-7 w-fit flex items-center gap-1">
                <span className="text-md">Continue</span>
                <IoIosArrowRoundForward size={25} />
              </Button>

              <p className="text-[#121212]">
                Already have an account?{" "}
                <Link href="" className="font-bold text-primary_blue ml-1">
                  Login
                </Link>
              </p>
            </div>
          </div>

          <div className="flex gap-2 w-full text-[#292929] items-center">
            <Separator
              orientation="horizontal"
              className="w-[47%] h-[1px] text-[#c4c4c4]"
            />
            <span className="uppercase text-[14px]">or</span>
            <Separator
              orientation="horizontal"
              className="w-[47%] h-[1px] text-[#c4c4c4]"
            />
          </div>

          <div className="flex items-center w-full justify-center">
            <Button className="text-[14px] bg-[#f0f0f0] hover:bg-primary_blue text-black duration-500 rounded-[30px] px-16 py-7 w-[70%] flex items-center gap-1 hover:text-white">
              <span className="text-md">Continue</span>
              <IoIosArrowRoundForward size={25} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
