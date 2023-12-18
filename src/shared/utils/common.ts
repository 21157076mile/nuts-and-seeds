// import { toast } from "react-toastify";
// import Decimal from "decimal.js";

export const isInViewport = (
  element: HTMLElement,
  options?: { top: number; left: number }
) => {
  const { top = 0, left = 0 } = options || {};
  if (!element) {
    return false;
  }
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= top &&
    rect.left >= left &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// export const arrayToObject = (
//   arrayData: any[],
//   key: string | string[] | "no_key",
//   conditional: boolean | any = true
// ) => {
//   if (!arrayData || !key) {
//     return {};
//   }
//   const getKey = (currentObject: any) => {
//     if (key === "no_key") {
//       return currentObject;
//     }
//     if (typeof key === "string") {
//       return currentObject[key];
//     }
//     if (Array.isArray(key)) {
//       let newKey = "";
//       key.forEach((k: any) => {
//         if (typeof newKey === "object") {
//           newKey = newKey[k];
//         } else {
//           newKey = currentObject[k] || "";
//         }
//       });

//       return newKey;
//     }
//   };

//   return arrayData.reduce((val, current) => {
//     const check =
//       typeof conditional === "function" ? conditional(current) : conditional;

//     const k = getKey(current);
//     if (!val[k] && k && check) {
//       val[k] = current;
//     }

//     return val;
//   }, {});
// };

export const truncateLongText = (text: string, maxLength = 95) => {
  if (text.length < maxLength) {
    return text;
  }
  return text.slice(0, maxLength).trim() + "...";
};

// https://stackoverflow.com/a/37511463
export function normalize(str: string) {
  if (typeof str !== "string") return str;
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}


export const makeArray = (
  length: number,
  initValue: number | string = "-"
): string[] | number[] => {
  if (!length) return [];
  return Array.from(new Array(length)).fill(initValue);
};


// export const saveToClipBoard = (content: string, message = "Copied") => {
//   navigator?.clipboard?.writeText?.(content).then(() => {
//     toast.success(message);
//   });
// };


