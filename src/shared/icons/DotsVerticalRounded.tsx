import { memo } from "react";

import type { SvgIconProps } from "./_SvgIcon";
import SvgIcon from "./_SvgIcon";

// viewBox="0 0 24 24" width="24" height="24" → default
const DotsVerticalRoundedIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
  </SvgIcon>
);

export default memo(DotsVerticalRoundedIcon);
