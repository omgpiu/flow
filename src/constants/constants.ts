export const INITIAL_NODES = [
  {
    id: "f6fe2d9d-b6e8-4cc3-a40c-44928099d085",
    type: "input",
    position: {
      x: 665,
      y: -41,
    },
    data: {
      label: "input add98882-6922-43f0-b06b-0ca758b61718",
    },
    width: 150,
    height: 66,
  },
  {
    id: "f069ee9e-9a9b-4618-a848-668cf09e7bd2",
    position: {
      x: 270.25,
      y: 273.5,
    },
    data: {
      label: "Node f069ee9e-9a9b-4618-a848-668cf09e7bd2",
    },
    width: 150,
    height: 66,
  },
  {
    id: "3ec22c9b-046e-4ec4-8e7d-44c7f64bcb5a",
    position: {
      x: 714.25,
      y: 337.5,
    },
    data: {
      label: "Node 3ec22c9b-046e-4ec4-8e7d-44c7f64bcb5a",
    },
    width: 150,
    height: 66,
  },
  {
    id: "721f01a9-fd0d-409e-a0e0-5da4dbcdee84",
    type: "textUpdater",
    position: {
      x: 782.25,
      y: 687.5,
    },
    data: {
      label: "textUpdater e72b267f-534e-48a5-acc1-9b4c4eb541d8",
    },
    width: 362,
    height: 234,
  },
  {
    id: "70a5c5fe-a165-4658-99c9-dabe96dbf88f",
    type: "custom",
    position: {
      x: 224.25,
      y: 729.5,
    },
    data: {
      label: "custom c511e5f0-7932-4400-a842-d28fd256cfb9",
    },
    width: 200,
    height: 594,
  },
  {
    id: "7904b105-86e6-4784-9ead-b0b225dfcbb4",
    type: "default",
    position: {
      x: 782.25,
      y: 1681.5,
    },
    data: {
      label: "default 11d1dece-9b8d-4acf-9857-a797c94a4011",
    },
    width: 150,
    height: 66,
  },
  {
    id: "d25bcd0a-5e20-4df3-8871-68c13ec8d295",
    type: "output",
    position: {
      x: 908.25,
      y: 2023.5,
    },
    data: {
      label: "output bc0f255b-200b-466d-a7a3-c523d6251afe",
    },
    width: 150,
    height: 66,
  },
];

export const INITIAL_EDGES = [
  {
    id: "f069ee9e-9a9b-4618-a848-668cf09e7bd2",
    source: "f6fe2d9d-b6e8-4cc3-a40c-44928099d085",
    target: "f069ee9e-9a9b-4618-a848-668cf09e7bd2",
  },
  {
    id: "3ec22c9b-046e-4ec4-8e7d-44c7f64bcb5a",
    source: "f6fe2d9d-b6e8-4cc3-a40c-44928099d085",
    target: "3ec22c9b-046e-4ec4-8e7d-44c7f64bcb5a",
  },
  {
    source: "3ec22c9b-046e-4ec4-8e7d-44c7f64bcb5a",
    sourceHandle: null,
    target: "721f01a9-fd0d-409e-a0e0-5da4dbcdee84",
    targetHandle: null,
    id: "reactflow__edge-3ec22c9b-046e-4ec4-8e7d-44c7f64bcb5a-721f01a9-fd0d-409e-a0e0-5da4dbcdee84",
  },
  {
    source: "f069ee9e-9a9b-4618-a848-668cf09e7bd2",
    sourceHandle: null,
    target: "70a5c5fe-a165-4658-99c9-dabe96dbf88f",
    targetHandle: null,
    id: "reactflow__edge-f069ee9e-9a9b-4618-a848-668cf09e7bd2-70a5c5fe-a165-4658-99c9-dabe96dbf88f",
  },
  {
    source: "70a5c5fe-a165-4658-99c9-dabe96dbf88f",
    sourceHandle: "a",
    target: "7904b105-86e6-4784-9ead-b0b225dfcbb4",
    targetHandle: null,
    id: "reactflow__edge-70a5c5fe-a165-4658-99c9-dabe96dbf88fa-7904b105-86e6-4784-9ead-b0b225dfcbb4",
  },
  {
    source: "70a5c5fe-a165-4658-99c9-dabe96dbf88f",
    sourceHandle: "b",
    target: "7904b105-86e6-4784-9ead-b0b225dfcbb4",
    targetHandle: null,
    id: "reactflow__edge-70a5c5fe-a165-4658-99c9-dabe96dbf88fb-7904b105-86e6-4784-9ead-b0b225dfcbb4",
  },
  {
    source: "721f01a9-fd0d-409e-a0e0-5da4dbcdee84",
    sourceHandle: "a",
    target: "7904b105-86e6-4784-9ead-b0b225dfcbb4",
    targetHandle: null,
    id: "reactflow__edge-721f01a9-fd0d-409e-a0e0-5da4dbcdee84a-7904b105-86e6-4784-9ead-b0b225dfcbb4",
  },
  {
    source: "721f01a9-fd0d-409e-a0e0-5da4dbcdee84",
    sourceHandle: "b",
    target: "7904b105-86e6-4784-9ead-b0b225dfcbb4",
    targetHandle: null,
    id: "reactflow__edge-721f01a9-fd0d-409e-a0e0-5da4dbcdee84b-7904b105-86e6-4784-9ead-b0b225dfcbb4",
  },
];

export const LOREM =
  "                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n" +
  "                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and\n" +
  "                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap\n" +
  "                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the\n" +
  "                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing\n" +
  "                software like Aldus PageMaker including versions of Lorem Ipsum.";
