interface CustomAnchorEventTarget extends EventTarget {
  onClick?: () => void;
  onMouseOver?: () => void;
}
interface ClickMouseEvent extends React.MouseEvent<HTMLAnchorElement> {
  target: CustomAnchorEventTarget;
}

interface OnMouseOverEvent extends React.MouseEvent<HTMLAnchorElement> {
  target: CustomAnchorEventTarget;
}

export type { CustomAnchorEventTarget, ClickMouseEvent, OnMouseOverEvent };
