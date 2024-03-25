import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}



export const getSerialNumber = (id, data, type = "id") => {
  let index = data?.findIndex((object) => {
    if (type === "id") {
      return object.id === id;
    }
    if (type === "uuid") {
      return object.uuid === id;
    }
  });
  return index + 1;
};