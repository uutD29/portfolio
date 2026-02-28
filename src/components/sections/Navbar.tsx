import { ModeToggle } from "@/components/mode-toggle"
import logoBlack from "@/assets/logo-b.png"
import logoWhite from "@/assets/logo-w.png"

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        <div>
          <img
            src={logoBlack}
            alt="Logo"
            className="h-4 dark:hidden"
          />
          <img
            src={logoWhite}
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