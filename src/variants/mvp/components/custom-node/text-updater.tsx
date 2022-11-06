import { memo, useRef } from 'react';
import { Handle, Position } from 'reactflow';
import './styles.css'
import { LOREM } from "../../../../constants";

const handleLeftStyle = {left: '25%'};
const handleRightStyle = {left: '75%'}

interface Props {
    id: string
    onDelete?: (id: string) => void
}

export const TextUpdaterNode = memo(({id, onDelete,...rest}:Props,context) => {
    console.log(rest,'TextUpdaterNode')
    console.log('context :', context)
    const ref = useRef<any>(null)
    const onClickHandler = () => {
        onDelete?.(id)
    }
    return (
        <div className="text-updater-node">
            <Handle type="target" position={Position.Top}/>
            <button onClick={onClickHandler}>Delete</button>
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
