export type TooltipProps = {
  content: string;
  className?: string;
  position?: TooltipPosition;
};

export type TooltipPosition = "top" | "bottom" | "left" | "right";
