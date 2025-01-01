import React from "react";

export interface TextProps {
  label: string;
}

const Text: React.FC<TextProps> = ({ label }) => {
  return <div>{label}</div>;
};

export default Text;
