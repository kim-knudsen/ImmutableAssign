
declare namespace ImmutableAssign {

    interface IIassignOption {
        freeze: boolean;                        // Deep freeze both input and output
        freezeInput: boolean;                   // Deep freeze input
        freezeOutput: boolean;                  // Deep freeze output
        disableAllCheck: boolean;
        disableHasReturnCheck: boolean;
        // Disable validation for extra statements in the getProp() function, 
        // which is needed when running the coverage, e.g., istanbul.js does add 
        // instrument statements in our getProp() function, which can be safely ignored. 
        disableExtraStatementCheck: boolean;   
    }

    interface IIassign extends IIassignOption {
        <TObj, TProp, TContext>(
            obj: TObj,
            getProp: (obj: TObj, context: TContext) => TProp,
            setProp: (prop: TProp) => TProp,
            context?: TContext,
            option?: IIassignOption): TObj;
    }
}

//declare function iassign<TObj, TProp, TContext>(obj: TObj, getProp: (obj: TObj, context: TContext) => TProp, setProp: (prop: TProp) => TProp, context?: TContext): TObj;
//export = iassign;

declare module "immutable-assign" {
    let iassign: ImmutableAssign.IIassign;
    export = iassign;
}

declare var iassign: ImmutableAssign.IIassign;
