import { ModeToggle } from "@/components/mode-toggle"

const Navbar = () => {
  const base = import.meta.env.BASE_URL

  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div>
          <img
            src={`${base}logo-b.png`}
            alt="Logo"
            className="h-4 dark:hidden"
          />
          <img
            src={`${base}logo-w.png`}
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