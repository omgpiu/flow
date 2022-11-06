import { memo, useRef } from 'react';
import { Handle, Position } from 'reactflow';
import './styles.css'
import { LOREM } from "../../../../constants";

const handleLeftStyle = {left: '25%'};
const handleRightStyle = {left: '75%'}

export const TextUpdaterNode = memo(() => {
    const ref = useRef<any>(null)
    return (
        <div className="text-updater-node">
            <Handle type="target" position={Position.Top}/>
            <div>
                <label htmlFor="text">Text:</label>
                <input id="text" name="text" ref={ref}/>
            </div>
            <hr/>
            <p>
                {LOREM}
            </p>
            <Handle type="source" position={Position.Bottom} id="a" style={handleLeftStyle}/>
            <Handle type="source" position={Position.Bottom} id="b" style={handleRightStyle}/>
        </div>
    );
})
