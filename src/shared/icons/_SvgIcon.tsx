import React from "react";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
  width?: string | number;
  height?: string | number;
  titleAccess?: string;
  viewBox?: string; // @default '0 0 24 24'
  fontSize?: number | string;
  color?: string;
  fill?: string;
  style?: React.CSSProperties;
} & React.PropsWithoutRef<React.SVGProps<SVGSVGElement>>
& React.RefAttributes<SVGSVGElement>;

function SvgIcon(props: Props, ref: React.ForwardedRef<SVGSVGElement>) {
  const {
    children,
    style,
    className,
    titleAccess,
    width = "1em",
    height = "1em",
    fill = "currentColor",
    fontSize = 24,
    color = "inherit",
    viewBox = "0 0 24 24",
    ...rest
  } = props;

  const hasSvgAsChild = React.isValidElement(children) && children.type === "svg";

  return (
    <svg
      style={style}
      className={clsx("svg-icon", className)}
      focusable="false"
      viewBox={viewBox}
      width={width}
      height={height}
      fill={fill}
      color={color}
      fontSize={fontSize}
      ref={ref}
      {...(titleAccess && { role: "img" })}
      {...(!titleAccess && { "aria-hidden": true })}
      {...rest}
    >
      {hasSvgAsChild ? (children.props as React.SVGProps<SVGSVGElement>).children : children}
      {titleAccess ? <title>{titleAccess}</title> : null}
    </svg>
  );
}

type SvgIconProps = Omit<Props, "children">;
export type { SvgIconProps };
export default React.forwardRef(SvgIcon);

/**
 * How to use
 *
import type { SvgIconProps } from "./_SvgIcon";
import SvgIcon from "./_SvgIcon";
...
  <SvgIcon
    viewBox="0 0 15 18"
    fontSize="18px"
    color="cyan"
    {...props}
  >
    <path d="M5.5,...  Z"></path>
  </SvgIcon>
...
*/
