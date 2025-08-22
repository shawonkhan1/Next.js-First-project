"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import { TiThMenu } from "react-icons/ti";
import { X } from "lucide-react";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: session, status } = useSession(); 

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const handleToggle = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  return (
    <header className="py-4 shadow-md bg-white dark:bg-gray-900 transition-colors sticky top-0 z-50">
      <nav className="w-11/12 mx-auto px-4 flex items-center justify-between sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900 dark:text-white">
          <Link href="/">Simple</Link>
        </div>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="flex items-center space-x-6">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/allproduct"
                  className="text-gray-700 hover:text-blue-600 dark:text-gray-200 transition"
                >
                  AllProduct
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-blue-600 dark:text-gray-200 transition"
                >
                  AboutUs
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-blue-600 dark:text-gray-200 transition"
                >
                  ContactUs
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Dashboard link শুধু login হলে */}
            {session && (
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/dashboard"
                    className="text-gray-700 hover:text-blue-600 dark:text-gray-200 transition"
                  >
                    Dashboard
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            )}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Dark Mode & Login (Desktop Only) */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center">
            <span className="mr-2 text-gray-700 dark:text-gray-200 text-sm">
              {isDarkMode ? "Dark Mode" : "Light Mode"}
            </span>
            <Switch checked={isDarkMode} onCheckedChange={handleToggle} />
          </div>

          {status === "loading" ? (
            <div className="text-gray-500 dark:text-gray-400">Loading...</div>
          ) : session ? (
            <div className="flex items-center space-x-2">
              {session.user?.image && (
                <img
                  src={session.user.image}
                  alt="Profile"
                  className="rounded-full w-8 h-8"
                />
              )}
              <span className="text-gray-700 dark:text-gray-200 text-sm">
                {session.user?.name}
              </span>
              <Button variant="default" onClick={() => signOut()}>
                Sign Out
              </Button>
            </div>
          ) : (
            <Button
              variant="default"
              onClick={() => signIn("google", { callbackUrl: "/" })}
            >
              Sign in with Google
            </Button>
          )}
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden">
          <Button
            variant={"outline"}
            size="icon"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <TiThMenu className="text-gray-700 dark:text-gray-200 text-xl" />
          </Button>
        </div>
      </nav>

      {/* Mobile Aside Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="flex-1 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          <aside className="w-72 bg-white dark:bg-gray-800 shadow-xl p-6 flex flex-col animate-slideInRight">
            <button
              className="mb-8 self-end text-gray-700 dark:text-gray-200 hover:text-red-500 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={26} />
            </button>

            <ul className="flex flex-col space-y-6 text-lg text-gray-700 dark:text-gray-200">
              <li>
                <Link
                  href="/allproduct"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-blue-500 transition"
                >
                  AllProduct
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-blue-500 transition"
                >
                  AboutUs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-blue-500 transition"
                >
                  ContactUs
                </Link>
              </li>

              {/* Dashboard link mobile-এ */}
              {session && (
                <li>
                  <Link
                    href="/dashboard"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="hover:text-blue-500 transition"
                  >
                    Dashboard
                  </Link>
                </li>
              )}

              <li className="flex items-center justify-between">
                <span className="text-sm">
                  {isDarkMode ? "Dark Mode" : "Light Mode"}
                </span>
                <Switch checked={isDarkMode} onCheckedChange={handleToggle} />
              </li>

              <li>
                {status === "loading" ? (
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Loading...
                  </div>
                ) : session ? (
                  <div className="flex flex-col space-y-2">
                    <span className="text-sm">{session.user?.name}</span>
                    <Button
                      variant="default"
                      className="w-full"
                      onClick={() => {
                        signOut();
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Sign Out
                    </Button>
                  </div>
                ) : (
                  <Button
                    variant="default"
                    className="w-full"
                    onClick={() => {
                      signIn("google", { callbackUrl: "/" });
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Sign in with Google
                  </Button>
                )}
              </li>
            </ul>
          </aside>
        </div>
      )}
    </header>
  );
};

export default Navbar;
