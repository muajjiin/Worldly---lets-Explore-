
 

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";

// Utility to combine Tailwind class names safely
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format date strings into "Month DD, YYYY"
export const formatDate = (dateString: string): string => {
  return dayjs(dateString).format("MMMM DD, YYYY");
};

// Parse JSON from a Markdown code block
export function parseMarkdownToJson(markdownText: string): unknown | null {
  const regex = /```json\n([\s\S]+?)\n```/;
  const match = markdownText.match(regex);

  if (match && match[1]) {
    try {
      return JSON.parse(match[1].trim());
    } catch (error) {
      console.error("Error parsing JSON", error);
      return null;
    }
  }

  console.error("No valid JSON found in markdown text.");
  return null;
}

// Parse Trip data from JSON string
export function parseTripData(jsonString: string): Trip | null {
  try {
    const data: Trip = JSON.parse(jsonString);
    return data;
  } catch (error) {
    console.error("Failed to parse trip data:", error);
    return null;
  }
}

// Extract the first word from a string
export function getFirstWord(input: string = ""): string {
  return input.trim().split(/\s+/)[0] || "";
}

// Calculate trending percentage
export const calculateTrendingPercentage = (
  countOfThisMonth: number,
  countOfLastMonth: number
): TrendResult => {
  if (countOfLastMonth === 0) {
    return countOfThisMonth === 0
      ? { trend: "no change", percentage: 0 }
      : { trend: "increment", percentage: 100 };
  }

  const change = countOfThisMonth - countOfLastMonth;
  const percentage = parseFloat(
    (Math.abs((change / countOfLastMonth) * 100)).toFixed(2)
  );

  if (change > 0) {
    return { trend: "increment", percentage };
  } else if (change < 0) {
    return { trend: "decrement", percentage };
  } else {
    return { trend: "no change", percentage: 0 };
  }
};

// Format camelCase or PascalCase keys into human-readable text
export const formatKey = (key: keyof TripFormData): string => {
  return key
    .replace(/([A-Z])/g, " $1") // add space before uppercase letters
    .replace(/^./, (str) => str.toUpperCase()) // capitalize first letter
    .trim();
};










