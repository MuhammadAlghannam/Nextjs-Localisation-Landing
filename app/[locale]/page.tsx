// componenets
import {
  AboutUs,
  Header,
  Education,
  Servcies,
  Testomoinal,
  Requests,
  RegesterForm,
} from "@/components/mainSections";
import MyScrollToTop from "@/components/custom/component/MyScrollToTop";

// translate
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export default function Home() {
  const locale = useLocale();

  const tHeader = useTranslations("Header");
  const tAbout = useTranslations("About");
  const tEducation = useTranslations("Education");
  const tServcies = useTranslations("Servcies");
  const tTestominal = useTranslations("Testominal");
  const tRequests = useTranslations("Requests");
  const tForm = useTranslations("Form");

  return (
    <main>
      <Header
        title={tHeader("title")}
        desc={tHeader("desc")}
        btn={tHeader("btn")}
        locale={locale}
      />
      <div className="max-w-[1440px] mx-auto sm:px-16 px-6">
        <AboutUs
          title1={tAbout("title1")}
          title2={tAbout("title2")}
          desc1={tAbout("desc1")}
          desc2={tAbout("desc2")}
          count1={tAbout("count1")}
          count2={tAbout("count2")}
          btn={tAbout("btn")}
        />
        <Education
          title1={tEducation("title1")}
          title2={tEducation("title2")}
          supTile1={tEducation("supTile1")}
          supTile2={tEducation("supTile2")}
          supTile3={tEducation("supTile3")}
          btn={tEducation("btn")}
          btn2={tEducation("btn2")}
        />
        <Servcies
          locale={locale}
          supTitle1={tServcies("supTitle1")}
          supTitle2={tServcies("supTitle2")}
          title1={tServcies("title1")}
          title2={tServcies("title2")}
          title3={tServcies("title3")}
          title4={tServcies("title4")}
          title5={tServcies("title5")}
          title6={tServcies("title6")}
          title7={tServcies("title7")}
          title8={tServcies("title8")}
          title9={tServcies("title9")}
          title10={tServcies("title10")}
          title11={tServcies("title11")}
          title12={tServcies("title12")}
        />
        <Testomoinal
          supTitleee1={tTestominal("supTitleee1")}
          supTitleee2={tTestominal("supTitleee2")}
          title1={tTestominal("title1")}
          subTitle1={tTestominal("subTitle1")}
          desc1={tTestominal("desc1")}
          title2={tTestominal("title2")}
          subTitle2={tTestominal("subTitle2")}
          desc2={tTestominal("desc2")}
          title3={tTestominal("title3")}
          subTitle3={tTestominal("subTitle3")}
          desc3={tTestominal("desc3")}
          title4={tTestominal("title4")}
          subTitle4={tTestominal("subTitle4")}
          desc4={tTestominal("desc4")}
        />
        <Requests
          supTitle1={tRequests("supTitle1")}
          supTitle2={tRequests("supTitle2")}
          title1={tRequests("title1")}
          title2={tRequests("title2")}
          title3={tRequests("title3")}
          title4={tRequests("title4")}
          title5={tRequests("title5")}
          title6={tRequests("title6")}
        />
        <RegesterForm
          toaste={tForm("toaste")}
          supTitle1={tForm("supTitle1")}
          supTitle2={tForm("supTitle2")}
          required1={tForm("required1")}
          placeholder1={tForm("placeholder1")}
          required2={tForm("required2")}
          placeholder2={tForm("placeholder2")}
          required3={tForm("required3")}
          placeholder3={tForm("placeholder3")}
          required4={tForm("required4")}
          subRequired4={tForm("subRequired4")}
          placeholder4={tForm("placeholder4")}
          required5={tForm("required5")}
          placeholder5={tForm("placeholder5")}
          required6={tForm("required6")}
          placeholder6={tForm("placeholder6")}
          btn={tForm("btn")}
          loadingBtn={tForm("loadingBtn")}
        />
        <MyScrollToTop locale={locale} />
      </div>
    </main>
  );
}
