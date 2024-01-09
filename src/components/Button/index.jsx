import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[7px]" };
const variants = {
  fill: {
    gray_100: "bg-gray-100 text-deep_purple-A200",
    deep_purple_A200: "bg-deep_purple-A200 text-white-A700",
  },
  outline: {
    deep_purple_A200:
      "border border-deep_purple-A200 border-solid text-deep_purple-A200",
  },
};
const sizes = { xs: "p-1.5", sm: "p-2.5", md: "p-[13px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["gray_100", "deep_purple_A200"]),
};

export { Button };
