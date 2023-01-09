import { memo, useMemo, useRef, useState } from "react";
import { Handle, Position, useReactFlow } from "reactflow";
import { Body, Container, Header } from "../../common";
import style from "../finish/styles.module.css";
import { Nodes, NODES_NAME } from "../../types";

interface Props {
  id: string;
}

export const TransitionNode = memo(({ id }: Props) => {
  const { deleteElements, getNode, setNodes, getNodes } = useReactFlow();
  //@ts-ignore
  const label = getNode(id)?.label;
  // console.log(label, 'label')
  const options = useMemo(() => {
    const tagNodes = getNodes().filter((e) => e.type === Nodes.TAG_NODE);
    // @ts-ignore
    const values = tagNodes?.map((el) => el?.label);
    return values;
  }, []);

  const [tag, setTag] = useState<any>(label);

  const amountRef = useRef<any>(null);

  const onSave = () => {
    setNodes((nds) =>
      nds.map((node: any) => {
        if (node.id === id) {
          //@ts-ignore
          return {
            ...node,
            label: tag,
            counter: amountRef.current.value,
          };
        }
        return node;
      })
    );
  };

  const deleteNode = () => {
    deleteElements({ nodes: [getNode(id)!] });
  };

  const onChangeHandler = (e: any) => setTag(e.target.value);

  return (
    <Container>
      <Handle type="target" position={Position.Top} />
      <Handle type="source" id="a" position={Position.Right} />
      <Header
        onDelete={deleteNode}
        title={NODES_NAME[Nodes.TRANSITION_NODE]}
        onSave={onSave}
      >
        <div className={style.innerModal}>
          <span>Переход на метку</span>
          <select
            name="variants"
            id="variants"
            onChange={(e) => onChangeHandler(e)}
          >
            {options.map((value, idx) => (
              <option defaultValue={tag} key={idx} value={value}>
                {value}
              </option>
            ))}
          </select>
          <span>Не более чем данное количество раз</span>
          <input type="text" defaultValue={100} ref={amountRef} />
        </div>
      </Header>
      <Body>
        <span>{tag}</span>
      </Body>
      <Handle type="source" id="b" position={Position.Bottom} />
    </Container>
  );
});
