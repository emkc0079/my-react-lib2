import { jsx as _jsx } from "react/jsx-runtime";
const Button = ({ label, onClick }) => {
    return (_jsx("button", { style: {
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
        }, onClick: onClick, children: label }));
};
export default Button;
