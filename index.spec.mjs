import assert from 'node:assert/strict';
import { it } from 'node:test';
import micromatch from 'micromatch';

it('matches v1', () => {
    const result = micromatch.isMatch('v1', 'v[1-9]*([0-9])')
    assert.equal(result, true)
});

it('matches v10', () => {
    const result = micromatch.isMatch('v10', 'v[1-9]*([0-9])')
    assert.equal(result, true)
});

it('matches v1000', () => {
    const result = micromatch.isMatch('v100', 'v[1-9]*([0-9])')
    assert.equal(result, true)
});

it('does not match v1.0.0', () => {
    const result = micromatch.isMatch('v1.0.0', 'v[1-9]*([0-9])')
    assert.equal(result, false)
});
