import assert from 'node:assert/strict';
import { periods, simulate } from './app.mjs';
assert.equal(periods(1, 0).full, periods(1, 0).small);
const ninety = periods(1, 90);
assert.ok(Math.abs(ninety.full / ninety.small - 1.18034) < 1e-5);
const course = simulate(1, 90);
assert.ok(Math.abs(course[225]) < 1e-6);
assert.ok(Math.abs(course[450] + Math.PI / 2) < 1e-6);
assert.ok(Math.abs(course.at(-1) - course[0]) < 1e-6);
