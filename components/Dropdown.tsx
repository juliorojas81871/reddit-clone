import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { signOut, useSession } from "next-auth/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Image from "next/image";

const Dropdown = () => {
  const { data: session } = useSession();

  return (
    <div>
      <Menu
        as="div"
        
      >
        <Menu.Button className="-m-1 hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex hover:bg-gray-100">
          <img
           className="h-5 w-5"
            src="/assets/icon.png"
            alt=''
          />
          <div className="flex-1 text-xs">
            <p className="truncate">{session?.user?.name}</p>
            <p className="text-gray-400">1 Karma</p>
          </div>
          <ChevronDownIcon className="h-5 flex-shrink-0 text-gray-400" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 bg-white  w-32 mt-2 origin-top-right divide-y divide-gray-100 rounded-md shadow-sm ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active && "bg-gray-100"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm font-semibold tracking-wide text-gray-400 cursor-default`}
                    onClick={() => signOut({ redirect: false })}
                  >
                    Sign Out
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Dropdown;
