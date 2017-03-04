function multiplication(i, j, k)
            {
                return i*j*k;
            }
QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 == "1", "1=1 success!");
});
QUnit.test('Testing the new multiply function with two sets of inputs', function (assert) {
    assert.equal(multiplication(2, 2, 3), 12, "works with three positive integers");
    assert.equal(multiplication(2, -2, 3), -12, "works with two positive and one negative integers");
        assert.equal(multiplication(2, -2, -3), 12, "works with one positive and two negative integers");
    assert.equal(multiplication(2, 0, -3), 0, "works with zeros");

}); 