import React from 'react'
import Link from 'next/link'

const SideNav = () => {
    return (
        <div className='flex h-screen antialiased text-gray-900 bg-gray-100'>
            {/* Backdrop */}
            <div className='fixed inset-0 z-10 bg-indigo-800 opacity-50' aria-hidden='true'></div>

            <aside tabIndex={-1} 
            className='fixed inset-y-0 z-10 flex flex-shrink-0 overflow-hidden bg-white border-r focus:outline-none' >
                {/* Sidebar links */}
                <nav aria-label='Main' className='flex-1 w-64 px-2 py-4 space-y-2 overflow-hidden hover:overflow-y-auto'>
                    {/* Dashboard links */}
                    <Link href={'/'}
                    className="flex items-center p-2 text-gray-500 transition-colors rounded-md hover:bg-indigo-100"
                    >
                        <>
                        <span aria-hidden="true">
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                  </svg>
                </span>
                <span className='ml-2 text-sm'> Dashboards </span>
                      </>
                    </Link>
                </nav>
            </aside>
        </div>
    )
}

export default SideNav
