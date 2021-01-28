const testSeeder = require("./testOnSeeder");
const testCreate = require("./testOnCreate");
const testUpdate = require("./testOnUpdate");
const testDelete = require("./testOnDelete");
const testHash = require("./testOnHash");
const testRequiredFields = require("./testOnRequiredFields");

testSeeder.testOnSeeder();

testCreate.testOnCreate();

testUpdate.testOnUpdate();

testDelete.testOnDelete();

testHash.testOnHash();

testRequiredFields.testOnRequiredFields();
