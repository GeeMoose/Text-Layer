import { defaultLocale, localeNames } from "@/config/locale";
import Link from "next/link";

const LangLinks = () => {
  return (
    <div className="flex space-x-2 flex-wrap justify-center">
      <div className="flex space-x-2">
        <Link href="/terms" target="_blank">Terms</Link>
        <span>•</span>
        <Link href="/privacy" target="_blank">Privacy</Link>
      </div>
      {Object.keys(localeNames).map((key: string) => {
        const name = localeNames[key];
        return (
          <span key={key}>
            <Link href={`/${key === defaultLocale ? "/" : key}`}>{name}</Link>
          </span>
        );
      })}
    </div>
  );
};

export default LangLinks;

