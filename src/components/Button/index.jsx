import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-sm" };
const variants = {
  fill: { blue_gray_900_03: "bg-blue_gray-900_03 text-white-A700" },
};
const sizes = { xs: "p-[5px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  size = "xs",
  variant = "fill",
  color = "blue_gray_900_03",
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
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["blue_gray_900_03"]),
};

export { Button };
