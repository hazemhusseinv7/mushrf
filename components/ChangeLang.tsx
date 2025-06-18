import { useTransition } from "react";
// import { useParams } from "next/navigation";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

import { Button } from "@heroui/react";

import { FaEarthAfrica } from "react-icons/fa6";

const ChangeLang = () => {
  const t = useTranslations("Header");

  const [pending, startTransition] = useTransition();

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  // const params = useParams();

  const handleClick = () => {
    const nextLocale = locale === "en" ? "ar" : "en";
    startTransition(() => {
      router.replace(
        {
          pathname,
        },
        { locale: nextLocale }
      );
    });
  };

  return (
    <Button
      className="min-w-0 bg-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
      aria-label={t("chalnge-language")}
      onPress={handleClick}
      disabled={pending}
    >
      <FaEarthAfrica className="size-4 text-zinc-900" />
    </Button>
  );
};

export default ChangeLang;
