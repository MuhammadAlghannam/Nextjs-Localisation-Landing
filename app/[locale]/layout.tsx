// Nextjs
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// next intl
import useTextDirection from "@/components/custom/hooks/useTextDirection";
import { useTranslations } from "next-intl";

// global style
import "../globals.css";

//font
import { Almarai } from "next/font/google";

// components
import NavBar from "@/components/mainLayout/navbar/NavBar";
import Footer from "@/components/mainLayout/footer/Footer";

// toast
import { ToastClinte } from "@/providers/ToastClinte";

//font
const almarai = Almarai({ subsets: ["arabic"], weight: ["300", "400", "700"] });

// metaData
export const metadata: Metadata = {
  title: "Global Solutions for Training and Education",
  description:
    "Global Solutions for Training and Education  Platform, Teaching, E-Learning",
  applicationName: "Global Solutions for Training and Education",
  keywords: ["Education", "دراسه", "تعليم", "جامعي", "Bachelor", "بكالوريوس"],
  //url: "https://nextjs-13-full-stack-ecommerce-l26ssvc4k-muhammadsamir1212.vercel.app",
  // metadataBase: new URL(
  //   "https://nextjs-13-full-stack-ecommerce-l26ssvc4k-muhammadsamir1212.vercel.app"
  // ),
  openGraph: {
    title: "Global Solutions for Training and Education",
    description:
      "Global Solutions for Training and Education  Platform, Teaching, E-Learning",
    //url: "https://nextjs-13-full-stack-ecommerce-l26ssvc4k-muhammadsamir1212.vercel.app",
    siteName: "Global Solutions for Training and Education",
    locale: "ar_SA",
    type: "website",
  },
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: any;
}) {
  const direction = useTextDirection(locale);

  // Show a 404 error if the user requests an unknown locale
  if (locale !== locale) {
    notFound();
  }

  const t = useTranslations("NavBar");
  const t2 = useTranslations("Footer");

  return (
    <html lang={locale} dir={direction}>
      <body className={almarai.className}>
        {/* toast */}
        <ToastClinte />

        {/* Navbar */}
        <NavBar
          title1={t("title1")}
          title2={t("title2")}
          title3={t("title3")}
          title4={t("title4")}
          title5={t("title5")}
          title6={t("title6")}
          title7={t("title7")}
          locale={locale}
        />

        {/* Main */}
        {children}

        {/* footer */}
        <Footer
          title1={t2("title1")}
          title2={t2("title2")}
          title3={t2("title3")}
          title4={t2("title4")}
          title5={t2("title5")}
          desc={t2("desc")}
          supTitle1={t2("supTitle1")}
          supTitle2={t2("supTitle2")}
          supTitle3={t2("supTitle3")}
          copyright={t2("copyright")}
          locale={locale}
        />
      </body>
    </html>
  );
}
