[![npm](https://img.shields.io/npm/v/@chalbert/enzyme-adapter-react-18.svg)](https://www.npmjs.com/package/@chalbert/enzyme-adapter-react-18) ![downloads](https://img.shields.io/npm/dt/@chalbert/enzyme-adapter-react-18.svg)


# @chalbert/enzyme-adapter-react-18

Unofficial adapter for React 18 for [Enzyme](https://enzymejs.github.io/enzyme/).

Adapted from [@wojtekmaj/enzyme-adapter-react-17](https://www.npmjs.com/package/@wojtekmaj/enzyme-adapter-react-17)

## Installation

```
npm install --save-dev @chalbert/enzyme-adapter-react-18
```

or, if you're using Yarn:

```
yarn add --dev @chalbert/enzyme-adapter-react-18
```

## Configuration

Finally, you need to configure enzyme to use the adapter you want it to use. To do this, you can use the top level `configure(...)` API.

```js
import Enzyme from 'enzyme';
import Adapter from '@chalbert/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });
```
