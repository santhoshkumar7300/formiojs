"use strict";

require("core-js/modules/es.array.for-each.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/web.timers.js");
require("core-js/modules/es.string.trim.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.array.join.js");
var _powerAssert = _interopRequireDefault(require("power-assert"));
var _harness = _interopRequireDefault(require("../../../test/harness"));
var _File = _interopRequireDefault(require("./File"));
var _fixtures = require("./fixtures");
var _Formio = _interopRequireDefault(require("./../../Formio"));
var _lodash = _interopRequireDefault(require("lodash"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe('File Component', function () {
  it('Should create a File Component', function () {
    return _harness["default"].testCreate(_File["default"], _fixtures.comp1).then(function (component) {
      var parentNode = document.createElement('div');
      var element = document.createElement('div');
      parentNode.appendChild(element);
      component.build(element);
      _harness["default"].testElements(component, 'ul.list-group-striped li.list-group-header', 1);
      _harness["default"].testElements(component, 'ul.list-group-striped li.list-group-item', 1);
      _harness["default"].testElements(component, 'a.browse', 1);
      (0, _powerAssert["default"])(component.checkValidity(component.getValue()), 'Item should be valid');
      component.setValue([{
        storage: 'base64',
        name: 'IMG_5235-ce0abe18-5d3e-4ab4-84ca-b3e06684bc86.jpg',
        url: 'data:image/jpg;base64,AAAAIGZ0eXBoZWljAAAAAG1pZjF',
        size: 1159732,
        type: 'image/jpeg',
        originalName: 'IMG_5235.jpg'
      }, {
        storage: 'base64',
        name: 'IMG_5235-ce0abe18-5d3e-4ab4-84ca-b3e06684bc86.png',
        url: 'data:image/jpg;base64,AAAAIGZ0eXBoZWljAAAAAG1pZjF',
        size: 34533,
        type: 'image/png',
        originalName: 'IMG_5235.png'
      }]);
      _harness["default"].testElements(component, 'ul.list-group-striped li.list-group-header', 1);
      _harness["default"].testElements(component, 'ul.list-group-striped li.list-group-item', 3);
      _harness["default"].testElements(component, 'a.browse', 0);
      (0, _powerAssert["default"])(component.checkValidity(component.getValue()), 'Item should be valid');
    });
  });
  it('Should hide loader after loading process', function () {
    return _harness["default"].testCreate(_File["default"], _fixtures.comp1).then(function (component) {
      var parentNode = document.createElement('div');
      var element = document.createElement('div');
      parentNode.appendChild(element);
      component.build(element);
      _harness["default"].testElements(component, 'div.loader-wrapper', 1);
      component.setValue([{
        storage: 'base64',
        name: 'IMG_5235-ce0abe18-5d3e-4ab4-84ca-b3e06684bc86.jpg',
        url: 'data:image/jpg;base64,AAAAIGZ0eXBoZWljAAAAAG1pZjF',
        size: 1159732,
        type: 'image/jpeg',
        originalName: 'IMG_5235.jpg'
      }]);
      _harness["default"].testElements(component, 'div.loader-wrapper', 0);
    });
  });
  it('Should create a multiple File Component', function () {
    _fixtures.comp1.multiple = true;
    return _harness["default"].testCreate(_File["default"], _fixtures.comp1).then(function (component) {
      var parentNode = document.createElement('div');
      var element = document.createElement('div');
      parentNode.appendChild(element);
      component.build(element);
      _harness["default"].testElements(component, 'ul.list-group-striped li.list-group-header', 1);
      _harness["default"].testElements(component, 'ul.list-group-striped li.list-group-item', 1);
      _harness["default"].testElements(component, 'a.browse', 1);
      (0, _powerAssert["default"])(component.checkValidity(component.getValue()), 'Item should be valid');
      component.setValue([{
        storage: 'base64',
        name: 'IMG_5235-ce0abe18-5d3e-4ab4-84ca-b3e06684bc86.jpg',
        url: 'data:image/jpg;base64,AAAAIGZ0eXBoZWljAAAAAG1pZjF',
        size: 1159732,
        type: 'image/jpeg',
        originalName: 'IMG_5235.jpg'
      }, {
        storage: 'base64',
        name: 'IMG_5235-ce0abe18-5d3e-4ab4-84ca-b3e06684bc86.png',
        url: 'data:image/jpg;base64,AAAAIGZ0eXBoZWljAAAAAG1pZjF',
        size: 34533,
        type: 'image/png',
        originalName: 'IMG_5235.png'
      }]);
      _harness["default"].testElements(component, 'ul.list-group-striped li.list-group-header', 1);
      _harness["default"].testElements(component, 'ul.list-group-striped li.list-group-item', 3);
      _harness["default"].testElements(component, 'a.browse', 1);
      (0, _powerAssert["default"])(component.checkValidity(component.getValue()), 'Item should be valid');
    });
  });
  it('Should validate uploaded file according to the pattern', function (done) {
    _harness["default"].testCreate(_File["default"], _fixtures.comp1).then(function (component) {
      var validFiles = [{
        name: 'test.jpg',
        size: 27401,
        type: 'image/jpeg'
      }, {
        name: 'TypeScript.pdf',
        size: 203123,
        type: 'application/pdf'
      }, {
        name: 'build with dist.png',
        size: 137321,
        type: 'image/png'
      }];
      var invalidFiles = [{
        name: 'eventsList.xlsx',
        size: 16022,
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      }, {
        name: 'lazy load.mp4',
        size: 9083622,
        type: 'video/mp4'
      }];
      var pattern = '  .jpg,     .png,    .exe,     .pdf ';
      var checkValidatePattern = function checkValidatePattern(files, valid) {
        files.forEach(function (file) {
          _powerAssert["default"].equal(component.validatePattern(file, pattern), valid, "File ".concat(file.name, " should ").concat(valid ? '' : 'not', " correspond to the pattern"));
        });
      };
      checkValidatePattern(validFiles, true);
      checkValidatePattern(invalidFiles, false);
      done();
    });
  });
  it('Should display uploaded file in file component only after saving', function (done) {
    var form = _lodash["default"].cloneDeep(_fixtures.comp2);
    var element = document.createElement('div');
    _Formio["default"].createForm(element, form).then(function (form) {
      var value = [{
        storage: 'base64',
        name: '33-0ae897b9-c808-4832-a5e1-4e5d0c725f1b.jpg',
        url: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD…CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//2Q==',
        size: 102691,
        type: 'image/jpeg',
        originalName: '33.jpg'
      }];
      var file = form.getComponent('file');
      var openModalButton = file.componentModal.refs.openModal;
      var clickEvent = new Event('click');
      openModalButton.dispatchEvent(clickEvent);
      setTimeout(function () {
        _powerAssert["default"].equal(file.componentModal.isOpened, true);
        file.dataValue = value;
        file.redraw();
        setTimeout(function () {
          _powerAssert["default"].equal(file.refs.fileLink.length, 1);
          var modalOverlayButton = file.componentModal.refs.modalOverlay;
          modalOverlayButton.dispatchEvent(clickEvent);
          setTimeout(function () {
            _powerAssert["default"].equal(!!file.componentModal.dialogElement, true);
            var dialogYesButton = file.componentModal.dialogElement.refs.dialogYesButton;
            dialogYesButton.dispatchEvent(clickEvent);
            setTimeout(function () {
              _powerAssert["default"].equal(!!file.componentModal.dialogElement, false);
              file.componentModal.closeModal();
              setTimeout(function () {
                _powerAssert["default"].equal(file.componentModal.isOpened, false);
                _powerAssert["default"].equal(file.refs.fileLink.length, 0);
                _powerAssert["default"].equal(file.componentModal.refs.openModal.textContent.trim(), 'Click to set value');
                done();
              }, 200);
            }, 200);
          }, 200);
        }, 200);
      }, 200);
    })["catch"](done);
  });
  it('Should abort the correct file when user clicks the file remove button', function (done) {
    var cmp = _lodash["default"].cloneDeep(_fixtures.comp1);
    var abortedFiles = [];
    cmp.multiple = true;
    cmp.storage = 'url';
    var options = {
      fileService: {
        uploadFile: function uploadFile(storage, file, fileName, dir, progressCallback, url, options, fileKey, groupPermissions, groupId, uploadStartCallback, abortCallbackSetter) {
          return new Promise(function (resolve) {
            // complete upload after 1s.
            var timeout = setTimeout(function () {
              progressCallback({
                loaded: 1,
                total: 1
              });
              var uploadResponse = {
                name: fileName,
                size: file.size,
                type: 'application/pdf',
                url: "fake/url/".concat(fileName)
              };
              resolve(uploadResponse);
            }, 1000);
            abortCallbackSetter(function () {
              abortedFiles.push(file.name);
              clearTimeout(timeout);
            });
          });
        }
      }
    };
    _harness["default"].testCreate(_File["default"], cmp, options).then(function (component) {
      component.root = {
        everyComponent: function everyComponent() {},
        options: options,
        form: {
          submissionRevisions: false,
          components: [cmp]
        }
      };
      var parentNode = document.createElement('div');
      var element = document.createElement('div');
      parentNode.appendChild(element);
      component.build(element);
      var content = [1];
      var files = [new File(content, 'file.0'), new File([content], 'file.1'), new File([content], 'file.2')];
      component.upload(files);
      setTimeout(function () {
        _harness["default"].testElements(component, 'div.file .fileName', 3);
        component.element.querySelectorAll('i[ref="fileStatusRemove"]')[1].click();
        setTimeout(function () {
          (0, _powerAssert["default"])(component !== null);
          (0, _powerAssert["default"])(abortedFiles[0] === 'file.1' && abortedFiles.length === 1);
          (0, _powerAssert["default"])(component.filesUploading.join(',') === 'file.0,file.2');
          _harness["default"].testElements(component, 'div.file .fileName', 2);
          component.root = null;
          done();
        }, 20);
      }, 50);
    });
  });
});