export declare type ClassName = string | string[] | {
    [name: string]: boolean;
};
export declare function create(prefix: string): (name: ClassName, literal?: string | boolean) => string;
export declare const cname: (name: ClassName, literal?: string | boolean) => string;
