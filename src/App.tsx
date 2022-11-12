import React from 'react';
import './App.css';
import { EdgeWithButtonFlow } from "./core/mvp";
import { INITIAL_EDGES, INITIAL_NODES } from "./constants";

const nodes = localStorage.getItem('nodes') ? JSON.parse(localStorage.getItem('nodes')!) : INITIAL_NODES
const edges = localStorage.getItem('edges') ? JSON.parse(localStorage.getItem('edges')!) : INITIAL_EDGES

    function App() {

        return (
            <div className='flow'>
                <EdgeWithButtonFlow initialNodes={nodes} initialEdges={edges}/>
            </div>
        );
    }

export default App;
