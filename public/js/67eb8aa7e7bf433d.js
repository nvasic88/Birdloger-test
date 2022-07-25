"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_tables_TaxonomyTable_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/TaxonomyTable.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/TaxonomyTable.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: \"TaxonomyTable\",\n  data: function data() {\n    return {\n      check: null,\n      connect: null,\n      disconnect: null,\n      sync: null\n    };\n  },\n  props: {\n    checkRoute: String,\n    connectRoute: String,\n    disconnectRoute: String,\n    syncRoute: String\n  },\n  methods: {\n    checkConnection: function checkConnection() {\n      var _this = this;\n\n      return axios.get(route(this.checkRoute)).then(function (response) {\n        return _this.check = response.data;\n      })[\"catch\"](function (error) {\n        return console.log(error);\n      });\n    },\n    connectTaxonomy: function connectTaxonomy() {\n      var _this2 = this;\n\n      return axios.get(route(this.connectRoute)).then(function (response) {\n        return _this2.connect = response.data;\n      })[\"catch\"](function (error) {\n        return console.log(error);\n      });\n    },\n    disconnectTaxonomy: function disconnectTaxonomy() {\n      var _this3 = this;\n\n      if (confirm(\"Do you really want to disconnect?\\nThis cannot be undone.\")) {\n        return axios.get(route(this.disconnectRoute)).then(function (response) {\n          return _this3.disconnect = response.data;\n        })[\"catch\"](function (error) {\n          return console.log(error);\n        });\n      }\n    },\n    syncTaxonomy: function syncTaxonomy() {\n      var _this4 = this;\n\n      return axios.get(route(this.syncRoute)).then(function (response) {\n        return _this4.sync = response.data;\n      })[\"catch\"](function (error) {\n        return console.log(error);\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdGFibGVzL1RheG9ub215VGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0JBLGlFQUFlO0VBQ2ZBLHFCQURBO0VBR0FDLElBSEEsa0JBR0E7SUFDQTtNQUNBQyxXQURBO01BRUFDLGFBRkE7TUFHQUMsZ0JBSEE7TUFJQUM7SUFKQTtFQU1BLENBVkE7RUFZQUM7SUFDQUMsa0JBREE7SUFFQUMsb0JBRkE7SUFHQUMsdUJBSEE7SUFJQUM7RUFKQSxDQVpBO0VBbUJBQztJQUNBQyxlQURBLDZCQUNBO01BQUE7O01BQ0EsYUFDQUMsR0FEQSxDQUNBQyxzQkFEQSxFQUVBQyxJQUZBLENBRUE7UUFBQTtNQUFBLENBRkEsV0FHQTtRQUFBO01BQUEsQ0FIQTtJQUlBLENBTkE7SUFRQUMsZUFSQSw2QkFRQTtNQUFBOztNQUNBLGFBQ0FILEdBREEsQ0FDQUMsd0JBREEsRUFFQUMsSUFGQSxDQUVBO1FBQUE7TUFBQSxDQUZBLFdBR0E7UUFBQTtNQUFBLENBSEE7SUFJQSxDQWJBO0lBZUFFLGtCQWZBLGdDQWVBO01BQUE7O01BQ0E7UUFDQSxhQUNBSixHQURBLENBQ0FDLDJCQURBLEVBRUFDLElBRkEsQ0FFQTtVQUFBO1FBQUEsQ0FGQSxXQUdBO1VBQUE7UUFBQSxDQUhBO01BSUE7SUFDQSxDQXRCQTtJQXdCQUcsWUF4QkEsMEJBd0JBO01BQUE7O01BQ0EsYUFDQUwsR0FEQSxDQUNBQyxxQkFEQSxFQUVBQyxJQUZBLENBRUE7UUFBQTtNQUFBLENBRkEsV0FHQTtRQUFBO01BQUEsQ0FIQTtJQUlBO0VBN0JBO0FBbkJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3RhYmxlcy9UYXhvbm9teVRhYmxlLnZ1ZT8zNDU5Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInRheG9ub215LXRhYmxlXCI+XG5cbiAgICA8ZGl2PlxuICAgICAgU2ltcGxlIHRvb2xzIGZvciB0ZXN0aW5nLiBNb3JlIHdpbGwgYmUgYWRkZWQvbW9kaWZpZWQgbGF0ZXIgLi4uXG4gICAgPC9kaXY+XG5cbiAgICA8aHI+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gaXMtaW5mb1wiIEBjbGljaz1cImNoZWNrQ29ubmVjdGlvblwiPkNoZWNrPC9idXR0b24+XG4gICAgQ2hlY2sgY29ubmVjdGlvbiB0byBUYXhvbm9teSBiYXNlLlxuICAgIDxicj5cbiAgICA8Yj5SZXNwb25zZTo8L2I+IHt7IGNoZWNrIH19XG4gICAgPGhyPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIGlzLXN1Y2Nlc3NcIiBAY2xpY2s9XCJjb25uZWN0VGF4b25vbXlcIj5Db25uZWN0PC9idXR0b24+XG4gICAgSWYgY29ubmVjdGVkLCB0aGlzIEJpb2xvZ2VyIGRhdGFiYXNlIHdpbGwgcmVjZWl2ZSB1cGRhdGVzIGZyb20gVGF4b25vbXkgYmFzZSBhcyBzb29uIHRoZXkgYXJlIGF2YWlsYWJsZS5cbiAgICBDb25uZWN0aW5nIHdpbGwgYWxzbyBzZW5kIGluZm8gYWJvdXQgbGVnaXNsYXRpb24ncyBhbmQgcmVkIGxpc3RzIHRvIFRheG9ub215IGJhc2UsIHRvIGJlIGluIHN5bmMuPGJyPlxuICAgIDxiPlJlc3BvbnNlOjwvYj4ge3sgY29ubmVjdCB9fVxuICAgIDxocj5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBpcy1kYW5nZXJcIiBAY2xpY2s9XCJkaXNjb25uZWN0VGF4b25vbXlcIj5EaXNjb25uZWN0PC9idXR0b24+XG4gICAgSWYgZGlzY29ubmVjdGVkLCB0aGlzIEJpb2xvZ2VyIGRhdGFiYXNlIHdpbGwgTk9UIHJlY2VpdmUgYW55IHVwZGF0ZXMgZnJvbSB0YXhvbm9teSBiYXNlLiBBbGwgSUQncyBjb25uZWN0ZWQgdG9cbiAgICBUYXhvbm9teSBiYXNlIHdpbGwgYmUgZXJhc2VkITxicj5cbiAgICA8Yj5SZXNwb25zZTo8L2I+IHt7IGRpc2Nvbm5lY3QgfX1cbiAgICA8aHI+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gaXMtcHJpbWFyeVwiIEBjbGljaz1cInN5bmNUYXhvbm9teVwiPlN5bmMgYWxsIHRheGE8L2J1dHRvbj5cbiAgICBTZWFyY2ggZm9yIGFsbCB0YXhhIHRoYXQgYXJlIG5vdCBhbHJlYWR5IHVwZGF0ZWQgd2l0aCBUYXhvbm9teSBiYXNlLjxicj5cbiAgICA8Yj5SZXNwb25zZTo8L2I+IHt7IHN5bmMgfX1cbiAgICA8aHI+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJUYXhvbm9teVRhYmxlXCIsXG5cbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2hlY2s6IG51bGwsXG4gICAgICBjb25uZWN0OiBudWxsLFxuICAgICAgZGlzY29ubmVjdDogbnVsbCxcbiAgICAgIHN5bmM6IG51bGwsXG4gICAgfVxuICB9LFxuXG4gIHByb3BzOiB7XG4gICAgY2hlY2tSb3V0ZTogU3RyaW5nLFxuICAgIGNvbm5lY3RSb3V0ZTogU3RyaW5nLFxuICAgIGRpc2Nvbm5lY3RSb3V0ZTogU3RyaW5nLFxuICAgIHN5bmNSb3V0ZTogU3RyaW5nLFxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBjaGVja0Nvbm5lY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGF4aW9zXG4gICAgICAgIC5nZXQocm91dGUodGhpcy5jaGVja1JvdXRlKSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gKHRoaXMuY2hlY2sgPSByZXNwb25zZS5kYXRhKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gICAgfSxcblxuICAgIGNvbm5lY3RUYXhvbm9teSAoKSB7XG4gICAgICByZXR1cm4gYXhpb3NcbiAgICAgICAgLmdldChyb3V0ZSh0aGlzLmNvbm5lY3RSb3V0ZSkpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+ICh0aGlzLmNvbm5lY3QgPSByZXNwb25zZS5kYXRhKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gICAgfSxcblxuICAgIGRpc2Nvbm5lY3RUYXhvbm9teSAoKSB7XG4gICAgICBpZihjb25maXJtKFwiRG8geW91IHJlYWxseSB3YW50IHRvIGRpc2Nvbm5lY3Q/XFxuVGhpcyBjYW5ub3QgYmUgdW5kb25lLlwiKSkge1xuICAgICAgICByZXR1cm4gYXhpb3NcbiAgICAgICAgICAuZ2V0KHJvdXRlKHRoaXMuZGlzY29ubmVjdFJvdXRlKSlcbiAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiAodGhpcy5kaXNjb25uZWN0ID0gcmVzcG9uc2UuZGF0YSkpXG4gICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN5bmNUYXhvbm9teSAoKSB7XG4gICAgICByZXR1cm4gYXhpb3NcbiAgICAgICAgLmdldChyb3V0ZSh0aGlzLnN5bmNSb3V0ZSkpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+ICh0aGlzLnN5bmMgPSByZXNwb25zZS5kYXRhKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gICAgfSxcbiAgfSxcbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbIm5hbWUiLCJkYXRhIiwiY2hlY2siLCJjb25uZWN0IiwiZGlzY29ubmVjdCIsInN5bmMiLCJwcm9wcyIsImNoZWNrUm91dGUiLCJjb25uZWN0Um91dGUiLCJkaXNjb25uZWN0Um91dGUiLCJzeW5jUm91dGUiLCJtZXRob2RzIiwiY2hlY2tDb25uZWN0aW9uIiwiZ2V0Iiwicm91dGUiLCJ0aGVuIiwiY29ubmVjdFRheG9ub215IiwiZGlzY29ubmVjdFRheG9ub215Iiwic3luY1RheG9ub215Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/TaxonomyTable.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./resources/js/components/tables/TaxonomyTable.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/tables/TaxonomyTable.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _TaxonomyTable_vue_vue_type_template_id_bec5c804_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaxonomyTable.vue?vue&type=template&id=bec5c804&scoped=true& */ \"./resources/js/components/tables/TaxonomyTable.vue?vue&type=template&id=bec5c804&scoped=true&\");\n/* harmony import */ var _TaxonomyTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaxonomyTable.vue?vue&type=script&lang=js& */ \"./resources/js/components/tables/TaxonomyTable.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _TaxonomyTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _TaxonomyTable_vue_vue_type_template_id_bec5c804_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,\n  _TaxonomyTable_vue_vue_type_template_id_bec5c804_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  \"bec5c804\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/components/tables/TaxonomyTable.vue\"\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy90YWJsZXMvVGF4b25vbXlUYWJsZS52dWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3RztBQUN2QztBQUNMOzs7QUFHNUQ7QUFDQSxDQUFnRztBQUNoRyxnQkFBZ0IsdUdBQVU7QUFDMUIsRUFBRSxtRkFBTTtBQUNSLEVBQUUsaUdBQU07QUFDUixFQUFFLDBHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3RhYmxlcy9UYXhvbm9teVRhYmxlLnZ1ZT8zZDNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVGF4b25vbXlUYWJsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YmVjNWM4MDQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVGF4b25vbXlUYWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1RheG9ub215VGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJiZWM1YzgwNFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXG52YXNpY1xcXFxQaHBzdG9ybVByb2plY3RzXFxcXEJpb2xvZ2VyLXRlc3RcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYmVjNWM4MDQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYmVjNWM4MDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYmVjNWM4MDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1RheG9ub215VGFibGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWJlYzVjODA0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2JlYzVjODA0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy90YWJsZXMvVGF4b25vbXlUYWJsZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/components/tables/TaxonomyTable.vue\n");

/***/ }),

/***/ "./resources/js/components/tables/TaxonomyTable.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/tables/TaxonomyTable.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxonomyTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TaxonomyTable.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/TaxonomyTable.vue?vue&type=script&lang=js&\");\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxonomyTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy90YWJsZXMvVGF4b25vbXlUYWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTZOLENBQUMsaUVBQWUsa05BQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3RhYmxlcy9UYXhvbm9teVRhYmxlLnZ1ZT9lZmNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYXhvbm9teVRhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RheG9ub215VGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/components/tables/TaxonomyTable.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./resources/js/components/tables/TaxonomyTable.vue?vue&type=template&id=bec5c804&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/tables/TaxonomyTable.vue?vue&type=template&id=bec5c804&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxonomyTable_vue_vue_type_template_id_bec5c804_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxonomyTable_vue_vue_type_template_id_bec5c804_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxonomyTable_vue_vue_type_template_id_bec5c804_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TaxonomyTable.vue?vue&type=template&id=bec5c804&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/TaxonomyTable.vue?vue&type=template&id=bec5c804&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/TaxonomyTable.vue?vue&type=template&id=bec5c804&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/TaxonomyTable.vue?vue&type=template&id=bec5c804&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"staticRenderFns\": () => (/* binding */ staticRenderFns)\n/* harmony export */ });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"taxonomy-table\" }, [\n    _c(\"div\", [\n      _vm._v(\n        \"\\n    Simple tools for testing. More will be added/modified later ...\\n  \"\n      ),\n    ]),\n    _vm._v(\" \"),\n    _c(\"hr\"),\n    _vm._v(\" \"),\n    _c(\n      \"button\",\n      {\n        staticClass: \"button is-info\",\n        attrs: { type: \"button\" },\n        on: { click: _vm.checkConnection },\n      },\n      [_vm._v(\"Check\")]\n    ),\n    _vm._v(\"\\n  Check connection to Taxonomy base.\\n  \"),\n    _c(\"br\"),\n    _vm._v(\" \"),\n    _c(\"b\", [_vm._v(\"Response:\")]),\n    _vm._v(\" \" + _vm._s(_vm.check) + \"\\n  \"),\n    _c(\"hr\"),\n    _vm._v(\" \"),\n    _c(\n      \"button\",\n      {\n        staticClass: \"button is-success\",\n        attrs: { type: \"button\" },\n        on: { click: _vm.connectTaxonomy },\n      },\n      [_vm._v(\"Connect\")]\n    ),\n    _vm._v(\n      \"\\n  If connected, this Biologer database will receive updates from Taxonomy base as soon they are available.\\n  Connecting will also send info about legislation's and red lists to Taxonomy base, to be in sync.\"\n    ),\n    _c(\"br\"),\n    _vm._v(\" \"),\n    _c(\"b\", [_vm._v(\"Response:\")]),\n    _vm._v(\" \" + _vm._s(_vm.connect) + \"\\n  \"),\n    _c(\"hr\"),\n    _vm._v(\" \"),\n    _c(\n      \"button\",\n      {\n        staticClass: \"button is-danger\",\n        attrs: { type: \"button\" },\n        on: { click: _vm.disconnectTaxonomy },\n      },\n      [_vm._v(\"Disconnect\")]\n    ),\n    _vm._v(\n      \"\\n  If disconnected, this Biologer database will NOT receive any updates from taxonomy base. All ID's connected to\\n  Taxonomy base will be erased!\"\n    ),\n    _c(\"br\"),\n    _vm._v(\" \"),\n    _c(\"b\", [_vm._v(\"Response:\")]),\n    _vm._v(\" \" + _vm._s(_vm.disconnect) + \"\\n  \"),\n    _c(\"hr\"),\n    _vm._v(\" \"),\n    _c(\n      \"button\",\n      {\n        staticClass: \"button is-primary\",\n        attrs: { type: \"button\" },\n        on: { click: _vm.syncTaxonomy },\n      },\n      [_vm._v(\"Sync all taxa\")]\n    ),\n    _vm._v(\n      \"\\n  Search for all taxa that are not already updated with Taxonomy base.\"\n    ),\n    _c(\"br\"),\n    _vm._v(\" \"),\n    _c(\"b\", [_vm._v(\"Response:\")]),\n    _vm._v(\" \" + _vm._s(_vm.sync) + \"\\n  \"),\n    _c(\"hr\"),\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy90YWJsZXMvVGF4b25vbXlUYWJsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YmVjNWM4MDQmc2NvcGVkPXRydWUmLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsK0JBQStCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnQkFBZ0I7QUFDakMsY0FBYyw0QkFBNEI7QUFDMUMsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdCQUFnQjtBQUNqQyxjQUFjLDRCQUE0QjtBQUMxQyxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdCQUFnQjtBQUNqQyxjQUFjLCtCQUErQjtBQUM3QyxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdCQUFnQjtBQUNqQyxjQUFjLHlCQUF5QjtBQUN2QyxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3RhYmxlcy9UYXhvbm9teVRhYmxlLnZ1ZT8xYmIyIl0sInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGF4b25vbXktdGFibGVcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgW1xuICAgICAgX3ZtLl92KFxuICAgICAgICBcIlxcbiAgICBTaW1wbGUgdG9vbHMgZm9yIHRlc3RpbmcuIE1vcmUgd2lsbCBiZSBhZGRlZC9tb2RpZmllZCBsYXRlciAuLi5cXG4gIFwiXG4gICAgICApLFxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJoclwiKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJidXR0b25cIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGlzLWluZm9cIixcbiAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICBvbjogeyBjbGljazogX3ZtLmNoZWNrQ29ubmVjdGlvbiB9LFxuICAgICAgfSxcbiAgICAgIFtfdm0uX3YoXCJDaGVja1wiKV1cbiAgICApLFxuICAgIF92bS5fdihcIlxcbiAgQ2hlY2sgY29ubmVjdGlvbiB0byBUYXhvbm9teSBiYXNlLlxcbiAgXCIpLFxuICAgIF9jKFwiYnJcIiksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImJcIiwgW192bS5fdihcIlJlc3BvbnNlOlwiKV0pLFxuICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uY2hlY2spICsgXCJcXG4gIFwiKSxcbiAgICBfYyhcImhyXCIpLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtc3VjY2Vzc1wiLFxuICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY29ubmVjdFRheG9ub215IH0sXG4gICAgICB9LFxuICAgICAgW192bS5fdihcIkNvbm5lY3RcIildXG4gICAgKSxcbiAgICBfdm0uX3YoXG4gICAgICBcIlxcbiAgSWYgY29ubmVjdGVkLCB0aGlzIEJpb2xvZ2VyIGRhdGFiYXNlIHdpbGwgcmVjZWl2ZSB1cGRhdGVzIGZyb20gVGF4b25vbXkgYmFzZSBhcyBzb29uIHRoZXkgYXJlIGF2YWlsYWJsZS5cXG4gIENvbm5lY3Rpbmcgd2lsbCBhbHNvIHNlbmQgaW5mbyBhYm91dCBsZWdpc2xhdGlvbidzIGFuZCByZWQgbGlzdHMgdG8gVGF4b25vbXkgYmFzZSwgdG8gYmUgaW4gc3luYy5cIlxuICAgICksXG4gICAgX2MoXCJiclwiKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiYlwiLCBbX3ZtLl92KFwiUmVzcG9uc2U6XCIpXSksXG4gICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5jb25uZWN0KSArIFwiXFxuICBcIiksXG4gICAgX2MoXCJoclwiKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJidXR0b25cIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGlzLWRhbmdlclwiLFxuICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uZGlzY29ubmVjdFRheG9ub215IH0sXG4gICAgICB9LFxuICAgICAgW192bS5fdihcIkRpc2Nvbm5lY3RcIildXG4gICAgKSxcbiAgICBfdm0uX3YoXG4gICAgICBcIlxcbiAgSWYgZGlzY29ubmVjdGVkLCB0aGlzIEJpb2xvZ2VyIGRhdGFiYXNlIHdpbGwgTk9UIHJlY2VpdmUgYW55IHVwZGF0ZXMgZnJvbSB0YXhvbm9teSBiYXNlLiBBbGwgSUQncyBjb25uZWN0ZWQgdG9cXG4gIFRheG9ub215IGJhc2Ugd2lsbCBiZSBlcmFzZWQhXCJcbiAgICApLFxuICAgIF9jKFwiYnJcIiksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImJcIiwgW192bS5fdihcIlJlc3BvbnNlOlwiKV0pLFxuICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uZGlzY29ubmVjdCkgKyBcIlxcbiAgXCIpLFxuICAgIF9jKFwiaHJcIiksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiYnV0dG9uXCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1wcmltYXJ5XCIsXG4gICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgb246IHsgY2xpY2s6IF92bS5zeW5jVGF4b25vbXkgfSxcbiAgICAgIH0sXG4gICAgICBbX3ZtLl92KFwiU3luYyBhbGwgdGF4YVwiKV1cbiAgICApLFxuICAgIF92bS5fdihcbiAgICAgIFwiXFxuICBTZWFyY2ggZm9yIGFsbCB0YXhhIHRoYXQgYXJlIG5vdCBhbHJlYWR5IHVwZGF0ZWQgd2l0aCBUYXhvbm9teSBiYXNlLlwiXG4gICAgKSxcbiAgICBfYyhcImJyXCIpLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJiXCIsIFtfdm0uX3YoXCJSZXNwb25zZTpcIildKSxcbiAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLnN5bmMpICsgXCJcXG4gIFwiKSxcbiAgICBfYyhcImhyXCIpLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/TaxonomyTable.vue?vue&type=template&id=bec5c804&scoped=true&\n");

/***/ })

}]);