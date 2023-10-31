import Logo from "@/components/Logo";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <section className="min-h-screen  grid grid-cols-1 md:grid-cols-2">
      <div className="bg-[#F3F5F7] pt-6 md:px-6 md:pt-10">
        <div className="w-fit mx-auto">
          <Logo />
        </div>
      </div>

      <section className="xl:pr-8 md:px-2 bg-white">
        <div className="md:mt-[calc(50%-25vh)] max-md:px-4 max-w-[450px] mx-auto  flex flex-col gap-8">
          <h2 className="text-[40px] font-medium text-neutral-7 leading-[44px]">
            Sign up
          </h2>
          <p className="text-base leading-[26px] text-neutral-4">
            Already have an account?{" "}
            <span className="font-semibold text-[#38CB89]">Sign in</span>
          </p>
          <form action="" className="flex flex-col gap-4">
            <label htmlFor="name" className="sr-only">
              Your name
            </label>
            <input
              className="py-4 border-b-2 border-b-neutral-3"
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
            />
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              className="py-4 border-b-2 border-b-neutral-3"
              type="text"
              name="username"
              id="username"
              placeholder="Username"
            />
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              className="py-3 border-b-2 border-b-neutral-3"
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
            />
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              className="py-3 border-b-2 border-b-neutral-3"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="agree"
                id="agree"
                className="h-5 aspect-square"
              />
              <label
                htmlFor="agree"
                className="text-base leading-[26px] text-neutral-4"
              >
                I agree to the{" "}
                <Link href="/privacypolicy" className="font-semibold text-neutral-7">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link href="/termofuse" className="font-semibold text-neutral-7">
                  Terms of Use
                </Link>
              </label>
            </div>
            <button type="submit" className="btn btn-default">Sign Up</button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default page;
