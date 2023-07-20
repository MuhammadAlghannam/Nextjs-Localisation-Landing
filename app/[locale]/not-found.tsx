import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center mt-[3em]">
      <h2 className="text-xl font-semibold text-mainBlack">لايوجد 404</h2>
      <p className="text-lg font-medium text-mainBlack">
        من فضلك اذهب إلى الصفحة{" "}
        <Link href="/" className="text-xl font-semibold text-secodary">
          الرئيسية
        </Link>
      </p>
    </div>
  );
}
