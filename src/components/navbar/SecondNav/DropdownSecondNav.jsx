import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaReceipt } from "react-icons/fa6";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaBuromobelexperte } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa6";

import menuData from './menuData.json';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div>
    {menuData.map((menu, index) => (
        <Menu key={index} as="div" className="relative inline-block text-left w-52">
          <div>
            <Menu.Button className="inline-flex items-center w-full justify-center gap-x-2  px-3 py-2 text-lg font-semibold text-gray-900 ">
            {menu.icon === 'FaMoneyBillTrendUp' && <FaMoneyBillTrendUp />}
            {menu.icon === 'FaMoneyCheckDollar' && <FaMoneyCheckDollar />}
              {menu.icon === 'FaUser' && <FaUser />}
              {menu.icon === 'FaReceipt' && <FaReceipt />}
              {menu.icon === 'FaBuromobelexperte' && <FaBuromobelexperte />}
              {menu.icon === 'FaClipboardList' && <FaClipboardList />}

              
              <span>{menu.heading.text}</span>
              <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute text-right right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                {menu.items.map((item, itemIndex) => (
                  <Menu.Item key={itemIndex}>
                    {({ active }) => (
                      <a
                        href={item.url}
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        {item.text}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      ))}
    </div>
  )
}
