# NYC problem

## Setup

```sh
yarn install

yarn coverage
```

## Environment Information

I'm using Yarn so ran this:
`sh -c 'node --version; yarn --version; yarn list' > output.txt`

```sh
v8.11.3
1.7.0
yarn list v1.7.0
├─ @babel/code-frame@7.0.0-beta.51
│  └─ @babel/highlight@7.0.0-beta.51
├─ @babel/generator@7.0.0-beta.51
│  ├─ @babel/types@7.0.0-beta.51
│  ├─ jsesc@^2.5.1
│  ├─ jsesc@2.5.1
│  ├─ lodash@^4.17.5
│  ├─ source-map@^0.5.0
│  └─ trim-right@^1.0.1
├─ @babel/helper-function-name@7.0.0-beta.51
│  ├─ @babel/helper-get-function-arity@7.0.0-beta.51
│  ├─ @babel/template@7.0.0-beta.51
│  └─ @babel/types@7.0.0-beta.51
├─ @babel/helper-get-function-arity@7.0.0-beta.51
│  └─ @babel/types@7.0.0-beta.51
├─ @babel/helper-split-export-declaration@7.0.0-beta.51
│  └─ @babel/types@7.0.0-beta.51
├─ @babel/highlight@7.0.0-beta.51
│  ├─ ansi-styles@3.2.1
│  │  └─ color-convert@^1.9.0
│  ├─ chalk@^2.0.0
│  ├─ chalk@2.4.1
│  │  ├─ ansi-styles@^3.2.1
│  │  ├─ escape-string-regexp@^1.0.5
│  │  └─ supports-color@^5.3.0
│  ├─ esutils@^2.0.2
│  └─ js-tokens@^3.0.0
├─ @babel/parser@7.0.0-beta.51
├─ @babel/template@7.0.0-beta.51
│  ├─ @babel/code-frame@7.0.0-beta.51
│  ├─ @babel/parser@7.0.0-beta.51
│  ├─ @babel/types@7.0.0-beta.51
│  └─ lodash@^4.17.5
├─ @babel/traverse@7.0.0-beta.51
│  ├─ @babel/code-frame@7.0.0-beta.51
│  ├─ @babel/generator@7.0.0-beta.51
│  ├─ @babel/helper-function-name@7.0.0-beta.51
│  ├─ @babel/helper-split-export-declaration@7.0.0-beta.51
│  ├─ @babel/parser@7.0.0-beta.51
│  ├─ @babel/types@7.0.0-beta.51
│  ├─ debug@^3.1.0
│  ├─ debug@3.1.0
│  │  └─ ms@2.0.0
│  ├─ globals@^11.1.0
│  ├─ globals@11.7.0
│  ├─ invariant@^2.2.0
│  └─ lodash@^4.17.5
├─ @babel/types@7.0.0-beta.51
│  ├─ esutils@^2.0.2
│  ├─ lodash@^4.17.5
│  ├─ to-fast-properties@^2.0.0
│  └─ to-fast-properties@2.0.0
├─ align-text@0.1.4
│  ├─ kind-of@^3.0.2
│  ├─ longest@^1.0.1
│  └─ repeat-string@^1.5.2
├─ amdefine@1.0.1
├─ ansi-regex@2.1.1
├─ ansi-styles@2.2.1
├─ append-transform@0.4.0
│  └─ default-require-extensions@^1.0.0
├─ archy@1.0.0
├─ arr-diff@4.0.0
├─ arr-flatten@1.1.0
├─ arr-union@3.1.0
├─ array-unique@0.3.2
├─ arrify@1.0.1
├─ asap@2.0.6
├─ assign-symbols@1.0.0
├─ async@1.5.2
├─ atob@2.1.1
├─ babel-code-frame@6.26.0
│  ├─ chalk@^1.1.3
│  ├─ esutils@^2.0.2
│  └─ js-tokens@^3.0.2
├─ babel-core@6.26.3
│  ├─ babel-code-frame@^6.26.0
│  ├─ babel-generator@^6.26.0
│  ├─ babel-helpers@^6.24.1
│  ├─ babel-messages@^6.23.0
│  ├─ babel-register@^6.26.0
│  ├─ babel-runtime@^6.26.0
│  ├─ babel-template@^6.26.0
│  ├─ babel-traverse@^6.26.0
│  ├─ babel-types@^6.26.0
│  ├─ babylon@^6.18.0
│  ├─ convert-source-map@^1.5.1
│  ├─ debug@^2.6.9
│  ├─ json5@^0.5.1
│  ├─ lodash@^4.17.4
│  ├─ minimatch@^3.0.4
│  ├─ path-is-absolute@^1.0.1
│  ├─ private@^0.1.8
│  ├─ slash@^1.0.0
│  └─ source-map@^0.5.7
├─ babel-generator@6.26.1
│  ├─ babel-messages@^6.23.0
│  ├─ babel-runtime@^6.26.0
│  ├─ babel-types@^6.26.0
│  ├─ detect-indent@^4.0.0
│  ├─ jsesc@^1.3.0
│  ├─ lodash@^4.17.4
│  ├─ source-map@^0.5.7
│  └─ trim-right@^1.0.1
├─ babel-helper-builder-binary-assignment-operator-visitor@6.24.1
│  ├─ babel-helper-explode-assignable-expression@^6.24.1
│  ├─ babel-runtime@^6.22.0
│  └─ babel-types@^6.24.1
├─ babel-helper-builder-react-jsx@6.26.0
│  ├─ babel-runtime@^6.26.0
│  ├─ babel-types@^6.26.0
│  └─ esutils@^2.0.2
├─ babel-helper-call-delegate@6.24.1
│  ├─ babel-helper-hoist-variables@^6.24.1
│  ├─ babel-runtime@^6.22.0
│  ├─ babel-traverse@^6.24.1
│  └─ babel-types@^6.24.1
├─ babel-helper-define-map@6.26.0
│  ├─ babel-helper-function-name@^6.24.1
│  ├─ babel-runtime@^6.26.0
│  ├─ babel-types@^6.26.0
│  └─ lodash@^4.17.4
├─ babel-helper-explode-assignable-expression@6.24.1
│  ├─ babel-runtime@^6.22.0
│  ├─ babel-traverse@^6.24.1
│  └─ babel-types@^6.24.1
├─ babel-helper-function-name@6.24.1
│  ├─ babel-helper-get-function-arity@^6.24.1
│  ├─ babel-runtime@^6.22.0
│  ├─ babel-template@^6.24.1
│  ├─ babel-traverse@^6.24.1
│  └─ babel-types@^6.24.1
├─ babel-helper-get-function-arity@6.24.1
│  ├─ babel-runtime@^6.22.0
│  └─ babel-types@^6.24.1
├─ babel-helper-hoist-variables@6.24.1
│  ├─ babel-runtime@^6.22.0
│  └─ babel-types@^6.24.1
├─ babel-helper-optimise-call-expression@6.24.1
│  ├─ babel-runtime@^6.22.0
│  └─ babel-types@^6.24.1
├─ babel-helper-regex@6.26.0
│  ├─ babel-runtime@^6.26.0
│  ├─ babel-types@^6.26.0
│  └─ lodash@^4.17.4
├─ babel-helper-remap-async-to-generator@6.24.1
│  ├─ babel-helper-function-name@^6.24.1
│  ├─ babel-runtime@^6.22.0
│  ├─ babel-template@^6.24.1
│  ├─ babel-traverse@^6.24.1
│  └─ babel-types@^6.24.1
├─ babel-helper-replace-supers@6.24.1
│  ├─ babel-helper-optimise-call-expression@^6.24.1
│  ├─ babel-messages@^6.23.0
│  ├─ babel-runtime@^6.22.0
│  ├─ babel-template@^6.24.1
│  ├─ babel-traverse@^6.24.1
│  └─ babel-types@^6.24.1
├─ babel-helpers@6.24.1
│  ├─ babel-runtime@^6.22.0
│  └─ babel-template@^6.24.1
├─ babel-messages@6.23.0
│  └─ babel-runtime@^6.22.0
├─ babel-plugin-check-es2015-constants@6.22.0
│  └─ babel-runtime@^6.22.0
├─ babel-plugin-istanbul@4.1.6
│  ├─ babel-plugin-syntax-object-rest-spread@^6.13.0
│  ├─ find-up@^2.1.0
│  ├─ istanbul-lib-instrument@^1.10.1
│  └─ test-exclude@^4.2.1
├─ babel-plugin-syntax-async-functions@6.13.0
├─ babel-plugin-syntax-class-properties@6.13.0
├─ babel-plugin-syntax-exponentiation-operator@6.13.0
├─ babel-plugin-syntax-flow@6.18.0
├─ babel-plugin-syntax-jsx@6.18.0
├─ babel-plugin-syntax-object-rest-spread@6.13.0
├─ babel-plugin-syntax-trailing-function-commas@6.22.0
├─ babel-plugin-transform-async-to-generator@6.24.1
│  ├─ babel-helper-remap-async-to-generator@^6.24.1
│  ├─ babel-plugin-syntax-async-functions@^6.8.0
│  └─ babel-runtime@^6.22.0
├─ babel-plugin-transform-class-properties@6.24.1
│  ├─ babel-helper-function-name@^6.24.1
│  ├─ babel-plugin-syntax-class-properties@^6.8.0
│  ├─ babel-runtime@^6.22.0
│  └─ babel-template@^6.24.1
├─ babel-plugin-transform-es2015-arrow-functions@6.22.0
│  └─ babel-runtime@^6.22.0
├─ babel-plugin-transform-es2015-block-scoped-functions@6.22.0
│  └─ babel-runtime@^6.22.0
├─ babel-plugin-transform-es2015-block-scoping@6.26.0
│  ├─ babel-runtime@^6.26.0
│  ├─ babel-template@^6.26.0
│  ├─ babel-traverse@^6.26.0
│  ├─ babel-types@^6.26.0
│  └─ lodash@^4.17.4
├─ babel-plugin-transform-es2015-classes@6.24.1
│  ├─ babel-helper-define-map@^6.24.1
│  ├─ babel-helper-function-name@^6.24.1
│  ├─ babel-helper-optimise-call-expression@^6.24.1
│  ├─ babel-helper-replace-supers@^6.24.1
│  ├─ babel-messages@^6.23.0
│  ├─ babel-runtime@^6.22.0
│  ├─ babel-template@^6.24.1
│  ├─ babel-traverse@^6.24.1
│  └─ babel-types@^6.24.1
├─ babel-plugin-transform-es2015-computed-properties@6.24.1
│  ├─ babel-runtime@^6.22.0
│  └─ babel-template@^6.24.1
├─ babel-plugin-transform-es2015-destructuring@6.23.0
│  └─ babel-runtime@^6.22.0
├─ babel-plugin-transform-es2015-duplicate-keys@6.24.1
│  ├─ babel-runtime@^6.22.0
│  └─ babel-types@^6.24.1
├─ babel-plugin-transform-es2015-for-of@6.23.0
│  └─ babel-runtime@^6.22.0
├─ babel-plugin-transform-es2015-function-name@6.24.1
│  ├─ babel-helper-function-name@^6.24.1
│  ├─ babel-runtime@^6.22.0
│  └─ babel-types@^6.24.1
├─ babel-plugin-transform-es2015-literals@6.22.0
│  └─ babel-runtime@^6.22.0
├─ babel-plugin-transform-es2015-modules-amd@6.24.1
│  ├─ babel-plugin-transform-es2015-modules-commonjs@^6.24.1
│  ├─ babel-runtime@^6.22.0
│  └─ babel-template@^6.24.1
├─ babel-plugin-transform-es2015-modules-commonjs@6.26.2
│  ├─ babel-plugin-transform-strict-mode@^6.24.1
│  ├─ babel-runtime@^6.26.0
│  ├─ babel-template@^6.26.0
│  └─ babel-types@^6.26.0
├─ babel-plugin-transform-es2015-modules-systemjs@6.24.1
│  ├─ babel-helper-hoist-variables@^6.24.1
│  ├─ babel-runtime@^6.22.0
│  └─ babel-template@^6.24.1
├─ babel-plugin-transform-es2015-modules-umd@6.24.1
│  ├─ babel-plugin-transform-es2015-modules-amd@^6.24.1
│  ├─ babel-runtime@^6.22.0
│  └─ babel-template@^6.24.1
├─ babel-plugin-transform-es2015-object-super@6.24.1
│  ├─ babel-helper-replace-supers@^6.24.1
│  └─ babel-runtime@^6.22.0
├─ babel-plugin-transform-es2015-parameters@6.24.1
│  ├─ babel-helper-call-delegate@^6.24.1
│  ├─ babel-helper-get-function-arity@^6.24.1
│  ├─ babel-runtime@^6.22.0
│  ├─ babel-template@^6.24.1
│  ├─ babel-traverse@^6.24.1
│  └─ babel-types@^6.24.1
├─ babel-plugin-transform-es2015-shorthand-properties@6.24.1
│  ├─ babel-runtime@^6.22.0
│  └─ babel-types@^6.24.1
├─ babel-plugin-transform-es2015-spread@6.22.0
│  └─ babel-runtime@^6.22.0
├─ babel-plugin-transform-es2015-sticky-regex@6.24.1
│  ├─ babel-helper-regex@^6.24.1
│  ├─ babel-runtime@^6.22.0
│  └─ babel-types@^6.24.1
├─ babel-plugin-transform-es2015-template-literals@6.22.0
│  └─ babel-runtime@^6.22.0
├─ babel-plugin-transform-es2015-typeof-symbol@6.23.0
│  └─ babel-runtime@^6.22.0
├─ babel-plugin-transform-es2015-unicode-regex@6.24.1
│  ├─ babel-helper-regex@^6.24.1
│  ├─ babel-runtime@^6.22.0
│  └─ regexpu-core@^2.0.0
├─ babel-plugin-transform-exponentiation-operator@6.24.1
│  ├─ babel-helper-builder-binary-assignment-operator-visitor@^6.24.1
│  ├─ babel-plugin-syntax-exponentiation-operator@^6.8.0
│  └─ babel-runtime@^6.22.0
├─ babel-plugin-transform-flow-strip-types@6.22.0
│  ├─ babel-plugin-syntax-flow@^6.18.0
│  └─ babel-runtime@^6.22.0
├─ babel-plugin-transform-object-rest-spread@6.26.0
│  ├─ babel-plugin-syntax-object-rest-spread@^6.8.0
│  └─ babel-runtime@^6.26.0
├─ babel-plugin-transform-react-display-name@6.25.0
│  └─ babel-runtime@^6.22.0
├─ babel-plugin-transform-react-jsx-self@6.22.0
│  ├─ babel-plugin-syntax-jsx@^6.8.0
│  └─ babel-runtime@^6.22.0
├─ babel-plugin-transform-react-jsx-source@6.22.0
│  ├─ babel-plugin-syntax-jsx@^6.8.0
│  └─ babel-runtime@^6.22.0
├─ babel-plugin-transform-react-jsx@6.24.1
│  ├─ babel-helper-builder-react-jsx@^6.24.1
│  ├─ babel-plugin-syntax-jsx@^6.8.0
│  └─ babel-runtime@^6.22.0
├─ babel-plugin-transform-regenerator@6.26.0
│  └─ regenerator-transform@^0.10.0
├─ babel-plugin-transform-strict-mode@6.24.1
│  ├─ babel-runtime@^6.22.0
│  └─ babel-types@^6.24.1
├─ babel-preset-env@1.7.0
│  ├─ babel-plugin-check-es2015-constants@^6.22.0
│  ├─ babel-plugin-syntax-trailing-function-commas@^6.22.0
│  ├─ babel-plugin-transform-async-to-generator@^6.22.0
│  ├─ babel-plugin-transform-es2015-arrow-functions@^6.22.0
│  ├─ babel-plugin-transform-es2015-block-scoped-functions@^6.22.0
│  ├─ babel-plugin-transform-es2015-block-scoping@^6.23.0
│  ├─ babel-plugin-transform-es2015-classes@^6.23.0
│  ├─ babel-plugin-transform-es2015-computed-properties@^6.22.0
│  ├─ babel-plugin-transform-es2015-destructuring@^6.23.0
│  ├─ babel-plugin-transform-es2015-duplicate-keys@^6.22.0
│  ├─ babel-plugin-transform-es2015-for-of@^6.23.0
│  ├─ babel-plugin-transform-es2015-function-name@^6.22.0
│  ├─ babel-plugin-transform-es2015-literals@^6.22.0
│  ├─ babel-plugin-transform-es2015-modules-amd@^6.22.0
│  ├─ babel-plugin-transform-es2015-modules-commonjs@^6.23.0
│  ├─ babel-plugin-transform-es2015-modules-systemjs@^6.23.0
│  ├─ babel-plugin-transform-es2015-modules-umd@^6.23.0
│  ├─ babel-plugin-transform-es2015-object-super@^6.22.0
│  ├─ babel-plugin-transform-es2015-parameters@^6.23.0
│  ├─ babel-plugin-transform-es2015-shorthand-properties@^6.22.0
│  ├─ babel-plugin-transform-es2015-spread@^6.22.0
│  ├─ babel-plugin-transform-es2015-sticky-regex@^6.22.0
│  ├─ babel-plugin-transform-es2015-template-literals@^6.22.0
│  ├─ babel-plugin-transform-es2015-typeof-symbol@^6.23.0
│  ├─ babel-plugin-transform-es2015-unicode-regex@^6.22.0
│  ├─ babel-plugin-transform-exponentiation-operator@^6.22.0
│  ├─ babel-plugin-transform-regenerator@^6.22.0
│  ├─ browserslist@^3.2.6
│  ├─ invariant@^2.2.2
│  └─ semver@^5.3.0
├─ babel-preset-flow@6.23.0
│  └─ babel-plugin-transform-flow-strip-types@^6.22.0
├─ babel-preset-react@6.24.1
│  ├─ babel-plugin-syntax-jsx@^6.3.13
│  ├─ babel-plugin-transform-react-display-name@^6.23.0
│  ├─ babel-plugin-transform-react-jsx-self@^6.22.0
│  ├─ babel-plugin-transform-react-jsx-source@^6.22.0
│  ├─ babel-plugin-transform-react-jsx@^6.24.1
│  └─ babel-preset-flow@^6.23.0
├─ babel-register@6.26.0
│  ├─ babel-core@^6.26.0
│  ├─ babel-runtime@^6.26.0
│  ├─ core-js@^2.5.0
│  ├─ home-or-tmp@^2.0.0
│  ├─ lodash@^4.17.4
│  ├─ mkdirp@^0.5.1
│  └─ source-map-support@^0.4.15
├─ babel-runtime@6.26.0
│  ├─ core-js@^2.4.0
│  └─ regenerator-runtime@^0.11.0
├─ babel-template@6.26.0
│  ├─ babel-runtime@^6.26.0
│  ├─ babel-traverse@^6.26.0
│  ├─ babel-types@^6.26.0
│  ├─ babylon@^6.18.0
│  └─ lodash@^4.17.4
├─ babel-traverse@6.26.0
│  ├─ babel-code-frame@^6.26.0
│  ├─ babel-messages@^6.23.0
│  ├─ babel-runtime@^6.26.0
│  ├─ babel-types@^6.26.0
│  ├─ babylon@^6.18.0
│  ├─ debug@^2.6.8
│  ├─ globals@^9.18.0
│  ├─ invariant@^2.2.2
│  └─ lodash@^4.17.4
├─ babel-types@6.26.0
│  ├─ babel-runtime@^6.26.0
│  ├─ esutils@^2.0.2
│  ├─ lodash@^4.17.4
│  └─ to-fast-properties@^1.0.3
├─ babel@6.23.0
├─ babylon@6.18.0
├─ balanced-match@1.0.0
├─ base@0.11.2
│  ├─ cache-base@^1.0.1
│  ├─ class-utils@^0.3.5
│  ├─ component-emitter@^1.2.1
│  ├─ define-property@^1.0.0
│  ├─ define-property@1.0.0
│  │  └─ is-descriptor@^1.0.0
│  ├─ isobject@^3.0.1
│  ├─ mixin-deep@^1.2.0
│  └─ pascalcase@^0.1.1
├─ brace-expansion@1.1.11
│  ├─ balanced-match@^1.0.0
│  └─ concat-map@0.0.1
├─ braces@2.3.2
│  ├─ arr-flatten@^1.1.0
│  ├─ array-unique@^0.3.2
│  ├─ extend-shallow@^2.0.1
│  ├─ fill-range@^4.0.0
│  ├─ isobject@^3.0.1
│  ├─ repeat-element@^1.1.2
│  ├─ snapdragon-node@^2.0.1
│  ├─ snapdragon@^0.8.1
│  ├─ split-string@^3.0.2
│  └─ to-regex@^3.0.1
├─ browser-stdout@1.3.1
├─ browserslist@3.2.8
│  ├─ caniuse-lite@^1.0.30000844
│  └─ electron-to-chromium@^1.3.47
├─ builtin-modules@1.1.1
├─ cache-base@1.0.1
│  ├─ collection-visit@^1.0.0
│  ├─ component-emitter@^1.2.1
│  ├─ get-value@^2.0.6
│  ├─ has-value@^1.0.0
│  ├─ isobject@^3.0.1
│  ├─ set-value@^2.0.0
│  ├─ to-object-path@^0.3.0
│  ├─ union-value@^1.0.0
│  └─ unset-value@^1.0.0
├─ caching-transform@1.0.1
│  ├─ md5-hex@^1.2.0
│  ├─ mkdirp@^0.5.1
│  └─ write-file-atomic@^1.1.4
├─ camelcase@4.1.0
├─ caniuse-lite@1.0.30000874
├─ center-align@0.1.3
│  ├─ align-text@^0.1.3
│  └─ lazy-cache@^1.0.3
├─ chalk@1.1.3
│  ├─ ansi-styles@^2.2.1
│  ├─ escape-string-regexp@^1.0.2
│  ├─ has-ansi@^2.0.0
│  ├─ strip-ansi@^3.0.0
│  ├─ supports-color@^2.0.0
│  └─ supports-color@2.0.0
├─ class-utils@0.3.6
│  ├─ arr-union@^3.1.0
│  ├─ define-property@^0.2.5
│  ├─ isobject@^3.0.0
│  └─ static-extend@^0.1.1
├─ cliui@4.1.0
│  ├─ ansi-regex@3.0.0
│  ├─ string-width@^2.1.1
│  ├─ strip-ansi@^4.0.0
│  ├─ strip-ansi@4.0.0
│  │  └─ ansi-regex@^3.0.0
│  └─ wrap-ansi@^2.0.0
├─ code-point-at@1.1.0
├─ collection-visit@1.0.0
│  ├─ map-visit@^1.0.0
│  └─ object-visit@^1.0.0
├─ color-convert@1.9.2
│  └─ color-name@1.1.1
├─ color-name@1.1.1
├─ commander@2.15.1
├─ commondir@1.0.1
├─ component-emitter@1.2.1
├─ concat-map@0.0.1
├─ convert-source-map@1.5.1
├─ copy-descriptor@0.1.1
├─ core-js@2.5.7
├─ cross-spawn@4.0.2
│  ├─ lru-cache@^4.0.1
│  └─ which@^1.2.9
├─ debug-log@1.0.1
├─ debug@2.6.9
│  └─ ms@2.0.0
├─ decamelize@1.2.0
├─ decode-uri-component@0.2.0
├─ default-require-extensions@1.0.0
│  └─ strip-bom@^2.0.0
├─ define-property@0.2.5
│  ├─ is-accessor-descriptor@0.1.6
│  │  ├─ kind-of@^3.0.2
│  │  └─ kind-of@3.2.2
│  │     └─ is-buffer@^1.1.5
│  ├─ is-data-descriptor@0.1.4
│  │  ├─ kind-of@^3.0.2
│  │  └─ kind-of@3.2.2
│  │     └─ is-buffer@^1.1.5
│  ├─ is-descriptor@^0.1.0
│  ├─ is-descriptor@0.1.6
│  │  ├─ is-accessor-descriptor@^0.1.6
│  │  ├─ is-data-descriptor@^0.1.4
│  │  └─ kind-of@^5.0.0
│  └─ kind-of@5.1.0
├─ detect-indent@4.0.0
│  └─ repeating@^2.0.0
├─ diff@3.5.0
├─ electron-to-chromium@1.3.55
├─ encoding@0.1.12
│  └─ iconv-lite@~0.4.13
├─ error-ex@1.3.2
│  └─ is-arrayish@^0.2.1
├─ escape-string-regexp@1.0.5
├─ esutils@2.0.2
├─ execa@0.7.0
│  ├─ cross-spawn@^5.0.1
│  ├─ cross-spawn@5.1.0
│  │  ├─ lru-cache@^4.0.1
│  │  ├─ shebang-command@^1.2.0
│  │  └─ which@^1.2.9
│  ├─ get-stream@^3.0.0
│  ├─ is-stream@^1.1.0
│  ├─ npm-run-path@^2.0.0
│  ├─ p-finally@^1.0.0
│  ├─ signal-exit@^3.0.0
│  └─ strip-eof@^1.0.0
├─ expand-brackets@2.1.4
│  ├─ debug@^2.3.3
│  ├─ define-property@^0.2.5
│  ├─ extend-shallow@^2.0.1
│  ├─ posix-character-classes@^0.1.0
│  ├─ regex-not@^1.0.0
│  ├─ snapdragon@^0.8.1
│  └─ to-regex@^3.0.1
├─ extend-shallow@2.0.1
│  └─ is-extendable@^0.1.0
├─ extglob@2.0.4
│  ├─ array-unique@^0.3.2
│  ├─ define-property@^1.0.0
│  ├─ define-property@1.0.0
│  │  └─ is-descriptor@^1.0.0
│  ├─ expand-brackets@^2.1.4
│  ├─ extend-shallow@^2.0.1
│  ├─ fragment-cache@^0.2.1
│  ├─ regex-not@^1.0.0
│  ├─ snapdragon@^0.8.1
│  └─ to-regex@^3.0.1
├─ fbjs@0.8.17
│  ├─ core-js@^1.0.0
│  ├─ core-js@1.2.7
│  ├─ isomorphic-fetch@^2.1.1
│  ├─ loose-envify@^1.0.0
│  ├─ object-assign@^4.1.0
│  ├─ promise@^7.1.1
│  ├─ setimmediate@^1.0.5
│  └─ ua-parser-js@^0.7.18
├─ fill-range@4.0.0
│  ├─ extend-shallow@^2.0.1
│  ├─ is-number@^3.0.0
│  ├─ repeat-string@^1.6.1
│  └─ to-regex-range@^2.1.0
├─ find-cache-dir@0.1.1
│  ├─ commondir@^1.0.1
│  ├─ mkdirp@^0.5.1
│  └─ pkg-dir@^1.0.0
├─ find-up@2.1.0
│  └─ locate-path@^2.0.0
├─ for-in@1.0.2
├─ foreground-child@1.5.6
│  ├─ cross-spawn@^4
│  └─ signal-exit@^3.0.0
├─ fragment-cache@0.2.1
│  └─ map-cache@^0.2.2
├─ fs.realpath@1.0.0
├─ get-caller-file@1.0.3
├─ get-stream@3.0.0
├─ get-value@2.0.6
├─ glob@7.1.2
│  ├─ fs.realpath@^1.0.0
│  ├─ inflight@^1.0.4
│  ├─ inherits@2
│  ├─ minimatch@^3.0.4
│  ├─ once@^1.3.0
│  └─ path-is-absolute@^1.0.0
├─ globals@9.18.0
├─ graceful-fs@4.1.11
├─ growl@1.10.5
├─ handlebars@4.0.11
│  ├─ async@^1.4.0
│  ├─ optimist@^0.6.1
│  ├─ source-map@^0.4.4
│  ├─ source-map@0.4.4
│  │  └─ amdefine@>=0.0.4
│  └─ uglify-js@^2.6
├─ has-ansi@2.0.0
│  └─ ansi-regex@^2.0.0
├─ has-flag@3.0.0
├─ has-value@1.0.0
│  ├─ get-value@^2.0.6
│  ├─ has-values@^1.0.0
│  └─ isobject@^3.0.0
├─ has-values@1.0.0
│  ├─ is-number@^3.0.0
│  ├─ kind-of@^4.0.0
│  └─ kind-of@4.0.0
│     └─ is-buffer@^1.1.5
├─ he@1.1.1
├─ home-or-tmp@2.0.0
│  ├─ os-homedir@^1.0.0
│  └─ os-tmpdir@^1.0.1
├─ hosted-git-info@2.7.1
├─ iconv-lite@0.4.23
│  └─ safer-buffer@>= 2.1.2 < 3
├─ imurmurhash@0.1.4
├─ inflight@1.0.6
│  ├─ once@^1.3.0
│  └─ wrappy@1
├─ inherits@2.0.3
├─ invariant@2.2.4
│  └─ loose-envify@^1.0.0
├─ invert-kv@1.0.0
├─ is-accessor-descriptor@1.0.0
│  ├─ kind-of@^6.0.0
│  └─ kind-of@6.0.2
├─ is-arrayish@0.2.1
├─ is-buffer@1.1.6
├─ is-builtin-module@1.0.0
│  └─ builtin-modules@^1.0.0
├─ is-data-descriptor@1.0.0
│  ├─ kind-of@^6.0.0
│  └─ kind-of@6.0.2
├─ is-descriptor@1.0.2
│  ├─ is-accessor-descriptor@^1.0.0
│  ├─ is-data-descriptor@^1.0.0
│  ├─ kind-of@^6.0.2
│  └─ kind-of@6.0.2
├─ is-extendable@0.1.1
├─ is-finite@1.0.2
│  └─ number-is-nan@^1.0.0
├─ is-fullwidth-code-point@2.0.0
├─ is-number@3.0.0
│  └─ kind-of@^3.0.2
├─ is-plain-object@2.0.4
│  └─ isobject@^3.0.1
├─ is-stream@1.1.0
├─ is-utf8@0.2.1
├─ is-windows@1.0.2
├─ isarray@1.0.0
├─ isexe@2.0.0
├─ isobject@3.0.1
├─ isomorphic-fetch@2.2.1
│  ├─ node-fetch@^1.0.1
│  └─ whatwg-fetch@>=0.10.0
├─ istanbul-lib-coverage@1.2.0
├─ istanbul-lib-hook@1.1.0
│  └─ append-transform@^0.4.0
├─ istanbul-lib-instrument@1.10.1
│  ├─ babel-generator@^6.18.0
│  ├─ babel-template@^6.16.0
│  ├─ babel-traverse@^6.18.0
│  ├─ babel-types@^6.18.0
│  ├─ babylon@^6.18.0
│  ├─ istanbul-lib-coverage@^1.2.0
│  └─ semver@^5.3.0
├─ istanbul-lib-report@1.1.3
│  ├─ has-flag@1.0.0
│  ├─ istanbul-lib-coverage@^1.1.2
│  ├─ mkdirp@^0.5.1
│  ├─ path-parse@^1.0.5
│  ├─ supports-color@^3.1.2
│  └─ supports-color@3.2.3
│     └─ has-flag@^1.0.0
├─ istanbul-lib-source-maps@1.2.5
│  ├─ debug@^3.1.0
│  ├─ debug@3.1.0
│  │  └─ ms@2.0.0
│  ├─ istanbul-lib-coverage@^1.2.0
│  ├─ mkdirp@^0.5.1
│  ├─ rimraf@^2.6.1
│  └─ source-map@^0.5.3
├─ istanbul-reports@1.5.0
│  └─ handlebars@^4.0.11
├─ js-tokens@3.0.2
├─ jsesc@1.3.0
├─ json5@0.5.1
├─ kind-of@3.2.2
│  └─ is-buffer@^1.1.5
├─ lazy-cache@1.0.4
├─ lcid@1.0.0
│  └─ invert-kv@^1.0.0
├─ load-json-file@1.1.0
│  ├─ graceful-fs@^4.1.2
│  ├─ parse-json@^2.2.0
│  ├─ pify@^2.0.0
│  ├─ pinkie-promise@^2.0.0
│  └─ strip-bom@^2.0.0
├─ locate-path@2.0.0
│  ├─ p-locate@^2.0.0
│  └─ path-exists@^3.0.0
├─ lodash@4.17.10
├─ longest@1.0.1
├─ loose-envify@1.4.0
│  ├─ js-tokens@^3.0.0 || ^4.0.0
│  └─ js-tokens@4.0.0
├─ lru-cache@4.1.3
│  ├─ pseudomap@^1.0.2
│  └─ yallist@^2.1.2
├─ map-cache@0.2.2
├─ map-visit@1.0.0
│  └─ object-visit@^1.0.0
├─ md5-hex@1.3.0
│  └─ md5-o-matic@^0.1.1
├─ md5-o-matic@0.1.1
├─ mem@1.1.0
│  └─ mimic-fn@^1.0.0
├─ merge-source-map@1.1.0
│  ├─ source-map@^0.6.1
│  └─ source-map@0.6.1
├─ micromatch@3.1.10
│  ├─ arr-diff@^4.0.0
│  ├─ array-unique@^0.3.2
│  ├─ braces@^2.3.1
│  ├─ define-property@^2.0.2
│  ├─ define-property@2.0.2
│  │  ├─ is-descriptor@^1.0.2
│  │  └─ isobject@^3.0.1
│  ├─ extend-shallow@^3.0.2
│  ├─ extend-shallow@3.0.2
│  │  ├─ assign-symbols@^1.0.0
│  │  └─ is-extendable@^1.0.1
│  ├─ extglob@^2.0.4
│  ├─ fragment-cache@^0.2.1
│  ├─ is-extendable@1.0.1
│  │  └─ is-plain-object@^2.0.4
│  ├─ kind-of@^6.0.2
│  ├─ kind-of@6.0.2
│  ├─ nanomatch@^1.2.9
│  ├─ object.pick@^1.3.0
│  ├─ regex-not@^1.0.0
│  ├─ snapdragon@^0.8.1
│  └─ to-regex@^3.0.2
├─ mimic-fn@1.2.0
├─ minimatch@3.0.4
│  └─ brace-expansion@^1.1.7
├─ minimist@0.0.8
├─ mixin-deep@1.3.1
│  ├─ for-in@^1.0.2
│  ├─ is-extendable@^1.0.1
│  └─ is-extendable@1.0.1
│     └─ is-plain-object@^2.0.4
├─ mkdirp@0.5.1
│  └─ minimist@0.0.8
├─ mocha@5.2.0
│  ├─ browser-stdout@1.3.1
│  ├─ commander@2.15.1
│  ├─ debug@3.1.0
│  ├─ debug@3.1.0
│  │  └─ ms@2.0.0
│  ├─ diff@3.5.0
│  ├─ escape-string-regexp@1.0.5
│  ├─ glob@7.1.2
│  ├─ growl@1.10.5
│  ├─ he@1.1.1
│  ├─ minimatch@3.0.4
│  ├─ mkdirp@0.5.1
│  └─ supports-color@5.4.0
├─ ms@2.0.0
├─ nanomatch@1.2.13
│  ├─ arr-diff@^4.0.0
│  ├─ array-unique@^0.3.2
│  ├─ define-property@^2.0.2
│  ├─ define-property@2.0.2
│  │  ├─ is-descriptor@^1.0.2
│  │  └─ isobject@^3.0.1
│  ├─ extend-shallow@^3.0.2
│  ├─ extend-shallow@3.0.2
│  │  ├─ assign-symbols@^1.0.0
│  │  └─ is-extendable@^1.0.1
│  ├─ fragment-cache@^0.2.1
│  ├─ is-extendable@1.0.1
│  │  └─ is-plain-object@^2.0.4
│  ├─ is-windows@^1.0.2
│  ├─ kind-of@^6.0.2
│  ├─ kind-of@6.0.2
│  ├─ object.pick@^1.3.0
│  ├─ regex-not@^1.0.0
│  ├─ snapdragon@^0.8.1
│  └─ to-regex@^3.0.1
├─ node-fetch@1.7.3
│  ├─ encoding@^0.1.11
│  └─ is-stream@^1.0.1
├─ normalize-package-data@2.4.0
│  ├─ hosted-git-info@^2.1.4
│  ├─ is-builtin-module@^1.0.0
│  ├─ semver@2 || 3 || 4 || 5
│  └─ validate-npm-package-license@^3.0.1
├─ npm-run-path@2.0.2
│  └─ path-key@^2.0.0
├─ number-is-nan@1.0.1
├─ nyc@12.0.2
│  ├─ archy@^1.0.0
│  ├─ arrify@^1.0.1
│  ├─ caching-transform@^1.0.0
│  ├─ convert-source-map@^1.5.1
│  ├─ debug-log@^1.0.1
│  ├─ default-require-extensions@^1.0.0
│  ├─ find-cache-dir@^0.1.1
│  ├─ find-up@^2.1.0
│  ├─ foreground-child@^1.5.3
│  ├─ glob@^7.0.6
│  ├─ istanbul-lib-coverage@^1.2.0
│  ├─ istanbul-lib-hook@^1.1.0
│  ├─ istanbul-lib-instrument@^2.1.0
│  ├─ istanbul-lib-instrument@2.3.2
│  │  ├─ @babel/generator@7.0.0-beta.51
│  │  ├─ @babel/parser@7.0.0-beta.51
│  │  ├─ @babel/template@7.0.0-beta.51
│  │  ├─ @babel/traverse@7.0.0-beta.51
│  │  ├─ @babel/types@7.0.0-beta.51
│  │  ├─ istanbul-lib-coverage@^2.0.1
│  │  ├─ istanbul-lib-coverage@2.0.1
│  │  └─ semver@^5.5.0
│  ├─ istanbul-lib-report@^1.1.3
│  ├─ istanbul-lib-source-maps@^1.2.5
│  ├─ istanbul-reports@^1.4.1
│  ├─ md5-hex@^1.2.0
│  ├─ merge-source-map@^1.1.0
│  ├─ micromatch@^3.1.10
│  ├─ mkdirp@^0.5.0
│  ├─ resolve-from@^2.0.0
│  ├─ rimraf@^2.6.2
│  ├─ signal-exit@^3.0.1
│  ├─ spawn-wrap@^1.4.2
│  ├─ test-exclude@^4.2.0
│  ├─ yargs-parser@^8.0.0
│  └─ yargs@11.1.0
├─ object-assign@4.1.1
├─ object-copy@0.1.0
│  ├─ copy-descriptor@^0.1.0
│  ├─ define-property@^0.2.5
│  └─ kind-of@^3.0.3
├─ object-visit@1.0.1
│  └─ isobject@^3.0.0
├─ object.pick@1.3.0
│  └─ isobject@^3.0.1
├─ once@1.4.0
│  └─ wrappy@1
├─ optimist@0.6.1
│  ├─ minimist@~0.0.1
│  ├─ minimist@0.0.10
│  └─ wordwrap@~0.0.2
├─ os-homedir@1.0.2
├─ os-locale@2.1.0
│  ├─ execa@^0.7.0
│  ├─ lcid@^1.0.0
│  └─ mem@^1.1.0
├─ os-tmpdir@1.0.2
├─ p-finally@1.0.0
├─ p-limit@1.3.0
│  └─ p-try@^1.0.0
├─ p-locate@2.0.0
│  └─ p-limit@^1.1.0
├─ p-try@1.0.0
├─ parse-json@2.2.0
│  └─ error-ex@^1.2.0
├─ pascalcase@0.1.1
├─ path-exists@3.0.0
├─ path-is-absolute@1.0.1
├─ path-key@2.0.1
├─ path-parse@1.0.6
├─ path-type@1.1.0
│  ├─ graceful-fs@^4.1.2
│  ├─ pify@^2.0.0
│  └─ pinkie-promise@^2.0.0
├─ pify@2.3.0
├─ pinkie-promise@2.0.1
│  └─ pinkie@^2.0.0
├─ pinkie@2.0.4
├─ pkg-dir@1.0.0
│  ├─ find-up@^1.0.0
│  ├─ find-up@1.1.2
│  │  ├─ path-exists@^2.0.0
│  │  └─ pinkie-promise@^2.0.0
│  └─ path-exists@2.1.0
│     └─ pinkie-promise@^2.0.0
├─ posix-character-classes@0.1.1
├─ private@0.1.8
├─ promise@7.3.1
│  └─ asap@~2.0.3
├─ prop-types@15.6.2
│  ├─ loose-envify@^1.3.1
│  └─ object-assign@^4.1.1
├─ pseudomap@1.0.2
├─ react-dom@16.4.2
│  ├─ fbjs@^0.8.16
│  ├─ loose-envify@^1.1.0
│  ├─ object-assign@^4.1.1
│  └─ prop-types@^15.6.0
├─ react@16.4.2
│  ├─ fbjs@^0.8.16
│  ├─ loose-envify@^1.1.0
│  ├─ object-assign@^4.1.1
│  └─ prop-types@^15.6.0
├─ read-pkg-up@1.0.1
│  ├─ find-up@^1.0.0
│  ├─ find-up@1.1.2
│  │  ├─ path-exists@^2.0.0
│  │  └─ pinkie-promise@^2.0.0
│  ├─ path-exists@2.1.0
│  │  └─ pinkie-promise@^2.0.0
│  └─ read-pkg@^1.0.0
├─ read-pkg@1.1.0
│  ├─ load-json-file@^1.0.0
│  ├─ normalize-package-data@^2.3.2
│  └─ path-type@^1.0.0
├─ regenerate@1.4.0
├─ regenerator-runtime@0.11.1
├─ regenerator-transform@0.10.1
│  ├─ babel-runtime@^6.18.0
│  ├─ babel-types@^6.19.0
│  └─ private@^0.1.6
├─ regex-not@1.0.2
│  ├─ extend-shallow@^3.0.2
│  ├─ extend-shallow@3.0.2
│  │  ├─ assign-symbols@^1.0.0
│  │  └─ is-extendable@^1.0.1
│  ├─ is-extendable@1.0.1
│  │  └─ is-plain-object@^2.0.4
│  └─ safe-regex@^1.1.0
├─ regexpu-core@2.0.0
│  ├─ regenerate@^1.2.1
│  ├─ regjsgen@^0.2.0
│  └─ regjsparser@^0.1.4
├─ regjsgen@0.2.0
├─ regjsparser@0.1.5
│  ├─ jsesc@~0.5.0
│  └─ jsesc@0.5.0
├─ repeat-element@1.1.2
├─ repeat-string@1.6.1
├─ repeating@2.0.1
│  └─ is-finite@^1.0.0
├─ require-directory@2.1.1
├─ require-main-filename@1.0.1
├─ resolve-from@2.0.0
├─ resolve-url@0.2.1
├─ ret@0.1.15
├─ right-align@0.1.3
│  └─ align-text@^0.1.1
├─ rimraf@2.6.2
│  └─ glob@^7.0.5
├─ safe-regex@1.1.0
│  └─ ret@~0.1.10
├─ safer-buffer@2.1.2
├─ semver@5.5.0
├─ set-blocking@2.0.0
├─ set-value@2.0.0
│  ├─ extend-shallow@^2.0.1
│  ├─ is-extendable@^0.1.1
│  ├─ is-plain-object@^2.0.3
│  └─ split-string@^3.0.1
├─ setimmediate@1.0.5
├─ shebang-command@1.2.0
│  └─ shebang-regex@^1.0.0
├─ shebang-regex@1.0.0
├─ signal-exit@3.0.2
├─ slash@1.0.0
├─ slide@1.1.6
├─ snapdragon-node@2.1.1
│  ├─ define-property@^1.0.0
│  ├─ define-property@1.0.0
│  │  └─ is-descriptor@^1.0.0
│  ├─ isobject@^3.0.0
│  └─ snapdragon-util@^3.0.1
├─ snapdragon-util@3.0.1
│  └─ kind-of@^3.2.0
├─ snapdragon@0.8.2
│  ├─ base@^0.11.1
│  ├─ debug@^2.2.0
│  ├─ define-property@^0.2.5
│  ├─ extend-shallow@^2.0.1
│  ├─ map-cache@^0.2.2
│  ├─ source-map-resolve@^0.5.0
│  ├─ source-map@^0.5.6
│  └─ use@^3.1.0
├─ source-map-resolve@0.5.2
│  ├─ atob@^2.1.1
│  ├─ decode-uri-component@^0.2.0
│  ├─ resolve-url@^0.2.1
│  ├─ source-map-url@^0.4.0
│  └─ urix@^0.1.0
├─ source-map-support@0.4.18
│  └─ source-map@^0.5.6
├─ source-map-url@0.4.0
├─ source-map@0.5.7
├─ spawn-wrap@1.4.2
│  ├─ foreground-child@^1.5.6
│  ├─ mkdirp@^0.5.0
│  ├─ os-homedir@^1.0.1
│  ├─ rimraf@^2.6.2
│  ├─ signal-exit@^3.0.2
│  └─ which@^1.3.0
├─ spdx-correct@3.0.0
│  ├─ spdx-expression-parse@^3.0.0
│  └─ spdx-license-ids@^3.0.0
├─ spdx-exceptions@2.1.0
├─ spdx-expression-parse@3.0.0
│  ├─ spdx-exceptions@^2.1.0
│  └─ spdx-license-ids@^3.0.0
├─ spdx-license-ids@3.0.0
├─ split-string@3.1.0
│  ├─ extend-shallow@^3.0.0
│  ├─ extend-shallow@3.0.2
│  │  ├─ assign-symbols@^1.0.0
│  │  └─ is-extendable@^1.0.1
│  └─ is-extendable@1.0.1
│     └─ is-plain-object@^2.0.4
├─ static-extend@0.1.2
│  ├─ define-property@^0.2.5
│  └─ object-copy@^0.1.0
├─ string-width@2.1.1
│  ├─ ansi-regex@3.0.0
│  ├─ is-fullwidth-code-point@^2.0.0
│  ├─ strip-ansi@^4.0.0
│  └─ strip-ansi@4.0.0
│     └─ ansi-regex@^3.0.0
├─ strip-ansi@3.0.1
│  └─ ansi-regex@^2.0.0
├─ strip-bom@2.0.0
│  └─ is-utf8@^0.2.0
├─ strip-eof@1.0.0
├─ supports-color@5.4.0
│  └─ has-flag@^3.0.0
├─ test-exclude@4.2.1
│  ├─ arrify@^1.0.1
│  ├─ micromatch@^3.1.8
│  ├─ object-assign@^4.1.0
│  ├─ read-pkg-up@^1.0.1
│  └─ require-main-filename@^1.0.1
├─ to-fast-properties@1.0.3
├─ to-object-path@0.3.0
│  └─ kind-of@^3.0.2
├─ to-regex-range@2.1.1
│  ├─ is-number@^3.0.0
│  └─ repeat-string@^1.6.1
├─ to-regex@3.0.2
│  ├─ define-property@^2.0.2
│  ├─ define-property@2.0.2
│  │  ├─ is-descriptor@^1.0.2
│  │  └─ isobject@^3.0.1
│  ├─ extend-shallow@^3.0.2
│  ├─ extend-shallow@3.0.2
│  │  ├─ assign-symbols@^1.0.0
│  │  └─ is-extendable@^1.0.1
│  ├─ is-extendable@1.0.1
│  │  └─ is-plain-object@^2.0.4
│  ├─ regex-not@^1.0.2
│  └─ safe-regex@^1.1.0
├─ trim-right@1.0.1
├─ ua-parser-js@0.7.18
├─ uglify-js@2.8.29
│  ├─ camelcase@1.2.1
│  ├─ cliui@2.1.0
│  │  ├─ center-align@^0.1.1
│  │  ├─ right-align@^0.1.1
│  │  └─ wordwrap@0.0.2
│  ├─ source-map@~0.5.1
│  ├─ uglify-to-browserify@~1.0.0
│  ├─ wordwrap@0.0.2
│  ├─ yargs@~3.10.0
│  └─ yargs@3.10.0
│     ├─ camelcase@^1.0.2
│     ├─ cliui@^2.1.0
│     ├─ decamelize@^1.0.0
│     └─ window-size@0.1.0
├─ uglify-to-browserify@1.0.2
├─ union-value@1.0.0
│  ├─ arr-union@^3.1.0
│  ├─ get-value@^2.0.6
│  ├─ is-extendable@^0.1.1
│  ├─ set-value@^0.4.3
│  └─ set-value@0.4.3
│     ├─ extend-shallow@^2.0.1
│     ├─ is-extendable@^0.1.1
│     ├─ is-plain-object@^2.0.1
│     └─ to-object-path@^0.3.0
├─ unset-value@1.0.0
│  ├─ has-value@^0.3.1
│  ├─ has-value@0.3.1
│  │  ├─ get-value@^2.0.3
│  │  ├─ has-values@^0.1.4
│  │  ├─ isobject@^2.0.0
│  │  └─ isobject@2.1.0
│  │     └─ isarray@1.0.0
│  ├─ has-values@0.1.4
│  └─ isobject@^3.0.0
├─ urix@0.1.0
├─ use@3.1.1
├─ validate-npm-package-license@3.0.4
│  ├─ spdx-correct@^3.0.0
│  └─ spdx-expression-parse@^3.0.0
├─ whatwg-fetch@2.0.4
├─ which-module@2.0.0
├─ which@1.3.1
│  └─ isexe@^2.0.0
├─ window-size@0.1.0
├─ wordwrap@0.0.3
├─ wrap-ansi@2.1.0
│  ├─ is-fullwidth-code-point@1.0.0
│  │  └─ number-is-nan@^1.0.0
│  ├─ string-width@^1.0.1
│  ├─ string-width@1.0.2
│  │  ├─ code-point-at@^1.0.0
│  │  ├─ is-fullwidth-code-point@^1.0.0
│  │  └─ strip-ansi@^3.0.0
│  └─ strip-ansi@^3.0.1
├─ wrappy@1.0.2
├─ write-file-atomic@1.3.4
│  ├─ graceful-fs@^4.1.11
│  ├─ imurmurhash@^0.1.4
│  └─ slide@^1.1.5
├─ y18n@3.2.1
├─ yallist@2.1.2
├─ yargs-parser@8.1.0
│  └─ camelcase@^4.1.0
└─ yargs@11.1.0
   ├─ cliui@^4.0.0
   ├─ decamelize@^1.1.1
   ├─ find-up@^2.1.0
   ├─ get-caller-file@^1.0.1
   ├─ os-locale@^2.0.0
   ├─ require-directory@^2.1.1
   ├─ require-main-filename@^1.0.1
   ├─ set-blocking@^2.0.0
   ├─ string-width@^2.0.0
   ├─ which-module@^2.0.0
   ├─ y18n@^3.2.1
   ├─ yargs-parser@^9.0.2
   └─ yargs-parser@9.0.2
      └─ camelcase@^4.1.0
```
