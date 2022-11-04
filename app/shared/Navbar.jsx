import Link from 'next/link';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Blog', path: '/blog' },
  { name: 'Products', path: '/products' },
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Shop', path: '/shop' },
  { name: 'Users', path: '/users' },
];

export default function Navbar() {
  return (
    <header>
      <nav>
        {navLinks.map((link) => (
          <Link key={link.name} href={link.path}>
            {link.name}
            {''}
          </Link>
        ))}
      </nav>
    </header>
  );
}
