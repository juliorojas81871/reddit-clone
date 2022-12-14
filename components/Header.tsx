import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  GlobeIcon,
  PlusIcon,
  SparklesIcon,
  SpeakerphoneIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";
import {
  HomeIcon,
  ChevronDownIcon,
  SearchIcon,
  MenuIcon,
} from "@heroicons/react/solid";
import { useSession, signIn } from "next-auth/react";
import Link from "next/link";
import { Dropdown } from "./";

const Header = () => {
  const { data: session } = useSession();
  return (
    <div className="sticky top-0 z-50 flex bg-white px-1 sm:px-4 py-2 shadow-sm items-center justify-evenly">
      <div className="flex relative sm:h-10 sm:w-20 flex-shrink-0 h-6 w-14 cursor-pointer">
        <Link href="/">
          <Image objectFit="contain" src="/assets/reddit.png" layout="fill" />
        </Link>
      </div>

      <div className="flex items-center mx-1 sm:mx-7 xl:min-w-[300px]">
        <Link href="/">
          <HomeIcon className="h-5 w-5 cursor-pointer" />
        </Link>
        <Link href="/">
          <p className="ml-2 hidden flex-1 cursor-pointer hover:text-gray-400 lg:inline">
            Home
          </p>
        </Link>
        <ChevronDownIcon className="hidden sm:inline-flex h-5 w-5" />
      </div>

      {/* Search box */}
      <form className="max-w-[48vw] sm:max-w-full flex sm:flex-1 items-center space-x-1 sm:space-x-2 border border-gray-200 rounded-sm bg-gray-100 px-1 sm:px-3 py-1">
        <SearchIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400" />
        <input
          className="sm:flex-1 bg-transparent outline-none"
          type="text"
          placeholder="Search Reddit"
        />
        <button type="submit" hidden />
      </form>

      <div className="hidden text-gray-500 space-x-2 mx-5 items-center lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-100" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerphoneIcon className="icon" />
      </div>

      <div className="hidden sm:flex ml-1 sm:ml-5  items-center lg:hidden">
        <MenuIcon className="icon" />
      </div>

      {/* Sign In/Sign Out button */}

      {session ? (
        <Dropdown />
      ) : (
        <div
          onClick={() => signIn()}
          className=" text-xs lg:text-base items-center flex space-x-1  lg:space-x-2 border border-gray-100 p-2 cursor-pointer"
        >
          <div className="hidden md:inline-flex relative h-5 w-5 flex-shrink-0">
            <Image
              objectFit="contain"
              src="/assets/icon.png"
              layout="fill"
              alt="reddit_icon"
            />
          </div>

          <p className="text-gray-400">Sign In</p>
        </div>
      )}
    </div>
  );
};

export default Header;
