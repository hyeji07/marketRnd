export namespace FormInterface {
  export interface InputInterface {
    title?: string;
    type: string;
    value: string | number | undefined;
    name: string;
    placeholder?: string;
    InputTitle?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
  }

  /* export interface InputRegexInterface {
    title?: string;
    type: string;
    name: string;
    value: string | number | undefined;
    placeholder: string;
    InputTitle?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    labelClassName: string;
    className?: string;
    maxValue?: number;
    regexCheck?: RegExp; //정규식은 RegExp 타입
    defaultText?: string;
    errorText?: string;
    helperTextClassName?: string;
    onInput?: any;
    required?: boolean;
    confirm?: boolean;
  }

  export interface TextAreaInterface {
    InputTitle: string;
    labelClassName?: string;
    title: string;
    value: string | number | undefined;
    name: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    className?: string;
  } */
}
