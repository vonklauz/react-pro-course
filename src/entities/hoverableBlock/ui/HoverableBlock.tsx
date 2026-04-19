import { useState, type FC } from "react";
import styles from "./HoverableBlock.module.css";
import { Tooltip } from "shared/ui/tooltip";

export const HoverableBlock: FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const handleClick = () => {
    console.log("Клик на родителе");
  };

  return (
    <>
      <div
        className={styles.hoverableBlock}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <p>Наведи, чтобы увидеть тултип</p>
      </div>
      {showTooltip && <Tooltip content="Это тултип!" position="top" className={styles.anchor} />}
    </>
  );
};
