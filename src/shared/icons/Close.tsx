import { memo } from "react";

import type { SvgIconProps } from "./_SvgIcon";
import SvgIcon from "./_SvgIcon";

const CloseIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 10 10" fontSize={10} {...props}>
    <path d="M0 0L10 10M10 0L0 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
  </SvgIcon>
);

export default memo(CloseIcon);

