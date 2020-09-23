<!-- @format -->

![build](https://img.shields.io/badge/build-passing-success.svg)
![npm package](https://img.shields.io/badge/npm%20package-1.1.3-success.svg)

11
21312
12312312444
666666
"coveralls": "jest --coverage && cat ./coverage/lcov.info | coveralls",
test

{
"plugins": [
"@semantic-release/commit-analyzer",
"@semantic-release/release-notes-generator",
[
"@semantic-release/npm",
{
"npmPublish": false
}
],
[
"@semantic-release/changelog",
{
"changelogFile": "docs/CHANGELOG.md",
"changelogTitle": "This is Title"
}
],
[
"@semantic-release/git",
{
"assets": ["CHANGELOG.md", "package.json", "package-lock.json", "extension.zip"]
}
]
]
}

    "semantic-release": "semantic-release",

@{{OWNER}}:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:\_authToken={{ecb9588e4edb5fe62362d4141f55743160ba3cc4}}
