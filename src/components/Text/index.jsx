import React from "react";

const sizeClasses = {
  txtRobotoBlack26: "font-black font-roboto",
  txtStapelRegular15: "font-normal font-stapel",
  txtRobotoMedium16Green800: "font-medium font-roboto",
  txtStapelBold20: "font-bold font-stapel",
  txtStapelBold70Gray90002: "font-bold font-stapel",
  txtStapelBold70: "font-bold font-stapel",
  txtStapelBold20Bluegray90002: "font-bold font-stapel",
  txtStapelBold50: "font-bold font-stapel",
  txtStapelRegular40: "font-normal font-stapel",
  txtRobotoRegular14Indigo200: "font-normal font-roboto",
  txtInterSemiBold14: "font-inter font-semibold",
  txtStapelRegular15Bluegray90002: "font-normal font-stapel",
  txtInterSemiBold14WhiteA700: "font-inter font-semibold",
  txtStapelBold36: "font-bold font-stapel",
  txtStapelMedium24: "font-medium font-stapel",
  txtStapelRegular25: "font-normal font-stapel",
  txtRobotoMedium16Gray900: "font-medium font-roboto",
  txtStapelMedium40: "font-medium font-stapel",
  txtRobotoRegular12: "font-normal font-roboto",
  txtRobotoRegular14: "font-normal font-roboto",
  txtRobotoRegular16: "font-normal font-roboto",
  txtRobotoRegular18: "font-normal font-roboto",
  txtStapelRegular25Black900: "font-normal font-stapel",
  txtRobotoMedium14: "font-medium font-roboto",
  txtRobotoMedium16: "font-medium font-roboto",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
