export type ripped<T> = T extends readonly (infer U)[] ? U
  : T extends (infer U)[] ? U
    : T extends (...args: any[]) => infer U ? U
      : T extends Promise<infer U> ? U
        : T

export type λ<inputType = void | unknown, returnType = void> = (inputArgument: inputType) => returnType
