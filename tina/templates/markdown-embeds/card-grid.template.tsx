import { icon } from "mermaid/dist/rendering-util/rendering-elements/shapes/icon";

export const CardGridTemplate = {
  name: "cardGrid",
  label: "Card Grid",
  ui: {
    defaultItem: {
      cards: [
        {
          title: "Card Title",
          description: "Card Description",
          link: "https://www.google.com",
          linkText: "Search now",
          /* ********************************************************* MODIFICHE FATTE QUI ********************************************************* */
          image: "https://via.placeholder.com/200x100",
          icon: "FaStar",
          /* ********************************************************* MODIFICHE FATTE QUI ********************************************************* */
        },
      ],
    },
  },
  fields: [
    {
      name: "cards",
      label: "Cards",
      type: "object",
      list: true,
      ui: {
        defaultItem: () => {
          return {
            title: "Card Title",
            description: "Card Description",
            link: "https://www.google.com",
            linkText: "Search now",
            /* ********************************************************* MODIFICHE FATTE QUI ********************************************************* */
            image: "https://via.placeholder.com/200x100",
            icon: "FaStar",
            /* ********************************************************* MODIFICHE FATTE QUI ********************************************************* */
          };
        },
        itemProps: (item) => {
          return {
            label: item.title || "Untitled",
          };
        },
      },
      fields: [
        {
          name: "title",
          label: "Title",
          type: "string",
        },
        {
          name: "description",
          label: "Description",
          type: "string",
          ui: {
            component: "textarea",
          },
        },
        {
          name: "link",
          label: "Link",
          type: "string",
        },
        {
          name: "linkText",
          label: "Button Text",
          type: "string",
        },
        /* ********************************************************* MODIFICHE FATTE QUI ********************************************************* */
        {
          name: "image",
          label: "Image",
          type: "image",
        },
        {
          name: "icon",
          label: "Icon",
          type: "string",
        },
        /* ********************************************************* MODIFICHE FATTE QUI ********************************************************* */
      ],
    },
  ],
};

export default CardGridTemplate;
