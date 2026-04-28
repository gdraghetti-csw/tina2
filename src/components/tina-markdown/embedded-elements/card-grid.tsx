import Link from "next/link";
import { tinaField } from "tinacms/dist/react";
import * as FaIcons from "react-icons/fa";

const iconMap = FaIcons;

export const CardGrid = (data: {
  cards: {
    title: string;
    description: string;
    link: string;
    linkText: string;
    /* ********************************************************* MODIFICHE FATTE QUI ********************************************************* */
    image?: string;
    icon?: string;
    /* ********************************************************* MODIFICHE FATTE QUI ********************************************************* */
  }[];
}) => {
  const cardClasses =
  "relative border border-neutral-border bg-neutral-background/75 rounded-lg group p-6  shadow-lg hover:bg-gradient-to-br hover:from-transparent hover:via-transparent hover:to-brand-secondary-hover/15 dark:hover:bg-gradient-to-br dark:hover:from-transparent dark:hover:via-brand-secondary/10 dark:hover:to-brand-secondary/50 transition-all duration-300";
  return (
    <div className="my-8 grid grid-cols-1 rounded-lg gap-4 lg:grid-cols-2">
      {data.cards?.map((card, index) => {
        if (card.link) {
          /* ********************************************************* MODIFICHE FATTE QUI ********************************************************* */
          /* const IconComponent = iconMap[card.icon as keyof typeof iconMap]; */
          /* ********************************************************* MODIFICHE FATTE QUI ********************************************************* */
          return (
            <Link
              href={card.link}
              className={cardClasses}
              key={`card-${index}-${card.title}`}
            >{/* ********************************************************* MODIFICHE FATTE QUI ********************************************************* */}
              {/* {IconComponent && (
                <div className="mb-4 text-3xl">
                  <IconComponent />
                </div>
              )} */}
              <img
                src={card.image}
                alt={card.title}
                className="mb-4 rounded-md w-full h-32 object-cover"
                data-tina-field={tinaField(data.cards[index], "image")}
              />
            {/* ********************************************************* MODIFICHE FATTE QUI ********************************************************* */}
              <h2
                className="text-2xl font-medium brand-primary-gradient mb-2 font-heading"
                data-tina-field={tinaField(data.cards[index], "title")}
              >
                {card.title}
              </h2>
              <p
                className="text-neutral-text font-light mb-10 font-body"
                data-tina-field={tinaField(data.cards[index], "description")}
              >
                {card.description}
              </p>
              {card.link && (
                <p className="flex items-center absolute bottom-4">
                  <span
                    className="relative brand-secondary-gradient"
                    data-tina-field={tinaField(data.cards[index], "linkText")}
                  >
                    {card.linkText ?? "See more"}
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-brand-secondary-gradient-start to-brand-secondary-gradient-end group-hover:w-full transition-all duration-300 ease-in-out" />
                  </span>
                  <span className="ml-1 mr-2 brand-secondary-gradient"> ›</span>
                </p>
              )}
            </Link>
          );
        }
        return (
          <div className={cardClasses} key={`card-${index}-${card.title}`}>
            <h2
              className="text-2xl font-medium brand-primary-gradient mb-2 font-heading"
              data-tina-field={tinaField(data.cards[index], "title")}
            >
              {card.title}
            </h2>

            <p
              className="text-neutral-text font-light mb-4 font-body"
              data-tina-field={tinaField(data.cards[index], "description")}
            >
              {card.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};
