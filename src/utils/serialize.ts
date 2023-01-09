import { Rect, Viewport } from "reactflow";
import { Nodes } from "../core/components";

const revertTypeMapper = {
  [Nodes.GET_FILE_NODE]: "Ask",
  [Nodes.CHOICE_NODE]: "Ask",
};
export const serialiseApiNodes = (
  nodes: any,
  edges: any,
  viewPort: Viewport,
  rect: Rect
) => {
  const serilNodes: any = [];
  const positionBlock: any = [];

  for (let i = 0; i < nodes.length; i++) {
    const {
      type: nodeType,
      position,
      id,
      selected,
      dragging,
      height,
      width,
      data,
      ...rest
    } = nodes[i];
    //@ts-ignore
    const type = revertTypeMapper[nodeType] ?? nodeType;

    serilNodes.push({
      pos_x: position.x,
      pos_y: position.y,
      type,
      ...rest,
    });

    positionBlock.push({
      type,
      pos_x: position.x,
      pos_y: position.y,
    });
  }

  const meta = {
    version: 0.1,
    flow: {
      Blocks: positionBlock,
      view_zoom: viewPort.zoom,
      view_pos_x: viewPort.x,
      view_pos_y: viewPort.y,
      canvas_x: rect.x,
      canvas_y: rect.y,
      connectionStyle: "quadratisch_praktisch_gut",
    },
  };

  const lastElement = {
    text: `UI_METAINFO:${JSON.stringify(meta)}`,
    type: "CodeComment",
  };

  serilNodes.push(lastElement);

  return {
    Blocks: serilNodes,
  };
};
