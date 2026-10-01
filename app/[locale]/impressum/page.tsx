import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";
import LegalNoticeContent from "@/components/LegalNoticeContent";
import LegalPage from "@/components/LegalPage";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ locale: string }> };

async function getLocale(params: Props["params"]): Promise<Locale> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return locale;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await getLocale(params);
  return pageMetadata(locale, "impressum");
}

export default async function ImpressumPage({ params }: Props) {
  const locale = await getLocale(params);
  return <LegalPage locale={locale} kind="impressum"><LegalNoticeContent locale={locale} /></LegalPage>;
}
