import { forwardRef, ReactElement } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

type MainButtonProps = {
  text: string;
  href?: string; 
  form?: string;
  isLoading?: boolean;
  action?: () => void;
  isSubmitable?: boolean;
  disabled?: boolean;
  width?: "full_width" | string;
  dataLoadingText?: string;
  variant?: "primary" | "secondary";
  classes?: string;
  iconRoute?: string;
  rightIconRoute?: string;
  rightIconClass?: string;
  iconComponent?: ReactElement;
  size?: "small" | "normal" | "large";
};

const MainButton = forwardRef<HTMLButtonElement, MainButtonProps>(
  (
    {
      text,
      href,
      isLoading = false,
      form,
      action,
      disabled = false,
      isSubmitable,
      width,
      dataLoadingText = "Please wait ...",
      variant = "primary",
      classes,
      iconRoute,
      rightIconRoute,
      rightIconClass = "w-[24px] h-[24px]",
      iconComponent,
      size = "normal",
    },
    ref
  ) => {
    const propWidth =
      width === "full_width" ? "w-full" : width ? width : "w-[100px]";

    const isSecondaryVariant = variant !== "primary";

    const size_height =
      size === "normal"
        ? "h-[34px]"
        : size === "large"
        ? "h-[34px]"
        : "h-[20px]";

    const variant_hover =
      variant === "primary" ? "hover:bg-primary" : "hover:bg-secondary";

    const buttonContent = (
      <>
        {iconRoute && (
          <img
            src={iconRoute}
            alt="left button icon"
            className="w-[24px] h-[24px]"
          />
        )}
        {iconRoute && <span>&nbsp;</span>}
        {iconComponent}
        {iconComponent && <span>&nbsp;</span>}
        {text}
        {rightIconRoute && <span>&nbsp;</span>}
        {rightIconRoute && (
          <img
            src={rightIconRoute}
            alt="right button icon"
            className={rightIconClass}
          />
        )}
      </>
    );

    if (href) {
      return (
        <Link href={href} passHref>
          <a>
            <Button
              className={`${
                isSecondaryVariant ? " text-white  bg-secondary" : "bg-primary"
              } text-white shadow-xl ${propWidth} md:${propWidth}  select-none rounded-[0.625rem] hover:opacity-90 ${variant_hover} ${size_height} ${classes}`}
              onClick={!disabled ? action : () => undefined}
              type={isSubmitable ? "submit" : "button"}
              ref={ref}
              disabled={disabled}
            >
              {buttonContent}
            </Button>
          </a>
        </Link>
      );
    }

    return !isLoading ? (
      <Button
        form={form}
        className={`${
          isSecondaryVariant ? " text-white  bg-secondary" : "bg-primary"
        } text-white shadow-xl ${propWidth} md:${propWidth}  select-none rounded-[0.625rem] hover:opacity-90 ${variant_hover} ${size_height} ${classes}`}
        onClick={!disabled ? action : () => undefined}
        type={isSubmitable ? "submit" : "button"}
        ref={ref}
        disabled={disabled}
      >
        {buttonContent}
      </Button>
    ) : (
      <Button
        className={`bg-primary text-white ${propWidth} md:${propWidth} select-none rounded-[0.625rem] cursor-not-allowed ${size_height} ${
          classes ? classes : ""
        }`}
        ref={ref}
        disabled
      >
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        {dataLoadingText}
      </Button>
    );
  }
);

MainButton.displayName = "MainButton";

export default MainButton;