# obix-adapter-data

**The Data projection — identity over the DOP artifact.**

```bash
npm install obix-adapter-data
```

## API

| Export | Role |
|---|---|
| `toData(artifact)` | returns the artifact unchanged |
| `dataApply(artifact, state, name, payload, props?)` | one transition via `obix-ir.applyAction` |
| `dataReplay(artifact, trace, from?, props?)` | fold a trace |
| `dataRender` / `dataValidate` | render / validate at a given state |

No hidden props. No instance. The caller owns `state`, `payload` and `props`.
Every transition goes through the **same** `applyAction` primitive the other
adapters use — `Action(state, payload, props)` is invoked identically.

## Dependency role

`obix-spec` + `obix-ir`. Never depends on `obix-validator`, `obix-equivalence`, the
compiler, or the runtime. Consumed by `obix-equivalence` and `obix-timer`.

## Level 0 status

✅ Complete.
