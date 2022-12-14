import { memo, useRef, useState } from "react";
import { Handle, Position, useReactFlow } from "reactflow";
import { Body, Container, Header } from "../../common";
import style from "./styles.module.css";
import { Nodes, NODES_NAME } from "../../types";

interface Props {
  id: string;
}

interface State {
  messageValue: string;
  variableValue: string;
  isWithFile: number;
  btnText: string;
}

interface Payload {}

const OPTIONS = [
  {
    label: "Файл можно пропустить",
    value: 0,
  },
  {
    label: "Файл обязательный",
    value: 1,
  },
];

const getInitialValues = (node: any) => {
  const messageValue = node?.text ?? "Добавьте пожалуйста файл";
  const variableValue = node?.result_variable ?? "user_files";
  const isWithFile = node?.file || 0;
  const btnText = node?.text_skip_file ?? "Пропустить";

  return {
    messageValue,
    variableValue,
    isWithFile,
    btnText,
  };
};

export const GetFileNode = memo(({ id }: Props) => {
  const { deleteElements, getNode, setNodes } = useReactFlow();
  const { messageValue, variableValue, isWithFile, btnText } = getInitialValues(
    getNode(id)! as unknown as Payload
  );

  const [nodeData, setNodeData] = useState<State>({
    messageValue,
    variableValue,
    isWithFile,
    btnText,
  });

  const textAreaRef = useRef<any>(null);
  const variableMessageRef = useRef<any>(null);
  const btnTextRef = useRef<any>(null);
  const selectRef = useRef<any>(null);

  const onSave = () => {
    setNodes((nds) =>
      nds.map((node: any) => {
        if (node.id === id) {
          //@ts-ignore
          return {
            ...node,
            text: textAreaRef.current?.value,
            result_variable: variableMessageRef.current?.value,
            file: selectRef.current?.value,
            text_skip_file: btnTextRef.current?.value,
          };
        }
        return node;
      })
    );
    setNodeData((prev) => ({
      ...prev,
      messageValue: textAreaRef.current.value,
      variableValue: btnTextRef.current.value,
      isWithFile: selectRef.current?.value,
      btnText: btnTextRef.current?.value,
    }));
  };

  const deleteNode = () => {
    deleteElements({ nodes: [getNode(id)!] });
  };

  return (
    <Container>
      <Handle type="target" position={Position.Top} />
      <Header
        onDelete={deleteNode}
        title={NODES_NAME[Nodes.GET_FILE_NODE]}
        onSave={onSave}
      >
        <div className={style.innerModal}>
          <span>Текст сообщения</span>
          <textarea ref={textAreaRef} defaultValue={messageValue} rows={5} />
          <span>Требования файла</span>
          <select name="variants" id="variants" ref={selectRef}>
            {OPTIONS.map(({ label, value }, idx) => (
              <option key={idx} value={value}>
                {label}
              </option>
            ))}
          </select>
          <span>Текст кнопки для пропуска загрузки </span>
          <input type="text" ref={btnTextRef} defaultValue={btnText} />
          <span>Имя переменной для хранения ответа</span>
          <input
            type="text"
            ref={variableMessageRef}
            defaultValue={variableValue}
          />
        </div>
      </Header>
      <Body>
        <span>{nodeData?.messageValue}</span>
        <span>{`Сохранить результат в  ${variableValue}`}</span>
      </Body>
      <Handle type="source" position={Position.Bottom} />
    </Container>
  );
});
