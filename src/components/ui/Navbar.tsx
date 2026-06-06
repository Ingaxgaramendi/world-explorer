import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Globe } from "lucide-react";

interface NavbarProps extends React.ComponentPropsWithoutRef<"header"> {}

export const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ className, ...props }, ref) => {
    const location = useLocation();

    // Definimos los links de navegación con su estado activo de forma dinámica
    const routes = [
      {
        href: "/",
        label: "Home",
        active: location.pathname === "/",
      },
      {
        href: "/entities",
        label: "Entities",
        active: location.pathname === "/entities",
      },
    ];

    return (
      <header
        ref={ref}
        className={cn(
          "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
          className,
        )}
        {...props}
      >
        <div className="container flex h-14 items-center justify-between">
          {/* Logo / Brand */}
          <Link
            to="/"
            className="flex items-center space-x-2 font-bold tracking-tight text-foreground transition-colors hover:text-foreground/80"
          >
            <Globe className="h-5 w-5 text-primary" />
            <span>World Explorer</span>
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center space-x-1 text-sm font-medium">
            {routes.map((route) => (
              <Link
                key={route.href}
                to={route.href}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  "px-3 transition-colors",
                  route.active
                    ? "bg-muted font-semibold text-foreground hover:bg-muted"
                    : "text-muted-foreground hover:text-foreground hover:bg-transparent",
                )}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    );
  },
);

Navbar.displayName = "Navbar";
