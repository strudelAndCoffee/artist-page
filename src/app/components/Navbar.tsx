'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-5">
      <Link href="/">Home</Link>
      <Link href="/bio">Bio</Link>
    </nav>
  )
}
