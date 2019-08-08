import * as React from "react";
import { Validation } from "mota-validation";
export interface IFormProps {
    className?: string;
    children?: React.ReactNode | React.ReactNodeArray;
    validation?: Validation;
}
export declare function Form(props: IFormProps): JSX.Element;
