import { memo } from "react";

import type { SvgIconProps } from "./_SvgIcon";
import SvgIcon from "./_SvgIcon";

const MonitorIcon = (props: SvgIconProps) => (
  <SvgIcon fill="none" {...props}>
    <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z" strokeWidth="2" strokeLinejoin="round"></path><path d="M14 15c0 3 2 5 2 5H8s2-2 2-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
  </SvgIcon>
);

export default memo(MonitorIcon);
