import React from "react";
import colors from "../../../data/colors.json";

export const ColorList = ({ input }) => {
    
  const flatColors = Object.entries(colors).flatMap(([name, value]) => {
    
    if (typeof value === "string") {
      return [[name, value]];
    }
    
    if (typeof value === "object") {
      return Object.entries(value).map(([k, v]) => [
        `${name}-${k}`,
        v,
      ]);
    }
    
    return [];
  });

const getTextColorSimple = (hex: string) => {
  if (!hex.startsWith("#")) return "#000";

  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  // formula semplice (perceived brightness)
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  return brightness > 150 ? "#000" : "#fff";
};

const getShortName = (name: string) => {
  const parts = name.split("-");
  return parts.slice(-2).join("-");
};
  
  return (
    <div className="w-full">
      {/* INPUT MANUALE */}
      {/* <input
        type="text"
        placeholder="Srvivi un colore (es. #ffffff)"
        onChange={(e) => input.onChange(e.target.value)}
        className="border px-2 py-1 rounded w-full mb-4"
      /> */}
      <div className="grid grid-cols-3 w-full gap-2">
        {flatColors.map(([name, value]) => (
          <button
            key={name as string}
            type="button"
            onClick={() => input.onChange({ color: value, name: getShortName(name as string) })}
            style={{
              background: value as string,
              border:
                input.value?.color === value ? "2px solid black" : "1px solid #ccc",
              height: 25,
              borderRadius: 4,
              color: getTextColorSimple(value as string),
            }}
            title={value as string}
          >
            {getShortName(name as string)}
          </button>
        ))}

      </div>
    </div>
  );
};  