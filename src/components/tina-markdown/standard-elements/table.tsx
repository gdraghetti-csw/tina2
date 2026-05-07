import { TinaMarkdown } from "tinacms/dist/rich-text";
import DocsMDXComponentRenderer from "../markdown-component-mapping";

export const Table = (props) => {
  // Navigate through the nested structure to find the actual table content
  const tableRows = props?.children?.props?.children || [];
  const rowCount = tableRows.length;



/*   // estra riga 0 e cella 0 per ottenere il colore
  const firstCellContent = tableRows[0]?.props?.children[0]?.props?.content[0]?.children[0]?.text || "";
// se dentro la prima cella trovo la stringa ":(xxxx)" quello che è xxx sono regole css da insreir e nel div princiaple del componente, altrimenti non inserisco regole css
 
const cssMatch = firstCellContent.match(/:\((.*?)\)/);
const customCss = cssMatch ? cssMatch[1] : "";
console.log("firstCellContent", firstCellContent); 
console.log("customCss:", customCss);

// se trovo una corrispoande za queta deve essere rimossa dal valore della cella in modo che non venga visualizzata nella cella stessa

// customCSS è una stringa ma devo convertirla per poter assegnaral aa style del div, ad esempio se customCss è "color: red; background-color: blue;" devo trasformarlo in un oggetto {color: "red", backgroundColor: "blue"}
const parseCustomCss = (cssString: string) => {
  const styles: Record<string, string> = {};
  cssString.split(";").forEach((rule) => {
    const [property, value] = rule.split(":").map((part) => part.trim());
    if (property && value) {
      // Convert CSS property to camelCase for React
      const camelCaseProperty = property.replace(/-([a-z])/g, (match, letter) =>
        letter.toUpperCase()
      );
      styles[camelCaseProperty] = value;
    }
  });
  return styles;
}

  const customStyles = parseCustomCss(customCss);
  console.log("firstCellContent2", firstCellContent); 
console.log("customCss2:", customCss);

if (cssMatch) {
 tableRows[0].props.children[0].props.content[0].children[0].text = firstCellContent.replace(cssMatch[0], "").trim();
} */

// se dentro la prima riga trovo un a stringa che corrisponde a "Brand" allora inserisco regole css altrimneti non inserissco regole css
const firstCellContent2 = tableRows[0]?.props?.children[0]?.props?.content[0]?.children[0]?.text || "";
const keywords = [
  "Brand", "Accent", "Gray", "Neutral",
  "Red", "Yellow", "Green", "Blue",
  "Orange", "Purple", "Magenta"
];
const hasMatch = keywords.some(keyword =>
  firstCellContent2.includes(keyword)
);
console.log("hasMatch", hasMatch);
console.log("firstCellContent", firstCellContent2); 

  return (
    <div className="my-6 overflow-x-auto rounded-lg shadow-md mx-4" /* style={hasMatch ? {float: "left"} : {float: "none"}} */>
      <table className="w-full table-auto">
        <tbody>
          {tableRows.map((row, rowIndex) => {
            // Each row has its own props.children array containing cells
            const cells = row?.props?.children || [];
            const CellComponent = rowIndex === 0 ? "th" : "td";

            return (
              <tr
                key={`row-${rowIndex}`}
                className={"bg-neutral-background-secondary/50"}
              >
                {cells.map((cell, cellIndex) => {
                  return (
                    <CellComponent
                      key={`cell-${rowIndex}-${cellIndex}`}
                      className={` px-4 pt-2 ${
                        rowIndex === 0
                          ? " text-left font-tuner bg-neutral-background-secondary  border-b-[0.5px] border-neutral-border "
                          : ""
                      } ${cellIndex === 0 ? "max-w-xs break-words" : ""}
                      ${
                        rowIndex === 0 || rowIndex === rowCount - 1
                          ? ""
                          : "border-b border-neutral-border"
                      }
                      `}
                    >
                      {cell?.props?.children}
                      <TinaMarkdown
                        content={cell?.props?.content as any}
                        components={DocsMDXComponentRenderer}
                      />
                    </CellComponent>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
