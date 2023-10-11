import { JSX, createSignal, splitProps } from "solid-js";
import { twMerge } from "tailwind-merge";

type TextInputProps = JSX.IntrinsicElements["input"] & {};

export const TextInput = (props: TextInputProps) => {
  const [localProps, inputProps] = splitProps(props, ["class", "placeholder"]);
  const [inputRef, setInputRef] = createSignal<HTMLInputElement | null>(null);
  const [isFocused, setIsFocused] = createSignal(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    if (!inputProps.value) {
      setIsFocused(false);
    }
  };

  return (
    <div class={`relative mt-2 mb-2`}>
      <input
        type="text"
        class={twMerge(
          `text-gray-700  border-gray-300 border rounded-md p-2 w-full active:border-blue-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${localProps.class || ""}`
        )}
        value={inputProps.value}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={(r) => setInputRef(r)}
        {...inputProps}
      />
      <label
        class={twMerge(
          ` bg-white absolute left-2 transition-all duration-100 ease-linear pl-1 pr-1 ${
            isFocused() || Boolean(inputProps.value)
              ? " text-gray-600 -top-2 transform scale-75 mt-0 bg-opacity-100 leading-4 "
              : " mt-2 bg-opacity-0 "
          }`
        )}
        onclick={() => inputRef()?.focus()}
      >
        {localProps.placeholder}
      </label>
    </div>
  );
};
