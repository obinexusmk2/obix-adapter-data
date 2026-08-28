import { applyAction, replayTrace } from "@obinexusltd/obix-ir";
export function toData(artifact) {
    return artifact;
}
export function dataApply(artifact, state, actionName, payload, props = artifact.props) {
    return applyAction(artifact, state, actionName, payload, props);
}
export function dataReplay(artifact, trace, from = artifact.initialState, props = artifact.props) {
    return replayTrace(artifact, trace, from, props);
}
export function dataRender(artifact, state, props = artifact.props) {
    return artifact.render ? artifact.render(state, props) : "";
}
export function dataValidate(artifact, state, props = artifact.props) {
    return artifact.validate ? artifact.validate(state, props) : { valid: true, violations: [] };
}
//# sourceMappingURL=index.js.map