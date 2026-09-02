import test from "node:test";
import assert from "node:assert/strict";
import { toData, dataApply, dataReplay, dataRender, dataValidate } from "../dist/index.js";
import { TimerDOP } from "obix-timer";

test("toData is identity over the artifact", () => {
  assert.equal(toData(TimerDOP), TimerDOP);
});

test("dataApply / dataReplay thread state+payload+props explicitly", () => {
  const s1 = dataApply(TimerDOP, TimerDOP.initialState, "Start", undefined, TimerDOP.props);
  assert.deepEqual(s1, { seconds: 0, running: true });
  const s2 = dataReplay(TimerDOP, [["Start"], ["Tick"], ["Tick"], ["Stop"]]);
  assert.deepEqual(s2, { seconds: 2, running: false });
});

test("dataRender / dataValidate at the terminal", () => {
  const term = { seconds: 5, running: false };
  assert.match(dataRender(TimerDOP, term), /Finished/);
  assert.equal(dataValidate(TimerDOP, term).valid, true);
});
