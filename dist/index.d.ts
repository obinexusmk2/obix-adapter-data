import type { DOPArtifact, State, Props, Payload, ActionTrace, ValidationResult } from "obix-spec";
export declare function toData<S extends object = State, P extends object = Props>(artifact: DOPArtifact<S, P>): DOPArtifact<S, P>;
export declare function dataApply<S extends object = State, P extends object = Props>(artifact: DOPArtifact<S, P>, state: S, actionName: string, payload: Payload, props?: P): S;
export declare function dataReplay<S extends object = State, P extends object = Props>(artifact: DOPArtifact<S, P>, trace: ActionTrace, from?: S, props?: P): S;
export declare function dataRender<S extends object, P extends object>(artifact: DOPArtifact<S, P>, state: S, props?: P): string;
export declare function dataValidate<S extends object, P extends object>(artifact: DOPArtifact<S, P>, state: S, props?: P): ValidationResult;
//# sourceMappingURL=index.d.ts.map