
import {ColorList} from "@/src/components/tina-markdown/embedded-elements/cs-color-list";

export const ColorButtonTemplate = {
  name: "colorButton",
  label: "Color Button",
  fields: [
    {
      type: "string",
      name: "variant",
      label: "Visualizzazione",
      options: [
        { label: "Colore e nome", value: "full" },
        { label: "Tabella", value: "table" },
        { label: "Solo colore", value: "color" },
      ],
      ui: {
        component: "select",
      },
    },
    {
    type: "object",
    name: "color",
    label: "Colore",
    fields: [
      {
        type: "string",
        name: "color",
        label: "Valore colore",
      },
      {
        type: "string",
        name: "name",
        label: "Nome colore",
      },
    ],
    ui: {
      component: ColorList,
    },
  },
  ],
};