import React, { memo, useRef } from 'react';
import clsx from "clsx";
import { LEFT_COLUMN, RIGHT_COLUMN } from "./constants";
import styles from './styles.module.css'

interface Props {
    addNode?: () => void
    className?: string
}

const Buttons = ({ children, style, addNode }: any) => {
    return <button className={clsx(styles[style], styles.dndflow)}
                   onClick={addNode}>{children}</button>

}

export const NodesGrid = memo(({ addNode, className }: Props) => {


    const addNewNode = ()=>{




    }

    return (
        <div className={styles.wrap}>
            <ol>
                {LEFT_COLUMN.concat(RIGHT_COLUMN).map(el => <Buttons key={el.type} style={el.style} addNode={addNode} >
                        {el.type}
                    </Buttons>
                )}
                {RIGHT_COLUMN.map(el => <Buttons key={el.type} style={el.style} addNode={addNode}>
                    {el.type}
                </Buttons>)}
            </ol>
        </div>
    )
        ;
})
