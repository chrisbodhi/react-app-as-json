import TestRenderer from 'react-test-renderer'

import { App } from "./index";

const tree = TestRenderer.create(App).toJSON()

console.log(tree)