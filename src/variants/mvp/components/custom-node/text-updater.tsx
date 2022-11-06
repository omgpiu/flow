import { memo, useRef } from 'react';
import { Handle, Position, useReactFlow } from 'reactflow';
import './styles.css'
import { LOREM } from "../../../../constants";

const handleLeftStyle = {left: '25%'};
const handleRightStyle = {left: '75%'}

interface Props {
    id: string
}

export const TextUpdaterNode = memo(({id}: Props,) => {

    const ref = useRef<any>(null)
    //@ts-ignore
    const {deleteElements, getNode} = useReactFlow();
    const onClickHandler = () => {
        deleteElements({nodes: [getNode(id)!]})
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
