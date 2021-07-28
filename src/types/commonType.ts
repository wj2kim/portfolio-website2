interface CustomAnchorEventTarget extends EventTarget {
  onClick?: () => void;
}
interface ClickMouseEvent extends React.MouseEvent<HTMLAnchorElement> {
  target: CustomAnchorEventTarget;
}

export type { CustomAnchorEventTarget, ClickMouseEvent };
