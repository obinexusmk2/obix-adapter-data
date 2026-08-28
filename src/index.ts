/**
 * @obinexusltd/obix-adapter-data
 *
 * The Data projection: the identity over a DOP artifact. No hidden props, no
 * instance, no lifecycle. The caller threads `state`, `payload` and `props`
 * itself. All transitions route through obix-ir.applyAction — the same business
 * action every other adapter calls.
 */
import { applyAction, replayTrace } from "@obinexusltd/obix-ir";
import type {
  DOPArtifact,
  State,
  Props,
  Payload,
  ActionTrace,
  ValidationResult,
} from "@obinexusltd/obix-spec";

/** Data projection === the artifact itself. */
export function toData<S extends object = State, P extends object = Props>(
  artifact: DOPArtifact<S, P>,
): DOPArtifact<S, P> {
  return artifact;
}

/** Apply one action. Caller owns everything. */
export function dataApply<S extends object = State, P extends object = Props>(
  artifact: DOPArtifact<S, P>,
  state: S,
  actionName: string,
  payload: Payload,
  props: P = artifact.props,
): S {
  return applyAction(artifact, state, actionName, payload, props);
}

/** Fold a trace over the Data projection. */
export function dataReplay<S extends object = State, P extends object = Props>(
  artifact: DOPArtifact<S, P>,
  trace: ActionTrace,
  from: S = artifact.initialState,
  props: P = artifact.props,
): S {
  return replayTrace(artifact, trace, from, props);
}

export function dataRender<S extends object, P extends object>(
  artifact: DOPArtifact<S, P>,
  state: S,
  props: P = artifact.props,
): string {
  return artifact.render ? artifact.render(state, props) : "";
}

export function dataValidate<S extends object, P extends object>(
  artifact: DOPArtifact<S, P>,
  state: S,
  props: P = artifact.props,
): ValidationResult {
  return artifact.validate ? artifact.validate(state, props) : { valid: true, violations: [] };
}
