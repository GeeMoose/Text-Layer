import { defaultLocale, localeNames } from "@/config/locale";
import Link from "next/link";

const LangLinks = () => {
  return (
    <div className="flex flex-col space-y-2 items-center">
      <div className="flex space-x-2">
        <Link href={`/${defaultLocale}/terms`} target="_blank">Terms</Link>
        <span>•</span>
        <Link href={`/${defaultLocale}/privacy`} target="_blank">Privacy</Link>
      </div>
      <div className="flex space-x-2 flex-wrap justify-center">
        {Object.keys(localeNames).map((key: string) => {
          const name = localeNames[key];
          return (
            <span key={key}>
              <Link href={`/${key === defaultLocale ? "/" : key}`}>{name}</Link>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default LangLinks;

