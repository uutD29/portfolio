import { useTranslation } from "react-i18next"

const Footer = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-background pt-24 pb-10 px-6 md:px-12 border-t border-border/40">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/40 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          
          <p>
            © {currentYear} Uhud Tarbani — {t("footer_rights")}
          </p>

          <div className="flex gap-8 mt-4 md:mt-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-foreground transition-colors"
            >
              {t("footer_back_to_top")} ↑
            </button>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer