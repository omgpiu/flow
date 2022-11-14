import React from 'react';
import './App.css';
import { BlockSchema } from "./core";
import { INITIAL_EDGES, INITIAL_NODES } from "./constants";

const nodes = localStorage.getItem('nodes') ? JSON.parse(localStorage.getItem('nodes')!) : INITIAL_NODES
const edges = localStorage.getItem('edges') ? JSON.parse(localStorage.getItem('edges')!) : INITIAL_EDGES

    function App() {

        return (
            <div className='flow'>
                <BlockSchema initialNodes={nodes} initialEdges={edges}/>
            </div>
        );
    }

export default App;
