import { Link } from 'gatsby'
import * as React from 'react'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const visibleSidebar = false
  let header

  if (isRootPath) {
    header = (
      <div className="text-3xl font-extrabold font-nunito">
        <Link to="/" className="text-pc-pink">
          {title}
        </Link>

        <div className="text-xs font-normal font-nunito text-center text-gray-300">
          == write
          <span className="text-red-500"> & </span>
          share ==
        </div>
      </div>
    )
  } else {
    header = (
      <div>
        <Link to="/" className="text-pc-pink font-semibold text-2xl">
          {title}
        </Link>
        <div className="text-xs font-normal font-nunito text-center text-gray-300">
          == write
          <span className="text-red-500"> & </span>
          share ==
        </div>
      </div>
    )
  }

  return (
    <div className="bg-pc-darker min-h-screen text-pc-light ">
      <div
        className="max-w-4xl m-auto bg-pc-dark min-h-screen relative  md:pt-24 pt-24"
        data-is-root-path={isRootPath}
      >
        {/* HEADER & MENU */}
        <div
          className="flex justify-between items-center 
          px-5 
          max-w-4xl m-auto
          fixed top-0
          w-full z-50 
          bg-pc-darker overflow-hidden
          "
        >
          <div className="my-5 md:my-10">{header}</div>

          {visibleSidebar && (
            <>
              <div className="md:flex hidden">
                <div className="menu-item mr-5">Snippets Code</div>
                <div className="menu-item lg:text-red-500 mr-5">Javascript</div>
                <div className="menu-item mr-5">Golang</div>
                <div className="menu-item">Demo</div>
              </div>

              <div className="md:hidden sm:inline-block">
                <svg
                  className="w-6 h-6"
                  data-darkreader-inline-stroke=""
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </div>
            </>
          )}
        </div>

        {/* MAIN CONTENTS */}

        <div className="mx-5 pt-5 md:pt-16 overflow-hidden ">{children}</div>

        {/* FOOTER */}
        <footer className="text-pc-light px-5 bg-pc-darker mt-5">
          @ {new Date().getFullYear()}, Personal blog by {` `}
          <a
            href="https://www.gatsbyjs.com"
            target="_blank"
            rel="noreferrer"
            className="font-extrabold font-mont text-pc-yellow"
          >
            Alex Lee
          </a>
        </footer>
      </div>
    </div>
  )
}

export default Layout
