import React from "react";

type ModalSelectPriorityProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function ModalSelectPriority({
  value,
  onChange,
}: ModalSelectPriorityProps) {
  return (
    <div className="mb-2">
      <select
        className={`mt-1 h-8 rounded-md border px-1 text-xs outline-none
          ${
            value === "high"
              ? "border-red-500 text-red-500"
              : value === "medium"
              ? "border-yellow-500 text-yellow-500"
              : "border-green-500 text-green-500"
          }`}
        name="modal-select-priority"
        id="modal-select-priority"
        value={value}
        onChange={onChange}
      >
        <option value="high" className="text-red-400">
          High Priority
        </option>
        <option value="medium" className="text-yellow-400">
          Medium Priority
        </option>
        <option value="low" className="text-green-400">
          Low Priority
        </option>
      </select>
    </div>
  );
}

// ${
//   value === "high"
//     ? "border-red-300"
//     : value === "medium"
//     ? "border-yellow-400"
//     : "text-green-400"
// }
