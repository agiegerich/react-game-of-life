import {unmountComponentAtNode} from "react-dom";

class TestUtil {

  static setupBeforeEachAndAfterEach(testObj) {
    beforeEach(() => {
      testObj.container = document.createElement('div');
      document.body.appendChild(testObj.container);
    });

    afterEach(() => {
      unmountComponentAtNode(testObj.container);
      testObj.container.remove();
      testObj.container = null;
    });
  };
}

export default TestUtil;