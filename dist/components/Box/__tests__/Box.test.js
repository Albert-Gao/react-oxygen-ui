"use strict";

require("jest-styled-components");

require("jest-dom/extend-expect");

var _react = _interopRequireDefault(require("react"));

var _reactTestingLibrary = require("react-testing-library");

var _Box = require("../Box");

var _styles = require("../../../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n          background-color: black;\n          padding-left: 1023px;\n          "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var getMediaQuery = function getMediaQuery(num) {
  return "screen and (min-width:" + num + "px)";
};

afterEach(_reactTestingLibrary.cleanup);
describe('Test <Box />: justify-content', function () {
  test('should convert start to flex-start', function () {
    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_Box.Box, {
      justifyContent: "start"
    })).container.firstChild;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule('justify-content', 'flex-start');
  });
  test('should convert end to flex-end', function () {
    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_Box.Box, {
      justifyContent: "end"
    })).container.firstChild;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule('justify-content', 'flex-end');
  });
  test('should convert between to space-between', function () {
    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_Box.Box, {
      justifyContent: "between"
    })).container.firstChild;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule('justify-content', 'space-between');
  });
  test('should convert around to space-around', function () {
    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_Box.Box, {
      justifyContent: "around"
    })).container.firstChild;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule('justify-content', 'space-around');
  });
});
describe('Test <Box />: align-items', function () {
  test('should convert start to flex-start', function () {
    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_Box.Box, {
      alignItems: "start"
    })).container.firstChild;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule('align-items', 'flex-start');
  });
  test('should convert end to flex-end', function () {
    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_Box.Box, {
      alignItems: "end"
    })).container.firstChild;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule('align-items', 'flex-end');
  });
});
describe('Test <Box />: align-self', function () {
  test('should convert start to flex-start', function () {
    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_Box.Box, {
      alignSelf: "start"
    })).container.firstChild;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule('align-self', 'flex-start');
  });
  test('should convert end to flex-end', function () {
    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_Box.Box, {
      alignSelf: "end"
    })).container.firstChild;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule('align-self', 'flex-end');
  });
});
describe('Test <Box />: flex-direction', function () {
  test('should accept row', function () {
    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_Box.Box, {
      direction: "row"
    })).container.firstChild;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule('flex-direction', 'row');
  });
  test('should accept column', function () {
    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_Box.Box, {
      direction: "column"
    })).container.firstChild;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule('flex-direction', 'column');
  });
});
describe('Test <Box />: fill', function () {
  test('should support fill="horizontal"', function () {
    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_Box.Box, {
      fill: "horizontal"
    })).container.firstChild;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).not.toHaveStyleRule('height', '100%');
    expect(firstChild).toHaveStyleRule('width', '100%');
  });
  test('should support fill="vertical"', function () {
    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_Box.Box, {
      fill: "vertical"
    })).container.firstChild;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule('height', '100%');
    expect(firstChild).not.toHaveStyleRule('width', '100%');
  });
  test('should support fill=true', function () {
    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_Box.Box, {
      fill: true
    })).container.firstChild;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule('height', '100%');
    expect(firstChild).toHaveStyleRule('width', '100%');
  });
  test('should support fill=false', function () {
    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_Box.Box, {
      fill: false
    })).container.firstChild;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).not.toHaveStyleRule('height', '100%');
    expect(firstChild).not.toHaveStyleRule('width', '100%');
  });
});
describe('Test <Box /> gap', function () {
  test('[no gap with children] it should not add gap between children', function () {
    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_styles.ThemeProvider, null, _react.default.createElement(_Box.Box, {
      direction: "row"
    }, _react.default.createElement("p", null, "a"), _react.default.createElement("p", null, "b")))).container.firstChild; // firstChild is <Box>

    var a = firstChild.children[0];
    var b = firstChild.children[1];
    expect(firstChild).toMatchSnapshot(); // a + b = 2

    expect(firstChild.children.length).toEqual(2);
    expect(a.innerHTML).toEqual('a');
    expect(b.innerHTML).toEqual('b');
  });
  test('[direction=row] it should add gap between children', function () {
    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_styles.ThemeProvider, null, _react.default.createElement(_Box.Box, {
      direction: "row",
      gap: _styles.DEFAULT_SPACE.medium
    }, _react.default.createElement("p", null, "a"), _react.default.createElement("p", null, "b")))).container.firstChild; // firstChild is <Box>

    var a = firstChild.children[0];
    var gapA = firstChild.children[1];
    var b = firstChild.children[2];
    expect(firstChild).toMatchSnapshot(); // a + gapA + b = 3

    expect(firstChild.children.length).toEqual(3);
    expect(a.innerHTML).toEqual('a');
    expect(gapA.tagName).toEqual('DIV');
    expect(gapA).toHaveStyleRule('width', _styles.defaultTheme.space[_styles.DEFAULT_SPACE.medium] + "px");
    expect(b.innerHTML).toEqual('b');
  });
  test('[direction=undefined] it should add gap between children', function () {
    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_styles.ThemeProvider, null, _react.default.createElement(_Box.Box, {
      gap: _styles.DEFAULT_SPACE.xxSmall
    }, _react.default.createElement("p", null, "a"), _react.default.createElement("p", null, "b")))).container.firstChild; // firstChild is <Box>

    var a = firstChild.children[0];
    var gapA = firstChild.children[1];
    var b = firstChild.children[2];
    expect(firstChild).toMatchSnapshot(); // a + gapA + b = 3

    expect(firstChild.children.length).toEqual(3);
    expect(a.innerHTML).toEqual('a');
    expect(gapA.tagName).toEqual('DIV');
    expect(gapA).toHaveStyleRule('width', _styles.defaultTheme.space[_styles.DEFAULT_SPACE.xxSmall] + "px");
    expect(b.innerHTML).toEqual('b');
  });
  test('[direction=column] it should add gap between children', function () {
    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_styles.ThemeProvider, null, _react.default.createElement(_Box.Box, {
      direction: "column",
      gap: _styles.DEFAULT_SPACE.xxLarge
    }, _react.default.createElement("p", null, "a"), _react.default.createElement("p", null, "b")))).container.firstChild; // firstChild is <Box>

    var a = firstChild.children[0];
    var gapA = firstChild.children[1];
    var b = firstChild.children[2];
    expect(firstChild).toMatchSnapshot(); // a + gapA + b = 3

    expect(firstChild.children.length).toEqual(3);
    expect(a.innerHTML).toEqual('a');
    expect(gapA.tagName).toEqual('DIV');
    expect(gapA).toHaveStyleRule('height', _styles.defaultTheme.space[_styles.DEFAULT_SPACE.xxLarge] + "px");
    expect(b.innerHTML).toEqual('b');
  });
  test('[Multiple children] it should add gap between children', function () {
    var expectedLength = _styles.defaultTheme.space[_styles.DEFAULT_SPACE.xLarge] + "px";
    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_styles.ThemeProvider, null, _react.default.createElement(_Box.Box, {
      direction: ['row', 'column', 'row'],
      gap: _styles.DEFAULT_SPACE.xLarge
    }, _react.default.createElement("p", null, "a"), _react.default.createElement("p", null, "b"), _react.default.createElement("p", null, "c")))).container.firstChild; // firstChild is <Box>

    var a = firstChild.children[0];
    var gapA = firstChild.children[1];
    var b = firstChild.children[2];
    var gapB = firstChild.children[3];
    var c = firstChild.children[4];
    expect(firstChild).toMatchSnapshot(); // a + gapA + b + gapB + c = 5

    expect(firstChild.children.length).toEqual(5);
    expect(a.innerHTML).toEqual('a');
    expect(gapA.tagName).toEqual('DIV');
    expect(gapA).toHaveStyleRule('width', expectedLength);
    expect(gapA).toHaveStyleRule('width', expectedLength, {
      media: getMediaQuery(_styles.defaultTheme.breakpoints[0])
    });
    expect(gapA).toHaveStyleRule('height', expectedLength, {
      media: getMediaQuery(_styles.defaultTheme.breakpoints[1])
    });
    expect(b.innerHTML).toEqual('b');
    expect(gapB.tagName).toEqual('DIV');
    expect(gapB).toHaveStyleRule('width', expectedLength);
    expect(gapB).toHaveStyleRule('width', expectedLength, {
      media: getMediaQuery(_styles.defaultTheme.breakpoints[0])
    });
    expect(gapB).toHaveStyleRule('height', expectedLength, {
      media: getMediaQuery(_styles.defaultTheme.breakpoints[1])
    });
    expect(c.innerHTML).toEqual('c');
  });
});
describe('Test <Box />: multiple props', function () {
  test('should accept boxShadow', function () {
    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_styles.ThemeProvider, null, _react.default.createElement(_Box.Box, {
      boxShadow: 5
    }))).container.firstChild;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule('box-shadow', _styles.defaultTheme.shadows[5]);
  });
  test('should accept fontSize', function () {
    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_styles.ThemeProvider, null, _react.default.createElement(_Box.Box, {
      fontSize: _styles.DEFAULT_FONT_SIZE.body
    }))).container.firstChild;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule('font-size', _styles.defaultTheme.fontSpecs[_styles.DEFAULT_FONT_SIZE.body].size);
  });
  test('should accept mx', function () {
    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_styles.ThemeProvider, null, _react.default.createElement(_Box.Box, {
      mx: _styles.DEFAULT_SPACE.small
    }))).container.firstChild;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule('margin-left', _styles.defaultTheme.space[_styles.DEFAULT_SPACE.small] + 'px');
    expect(firstChild).toHaveStyleRule('margin-right', _styles.defaultTheme.space[_styles.DEFAULT_SPACE.small] + 'px');
  });
  test('should accept py', function () {
    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_styles.ThemeProvider, null, _react.default.createElement(_Box.Box, {
      py: _styles.DEFAULT_SPACE.large
    }))).container.firstChild;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule('padding-top', _styles.defaultTheme.space[_styles.DEFAULT_SPACE.large] + 'px');
    expect(firstChild).toHaveStyleRule('padding-bottom', _styles.defaultTheme.space[_styles.DEFAULT_SPACE.large] + 'px');
  });
  test('should accept px[]', function () {
    var getSpace = function getSpace(key) {
      return _styles.defaultTheme.space[_styles.DEFAULT_SPACE[key]] + 'px';
    };

    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_styles.ThemeProvider, null, _react.default.createElement(_Box.Box, {
      px: [_styles.DEFAULT_SPACE.small, _styles.DEFAULT_SPACE.large, _styles.DEFAULT_SPACE.xLarge]
    }))).container.firstChild;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule('padding-left', getSpace('large'), {
      media: getMediaQuery(_styles.defaultTheme.breakpoints[0])
    });
    expect(firstChild).toHaveStyleRule('padding-right', getSpace('large'), {
      media: getMediaQuery(_styles.defaultTheme.breakpoints[0])
    });
    expect(firstChild).toHaveStyleRule('padding-left', getSpace('xLarge'), {
      media: getMediaQuery(_styles.defaultTheme.breakpoints[1])
    });
    expect(firstChild).toHaveStyleRule('padding-right', getSpace('xLarge'), {
      media: getMediaQuery(_styles.defaultTheme.breakpoints[1])
    });
    expect(firstChild).toHaveStyleRule('padding-left', _styles.defaultTheme.space[_styles.DEFAULT_SPACE['small']] + 'px');
    expect(firstChild).toHaveStyleRule('padding-right', _styles.defaultTheme.space[_styles.DEFAULT_SPACE['small']] + 'px');
  });
  test('should accept py[]', function () {
    var getSpace = function getSpace(key) {
      return _styles.defaultTheme.space[_styles.DEFAULT_SPACE[key]] + 'px';
    };

    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_styles.ThemeProvider, null, _react.default.createElement(_Box.Box, {
      py: [_styles.DEFAULT_SPACE.small, _styles.DEFAULT_SPACE.large, _styles.DEFAULT_SPACE.xLarge]
    }))).container.firstChild;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule('padding-top', getSpace('large'), {
      media: getMediaQuery(_styles.defaultTheme.breakpoints[0])
    });
    expect(firstChild).toHaveStyleRule('padding-bottom', getSpace('large'), {
      media: getMediaQuery(_styles.defaultTheme.breakpoints[0])
    });
    expect(firstChild).toHaveStyleRule('padding-top', getSpace('xLarge'), {
      media: getMediaQuery(_styles.defaultTheme.breakpoints[1])
    });
    expect(firstChild).toHaveStyleRule('padding-bottom', getSpace('xLarge'), {
      media: getMediaQuery(_styles.defaultTheme.breakpoints[1])
    });
    expect(firstChild).toHaveStyleRule('padding-top', _styles.defaultTheme.space[_styles.DEFAULT_SPACE['small']] + 'px');
    expect(firstChild).toHaveStyleRule('padding-bottom', _styles.defaultTheme.space[_styles.DEFAULT_SPACE['small']] + 'px');
  });
  test('should accept a11yTitle', function () {
    var a11attr = 'aria-label';
    var a11text = 'accessibility test';
    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_styles.ThemeProvider, null, _react.default.createElement(_Box.Box, {
      a11yTitle: a11text
    }))).container.firstChild;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveAttribute(a11attr);
    expect(firstChild.getAttribute(a11attr)).toEqual(a11text);
  });
});
describe('Test <Box css={}/>: ', function () {
  test('css prop should be added', function () {
    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_styles.ThemeProvider, null, _react.default.createElement(_Box.Box, {
      css: 'background-color: black;'
    }))).container.firstChild;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule('background-color', 'black');
  });
  test('css prop (object) should be handled', function () {
    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_styles.ThemeProvider, null, _react.default.createElement(_Box.Box, {
      css: {
        backgroundColor: 'black',
        paddingLeft: '1023px'
      }
    }))).container.firstChild;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule('background-color', 'black');
    expect(firstChild).toHaveStyleRule('padding-left', '1023px');
  });
  test('css prop (css string) should be handled', function () {
    var firstChild = (0, _reactTestingLibrary.render)(_react.default.createElement(_styles.ThemeProvider, null, _react.default.createElement(_Box.Box, {
      css: (0, _styles.css)(_templateObject())
    }))).container.firstChild;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule('background-color', 'black');
    expect(firstChild).toHaveStyleRule('padding-left', '1023px');
  });
});