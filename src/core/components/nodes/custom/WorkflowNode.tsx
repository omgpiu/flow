import React, { memo, useState } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';
import cx from 'classnames';

import styles from './NodeTypes.module.css';
import useNodeClick from "../../../lib/hooks/useNodeClick";
import { PopupModal } from "../../common";
import { NodesGrid } from "../../content";

export const WorkflowNode = memo(({ id, data }: NodeProps) => {
    // see the hook implementation for details of the click handler
    // calling onClick adds a child node to this node
    const onClick = useNodeClick(id);
    const [isOpen, setIsOpen] = useState(false)
    // console.log(isOpen, 'isOpen')
    return (
        <div className={cx(styles.node)} title="click to add a child node">

            {data.label}
            <Handle className={styles.handle} type="target" position={Position.Top} isConnectable={false}/>
            <Handle className={styles.handle} type="source" position={Position.Bottom} isConnectable={false}/>
        </div>
    );
})

