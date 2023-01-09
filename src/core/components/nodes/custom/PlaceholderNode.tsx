import React, { memo, useState } from "react";
import { Handle, NodeProps, Position } from "reactflow";
import cx from "classnames";

import styles from "./NodeTypes.module.css";
import usePlaceholderClick from "../../../lib/hooks/usePlaceholderClick";
import { PopupModal } from "../../common";
import { NodesGrid } from "../../content";

export const PlaceholderNode = memo(({ id, data }: NodeProps) => {
  // see the hook implementation for details of the click handler
  // calling onClick turns this node and the connecting edge into a workflow node
  const onClick = usePlaceholderClick(id);
  const [isOpen, setIsOpen] = useState(false);

  const nodeClasses = cx(styles.node, styles.placeholder);

  return (
    <div
      onClick={() => setIsOpen(true)}
      className={nodeClasses}
      title="click to add a node"
    >
      <PopupModal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        <NodesGrid addNode={onClick} />
      </PopupModal>
      {data.label}
      <Handle
        className={styles.handle}
        type="target"
        position={Position.Top}
        isConnectable={false}
      />
      <Handle
        className={styles.handle}
        type="source"
        position={Position.Bottom}
        isConnectable={false}
      />
    </div>
  );
});
