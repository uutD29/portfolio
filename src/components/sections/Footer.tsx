const Footer = () => {
  return (
    <footer className="border-t mt-24">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Uhud Tarbani. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer