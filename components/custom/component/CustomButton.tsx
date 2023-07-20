import { CustomButtonProps } from "@/types";

export default function CustomButton({
  title,
  containerStyles,
  handleClick,
  btnType,
  btnDisable,
  btnValue
}: CustomButtonProps) {
  return (
    <button
      value={btnValue}
      disabled={btnDisable}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}
