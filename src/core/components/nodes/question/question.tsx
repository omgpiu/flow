import { Fragment, memo, useRef, useState } from "react";
import { Handle, Position, useReactFlow } from "reactflow";
import { Body, Container, Header } from "../../common";
import style from "./styles.module.css";
import { Nodes, NODES_NAME } from "../../types";
import Select from "antd/lib/select";

interface Props {
  id: string;
}

export const QuestionNode = memo(({ id }: Props) => {
  const { deleteElements, getNode, setNodes } = useReactFlow();
  //@ts-ignore
  const valueMessage = getNode(id)?.text;
  //@ts-ignore
  const valueVariable = getNode(id)?.result_variable;
  //@ts-ignore
  const selectValues = getNode(id)?.options ?? [];
  const selectedValuesArray: Array<string> = [];
  const [nodeData, setNodeData] = useState<any>({
    valueMessage,
    valueVariable,
    selectValues,
  });

  const textAreaRef = useRef<any>(null);
  const inputRef = useRef<any>(null);

  const onSave = () => {
    setNodes((nds) =>
      nds.map((node: any) => {
        if (node.id === id) {
          //@ts-ignore
          return {
            ...node,
            text: textAreaRef.current?.value,
            result_variable: inputRef.current?.value,
            options: selectedValuesArray,
          };
        }
        return node;
      })
    );
    setNodeData((prev: any) => ({
      ...prev,
      valueMessage: textAreaRef.current.value,
      valueVariable: inputRef.current.value,
      selectValues: selectedValuesArray,
    }));
  };

  const deleteNode = () => {
    deleteElements({ nodes: [getNode(id)!] });
  };

  const textVariable = nodeData?.valueVariable ?? "переменную";

  return (
    <Container>
      <Handle type="target" position={Position.Top} />
      <Header
        onDelete={deleteNode}
        title={NODES_NAME[Nodes.QUESTION_NODE]}
        onSave={onSave}
      >
        <div className={style.innerModal}>
          <span>Текст сообщения</span>
          <textarea ref={textAreaRef} rows={5} />
          <span>Варианты ответа</span>
          <Select
            mode="tags"
            style={{ width: "100%" }}
            tokenSeparators={[","]}
            onChange={(value, option) => {
              selectedValuesArray.push(value.at(-1));
            }}
          />
          <span>Имя переменной для хранения ответа</span>
          <input type="text" ref={inputRef} />
        </div>
      </Header>
      <Body>
        <span>{nodeData?.valueMessage}</span>

        <p>
          <span>Варианты ответа</span>
          {nodeData.selectValues.map((el: any) => {
            return <Fragment key={el}>{el}</Fragment>;
          })}
        </p>

        <span>{`Сохранить результат в  ${textVariable}`}</span>
      </Body>
      <Handle type="source" position={Position.Bottom} />
    </Container>
  );
});
