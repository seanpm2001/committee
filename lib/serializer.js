const wrap = require('word-wrap');

const {
  SUMMARY_TITLE,
  TEST_PLAN_TITLE,
  BREAKING_CHANGES_TITLE,
  TITLE_SECTIONS_COUNT,
  BODY_SECTIONS_COUNT,
  DEFAULT_TYPE_TAG,
  DEFAULT_TEST_PLAN,
  WRAP_SETTINGS,
} = require('./constants');

const serializers = new Map();
const serialize = node => serializers.get(node.type)(node);

serializers.set('title', node =>
  `${node.typeTag || DEFAULT_TYPE_TAG}${node.sectionTag
    ? `(${node.sectionTag})`
    : ''}: ${node.value.trim()}`.slice(0, WRAP_SETTINGS.width),
);

serializers.set('body', node => {
  const summary = node.summary.trim();
  const testPlan = node.testPlan && node.testPlan.trim();
  const breakingChanges = node.breakingChanges && node.breakingChanges.trim();

  if (!summary && !testPlan && !breakingChanges) {
    return '';
  }

  let result = `${SUMMARY_TITLE}${summary}${TEST_PLAN_TITLE}${testPlan ||
    DEFAULT_TEST_PLAN}`;

  if (breakingChanges) {
    result += `${BREAKING_CHANGES_TITLE}${breakingChanges}`;
  }
  return wrap(result, WRAP_SETTINGS);
});

serializers.set('message', node =>
  `${serialize(node.title)}

${serialize(node.body)}`.trim(),
);

module.exports = {
  serializers,
  serialize,
};
