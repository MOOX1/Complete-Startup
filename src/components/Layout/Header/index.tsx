'use client';
import { Text } from '@/components/Text';
import { usePathname } from 'next/navigation';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import ThemeSwitcher from '@/components/ThemeSwitcher';

const navigationItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Dashboard',
    href: '/dash',
  },
];

export default function Header() {
  const pathName = usePathname();

  return (
    <div className="fixed top-0 flex h-14 w-full items-center justify-around border-b border-black-default dark:border-white-default">
      <div>
        <Text.Heading type="H3"> Logo</Text.Heading>
      </div>
      <div>
        <NavigationMenu>
          <NavigationMenuList className="relative">
            {navigationItems.map(item => (
              <NavigationMenuItem key={item.name}>
                <Link href={item.href} passHref legacyBehavior>
                  <NavigationMenuLink
                    active={pathName === item.href}
                    className={navigationMenuTriggerStyle()}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex gap-2">
        <ThemeSwitcher />
      </div>
    </div>
  );
}
