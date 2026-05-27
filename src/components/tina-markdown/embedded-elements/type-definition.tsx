import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import MarkdownComponentMapping from "../markdown-component-mapping";

function controlIconColor(iconName: string): string {
  if (iconName.toLowerCase().includes("folder")) {
    return "#f2b559";
  }
  if (iconName.toLowerCase().includes("pdf")) {
    return "#F25959";
  }
  if (iconName.toLowerCase().includes("doc")) {
    return "#59a9f2";
  }
  return "currentColor";
}

export default function TypeDefinition(props) {
  {
    const propertyItem = (property) => {
      return (
        <div className="space-y-4 py-2 px-6">
          <div
                data-tina-field={tinaField(property, "typeUrl")}
                className={`w-full text-sm mb-0.5 ${property.typeUrl ? "text-neutral-text" /* "underline decoration-neutral-text hover:decoration-neutral-text/20 text-neutral-text hover:text-neutral-text/50" */ : "text-neutral-text"}`}
              >
                {property.typeUrl ? (
                  <a href={property.typeUrl} rel="noopener noreferrer" target="_blank">
                    <div className="w-full flex flex-col md:flex-row md:items-start gap-2">
                      { property.icon &&
                        <div className="flex justify-center md:w-1/9">
                            {property.icon && (
                              <i className={property.icon} style={{ fontSize: "2.5rem", color: controlIconColor(property.icon) }}></i>
                            )}
                        </div>
                      }
                      <div className="w-full md:w-7/9">
                        <div
                          className="font-heading text-lg text-neutral-text break-normal max-w-full inline-block"
                          data-tina-field={tinaField(property, "name")}
                        >
                          {property?.name?.replace(/([A-Z])/g, "\u200B$1")}
                        </div>
                        <div
                          className="text-neutral-text-secondary text-sm w-fit"
                          data-tina-field={tinaField(property, "description")}
                        >
                          {/* <p>{property.description}</p> */}
                          {/* Questo è per mettere rich-text */}
                          <TinaMarkdown
                            content={property.description}
                            components={MarkdownComponentMapping}
                          />
                        </div>
                        <div className="mb-1">
                          {property.required && (
                            <p className="text-amber-600 font-medium text-xs">REQUIRED</p>
                          )}
                          {property.experimental && (
                            <p className="bg-gradient-to-r from-brand-secondary-gradient-start to-brand-secondary-gradient-end bg-clip-text text-transparent font-medium text-xs">
                              EXPERIMENTAL
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="w-full md:w-1/9 flex justify-end"> 
                        {property.icon_link ? (
                            <div className="flex justify-center">
                              <i className={property.icon_link} style={{ fontSize: "1.5rem" }}></i>
                            </div>
                          ) : (
                            <div className="flex justify-center">
                              <i className="fa-duotone fa-solid fa-arrow-up-right-from-square" style={{ fontSize: "1.5rem" }}></i>
                            </div>
                          ) }
                      </div>
                    </div>
                  </a>
                ) : (
                  property.name
                )}
              </div>
        </div>
      );
    };

    return (
      <div className="bg-neutral-background rounded-lg shadow-lg my-6 py-2 border-neutral-border border">
        {props.property?.map((property, index) => (
          <div key={`property-${index}`}>
            {index !== 0 && (
              <hr className="h-0.25 w-full bg-neutral-border rounded-lg border-none" />
            )}
            {propertyItem(property)}
          </div>
        ))}

        {props.property?.some((property) => property.required) && (
          <div className=" mx-6 my-2 p-4 bg-neutral-background-secondary border-neutral-border border rounded-md flex items-start gap-3">
            <p className="text-sm text-neutral-text">
              All properties marked as{" "}
              <span className="text-amber-600 font-medium">REQUIRED</span> must
              be specified for the field to work properly.
            </p>
          </div>
        )}
      </div>
    );
  }
}
