'use client';
import { Text } from '@/components/Text';
import { usePathname } from 'next/navigation';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { Button } from '@/components/Button';

const navigationItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'sobre nós',
    href: '/dash',
  },
];

export default function Header() {
  const pathName = usePathname();

  return (
    <div className="fixed top-0 flex h-14 w-full items-center justify-around border-b border-black-default/10 shadow-sm dark:border-white-default/10 dark:shadow-black-400">
      <div>
        <Text.Heading type="H3"> Logo</Text.Heading>
      </div>
      <div>
        <NavigationMenu>
          <NavigationMenuList className="relative">
            {navigationItems.map(item => (
              <NavigationMenuItem key={item.name}>
                <Link href={item.href} legacyBehavior passHref>
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
        <Button.Root typeButton="secondary" rounded>
          <Button.Label>login</Button.Label>
        </Button.Root>
      </div>
    </div>
  );
}
