import type { ButtonType } from "../types/types";

export default function Button({
  children,
  handler,
  type,
  className = "",
  ...props
}: ButtonType) {
  return (
    <button
      className={`${className} px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-medium`}
      type={type}
      onClick={handler}
      {...props}
    >
      {children}
    </button>
  );
}
