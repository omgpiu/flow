import { Nodes } from "../core/components";
import { convertAskType } from "./convert-ask-type";

// export const updateRawData = (data: any) => {
//     console.log(data,'data')
//     let ref: number;
//     for (let i = 0; i < data.length; i++) {
//         if (data[i + 1]?.type ===Nodes.CONDITION_NODE) {
//             ref = i
//         }
//         if (data[i].Blocks) {
//             data[i].Blocks.forEach((el: any) => {
//                 el.target = ref
//                 el.condition = data[i].condition
//             })
//             //@ts-ignore
//             data[i].source = ref
//         }
//     }
// }
const isChoiceNodeType = (data: any, idx: number) => {
  return (
    data[idx]?.type === Nodes.QUESTION_NODE &&
    data[idx + 1]?.type === Nodes.CONDITION_NODE &&
    data[idx + 1].Blocks
  );
};
export const updateRawData = (data: any) => {
  let ref: number;
  let counter = 0;
  let pointerIdx;
  for (let i = 0; i < data.length; i++) {
    data[i].type = convertAskType(data[i]);
    if (isChoiceNodeType(data, i)) {
      data[i].type = Nodes.CHOICE_NODE;
      pointerIdx = i;
      if (!data[i].Blocks) {
        data[i].Blocks = [];
      }
      data[i + 1].skip = true;
      data[i].source = i;
      data[i + 1].Blocks.forEach((el: any, idx: number) => {
        if (idx === 0) {
          el.target = i;
        }
        el.target = `${i}`;
      });
      data[i].Blocks = [...data[i].Blocks, data[i + 1]];
      data.splice(pointerIdx + 1, 1);
    } else if (data[i].type === Nodes.CONDITION_NODE) {
      if (data[i].Blocks) {
        data[i].Blocks[0].target = `${i}-${0}`;
      }
    } else {
      pointerIdx = undefined;
      counter = 0;
    }
  }

  //     if (data[i + 1]?.type ===Nodes.CONDITION_NODE) {
  //         ref = i
  //     }
  //     if (data[i].Blocks) {
  //         data[i].Blocks.forEach((el: any) => {
  //             el.target = ref
  //             el.condition = data[i].condition
  //         })
  //         //@ts-ignore
  //         data[i].source = ref
  //     }
  //

  return {
    Blocks: data,
  };
};
