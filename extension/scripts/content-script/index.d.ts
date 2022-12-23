import * as _stitches_react_types_styled_component from '@stitches/react/types/styled-component';
import * as _stitches_react_types_stitches from '@stitches/react/types/stitches';
import * as _stitches_react_types_css_util from '@stitches/react/types/css-util';
import * as _stitches_react_types_config from '@stitches/react/types/config';
import * as react from 'react';
import react__default from 'react';
import * as _stitches_react_types_util from '@stitches/react/types/util';

declare const styled: <Type extends _stitches_react_types_util.Function | keyof JSX.IntrinsicElements | react.ComponentType<any>, Composers extends (string | _stitches_react_types_util.Function | react.ComponentType<any> | {
    [name: string]: unknown;
})[], CSS = _stitches_react_types_css_util.CSS<{
    bp1: "(min-width: 640px)";
    bp2: "(min-width: 768px)";
    bp3: "(min-width: 1024px)";
}, {}, _stitches_react_types_config.DefaultThemeMap, {
    m: (value: number) => {
        margin: number;
    };
    mt: (value: number) => {
        marginTop: number;
    };
    mr: (value: number) => {
        marginRight: number;
    };
    mb: (value: number) => {
        marginBottom: number;
    };
    ml: (value: number) => {
        marginLeft: number;
    };
    mx: (value: number) => {
        marginLeft: number;
        marginRight: number;
    };
    my: (value: number) => {
        marginTop: number;
        marginBottom: number;
    };
    size: (value: number) => {
        width: number;
        height: number;
    };
    linearGradient: (value: number) => {
        backgroundImage: string;
    };
    br: (value: number) => {
        borderRadius: number;
    };
}>>(type: Type, ...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | _stitches_react_types_util.Function | react.ComponentType<any> ? Composers[K] : _stitches_react_types_stitches.RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T ? { [Name in keyof T]?: _stitches_react_types_util.String | _stitches_react_types_util.Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : never : _stitches_react_types_util.WideObject) & {
        css: CSS;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T_1 ? { [Name_1 in keyof T_1]?: _stitches_react_types_util.String | _stitches_react_types_util.Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : never : _stitches_react_types_util.WideObject) | undefined;
} & CSS & (Composers[K] extends infer T_2 ? { [K2 in keyof T_2]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; } : never); }) => _stitches_react_types_styled_component.StyledComponent<Type, _stitches_react_types_styled_component.StyledComponentProps<Composers>, {
    bp1: "(min-width: 640px)";
    bp2: "(min-width: 768px)";
    bp3: "(min-width: 1024px)";
}, _stitches_react_types_css_util.CSS<{
    bp1: "(min-width: 640px)";
    bp2: "(min-width: 768px)";
    bp3: "(min-width: 1024px)";
}, {}, _stitches_react_types_config.DefaultThemeMap, {
    m: (value: number) => {
        margin: number;
    };
    mt: (value: number) => {
        marginTop: number;
    };
    mr: (value: number) => {
        marginRight: number;
    };
    mb: (value: number) => {
        marginBottom: number;
    };
    ml: (value: number) => {
        marginLeft: number;
    };
    mx: (value: number) => {
        marginLeft: number;
        marginRight: number;
    };
    my: (value: number) => {
        marginTop: number;
        marginBottom: number;
    };
    size: (value: number) => {
        width: number;
        height: number;
    };
    linearGradient: (value: number) => {
        backgroundImage: string;
    };
    br: (value: number) => {
        borderRadius: number;
    };
}>>;
declare const theme: string & {
    className: string;
    selector: string;
} & {};
declare const css: <Composers extends (string | _stitches_react_types_util.Function | react.JSXElementConstructor<any> | react.ExoticComponent<any> | {
    [name: string]: unknown;
})[], CSS = _stitches_react_types_css_util.CSS<{
    bp1: "(min-width: 640px)";
    bp2: "(min-width: 768px)";
    bp3: "(min-width: 1024px)";
}, {}, _stitches_react_types_config.DefaultThemeMap, {
    m: (value: number) => {
        margin: number;
    };
    mt: (value: number) => {
        marginTop: number;
    };
    mr: (value: number) => {
        marginRight: number;
    };
    mb: (value: number) => {
        marginBottom: number;
    };
    ml: (value: number) => {
        marginLeft: number;
    };
    mx: (value: number) => {
        marginLeft: number;
        marginRight: number;
    };
    my: (value: number) => {
        marginTop: number;
        marginBottom: number;
    };
    size: (value: number) => {
        width: number;
        height: number;
    };
    linearGradient: (value: number) => {
        backgroundImage: string;
    };
    br: (value: number) => {
        borderRadius: number;
    };
}>>(...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | _stitches_react_types_util.Function | react.JSXElementConstructor<any> | react.ExoticComponent<any> ? Composers[K] : _stitches_react_types_stitches.RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T ? { [Name in keyof T]?: _stitches_react_types_util.String | _stitches_react_types_util.Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : never : _stitches_react_types_util.WideObject) & {
        css: CSS;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T_1 ? { [Name_1 in keyof T_1]?: _stitches_react_types_util.String | _stitches_react_types_util.Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : never : _stitches_react_types_util.WideObject) | undefined;
} & CSS & (Composers[K] extends infer T_2 ? { [K2 in keyof T_2]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; } : never); }) => _stitches_react_types_styled_component.CssComponent<_stitches_react_types_styled_component.StyledComponentType<Composers>, _stitches_react_types_styled_component.StyledComponentProps<Composers>, {
    bp1: "(min-width: 640px)";
    bp2: "(min-width: 768px)";
    bp3: "(min-width: 1024px)";
}, CSS>;

type ButtonVariants = "primary" | "secondary";
interface ButtonProps {
    children: react__default.ReactNode;
    variant: ButtonVariants;
}

declare const Button: (props: ButtonProps) => JSX.Element;

type InputProps = react__default.ComponentProps<"input">;

declare const Input: (props: InputProps) => JSX.Element;

export { Button, Input, css, styled, theme };
