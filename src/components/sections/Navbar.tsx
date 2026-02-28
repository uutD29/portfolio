import { ModeToggle } from "@/components/mode-toggle"

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        {/* Logo */}
        <div>
          {/* Light Mode Logo */}
          <img
            src="/logo-b.png"
            alt="Logo"
            className="h-4 dark:hidden"
          />

          {/* Dark Mode Logo */}
          <img
            src="/logo-w.png"
            alt="Logo"
            className="hidden h-4 dark:block"
          />
        </div>

        <ModeToggle />
      </div>
    </header>
  )
}

export default Navbar