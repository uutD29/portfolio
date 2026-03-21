import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Switch } from "@/components/ui/switch"

export default function LanguageSwitch() {
  const { i18n } = useTranslation()
  const [checked, setChecked] = useState<boolean>(false)

  // sync with current language
  useEffect(() => {
    setChecked(i18n.language === "id")
  }, [i18n.language])

  const handleChange = (value: boolean) => {
    setChecked(value)

    const lang = value ? "id" : "en"
    i18n.changeLanguage(lang)

    localStorage.setItem("lang", lang)
  }

  return (
    <div className="flex items-center gap-2">
      <span
        className={!checked ? "font-medium" : "text-muted-foreground"}
      >
        EN
      </span>

      <Switch
        checked={checked}
        onCheckedChange={handleChange}
      />

      <span
        className={checked ? "font-medium" : "text-muted-foreground"}
      >
        ID
      </span>
    </div>
  )
}