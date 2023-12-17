'use client';
import { Text } from '@/components/Text';
import {
  NavigationMenu,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="fixed top-0 flex h-14 w-full items-center justify-around border-b border-black-default dark:border-white-default">
      <div>
        <Text.Heading type="H3"> Logo</Text.Heading>
      </div>
      <div>
        <NavigationMenu>
          <NavigationMenuItem className="list-none">
            <NavigationMenuLink>
              <Link href={''}>Criação</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="list-none">
            <NavigationMenuLink asChild>
              <Link href={''}>Estude conosco</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenu>
      </div>
      <div>login</div>
    </div>
  );
}
