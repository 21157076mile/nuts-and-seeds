"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import dynamic from "next/dynamic";

import { CloseIcon, DotsVerticalRoundedIcon } from "@shared/icons";

const SignInHeader = dynamic(() => import("./SignInHeader"), { ssr: false });

export default function NavMenuMb() {
  const [isModalOpen, setModalOpen] = useState(false);

  function closeModal() {
    setModalOpen(false);
  }

  function openModal() {
    setModalOpen(true);
  }

  return (
    <>
      <div className="absolute right-0 top-0 bottom-0 flex items-center lg:hidden">
        <button
          type="button"
          onClick={openModal}
          className="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300 p-5"
        >
          <span className="sr-only">Navigation</span>
          <DotsVerticalRoundedIcon fill="none" aria-hidden="true" />
        </button>
      </div>

      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80"
              aria-hidden
            />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="fixed top-4 right-4 w-full max-w-xs bg-white rounded-lg shadow-lg p-6 text-base font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:highlight-white/5">
              <button
                type="button"
                onClick={closeModal}
                className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
              >
                <span className="sr-only">Close navigation</span>
                <CloseIcon />
              </button>

              <div className="pt-2">
                <SignInHeader />
              </div>

              <ul className="space-y-6 mt-6 pt-6 border-t border-slate-200 dark:border-slate-200/10">
                <li>
                  <a
                    className="hover:text-sky-500 dark:hover:text-sky-400"
                    href="/nuts-and-seeds"
                  >
                    Nuts and Seeds
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-sky-500 dark:hover:text-sky-400"
                    href="/blog"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-sky-500 dark:hover:text-sky-400"
                    href="/contact-us"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-200/10">
                <div className="flex items-center justify-between">
                  add more
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
