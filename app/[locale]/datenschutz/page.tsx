import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PrivacyContent from "@/components/PrivacyContent";
import LegalPage from "@/components/LegalPage";
import { isLocale, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ locale: string }> };

async function getLocale(params: Props["params"]): Promise<Locale> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return locale;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await getLocale(params);
  return pageMetadata(locale, "privacy");
}

export default async function PrivacyPage({ params }: Props) {
  const locale = await getLocale(params);
  return <LegalPage locale={locale} kind="privacy"><PrivacyContent locale={locale} /></LegalPage>;
}
