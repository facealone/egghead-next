import * as React from 'react'
import {FunctionComponent} from 'react'
import Link from '../Link'
import Eggo from '../images/eggo.svg'
import {useViewer} from 'context/viewer-context'
import {track} from 'utils/analytics'

const Header: FunctionComponent = () => {
  const {viewer, loading} = useViewer()

  return (
    <header className="px-4 py-3 sm:mb-5 mb-3 shadow-sm border-b border-gray-100 flex items-center justify-between">
      <div className="flex items-center justify-between w-full max-w-screen-2xl mx-auto">
        <Link href="/">
          <a className="flex items-center">
            <Eggo className="w-8 mr-1" />
            <span className="sm:inline-block hidden text-lg font-semibold">
              egghead.io
            </span>
          </a>
        </Link>
        {!loading && (
          <nav className="pl-5 overflow-x-auto">
            <ul className="flex items-center">
              <li className="sm:mr-8 mr-5">
                <Link href="/learn" activeClassName="underline">
                  <a onClick={() => track('clicked Topics (header)')}>Topics</a>
                </Link>
              </li>
              <li className="sm:mr-8 mr-5">
                <Link href="/q" activeClassName="underline">
                  <a onClick={() => track('clicked Content (header)')}>
                    Content
                  </a>
                </Link>
              </li>

              {viewer ? (
                <li className="flex items-center justify-center">
                  <span>
                    {viewer.full_name || 'member'} {viewer.is_pro && ' ⭐️'}
                  </span>
                  <img
                    alt="avatar"
                    className="w-8 rounded-full"
                    src={viewer.avatar_url}
                  />
                </li>
              ) : (
                <li>
                  <Link href="/login" activeClassName="underline">
                    <a onClick={() => track('clicked Sign in (header)')}>
                      Sign in
                    </a>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
