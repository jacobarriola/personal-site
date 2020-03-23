import React from 'react'

function Footer() {
  return (
    <footer className="border-t">
      <nav
        aria-label="footer nav"
        className="flex justify-between max-w-3xl mx-auto p-4 md:p-8 text-sm"
      >
        <p>&copy; {new Date().getFullYear()}</p>
        <ul className="flex">
          <li className="mr-4">
            <a
              className="font-bold no-underline"
              href="https://github.com/jacobarriola/personal-site"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              className="font-bold no-underline"
              href="https://twitter.com/jacobarriola"
            >
              Twitter
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
