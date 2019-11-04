/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + "dcb1bcbc896422a05adb" + "/" + ({"about":"about","blog":"blog","blog_$slug":"blog_$slug","index":"index"}[chunkId]||chunkId) + "." + chunkId + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "client/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/svelte/index.mjs":
/*!***************************************!*\
  !*** ./node_modules/svelte/index.mjs ***!
  \***************************************/
/*! exports provided: afterUpdate, beforeUpdate, createEventDispatcher, getContext, onDestroy, onMount, setContext, tick */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "afterUpdate", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["afterUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beforeUpdate", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["beforeUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createEventDispatcher", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["createEventDispatcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["getContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onDestroy", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["onDestroy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onMount", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["onMount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["setContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tick", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["tick"]; });




/***/ }),

/***/ "./node_modules/svelte/internal/index.mjs":
/*!************************************************!*\
  !*** ./node_modules/svelte/internal/index.mjs ***!
  \************************************************/
/*! exports provided: HtmlTag, SvelteComponent, SvelteComponentDev, SvelteElement, add_attribute, add_classes, add_flush_callback, add_location, add_render_callback, add_resize_listener, add_transform, afterUpdate, append, append_dev, assign, attr, attr_dev, beforeUpdate, bind, binding_callbacks, blank_object, bubble, check_outros, children, claim_element, claim_space, claim_text, clear_loops, component_subscribe, createEventDispatcher, create_animation, create_bidirectional_transition, create_in_transition, create_out_transition, create_slot, create_ssr_component, current_component, custom_event, dataset_dev, debug, destroy_block, destroy_component, destroy_each, detach, detach_after_dev, detach_before_dev, detach_between_dev, detach_dev, dirty_components, dispatch_dev, each, element, element_is, empty, escape, escaped, exclude_internal_props, fix_and_destroy_block, fix_and_outro_and_destroy_block, fix_position, flush, getContext, get_binding_group_value, get_current_component, get_slot_changes, get_slot_context, get_spread_object, get_spread_update, get_store_value, globals, group_outros, handle_promise, identity, init, insert, insert_dev, intros, invalid_attribute_name_character, is_client, is_function, is_promise, listen, listen_dev, loop, measure, missing_component, mount_component, noop, not_equal, now, null_to_empty, object_without_properties, onDestroy, onMount, once, outro_and_destroy_block, prevent_default, prop_dev, raf, run, run_all, safe_not_equal, schedule_update, select_multiple_value, select_option, select_options, select_value, self, setContext, set_attributes, set_current_component, set_custom_element_data, set_data, set_data_dev, set_input_type, set_input_value, set_now, set_raf, set_store_value, set_style, set_svg_attributes, space, spread, stop_propagation, subscribe, svg_element, text, tick, time_ranges_to_array, to_number, toggle_class, transition_in, transition_out, update_keyed_each, validate_component, validate_store, xlink_attr */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlTag", function() { return HtmlTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvelteComponent", function() { return SvelteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvelteComponentDev", function() { return SvelteComponentDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvelteElement", function() { return SvelteElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_attribute", function() { return add_attribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_classes", function() { return add_classes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_flush_callback", function() { return add_flush_callback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_location", function() { return add_location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_render_callback", function() { return add_render_callback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_resize_listener", function() { return add_resize_listener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_transform", function() { return add_transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterUpdate", function() { return afterUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append_dev", function() { return append_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr_dev", function() { return attr_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeUpdate", function() { return beforeUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "binding_callbacks", function() { return binding_callbacks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blank_object", function() { return blank_object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bubble", function() { return bubble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "check_outros", function() { return check_outros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "children", function() { return children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claim_element", function() { return claim_element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claim_space", function() { return claim_space; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claim_text", function() { return claim_text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear_loops", function() { return clear_loops; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "component_subscribe", function() { return component_subscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEventDispatcher", function() { return createEventDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_animation", function() { return create_animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_bidirectional_transition", function() { return create_bidirectional_transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_in_transition", function() { return create_in_transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_out_transition", function() { return create_out_transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_slot", function() { return create_slot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_ssr_component", function() { return create_ssr_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "current_component", function() { return current_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "custom_event", function() { return custom_event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataset_dev", function() { return dataset_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return debug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy_block", function() { return destroy_block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy_component", function() { return destroy_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy_each", function() { return destroy_each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach", function() { return detach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach_after_dev", function() { return detach_after_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach_before_dev", function() { return detach_before_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach_between_dev", function() { return detach_between_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach_dev", function() { return detach_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dirty_components", function() { return dirty_components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch_dev", function() { return dispatch_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "each", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "element", function() { return element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "element_is", function() { return element_is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return escape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escaped", function() { return escaped; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exclude_internal_props", function() { return exclude_internal_props; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fix_and_destroy_block", function() { return fix_and_destroy_block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fix_and_outro_and_destroy_block", function() { return fix_and_outro_and_destroy_block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fix_position", function() { return fix_position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return flush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return getContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_binding_group_value", function() { return get_binding_group_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_current_component", function() { return get_current_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_slot_changes", function() { return get_slot_changes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_slot_context", function() { return get_slot_context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_spread_object", function() { return get_spread_object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_spread_update", function() { return get_spread_update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_store_value", function() { return get_store_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globals", function() { return globals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "group_outros", function() { return group_outros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handle_promise", function() { return handle_promise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insert", function() { return insert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insert_dev", function() { return insert_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intros", function() { return intros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalid_attribute_name_character", function() { return invalid_attribute_name_character; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_client", function() { return is_client; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_function", function() { return is_function; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_promise", function() { return is_promise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listen", function() { return listen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listen_dev", function() { return listen_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loop", function() { return loop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "measure", function() { return measure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "missing_component", function() { return missing_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mount_component", function() { return mount_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "not_equal", function() { return not_equal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "null_to_empty", function() { return null_to_empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "object_without_properties", function() { return object_without_properties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onDestroy", function() { return onDestroy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onMount", function() { return onMount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "once", function() { return once; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outro_and_destroy_block", function() { return outro_and_destroy_block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prevent_default", function() { return prevent_default; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prop_dev", function() { return prop_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raf", function() { return raf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run", function() { return run; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run_all", function() { return run_all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safe_not_equal", function() { return safe_not_equal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schedule_update", function() { return schedule_update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select_multiple_value", function() { return select_multiple_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select_option", function() { return select_option; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select_options", function() { return select_options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select_value", function() { return select_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "self", function() { return self; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return setContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_attributes", function() { return set_attributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_current_component", function() { return set_current_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_custom_element_data", function() { return set_custom_element_data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_data", function() { return set_data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_data_dev", function() { return set_data_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_input_type", function() { return set_input_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_input_value", function() { return set_input_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_now", function() { return set_now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_raf", function() { return set_raf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_store_value", function() { return set_store_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_style", function() { return set_style; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_svg_attributes", function() { return set_svg_attributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "space", function() { return space; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spread", function() { return spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stop_propagation", function() { return stop_propagation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribe", function() { return subscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg_element", function() { return svg_element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tick", function() { return tick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "time_ranges_to_array", function() { return time_ranges_to_array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "to_number", function() { return to_number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggle_class", function() { return toggle_class; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition_in", function() { return transition_in; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition_out", function() { return transition_out; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update_keyed_each", function() { return update_keyed_each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate_component", function() { return validate_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate_store", function() { return validate_store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xlink_attr", function() { return xlink_attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlTag", function() { return HtmlTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvelteComponent", function() { return SvelteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvelteComponentDev", function() { return SvelteComponentDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvelteElement", function() { return SvelteElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_attribute", function() { return add_attribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_classes", function() { return add_classes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_flush_callback", function() { return add_flush_callback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_location", function() { return add_location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_render_callback", function() { return add_render_callback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_resize_listener", function() { return add_resize_listener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_transform", function() { return add_transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterUpdate", function() { return afterUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append_dev", function() { return append_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr_dev", function() { return attr_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeUpdate", function() { return beforeUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "binding_callbacks", function() { return binding_callbacks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blank_object", function() { return blank_object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bubble", function() { return bubble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "check_outros", function() { return check_outros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "children", function() { return children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claim_element", function() { return claim_element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claim_space", function() { return claim_space; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claim_text", function() { return claim_text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear_loops", function() { return clear_loops; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "component_subscribe", function() { return component_subscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEventDispatcher", function() { return createEventDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_animation", function() { return create_animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_bidirectional_transition", function() { return create_bidirectional_transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_in_transition", function() { return create_in_transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_out_transition", function() { return create_out_transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_slot", function() { return create_slot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_ssr_component", function() { return create_ssr_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "current_component", function() { return current_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "custom_event", function() { return custom_event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataset_dev", function() { return dataset_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return debug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy_block", function() { return destroy_block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy_component", function() { return destroy_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy_each", function() { return destroy_each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach", function() { return detach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach_after_dev", function() { return detach_after_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach_before_dev", function() { return detach_before_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach_between_dev", function() { return detach_between_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach_dev", function() { return detach_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dirty_components", function() { return dirty_components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch_dev", function() { return dispatch_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "each", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "element", function() { return element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "element_is", function() { return element_is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return escape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escaped", function() { return escaped; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exclude_internal_props", function() { return exclude_internal_props; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fix_and_destroy_block", function() { return fix_and_destroy_block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fix_and_outro_and_destroy_block", function() { return fix_and_outro_and_destroy_block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fix_position", function() { return fix_position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return flush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return getContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_binding_group_value", function() { return get_binding_group_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_current_component", function() { return get_current_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_slot_changes", function() { return get_slot_changes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_slot_context", function() { return get_slot_context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_spread_object", function() { return get_spread_object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_spread_update", function() { return get_spread_update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_store_value", function() { return get_store_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globals", function() { return globals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "group_outros", function() { return group_outros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handle_promise", function() { return handle_promise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insert", function() { return insert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insert_dev", function() { return insert_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intros", function() { return intros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalid_attribute_name_character", function() { return invalid_attribute_name_character; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_client", function() { return is_client; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_function", function() { return is_function; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_promise", function() { return is_promise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listen", function() { return listen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listen_dev", function() { return listen_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loop", function() { return loop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "measure", function() { return measure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "missing_component", function() { return missing_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mount_component", function() { return mount_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "not_equal", function() { return not_equal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "null_to_empty", function() { return null_to_empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "object_without_properties", function() { return object_without_properties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onDestroy", function() { return onDestroy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onMount", function() { return onMount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "once", function() { return once; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outro_and_destroy_block", function() { return outro_and_destroy_block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prevent_default", function() { return prevent_default; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prop_dev", function() { return prop_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raf", function() { return raf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run", function() { return run; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run_all", function() { return run_all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safe_not_equal", function() { return safe_not_equal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schedule_update", function() { return schedule_update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select_multiple_value", function() { return select_multiple_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select_option", function() { return select_option; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select_options", function() { return select_options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select_value", function() { return select_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "self", function() { return self; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return setContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_attributes", function() { return set_attributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_current_component", function() { return set_current_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_custom_element_data", function() { return set_custom_element_data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_data", function() { return set_data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_data_dev", function() { return set_data_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_input_type", function() { return set_input_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_input_value", function() { return set_input_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_now", function() { return set_now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_raf", function() { return set_raf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_store_value", function() { return set_store_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_style", function() { return set_style; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_svg_attributes", function() { return set_svg_attributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "space", function() { return space; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spread", function() { return spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stop_propagation", function() { return stop_propagation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribe", function() { return subscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg_element", function() { return svg_element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tick", function() { return tick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "time_ranges_to_array", function() { return time_ranges_to_array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "to_number", function() { return to_number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggle_class", function() { return toggle_class; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition_in", function() { return transition_in; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition_out", function() { return transition_out; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update_keyed_each", function() { return update_keyed_each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate_component", function() { return validate_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate_store", function() { return validate_store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xlink_attr", function() { return xlink_attr; });
function noop() { }
const identity = x => x;
function assign(tar, src) {
    // @ts-ignore
    for (const k in src)
        tar[k] = src[k];
    return tar;
}
function is_promise(value) {
    return value && typeof value === 'object' && typeof value.then === 'function';
}
function add_location(element, file, line, column, char) {
    element.__svelte_meta = {
        loc: { file, line, column, char }
    };
}
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function is_function(thing) {
    return typeof thing === 'function';
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}
function not_equal(a, b) {
    return a != a ? b == b : a !== b;
}
function validate_store(store, name) {
    if (!store || typeof store.subscribe !== 'function') {
        throw new Error(`'${name}' is not a store with a 'subscribe' method`);
    }
}
function subscribe(store, callback) {
    const unsub = store.subscribe(callback);
    return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function get_store_value(store) {
    let value;
    subscribe(store, _ => value = _)();
    return value;
}
function component_subscribe(component, store, callback) {
    component.$$.on_destroy.push(subscribe(store, callback));
}
function create_slot(definition, ctx, fn) {
    if (definition) {
        const slot_ctx = get_slot_context(definition, ctx, fn);
        return definition[0](slot_ctx);
    }
}
function get_slot_context(definition, ctx, fn) {
    return definition[1]
        ? assign({}, assign(ctx.$$scope.ctx, definition[1](fn ? fn(ctx) : {})))
        : ctx.$$scope.ctx;
}
function get_slot_changes(definition, ctx, changed, fn) {
    return definition[1]
        ? assign({}, assign(ctx.$$scope.changed || {}, definition[1](fn ? fn(changed) : {})))
        : ctx.$$scope.changed || {};
}
function exclude_internal_props(props) {
    const result = {};
    for (const k in props)
        if (k[0] !== '$')
            result[k] = props[k];
    return result;
}
function once(fn) {
    let ran = false;
    return function (...args) {
        if (ran)
            return;
        ran = true;
        fn.call(this, ...args);
    };
}
function null_to_empty(value) {
    return value == null ? '' : value;
}
function set_store_value(store, ret, value = ret) {
    store.set(value);
    return ret;
}

const is_client = typeof window !== 'undefined';
let now = is_client
    ? () => window.performance.now()
    : () => Date.now();
let raf = is_client ? cb => requestAnimationFrame(cb) : noop;
// used internally for testing
function set_now(fn) {
    now = fn;
}
function set_raf(fn) {
    raf = fn;
}

const tasks = new Set();
let running = false;
function run_tasks() {
    tasks.forEach(task => {
        if (!task[0](now())) {
            tasks.delete(task);
            task[1]();
        }
    });
    running = tasks.size > 0;
    if (running)
        raf(run_tasks);
}
function clear_loops() {
    // for testing...
    tasks.forEach(task => tasks.delete(task));
    running = false;
}
function loop(fn) {
    let task;
    if (!running) {
        running = true;
        raf(run_tasks);
    }
    return {
        promise: new Promise(fulfil => {
            tasks.add(task = [fn, fulfil]);
        }),
        abort() {
            tasks.delete(task);
        }
    };
}

function append(target, node) {
    target.appendChild(node);
}
function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
}
function detach(node) {
    node.parentNode.removeChild(node);
}
function destroy_each(iterations, detaching) {
    for (let i = 0; i < iterations.length; i += 1) {
        if (iterations[i])
            iterations[i].d(detaching);
    }
}
function element(name) {
    return document.createElement(name);
}
function element_is(name, is) {
    return document.createElement(name, { is });
}
function object_without_properties(obj, exclude) {
    // eslint-disable-next-line @typescript-eslint/no-object-literal-type-assertion
    const target = {};
    for (const k in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, k)
            // @ts-ignore
            && exclude.indexOf(k) === -1) {
            // @ts-ignore
            target[k] = obj[k];
        }
    }
    return target;
}
function svg_element(name) {
    return document.createElementNS('http://www.w3.org/2000/svg', name);
}
function text(data) {
    return document.createTextNode(data);
}
function space() {
    return text(' ');
}
function empty() {
    return text('');
}
function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return () => node.removeEventListener(event, handler, options);
}
function prevent_default(fn) {
    return function (event) {
        event.preventDefault();
        // @ts-ignore
        return fn.call(this, event);
    };
}
function stop_propagation(fn) {
    return function (event) {
        event.stopPropagation();
        // @ts-ignore
        return fn.call(this, event);
    };
}
function self(fn) {
    return function (event) {
        // @ts-ignore
        if (event.target === this)
            fn.call(this, event);
    };
}
function attr(node, attribute, value) {
    if (value == null)
        node.removeAttribute(attribute);
    else
        node.setAttribute(attribute, value);
}
function set_attributes(node, attributes) {
    for (const key in attributes) {
        if (key === 'style') {
            node.style.cssText = attributes[key];
        }
        else if (key in node) {
            node[key] = attributes[key];
        }
        else {
            attr(node, key, attributes[key]);
        }
    }
}
function set_svg_attributes(node, attributes) {
    for (const key in attributes) {
        attr(node, key, attributes[key]);
    }
}
function set_custom_element_data(node, prop, value) {
    if (prop in node) {
        node[prop] = value;
    }
    else {
        attr(node, prop, value);
    }
}
function xlink_attr(node, attribute, value) {
    node.setAttributeNS('http://www.w3.org/1999/xlink', attribute, value);
}
function get_binding_group_value(group) {
    const value = [];
    for (let i = 0; i < group.length; i += 1) {
        if (group[i].checked)
            value.push(group[i].__value);
    }
    return value;
}
function to_number(value) {
    return value === '' ? undefined : +value;
}
function time_ranges_to_array(ranges) {
    const array = [];
    for (let i = 0; i < ranges.length; i += 1) {
        array.push({ start: ranges.start(i), end: ranges.end(i) });
    }
    return array;
}
function children(element) {
    return Array.from(element.childNodes);
}
function claim_element(nodes, name, attributes, svg) {
    for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];
        if (node.nodeName === name) {
            for (let j = 0; j < node.attributes.length; j += 1) {
                const attribute = node.attributes[j];
                if (!attributes[attribute.name])
                    node.removeAttribute(attribute.name);
            }
            return nodes.splice(i, 1)[0]; // TODO strip unwanted attributes
        }
    }
    return svg ? svg_element(name) : element(name);
}
function claim_text(nodes, data) {
    for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];
        if (node.nodeType === 3) {
            node.data = '' + data;
            return nodes.splice(i, 1)[0];
        }
    }
    return text(data);
}
function claim_space(nodes) {
    return claim_text(nodes, ' ');
}
function set_data(text, data) {
    data = '' + data;
    if (text.data !== data)
        text.data = data;
}
function set_input_value(input, value) {
    if (value != null || input.value) {
        input.value = value;
    }
}
function set_input_type(input, type) {
    try {
        input.type = type;
    }
    catch (e) {
        // do nothing
    }
}
function set_style(node, key, value, important) {
    node.style.setProperty(key, value, important ? 'important' : '');
}
function select_option(select, value) {
    for (let i = 0; i < select.options.length; i += 1) {
        const option = select.options[i];
        if (option.__value === value) {
            option.selected = true;
            return;
        }
    }
}
function select_options(select, value) {
    for (let i = 0; i < select.options.length; i += 1) {
        const option = select.options[i];
        option.selected = ~value.indexOf(option.__value);
    }
}
function select_value(select) {
    const selected_option = select.querySelector(':checked') || select.options[0];
    return selected_option && selected_option.__value;
}
function select_multiple_value(select) {
    return [].map.call(select.querySelectorAll(':checked'), option => option.__value);
}
function add_resize_listener(element, fn) {
    if (getComputedStyle(element).position === 'static') {
        element.style.position = 'relative';
    }
    const object = document.createElement('object');
    object.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;');
    object.type = 'text/html';
    object.tabIndex = -1;
    let win;
    object.onload = () => {
        win = object.contentDocument.defaultView;
        win.addEventListener('resize', fn);
    };
    if (/Trident/.test(navigator.userAgent)) {
        element.appendChild(object);
        object.data = 'about:blank';
    }
    else {
        object.data = 'about:blank';
        element.appendChild(object);
    }
    return {
        cancel: () => {
            win && win.removeEventListener && win.removeEventListener('resize', fn);
            element.removeChild(object);
        }
    };
}
function toggle_class(element, name, toggle) {
    element.classList[toggle ? 'add' : 'remove'](name);
}
function custom_event(type, detail) {
    const e = document.createEvent('CustomEvent');
    e.initCustomEvent(type, false, false, detail);
    return e;
}
class HtmlTag {
    constructor(html, anchor = null) {
        this.e = element('div');
        this.a = anchor;
        this.u(html);
    }
    m(target, anchor = null) {
        for (let i = 0; i < this.n.length; i += 1) {
            insert(target, this.n[i], anchor);
        }
        this.t = target;
    }
    u(html) {
        this.e.innerHTML = html;
        this.n = Array.from(this.e.childNodes);
    }
    p(html) {
        this.d();
        this.u(html);
        this.m(this.t, this.a);
    }
    d() {
        this.n.forEach(detach);
    }
}

let stylesheet;
let active = 0;
let current_rules = {};
// https://github.com/darkskyapp/string-hash/blob/master/index.js
function hash(str) {
    let hash = 5381;
    let i = str.length;
    while (i--)
        hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
    return hash >>> 0;
}
function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
    const step = 16.666 / duration;
    let keyframes = '{\n';
    for (let p = 0; p <= 1; p += step) {
        const t = a + (b - a) * ease(p);
        keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
    }
    const rule = keyframes + `100% {${fn(b, 1 - b)}}\n}`;
    const name = `__svelte_${hash(rule)}_${uid}`;
    if (!current_rules[name]) {
        if (!stylesheet) {
            const style = element('style');
            document.head.appendChild(style);
            stylesheet = style.sheet;
        }
        current_rules[name] = true;
        stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
    }
    const animation = node.style.animation || '';
    node.style.animation = `${animation ? `${animation}, ` : ``}${name} ${duration}ms linear ${delay}ms 1 both`;
    active += 1;
    return name;
}
function delete_rule(node, name) {
    node.style.animation = (node.style.animation || '')
        .split(', ')
        .filter(name
        ? anim => anim.indexOf(name) < 0 // remove specific animation
        : anim => anim.indexOf('__svelte') === -1 // remove all Svelte animations
    )
        .join(', ');
    if (name && !--active)
        clear_rules();
}
function clear_rules() {
    raf(() => {
        if (active)
            return;
        let i = stylesheet.cssRules.length;
        while (i--)
            stylesheet.deleteRule(i);
        current_rules = {};
    });
}

function create_animation(node, from, fn, params) {
    if (!from)
        return noop;
    const to = node.getBoundingClientRect();
    if (from.left === to.left && from.right === to.right && from.top === to.top && from.bottom === to.bottom)
        return noop;
    const { delay = 0, duration = 300, easing = identity, 
    // @ts-ignore todo: should this be separated from destructuring? Or start/end added to public api and documentation?
    start: start_time = now() + delay, 
    // @ts-ignore todo:
    end = start_time + duration, tick = noop, css } = fn(node, { from, to }, params);
    let running = true;
    let started = false;
    let name;
    function start() {
        if (css) {
            name = create_rule(node, 0, 1, duration, delay, easing, css);
        }
        if (!delay) {
            started = true;
        }
    }
    function stop() {
        if (css)
            delete_rule(node, name);
        running = false;
    }
    loop(now => {
        if (!started && now >= start_time) {
            started = true;
        }
        if (started && now >= end) {
            tick(1, 0);
            stop();
        }
        if (!running) {
            return false;
        }
        if (started) {
            const p = now - start_time;
            const t = 0 + 1 * easing(p / duration);
            tick(t, 1 - t);
        }
        return true;
    });
    start();
    tick(0, 1);
    return stop;
}
function fix_position(node) {
    const style = getComputedStyle(node);
    if (style.position !== 'absolute' && style.position !== 'fixed') {
        const { width, height } = style;
        const a = node.getBoundingClientRect();
        node.style.position = 'absolute';
        node.style.width = width;
        node.style.height = height;
        add_transform(node, a);
    }
}
function add_transform(node, a) {
    const b = node.getBoundingClientRect();
    if (a.left !== b.left || a.top !== b.top) {
        const style = getComputedStyle(node);
        const transform = style.transform === 'none' ? '' : style.transform;
        node.style.transform = `${transform} translate(${a.left - b.left}px, ${a.top - b.top}px)`;
    }
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
function get_current_component() {
    if (!current_component)
        throw new Error(`Function called outside component initialization`);
    return current_component;
}
function beforeUpdate(fn) {
    get_current_component().$$.before_update.push(fn);
}
function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
}
function afterUpdate(fn) {
    get_current_component().$$.after_update.push(fn);
}
function onDestroy(fn) {
    get_current_component().$$.on_destroy.push(fn);
}
function createEventDispatcher() {
    const component = current_component;
    return (type, detail) => {
        const callbacks = component.$$.callbacks[type];
        if (callbacks) {
            // TODO are there situations where events could be dispatched
            // in a server (non-DOM) environment?
            const event = custom_event(type, detail);
            callbacks.slice().forEach(fn => {
                fn.call(component, event);
            });
        }
    };
}
function setContext(key, context) {
    get_current_component().$$.context.set(key, context);
}
function getContext(key) {
    return get_current_component().$$.context.get(key);
}
// TODO figure out if we still want to support
// shorthand events, or if we want to implement
// a real bubbling mechanism
function bubble(component, event) {
    const callbacks = component.$$.callbacks[event.type];
    if (callbacks) {
        callbacks.slice().forEach(fn => fn(event));
    }
}

const dirty_components = [];
const intros = { enabled: false };
const binding_callbacks = [];
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;
function schedule_update() {
    if (!update_scheduled) {
        update_scheduled = true;
        resolved_promise.then(flush);
    }
}
function tick() {
    schedule_update();
    return resolved_promise;
}
function add_render_callback(fn) {
    render_callbacks.push(fn);
}
function add_flush_callback(fn) {
    flush_callbacks.push(fn);
}
function flush() {
    const seen_callbacks = new Set();
    do {
        // first, call beforeUpdate functions
        // and update components
        while (dirty_components.length) {
            const component = dirty_components.shift();
            set_current_component(component);
            update(component.$$);
        }
        while (binding_callbacks.length)
            binding_callbacks.pop()();
        // then, once components are updated, call
        // afterUpdate functions. This may cause
        // subsequent updates...
        for (let i = 0; i < render_callbacks.length; i += 1) {
            const callback = render_callbacks[i];
            if (!seen_callbacks.has(callback)) {
                callback();
                // ...so guard against infinite loops
                seen_callbacks.add(callback);
            }
        }
        render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
        flush_callbacks.pop()();
    }
    update_scheduled = false;
}
function update($$) {
    if ($$.fragment) {
        $$.update($$.dirty);
        run_all($$.before_update);
        $$.fragment.p($$.dirty, $$.ctx);
        $$.dirty = null;
        $$.after_update.forEach(add_render_callback);
    }
}

let promise;
function wait() {
    if (!promise) {
        promise = Promise.resolve();
        promise.then(() => {
            promise = null;
        });
    }
    return promise;
}
function dispatch(node, direction, kind) {
    node.dispatchEvent(custom_event(`${direction ? 'intro' : 'outro'}${kind}`));
}
const outroing = new Set();
let outros;
function group_outros() {
    outros = {
        r: 0,
        c: [],
        p: outros // parent group
    };
}
function check_outros() {
    if (!outros.r) {
        run_all(outros.c);
    }
    outros = outros.p;
}
function transition_in(block, local) {
    if (block && block.i) {
        outroing.delete(block);
        block.i(local);
    }
}
function transition_out(block, local, detach, callback) {
    if (block && block.o) {
        if (outroing.has(block))
            return;
        outroing.add(block);
        outros.c.push(() => {
            outroing.delete(block);
            if (callback) {
                if (detach)
                    block.d(1);
                callback();
            }
        });
        block.o(local);
    }
}
const null_transition = { duration: 0 };
function create_in_transition(node, fn, params) {
    let config = fn(node, params);
    let running = false;
    let animation_name;
    let task;
    let uid = 0;
    function cleanup() {
        if (animation_name)
            delete_rule(node, animation_name);
    }
    function go() {
        const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
        if (css)
            animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
        tick(0, 1);
        const start_time = now() + delay;
        const end_time = start_time + duration;
        if (task)
            task.abort();
        running = true;
        add_render_callback(() => dispatch(node, true, 'start'));
        task = loop(now => {
            if (running) {
                if (now >= end_time) {
                    tick(1, 0);
                    dispatch(node, true, 'end');
                    cleanup();
                    return running = false;
                }
                if (now >= start_time) {
                    const t = easing((now - start_time) / duration);
                    tick(t, 1 - t);
                }
            }
            return running;
        });
    }
    let started = false;
    return {
        start() {
            if (started)
                return;
            delete_rule(node);
            if (is_function(config)) {
                config = config();
                wait().then(go);
            }
            else {
                go();
            }
        },
        invalidate() {
            started = false;
        },
        end() {
            if (running) {
                cleanup();
                running = false;
            }
        }
    };
}
function create_out_transition(node, fn, params) {
    let config = fn(node, params);
    let running = true;
    let animation_name;
    const group = outros;
    group.r += 1;
    function go() {
        const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
        if (css)
            animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
        const start_time = now() + delay;
        const end_time = start_time + duration;
        add_render_callback(() => dispatch(node, false, 'start'));
        loop(now => {
            if (running) {
                if (now >= end_time) {
                    tick(0, 1);
                    dispatch(node, false, 'end');
                    if (!--group.r) {
                        // this will result in `end()` being called,
                        // so we don't need to clean up here
                        run_all(group.c);
                    }
                    return false;
                }
                if (now >= start_time) {
                    const t = easing((now - start_time) / duration);
                    tick(1 - t, t);
                }
            }
            return running;
        });
    }
    if (is_function(config)) {
        wait().then(() => {
            // @ts-ignore
            config = config();
            go();
        });
    }
    else {
        go();
    }
    return {
        end(reset) {
            if (reset && config.tick) {
                config.tick(1, 0);
            }
            if (running) {
                if (animation_name)
                    delete_rule(node, animation_name);
                running = false;
            }
        }
    };
}
function create_bidirectional_transition(node, fn, params, intro) {
    let config = fn(node, params);
    let t = intro ? 0 : 1;
    let running_program = null;
    let pending_program = null;
    let animation_name = null;
    function clear_animation() {
        if (animation_name)
            delete_rule(node, animation_name);
    }
    function init(program, duration) {
        const d = program.b - t;
        duration *= Math.abs(d);
        return {
            a: t,
            b: program.b,
            d,
            duration,
            start: program.start,
            end: program.start + duration,
            group: program.group
        };
    }
    function go(b) {
        const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
        const program = {
            start: now() + delay,
            b
        };
        if (!b) {
            // @ts-ignore todo: improve typings
            program.group = outros;
            outros.r += 1;
        }
        if (running_program) {
            pending_program = program;
        }
        else {
            // if this is an intro, and there's a delay, we need to do
            // an initial tick and/or apply CSS animation immediately
            if (css) {
                clear_animation();
                animation_name = create_rule(node, t, b, duration, delay, easing, css);
            }
            if (b)
                tick(0, 1);
            running_program = init(program, duration);
            add_render_callback(() => dispatch(node, b, 'start'));
            loop(now => {
                if (pending_program && now > pending_program.start) {
                    running_program = init(pending_program, duration);
                    pending_program = null;
                    dispatch(node, running_program.b, 'start');
                    if (css) {
                        clear_animation();
                        animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
                    }
                }
                if (running_program) {
                    if (now >= running_program.end) {
                        tick(t = running_program.b, 1 - t);
                        dispatch(node, running_program.b, 'end');
                        if (!pending_program) {
                            // we're done
                            if (running_program.b) {
                                // intro — we can tidy up immediately
                                clear_animation();
                            }
                            else {
                                // outro — needs to be coordinated
                                if (!--running_program.group.r)
                                    run_all(running_program.group.c);
                            }
                        }
                        running_program = null;
                    }
                    else if (now >= running_program.start) {
                        const p = now - running_program.start;
                        t = running_program.a + running_program.d * easing(p / running_program.duration);
                        tick(t, 1 - t);
                    }
                }
                return !!(running_program || pending_program);
            });
        }
    }
    return {
        run(b) {
            if (is_function(config)) {
                wait().then(() => {
                    // @ts-ignore
                    config = config();
                    go(b);
                });
            }
            else {
                go(b);
            }
        },
        end() {
            clear_animation();
            running_program = pending_program = null;
        }
    };
}

function handle_promise(promise, info) {
    const token = info.token = {};
    function update(type, index, key, value) {
        if (info.token !== token)
            return;
        info.resolved = key && { [key]: value };
        const child_ctx = assign(assign({}, info.ctx), info.resolved);
        const block = type && (info.current = type)(child_ctx);
        if (info.block) {
            if (info.blocks) {
                info.blocks.forEach((block, i) => {
                    if (i !== index && block) {
                        group_outros();
                        transition_out(block, 1, 1, () => {
                            info.blocks[i] = null;
                        });
                        check_outros();
                    }
                });
            }
            else {
                info.block.d(1);
            }
            block.c();
            transition_in(block, 1);
            block.m(info.mount(), info.anchor);
            flush();
        }
        info.block = block;
        if (info.blocks)
            info.blocks[index] = block;
    }
    if (is_promise(promise)) {
        const current_component = get_current_component();
        promise.then(value => {
            set_current_component(current_component);
            update(info.then, 1, info.value, value);
            set_current_component(null);
        }, error => {
            set_current_component(current_component);
            update(info.catch, 2, info.error, error);
            set_current_component(null);
        });
        // if we previously had a then/catch block, destroy it
        if (info.current !== info.pending) {
            update(info.pending, 0);
            return true;
        }
    }
    else {
        if (info.current !== info.then) {
            update(info.then, 1, info.value, promise);
            return true;
        }
        info.resolved = { [info.value]: promise };
    }
}

const globals = (typeof window !== 'undefined' ? window : global);

function destroy_block(block, lookup) {
    block.d(1);
    lookup.delete(block.key);
}
function outro_and_destroy_block(block, lookup) {
    transition_out(block, 1, 1, () => {
        lookup.delete(block.key);
    });
}
function fix_and_destroy_block(block, lookup) {
    block.f();
    destroy_block(block, lookup);
}
function fix_and_outro_and_destroy_block(block, lookup) {
    block.f();
    outro_and_destroy_block(block, lookup);
}
function update_keyed_each(old_blocks, changed, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
    let o = old_blocks.length;
    let n = list.length;
    let i = o;
    const old_indexes = {};
    while (i--)
        old_indexes[old_blocks[i].key] = i;
    const new_blocks = [];
    const new_lookup = new Map();
    const deltas = new Map();
    i = n;
    while (i--) {
        const child_ctx = get_context(ctx, list, i);
        const key = get_key(child_ctx);
        let block = lookup.get(key);
        if (!block) {
            block = create_each_block(key, child_ctx);
            block.c();
        }
        else if (dynamic) {
            block.p(changed, child_ctx);
        }
        new_lookup.set(key, new_blocks[i] = block);
        if (key in old_indexes)
            deltas.set(key, Math.abs(i - old_indexes[key]));
    }
    const will_move = new Set();
    const did_move = new Set();
    function insert(block) {
        transition_in(block, 1);
        block.m(node, next);
        lookup.set(block.key, block);
        next = block.first;
        n--;
    }
    while (o && n) {
        const new_block = new_blocks[n - 1];
        const old_block = old_blocks[o - 1];
        const new_key = new_block.key;
        const old_key = old_block.key;
        if (new_block === old_block) {
            // do nothing
            next = new_block.first;
            o--;
            n--;
        }
        else if (!new_lookup.has(old_key)) {
            // remove old block
            destroy(old_block, lookup);
            o--;
        }
        else if (!lookup.has(new_key) || will_move.has(new_key)) {
            insert(new_block);
        }
        else if (did_move.has(old_key)) {
            o--;
        }
        else if (deltas.get(new_key) > deltas.get(old_key)) {
            did_move.add(new_key);
            insert(new_block);
        }
        else {
            will_move.add(old_key);
            o--;
        }
    }
    while (o--) {
        const old_block = old_blocks[o];
        if (!new_lookup.has(old_block.key))
            destroy(old_block, lookup);
    }
    while (n)
        insert(new_blocks[n - 1]);
    return new_blocks;
}
function measure(blocks) {
    const rects = {};
    let i = blocks.length;
    while (i--)
        rects[blocks[i].key] = blocks[i].node.getBoundingClientRect();
    return rects;
}

function get_spread_update(levels, updates) {
    const update = {};
    const to_null_out = {};
    const accounted_for = { $$scope: 1 };
    let i = levels.length;
    while (i--) {
        const o = levels[i];
        const n = updates[i];
        if (n) {
            for (const key in o) {
                if (!(key in n))
                    to_null_out[key] = 1;
            }
            for (const key in n) {
                if (!accounted_for[key]) {
                    update[key] = n[key];
                    accounted_for[key] = 1;
                }
            }
            levels[i] = n;
        }
        else {
            for (const key in o) {
                accounted_for[key] = 1;
            }
        }
    }
    for (const key in to_null_out) {
        if (!(key in update))
            update[key] = undefined;
    }
    return update;
}
function get_spread_object(spread_props) {
    return typeof spread_props === 'object' && spread_props !== null ? spread_props : {};
}

const invalid_attribute_name_character = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
// https://infra.spec.whatwg.org/#noncharacter
function spread(args) {
    const attributes = Object.assign({}, ...args);
    let str = '';
    Object.keys(attributes).forEach(name => {
        if (invalid_attribute_name_character.test(name))
            return;
        const value = attributes[name];
        if (value === undefined)
            return;
        if (value === true)
            str += " " + name;
        const escaped = String(value)
            .replace(/"/g, '&#34;')
            .replace(/'/g, '&#39;');
        str += " " + name + "=" + JSON.stringify(escaped);
    });
    return str;
}
const escaped = {
    '"': '&quot;',
    "'": '&#39;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
};
function escape(html) {
    return String(html).replace(/["'&<>]/g, match => escaped[match]);
}
function each(items, fn) {
    let str = '';
    for (let i = 0; i < items.length; i += 1) {
        str += fn(items[i], i);
    }
    return str;
}
const missing_component = {
    $$render: () => ''
};
function validate_component(component, name) {
    if (!component || !component.$$render) {
        if (name === 'svelte:component')
            name += ' this={...}';
        throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
    }
    return component;
}
function debug(file, line, column, values) {
    console.log(`{@debug} ${file ? file + ' ' : ''}(${line}:${column})`); // eslint-disable-line no-console
    console.log(values); // eslint-disable-line no-console
    return '';
}
let on_destroy;
function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots) {
        const parent_component = current_component;
        const $$ = {
            on_destroy,
            context: new Map(parent_component ? parent_component.$$.context : []),
            // these will be immediately discarded
            on_mount: [],
            before_update: [],
            after_update: [],
            callbacks: blank_object()
        };
        set_current_component({ $$ });
        const html = fn(result, props, bindings, slots);
        set_current_component(parent_component);
        return html;
    }
    return {
        render: (props = {}, options = {}) => {
            on_destroy = [];
            const result = { head: '', css: new Set() };
            const html = $$render(result, props, {}, options);
            run_all(on_destroy);
            return {
                html,
                css: {
                    code: Array.from(result.css).map(css => css.code).join('\n'),
                    map: null // TODO
                },
                head: result.head
            };
        },
        $$render
    };
}
function add_attribute(name, value, boolean) {
    if (value == null || (boolean && !value))
        return '';
    return ` ${name}${value === true ? '' : `=${typeof value === 'string' ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
}
function add_classes(classes) {
    return classes ? ` class="${classes}"` : ``;
}

function bind(component, name, callback) {
    if (component.$$.props.indexOf(name) === -1)
        return;
    component.$$.bound[name] = callback;
    callback(component.$$.ctx[name]);
}
function mount_component(component, target, anchor) {
    const { fragment, on_mount, on_destroy, after_update } = component.$$;
    fragment.m(target, anchor);
    // onMount happens before the initial afterUpdate
    add_render_callback(() => {
        const new_on_destroy = on_mount.map(run).filter(is_function);
        if (on_destroy) {
            on_destroy.push(...new_on_destroy);
        }
        else {
            // Edge case - component was destroyed immediately,
            // most likely as a result of a binding initialising
            run_all(new_on_destroy);
        }
        component.$$.on_mount = [];
    });
    after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
    if (component.$$.fragment) {
        run_all(component.$$.on_destroy);
        component.$$.fragment.d(detaching);
        // TODO null out other refs, including component.$$ (but need to
        // preserve final state?)
        component.$$.on_destroy = component.$$.fragment = null;
        component.$$.ctx = {};
    }
}
function make_dirty(component, key) {
    if (!component.$$.dirty) {
        dirty_components.push(component);
        schedule_update();
        component.$$.dirty = blank_object();
    }
    component.$$.dirty[key] = true;
}
function init(component, options, instance, create_fragment, not_equal, prop_names) {
    const parent_component = current_component;
    set_current_component(component);
    const props = options.props || {};
    const $$ = component.$$ = {
        fragment: null,
        ctx: null,
        // state
        props: prop_names,
        update: noop,
        not_equal,
        bound: blank_object(),
        // lifecycle
        on_mount: [],
        on_destroy: [],
        before_update: [],
        after_update: [],
        context: new Map(parent_component ? parent_component.$$.context : []),
        // everything else
        callbacks: blank_object(),
        dirty: null
    };
    let ready = false;
    $$.ctx = instance
        ? instance(component, props, (key, ret, value = ret) => {
            if ($$.ctx && not_equal($$.ctx[key], $$.ctx[key] = value)) {
                if ($$.bound[key])
                    $$.bound[key](value);
                if (ready)
                    make_dirty(component, key);
            }
            return ret;
        })
        : props;
    $$.update();
    ready = true;
    run_all($$.before_update);
    $$.fragment = create_fragment($$.ctx);
    if (options.target) {
        if (options.hydrate) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment.l(children(options.target));
        }
        else {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment.c();
        }
        if (options.intro)
            transition_in(component.$$.fragment);
        mount_component(component, options.target, options.anchor);
        flush();
    }
    set_current_component(parent_component);
}
let SvelteElement;
if (typeof HTMLElement !== 'undefined') {
    SvelteElement = class extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
        }
        connectedCallback() {
            // @ts-ignore todo: improve typings
            for (const key in this.$$.slotted) {
                // @ts-ignore todo: improve typings
                this.appendChild(this.$$.slotted[key]);
            }
        }
        attributeChangedCallback(attr, _oldValue, newValue) {
            this[attr] = newValue;
        }
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            // TODO should this delegate to addEventListener?
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set() {
            // overridden by instance, if it has props
        }
    };
}
class SvelteComponent {
    $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
    }
    $on(type, callback) {
        const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
        callbacks.push(callback);
        return () => {
            const index = callbacks.indexOf(callback);
            if (index !== -1)
                callbacks.splice(index, 1);
        };
    }
    $set() {
        // overridden by instance, if it has props
    }
}

function dispatch_dev(type, detail) {
    document.dispatchEvent(custom_event(type, detail));
}
function append_dev(target, node) {
    dispatch_dev("SvelteDOMInsert", { target, node });
    append(target, node);
}
function insert_dev(target, node, anchor) {
    dispatch_dev("SvelteDOMInsert", { target, node, anchor });
    insert(target, node, anchor);
}
function detach_dev(node) {
    dispatch_dev("SvelteDOMRemove", { node });
    detach(node);
}
function detach_between_dev(before, after) {
    while (before.nextSibling && before.nextSibling !== after) {
        detach_dev(before.nextSibling);
    }
}
function detach_before_dev(after) {
    while (after.previousSibling) {
        detach_dev(after.previousSibling);
    }
}
function detach_after_dev(before) {
    while (before.nextSibling) {
        detach_dev(before.nextSibling);
    }
}
function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
    const modifiers = options === true ? ["capture"] : options ? Array.from(Object.keys(options)) : [];
    if (has_prevent_default)
        modifiers.push('preventDefault');
    if (has_stop_propagation)
        modifiers.push('stopPropagation');
    dispatch_dev("SvelteDOMAddEventListener", { node, event, handler, modifiers });
    const dispose = listen(node, event, handler, options);
    return () => {
        dispatch_dev("SvelteDOMRemoveEventListener", { node, event, handler, modifiers });
        dispose();
    };
}
function attr_dev(node, attribute, value) {
    attr(node, attribute, value);
    if (value == null)
        dispatch_dev("SvelteDOMRemoveAttribute", { node, attribute });
    else
        dispatch_dev("SvelteDOMSetAttribute", { node, attribute, value });
}
function prop_dev(node, property, value) {
    node[property] = value;
    dispatch_dev("SvelteDOMSetProperty", { node, property, value });
}
function dataset_dev(node, property, value) {
    node.dataset[property] = value;
    dispatch_dev("SvelteDOMSetDataset", { node, property, value });
}
function set_data_dev(text, data) {
    data = '' + data;
    if (text.data === data)
        return;
    dispatch_dev("SvelteDOMSetData", { node: text, data });
    text.data = data;
}
class SvelteComponentDev extends SvelteComponent {
    constructor(options) {
        if (!options || (!options.target && !options.$$inline)) {
            throw new Error(`'target' is a required option`);
        }
        super();
    }
    $destroy() {
        super.$destroy();
        this.$destroy = () => {
            console.warn(`Component was already destroyed`); // eslint-disable-line no-console
        };
    }
}



/* WEBPACK VAR INJECTION */}.call(this, require("./../../webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/svelte/store/index.mjs":
/*!*********************************************!*\
  !*** ./node_modules/svelte/store/index.mjs ***!
  \*********************************************/
/*! exports provided: get, derived, readable, writable */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "derived", function() { return derived; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readable", function() { return readable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writable", function() { return writable; });
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "get", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["get_store_value"]; });




const subscriber_queue = [];
/**
 * Creates a `Readable` store that allows reading by subscription.
 * @param value initial value
 * @param {StartStopNotifier}start start and stop notifications for subscriptions
 */
function readable(value, start) {
    return {
        subscribe: writable(value, start).subscribe,
    };
}
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */
function writable(value, start = _internal__WEBPACK_IMPORTED_MODULE_0__["noop"]) {
    let stop;
    const subscribers = [];
    function set(new_value) {
        if (Object(_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"])(value, new_value)) {
            value = new_value;
            if (stop) { // store is ready
                const run_queue = !subscriber_queue.length;
                for (let i = 0; i < subscribers.length; i += 1) {
                    const s = subscribers[i];
                    s[1]();
                    subscriber_queue.push(s, value);
                }
                if (run_queue) {
                    for (let i = 0; i < subscriber_queue.length; i += 2) {
                        subscriber_queue[i][0](subscriber_queue[i + 1]);
                    }
                    subscriber_queue.length = 0;
                }
            }
        }
    }
    function update(fn) {
        set(fn(value));
    }
    function subscribe(run, invalidate = _internal__WEBPACK_IMPORTED_MODULE_0__["noop"]) {
        const subscriber = [run, invalidate];
        subscribers.push(subscriber);
        if (subscribers.length === 1) {
            stop = start(set) || _internal__WEBPACK_IMPORTED_MODULE_0__["noop"];
        }
        run(value);
        return () => {
            const index = subscribers.indexOf(subscriber);
            if (index !== -1) {
                subscribers.splice(index, 1);
            }
            if (subscribers.length === 0) {
                stop();
                stop = null;
            }
        };
    }
    return { set, update, subscribe };
}
/**
 * Derived value store by synchronizing one or more readable stores and
 * applying an aggregation function over its input values.
 * @param {Stores} stores input stores
 * @param {function(Stores=, function(*)=):*}fn function callback that aggregates the values
 * @param {*=}initial_value when used asynchronously
 */
function derived(stores, fn, initial_value) {
    const single = !Array.isArray(stores);
    const stores_array = single
        ? [stores]
        : stores;
    const auto = fn.length < 2;
    return readable(initial_value, (set) => {
        let inited = false;
        const values = [];
        let pending = 0;
        let cleanup = _internal__WEBPACK_IMPORTED_MODULE_0__["noop"];
        const sync = () => {
            if (pending) {
                return;
            }
            cleanup();
            const result = fn(single ? values[0] : values, set);
            if (auto) {
                set(result);
            }
            else {
                cleanup = Object(_internal__WEBPACK_IMPORTED_MODULE_0__["is_function"])(result) ? result : _internal__WEBPACK_IMPORTED_MODULE_0__["noop"];
            }
        };
        const unsubscribers = stores_array.map((store, i) => store.subscribe((value) => {
            values[i] = value;
            pending &= ~(1 << i);
            if (inited) {
                sync();
            }
        }, () => {
            pending |= (1 << i);
        }));
        inited = true;
        sync();
        return function stop() {
            Object(_internal__WEBPACK_IMPORTED_MODULE_0__["run_all"])(unsubscribers);
            cleanup();
        };
    });
}




/***/ }),

/***/ "./src/client.js":
/*!***********************!*\
  !*** ./src/client.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sapper_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sapper/app */ "./src/node_modules/@sapper/app.mjs");


_sapper_app__WEBPACK_IMPORTED_MODULE_0__["start"]({
	target: document.querySelector('#sapper')
});

/***/ }),

/***/ "./src/components/Background.svelte":
/*!******************************************!*\
  !*** ./src/components/Background.svelte ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _Users_Luca_Desktop_Homepage_src_components_Background_svelte_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/components/Background.svelte.css */ "./src/components/Background.svelte.css");
/* harmony import */ var _Users_Luca_Desktop_Homepage_src_components_Background_svelte_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_Luca_Desktop_Homepage_src_components_Background_svelte_css__WEBPACK_IMPORTED_MODULE_1__);
/* src/components/Background.svelte generated by Svelte v3.12.1 */


const file = "src/components/Background.svelte";

function create_fragment(ctx) {
	var section, div;

	const block = {
		c: function create() {
			section = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("section");
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			this.h()
		},

		l: function claim(nodes) {
			section = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "SECTION", { id: true, class: true }, false);
			var section_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(section);

			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(section_nodes, "DIV", { class: true }, false);
			var div_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div);

			div_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			section_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div, "class", "smiley-circle svelte-nolhf");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 26, 2, 659);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(section, "id", "smiley");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(section, "class", "svelte-nolhf");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(section, file, 25, 0, 635);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, section, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(section, div);
		},

		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(section);
			}
		}
	};
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", { block, id: create_fragment.name, type: "component", source: "", ctx });
	return block;
}

class Background extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, null, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], []);
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", { component: this, tagName: "Background", options, id: create_fragment.name });
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Background);



/***/ }),

/***/ "./src/components/Background.svelte.css":
/*!**********************************************!*\
  !*** ./src/components/Background.svelte.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '#' (1:0)\nYou may need an appropriate loader to handle this file type.\n> #smiley.svelte-nolhf{z-index:-1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:fixed;top:0;left:0;right:0;bottom:0}#smiley.svelte-nolhf .smiley-circle.svelte-nolhf{width:250px;height:250px;border-radius:250px;background-color:rgba(255, 255, 0, 0.5);-webkit-filter:blur(60px);filter:blur(60px)}\n| /*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi9Vc2Vycy9MdWNhL0Rlc2t0b3AvSG9tZXBhZ2Uvc3JjL2NvbXBvbmVudHMvQmFja2dyb3VuZC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHN0eWxlIHR5cGU9XCJ0ZXh0L3Njc3NcIj4jc21pbGV5IHtcbiAgei1pbmRleDogLTE7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDsgfVxuICAjc21pbGV5IC5zbWlsZXktY2lyY2xlIHtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAwLCAwLjUpO1xuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDYwcHgpO1xuICAgICAgICAgICAgZmlsdGVyOiBibHVyKDYwcHgpOyB9XG4vKiMgc291cmNlTWFwcGluZ1VSTD1zcmMvY29tcG9uZW50cy9CYWNrZ3JvdW5kLnN2ZWx0ZS5tYXAgKi88L3N0eWxlPlxuXG48c2VjdGlvbiBpZD1cInNtaWxleVwiPlxuICA8ZGl2IGNsYXNzPVwic21pbGV5LWNpcmNsZVwiIC8+XG48L3NlY3Rpb24+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQXdCLE9BQU8sYUFBQyxDQUFDLEFBQy9CLE9BQU8sQ0FBRSxFQUFFLENBQ1gsT0FBTyxDQUFFLFdBQVcsQ0FDcEIsT0FBTyxDQUFFLFdBQVcsQ0FDcEIsT0FBTyxDQUFFLElBQUksQ0FDYixpQkFBaUIsQ0FBRSxNQUFNLENBQ3JCLGNBQWMsQ0FBRSxNQUFNLENBQ2xCLFdBQVcsQ0FBRSxNQUFNLENBQzNCLGdCQUFnQixDQUFFLE1BQU0sQ0FDcEIsYUFBYSxDQUFFLE1BQU0sQ0FDakIsZUFBZSxDQUFFLE1BQU0sQ0FDL0IsUUFBUSxDQUFFLEtBQUssQ0FDZixHQUFHLENBQUUsQ0FBQyxDQUNOLElBQUksQ0FBRSxDQUFDLENBQ1AsS0FBSyxDQUFFLENBQUMsQ0FDUixNQUFNLENBQUUsQ0FBQyxBQUFFLENBQUMsQUFDWixvQkFBTyxDQUFDLGNBQWMsYUFBQyxDQUFDLEFBQ3RCLEtBQUssQ0FBRSxLQUFLLENBQ1osTUFBTSxDQUFFLEtBQUssQ0FDYixhQUFhLENBQUUsS0FBSyxDQUNwQixnQkFBZ0IsQ0FBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUN4QyxjQUFjLENBQUUsS0FBSyxJQUFJLENBQUMsQ0FDbEIsTUFBTSxDQUFFLEtBQUssSUFBSSxDQUFDLEFBQUUsQ0FBQyJ9*/");

/***/ }),

/***/ "./src/components/Nav.svelte":
/*!***********************************!*\
  !*** ./src/components/Nav.svelte ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _Users_Luca_Desktop_Homepage_src_components_Nav_svelte_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/components/Nav.svelte.css */ "./src/components/Nav.svelte.css");
/* harmony import */ var _Users_Luca_Desktop_Homepage_src_components_Nav_svelte_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_Luca_Desktop_Homepage_src_components_Nav_svelte_css__WEBPACK_IMPORTED_MODULE_1__);
/* src/components/Nav.svelte generated by Svelte v3.12.1 */


const file = "src/components/Nav.svelte";

function create_fragment(ctx) {
	var header, h1, t0, br, t1, span0, t2, t3, span1, t4, t5, button, a, svg, path0, path1, t6, span2, t7, t8, hr;

	const block = {
		c: function create() {
			header = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("header");
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h1");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Luca Claessens —\n    ");
			br = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("br");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			span0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Developer");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("\n    &\n    ");
			span1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Digital designer");
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			button = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("button");
			a = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			svg = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["svg_element"])("svg");
			path0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["svg_element"])("path");
			path1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["svg_element"])("path");
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			span2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Contact me");
			t8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			hr = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("hr");
			this.h()
		},

		l: function claim(nodes) {
			header = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "HEADER", { class: true }, false);
			var header_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(header);

			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(header_nodes, "H1", { class: true }, false);
			var h1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h1);

			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h1_nodes, "Luca Claessens —\n    ");

			br = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(h1_nodes, "BR", {}, false);
			var br_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(br);

			br_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(h1_nodes);

			span0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(h1_nodes, "SPAN", { class: true }, false);
			var span0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(span0);

			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(span0_nodes, "Developer");
			span0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h1_nodes, "\n    &\n    ");

			span1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(h1_nodes, "SPAN", {}, false);
			var span1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(span1);

			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(span1_nodes, "Digital designer");
			span1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			h1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(header_nodes);

			button = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(header_nodes, "BUTTON", { id: true, class: true }, false);
			var button_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(button);

			a = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(button_nodes, "A", { href: true, class: true }, false);
			var a_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a);

			svg = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(a_nodes, "svg", { xmlns: true, width: true, height: true, viewBox: true, class: true }, true);
			var svg_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(svg);

			path0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(svg_nodes, "path", { d: true }, true);
			var path0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(path0);

			path0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);

			path1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(svg_nodes, "path", { d: true, fill: true }, true);
			var path1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(path1);

			path1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			svg_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(a_nodes);

			span2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(a_nodes, "SPAN", { class: true }, false);
			var span2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(span2);

			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(span2_nodes, "Contact me");
			span2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			a_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			button_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			header_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);

			hr = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "HR", { class: true }, false);
			var hr_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(hr);

			hr_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(br, file, 89, 4, 2528);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(span0, "class", "text-lighter");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span0, file, 90, 4, 2539);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span1, file, 92, 4, 2593);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(h1, "class", "svelte-110dmbk");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h1, file, 87, 2, 2492);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(path0, "d", "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9\n          2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(path0, file, 101, 8, 2837);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(path1, "d", "M0 0h24v24H0z");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(path1, "fill", "none");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(path1, file, 104, 8, 2988);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(svg, "xmlns", "http://www.w3.org/2000/svg");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(svg, "width", "24");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(svg, "height", "24");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(svg, "viewBox", "0 0 24 24");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(svg, "class", "svelte-110dmbk");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(svg, file, 96, 6, 2713);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(span2, "class", "svelte-110dmbk");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span2, file, 106, 6, 3046);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a, "href", "mailto:lucaclae@gmail.com");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a, "class", "svelte-110dmbk");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a, file, 95, 4, 2670);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(button, "id", "nav_contact-button");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(button, "class", "svelte-110dmbk");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(button, file, 94, 2, 2633);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(header, "class", "svelte-110dmbk");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(header, file, 86, 0, 2481);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(hr, "class", "top-line svelte-110dmbk");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(hr, file, 111, 0, 3102);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, header, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(header, h1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h1, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h1, br);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h1, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h1, span0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(span0, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h1, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h1, span1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(span1, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(header, t5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(header, button);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(button, a);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(a, svg);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(svg, path0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(svg, path1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(a, t6);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(a, span2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(span2, t7);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t8, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, hr, anchor);
		},

		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(header);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t8);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(hr);
			}
		}
	};
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", { block, id: create_fragment.name, type: "component", source: "", ctx });
	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { segment } = $$props;

	const writable_props = ['segment'];
	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<Nav> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ('segment' in $$props) $$invalidate('segment', segment = $$props.segment);
	};

	$$self.$capture_state = () => {
		return { segment };
	};

	$$self.$inject_state = $$props => {
		if ('segment' in $$props) $$invalidate('segment', segment = $$props.segment);
	};

	return { segment };
}

class Nav extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], ["segment"]);
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", { component: this, tagName: "Nav", options, id: create_fragment.name });

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.segment === undefined && !('segment' in props)) {
			console.warn("<Nav> was created without expected prop 'segment'");
		}
	}

	get segment() {
		throw new Error("<Nav>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set segment(value) {
		throw new Error("<Nav>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Nav);



/***/ }),

/***/ "./src/components/Nav.svelte.css":
/*!***************************************!*\
  !*** ./src/components/Nav.svelte.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (1:0)\nYou may need an appropriate loader to handle this file type.\n> @media(min-width: 767px){header.svelte-110dmbk{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}}.top-line.svelte-110dmbk{width:100%;height:3px;background-color:blue;border:none;outline:none;margin:3rem 0}h1.svelte-110dmbk{margin-bottom:0;font-size:2rem}button#nav_contact-button.svelte-110dmbk{background-color:white;color:blue;padding:8px 16px;border-radius:8px;border:2px solid white;cursor:pointer;outline:none;display:none;will-change:border;-webkit-transition:border 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);transition:border 0.3s cubic-bezier(0.39, 0.575, 0.565, 1)}@media(min-width: 767px){button#nav_contact-button.svelte-110dmbk{display:block}}button#nav_contact-button.svelte-110dmbk:hover a.svelte-110dmbk{color:#4b4bfd;-webkit-transition-delay:0s;transition-delay:0s}button#nav_contact-button.svelte-110dmbk:hover svg.svelte-110dmbk{fill:#4b4bfd;-webkit-transition-delay:0s;transition-delay:0s}button#nav_contact-button.svelte-110dmbk:active{border:2px solid #4b4bfd;-webkit-transition-delay:0s;transition-delay:0s}button#nav_contact-button.svelte-110dmbk a.svelte-110dmbk{color:blue;text-decoration:none;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;will-change:color;-webkit-transition:color 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);transition:color 0.3s cubic-bezier(0.39, 0.575, 0.565, 1)}button#nav_contact-button.svelte-110dmbk svg.svelte-110dmbk{fill:blue;margin-right:1rem;will-change:fill;-webkit-transition:fill 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);transition:fill 0.3s cubic-bezier(0.39, 0.575, 0.565, 1)}button#nav_contact-button.svelte-110dmbk span.svelte-110dmbk{-webkit-transform:translateY(1px);transform:translateY(1px)}\n| /*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi9Vc2Vycy9MdWNhL0Rlc2t0b3AvSG9tZXBhZ2Uvc3JjL2NvbXBvbmVudHMvTmF2LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICBleHBvcnQgbGV0IHNlZ21lbnQ7XG48L3NjcmlwdD5cblxuPHN0eWxlIHR5cGU9XCJ0ZXh0L3Njc3NcIj4vKlxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG58IEJyZWFrcG9pbnRzXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5AbWVkaWEgKG1pbi13aWR0aDogNzY3cHgpIHtcbiAgaGVhZGVyIHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGVuZDtcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGVuZDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDsgfSB9XG5cbi50b3AtbGluZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBtYXJnaW46IDNyZW0gMDsgfVxuXG5oMSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMnJlbTsgfVxuXG5idXR0b24jbmF2X2NvbnRhY3QtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibHVlO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBkaXNwbGF5OiBub25lO1xuICB3aWxsLWNoYW5nZTogYm9yZGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlciAwLjNzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpO1xuICB0cmFuc2l0aW9uOiBib3JkZXIgMC4zcyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKTsgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY3cHgpIHtcbiAgICBidXR0b24jbmF2X2NvbnRhY3QtYnV0dG9uIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrOyB9IH1cbiAgYnV0dG9uI25hdl9jb250YWN0LWJ1dHRvbjpob3ZlciBhIHtcbiAgICBjb2xvcjogIzRiNGJmZDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7IH1cbiAgYnV0dG9uI25hdl9jb250YWN0LWJ1dHRvbjpob3ZlciBzdmcge1xuICAgIGZpbGw6ICM0YjRiZmQ7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzOyB9XG4gIGJ1dHRvbiNuYXZfY29udGFjdC1idXR0b246YWN0aXZlIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNGI0YmZkO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwczsgfVxuICBidXR0b24jbmF2X2NvbnRhY3QtYnV0dG9uIGEge1xuICAgIGNvbG9yOiBibHVlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lsbC1jaGFuZ2U6IGNvbG9yO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4zcyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKTtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpOyB9XG4gIGJ1dHRvbiNuYXZfY29udGFjdC1idXR0b24gc3ZnIHtcbiAgICBmaWxsOiBibHVlO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICB3aWxsLWNoYW5nZTogZmlsbDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGZpbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKTtcbiAgICB0cmFuc2l0aW9uOiBmaWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSk7IH1cbiAgYnV0dG9uI25hdl9jb250YWN0LWJ1dHRvbiBzcGFuIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7IH1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXNyYy9jb21wb25lbnRzL05hdi5zdmVsdGUubWFwICovPC9zdHlsZT5cblxuPGhlYWRlcj5cbiAgPGgxPlxuICAgIEx1Y2EgQ2xhZXNzZW5zICZtZGFzaDtcbiAgICA8YnIgLz5cbiAgICA8c3BhbiBjbGFzcz1cInRleHQtbGlnaHRlclwiPkRldmVsb3Blcjwvc3Bhbj5cbiAgICAmXG4gICAgPHNwYW4+RGlnaXRhbCBkZXNpZ25lcjwvc3Bhbj5cbiAgPC9oMT5cbiAgPGJ1dHRvbiBpZD1cIm5hdl9jb250YWN0LWJ1dHRvblwiPlxuICAgIDxhIGhyZWY9XCJtYWlsdG86bHVjYWNsYWVAZ21haWwuY29tXCI+XG4gICAgICA8c3ZnXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICB3aWR0aD1cIjI0XCJcbiAgICAgICAgaGVpZ2h0PVwiMjRcIlxuICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZD1cIk0yMCA0SDRjLTEuMSAwLTEuOTkuOS0xLjk5IDJMMiAxOGMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjlcbiAgICAgICAgICAyLTJWNmMwLTEuMS0uOS0yLTItMnptMCA0bC04IDUtOC01VjZsOCA1IDgtNXYyelwiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgPC9zdmc+XG4gICAgICA8c3Bhbj5Db250YWN0IG1lPC9zcGFuPlxuICAgIDwvYT5cbiAgPC9idXR0b24+XG48L2hlYWRlcj5cblxuPGhyIGNsYXNzPVwidG9wLWxpbmVcIiAvPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBLE1BQU0sQUFBQyxZQUFZLEtBQUssQ0FBQyxBQUFDLENBQUMsQUFDekIsTUFBTSxlQUFDLENBQUMsQUFDTixPQUFPLENBQUUsV0FBVyxDQUNwQixPQUFPLENBQUUsV0FBVyxDQUNwQixPQUFPLENBQUUsSUFBSSxDQUNiLGdCQUFnQixDQUFFLE9BQU8sQ0FDckIsYUFBYSxDQUFFLE9BQU8sQ0FDbEIsZUFBZSxDQUFFLGFBQWEsQ0FDdEMsaUJBQWlC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*/");

/***/ }),

/***/ "./src/node_modules/@sapper/app.mjs":
/*!******************************************!*\
  !*** ./src/node_modules/@sapper/app.mjs ***!
  \******************************************/
/*! exports provided: goto, prefetch, prefetchRoutes, start, stores */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goto", function() { return goto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefetch", function() { return prefetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefetchRoutes", function() { return prefetchRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stores", function() { return stores$1; });
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _internal_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/shared */ "./src/node_modules/@sapper/internal/shared.mjs");
/* harmony import */ var svelte_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svelte/store */ "./node_modules/svelte/store/index.mjs");
/* harmony import */ var _internal_App_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/App.svelte */ "./src/node_modules/@sapper/internal/App.svelte");
/* harmony import */ var _internal_manifest_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./internal/manifest-client */ "./src/node_modules/@sapper/internal/manifest-client.mjs");






function goto(href, opts = { replaceState: false }) {
	const target = select_target(new URL(href, document.baseURI));

	if (target) {
		_history[opts.replaceState ? 'replaceState' : 'pushState']({ id: cid }, '', href);
		return navigate(target, null).then(() => {});
	}

	location.href = href;
	return new Promise(f => {}); // never resolves
}

const initial_data = typeof __SAPPER__ !== 'undefined' && __SAPPER__;

let ready = false;
let root_component;
let current_token;
let root_preloaded;
let current_branch = [];
let current_query = '{}';

const stores = {
	page: Object(svelte_store__WEBPACK_IMPORTED_MODULE_2__["writable"])({}),
	preloading: Object(svelte_store__WEBPACK_IMPORTED_MODULE_2__["writable"])(null),
	session: Object(svelte_store__WEBPACK_IMPORTED_MODULE_2__["writable"])(initial_data && initial_data.session)
};

let $session;
let session_dirty;

stores.session.subscribe(async value => {
	$session = value;

	if (!ready) return;
	session_dirty = true;

	const target = select_target(new URL(location.href));

	const token = current_token = {};
	const { redirect, props, branch } = await hydrate_target(target);
	if (token !== current_token) return; // a secondary navigation happened while we were loading

	await render(redirect, branch, props, target.page);
});

let prefetching


 = null;
function set_prefetching(href, promise) {
	prefetching = { href, promise };
}

let target;
function set_target(element) {
	target = element;
}

let uid = 1;
function set_uid(n) {
	uid = n;
}

let cid;
function set_cid(n) {
	cid = n;
}

const _history = typeof history !== 'undefined' ? history : {
	pushState: (state, title, href) => {},
	replaceState: (state, title, href) => {},
	scrollRestoration: ''
};

const scroll_history = {};

function extract_query(search) {
	const query = Object.create(null);
	if (search.length > 0) {
		search.slice(1).split('&').forEach(searchParam => {
			let [, key, value = ''] = /([^=]*)(?:=(.*))?/.exec(decodeURIComponent(searchParam.replace(/\+/g, ' ')));
			if (typeof query[key] === 'string') query[key] = [query[key]];
			if (typeof query[key] === 'object') (query[key] ).push(value);
			else query[key] = value;
		});
	}
	return query;
}

function select_target(url) {
	if (url.origin !== location.origin) return null;
	if (!url.pathname.startsWith(initial_data.baseUrl)) return null;

	let path = url.pathname.slice(initial_data.baseUrl.length);

	if (path === '') {
		path = '/';
	}

	// avoid accidental clashes between server routes and page routes
	if (_internal_manifest_client__WEBPACK_IMPORTED_MODULE_4__["ignore"].some(pattern => pattern.test(path))) return;

	for (let i = 0; i < _internal_manifest_client__WEBPACK_IMPORTED_MODULE_4__["routes"].length; i += 1) {
		const route = _internal_manifest_client__WEBPACK_IMPORTED_MODULE_4__["routes"][i];

		const match = route.pattern.exec(path);

		if (match) {
			const query = extract_query(url.search);
			const part = route.parts[route.parts.length - 1];
			const params = part.params ? part.params(match) : {};

			const page = { host: location.host, path, query, params };

			return { href: url.href, route, match, page };
		}
	}
}

function handle_error(url) {
	const { host, pathname, search } = location;
	const { session, preloaded, status, error } = initial_data;

	if (!root_preloaded) {
		root_preloaded = preloaded && preloaded[0];
	}

	const props = {
		error,
		status,
		session,
		level0: {
			props: root_preloaded
		},
		level1: {
			props: {
				status,
				error
			},
			component: _internal_manifest_client__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"]
		},
		segments: preloaded

	};
	const query = extract_query(search);
	render(null, [], props, { host, path: pathname, query, params: {} });
}

function scroll_state() {
	return {
		x: pageXOffset,
		y: pageYOffset
	};
}

async function navigate(target, id, noscroll, hash) {
	if (id) {
		// popstate or initial navigation
		cid = id;
	} else {
		const current_scroll = scroll_state();

		// clicked on a link. preserve scroll state
		scroll_history[cid] = current_scroll;

		id = cid = ++uid;
		scroll_history[cid] = noscroll ? current_scroll : { x: 0, y: 0 };
	}

	cid = id;

	if (root_component) stores.preloading.set(true);

	const loaded = prefetching && prefetching.href === target.href ?
		prefetching.promise :
		hydrate_target(target);

	prefetching = null;

	const token = current_token = {};
	const { redirect, props, branch } = await loaded;
	if (token !== current_token) return; // a secondary navigation happened while we were loading

	await render(redirect, branch, props, target.page);
	if (document.activeElement) document.activeElement.blur();

	if (!noscroll) {
		let scroll = scroll_history[id];

		if (hash) {
			// scroll is an element id (from a hash), we need to compute y.
			const deep_linked = document.getElementById(hash.slice(1));

			if (deep_linked) {
				scroll = {
					x: 0,
					y: deep_linked.getBoundingClientRect().top
				};
			}
		}

		scroll_history[cid] = scroll;
		if (scroll) scrollTo(scroll.x, scroll.y);
	}
}

async function render(redirect, branch, props, page) {
	if (redirect) return goto(redirect.location, { replaceState: true });

	stores.page.set(page);
	stores.preloading.set(false);

	if (root_component) {
		root_component.$set(props);
	} else {
		props.stores = {
			page: { subscribe: stores.page.subscribe },
			preloading: { subscribe: stores.preloading.subscribe },
			session: stores.session
		};
		props.level0 = {
			props: await root_preloaded
		};

		// first load — remove SSR'd <head> contents
		const start = document.querySelector('#sapper-head-start');
		const end = document.querySelector('#sapper-head-end');

		if (start && end) {
			while (start.nextSibling !== end) detach(start.nextSibling);
			detach(start);
			detach(end);
		}

		root_component = new _internal_App_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
			target,
			props,
			hydrate: true
		});
	}

	current_branch = branch;
	current_query = JSON.stringify(page.query);
	ready = true;
	session_dirty = false;
}

function part_changed(i, segment, match, stringified_query) {
	// TODO only check query string changes for preload functions
	// that do in fact depend on it (using static analysis or
	// runtime instrumentation)
	if (stringified_query !== current_query) return true;

	const previous = current_branch[i];

	if (!previous) return false;
	if (segment !== previous.segment) return true;
	if (previous.match) {
		if (JSON.stringify(previous.match.slice(1, i + 2)) !== JSON.stringify(match.slice(1, i + 2))) {
			return true;
		}
	}
}

async function hydrate_target(target)



 {
	const { route, page } = target;
	const segments = page.path.split('/').filter(Boolean);

	let redirect = null;

	const props = { error: null, status: 200, segments: [segments[0]] };

	const preload_context = {
		fetch: (url, opts) => fetch(url, opts),
		redirect: (statusCode, location) => {
			if (redirect && (redirect.statusCode !== statusCode || redirect.location !== location)) {
				throw new Error(`Conflicting redirects`);
			}
			redirect = { statusCode, location };
		},
		error: (status, error) => {
			props.error = typeof error === 'string' ? new Error(error) : error;
			props.status = status;
		}
	};

	if (!root_preloaded) {
		root_preloaded = initial_data.preloaded[0] || _internal_manifest_client__WEBPACK_IMPORTED_MODULE_4__["root_preload"].call(preload_context, {
			host: page.host,
			path: page.path,
			query: page.query,
			params: {}
		}, $session);
	}

	let branch;
	let l = 1;

	try {
		const stringified_query = JSON.stringify(page.query);
		const match = route.pattern.exec(page.path);

		let segment_dirty = false;

		branch = await Promise.all(route.parts.map(async (part, i) => {
			const segment = segments[i];

			if (part_changed(i, segment, match, stringified_query)) segment_dirty = true;

			props.segments[l] = segments[i + 1]; // TODO make this less confusing
			if (!part) return { segment };

			const j = l++;

			if (!session_dirty && !segment_dirty && current_branch[i] && current_branch[i].part === part.i) {
				return current_branch[i];
			}

			segment_dirty = false;

			const { default: component, preload } = await load_component(_internal_manifest_client__WEBPACK_IMPORTED_MODULE_4__["components"][part.i]);

			let preloaded;
			if (ready || !initial_data.preloaded[i + 1]) {
				preloaded = preload
					? await preload.call(preload_context, {
						host: page.host,
						path: page.path,
						query: page.query,
						params: part.params ? part.params(target.match) : {}
					}, $session)
					: {};
			} else {
				preloaded = initial_data.preloaded[i + 1];
			}

			return (props[`level${j}`] = { component, props: preloaded, segment, match, part: part.i });
		}));
	} catch (error) {
		props.error = error;
		props.status = 500;
		branch = [];
	}

	return { redirect, props, branch };
}

function load_css(chunk) {
	const href = `client/${chunk}`;
	if (document.querySelector(`link[href="${href}"]`)) return;

	return new Promise((fulfil, reject) => {
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = href;

		link.onload = () => fulfil();
		link.onerror = reject;

		document.head.appendChild(link);
	});
}

function load_component(component)


 {
	// TODO this is temporary — once placeholders are
	// always rewritten, scratch the ternary
	const promises = (typeof component.css === 'string' ? [] : component.css.map(load_css));
	promises.unshift(component.js());
	return Promise.all(promises).then(values => values[0]);
}

function detach(node) {
	node.parentNode.removeChild(node);
}

function prefetch(href) {
	const target = select_target(new URL(href, document.baseURI));

	if (target) {
		if (!prefetching || href !== prefetching.href) {
			set_prefetching(href, hydrate_target(target));
		}

		return prefetching.promise;
	}
}

function start(opts

) {
	if ('scrollRestoration' in _history) {
		_history.scrollRestoration = 'manual';
	}

	set_target(opts.target);

	addEventListener('click', handle_click);
	addEventListener('popstate', handle_popstate);

	// prefetch
	addEventListener('touchstart', trigger_prefetch);
	addEventListener('mousemove', handle_mousemove);

	return Promise.resolve().then(() => {
		const { hash, href } = location;

		_history.replaceState({ id: uid }, '', href);

		const url = new URL(location.href);

		if (initial_data.error) return handle_error();

		const target = select_target(url);
		if (target) return navigate(target, uid, true, hash);
	});
}

let mousemove_timeout;

function handle_mousemove(event) {
	clearTimeout(mousemove_timeout);
	mousemove_timeout = setTimeout(() => {
		trigger_prefetch(event);
	}, 20);
}

function trigger_prefetch(event) {
	const a = find_anchor(event.target);
	if (!a || a.rel !== 'prefetch') return;

	prefetch(a.href);
}

function handle_click(event) {
	// Adapted from https://github.com/visionmedia/page.js
	// MIT license https://github.com/visionmedia/page.js#license
	if (which(event) !== 1) return;
	if (event.metaKey || event.ctrlKey || event.shiftKey) return;
	if (event.defaultPrevented) return;

	const a = find_anchor(event.target);
	if (!a) return;

	if (!a.href) return;

	// check if link is inside an svg
	// in this case, both href and target are always inside an object
	const svg = typeof a.href === 'object' && a.href.constructor.name === 'SVGAnimatedString';
	const href = String(svg ? (a).href.baseVal : a.href);

	if (href === location.href) {
		if (!location.hash) event.preventDefault();
		return;
	}

	// Ignore if tag has
	// 1. 'download' attribute
	// 2. rel='external' attribute
	if (a.hasAttribute('download') || a.getAttribute('rel') === 'external') return;

	// Ignore if <a> has a target
	if (svg ? (a).target.baseVal : a.target) return;

	const url = new URL(href);

	// Don't handle hash changes
	if (url.pathname === location.pathname && url.search === location.search) return;

	const target = select_target(url);
	if (target) {
		const noscroll = a.hasAttribute('sapper-noscroll');
		navigate(target, null, noscroll, url.hash);
		event.preventDefault();
		_history.pushState({ id: cid }, '', url.href);
	}
}

function which(event) {
	return event.which === null ? event.button : event.which;
}

function find_anchor(node) {
	while (node && node.nodeName.toUpperCase() !== 'A') node = node.parentNode; // SVG <a> elements have a lowercase name
	return node;
}

function handle_popstate(event) {
	scroll_history[cid] = scroll_state();

	if (event.state) {
		const url = new URL(location.href);
		const target = select_target(url);
		if (target) {
			navigate(target, event.state.id);
		} else {
			location.href = location.href;
		}
	} else {
		// hashchange
		set_uid(uid + 1);
		set_cid(uid);
		_history.replaceState({ id: cid }, '', location.href);
	}
}

function prefetchRoutes(pathnames) {
	return _internal_manifest_client__WEBPACK_IMPORTED_MODULE_4__["routes"]
		.filter(pathnames
			? route => pathnames.some(pathname => route.pattern.test(pathname))
			: () => true
		)
		.reduce((promise, route) => promise.then(() => {
			return Promise.all(route.parts.map(part => part && load_component(_internal_manifest_client__WEBPACK_IMPORTED_MODULE_4__["components"][part.i])));
		}), Promise.resolve());
}

const stores$1 = () => Object(svelte__WEBPACK_IMPORTED_MODULE_0__["getContext"])(_internal_shared__WEBPACK_IMPORTED_MODULE_1__["CONTEXT_KEY"]);




/***/ }),

/***/ "./src/node_modules/@sapper/internal/App.svelte":
/*!******************************************************!*\
  !*** ./src/node_modules/@sapper/internal/App.svelte ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared */ "./src/node_modules/@sapper/internal/shared.mjs");
/* harmony import */ var _routes_layout_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../routes/_layout.svelte */ "./src/routes/_layout.svelte");
/* harmony import */ var _routes_error_svelte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../routes/_error.svelte */ "./src/routes/_error.svelte");
/* src/node_modules/@sapper/internal/App.svelte generated by Svelte v3.12.1 */

const { Error: Error_1 } = svelte_internal__WEBPACK_IMPORTED_MODULE_0__["globals"];





const file = "src/node_modules/@sapper/internal/App.svelte";

// (21:1) {:else}
function create_else_block(ctx) {
	var switch_instance_anchor, current;

	var switch_instance_spread_levels = [
		ctx.level1.props
	];

	var switch_value = ctx.level1.component;

	function switch_props(ctx) {
		let switch_instance_props = {};
		for (var i = 0; i < switch_instance_spread_levels.length; i += 1) {
			switch_instance_props = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["assign"])(switch_instance_props, switch_instance_spread_levels[i]);
		}
		return {
			props: switch_instance_props,
			$$inline: true
		};
	}

	if (switch_value) {
		var switch_instance = new switch_value(switch_props(ctx));
	}

	const block = {
		c: function create() {
			if (switch_instance) switch_instance.$$.fragment.c();
			switch_instance_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
		},

		l: function claim(nodes) {
			if (switch_instance) switch_instance.$$.fragment.l(nodes);
			switch_instance_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
		},

		m: function mount(target, anchor) {
			if (switch_instance) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(switch_instance, target, anchor);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, switch_instance_anchor, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var switch_instance_changes = (changed.level1) ? Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_spread_update"])(switch_instance_spread_levels, [
									Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_spread_object"])(ctx.level1.props)
								]) : {};

			if (switch_value !== (switch_value = ctx.level1.component)) {
				if (switch_instance) {
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();
					const old_component = switch_instance;
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(old_component.$$.fragment, 1, 0, () => {
						Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(old_component, 1);
					});
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
				}

				if (switch_value) {
					switch_instance = new switch_value(switch_props(ctx));

					switch_instance.$$.fragment.c();
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(switch_instance.$$.fragment, 1);
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
				} else {
					switch_instance = null;
				}
			}

			else if (switch_value) {
				switch_instance.$set(switch_instance_changes);
			}
		},

		i: function intro(local) {
			if (current) return;
			if (switch_instance) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(switch_instance.$$.fragment, local);

			current = true;
		},

		o: function outro(local) {
			if (switch_instance) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(switch_instance.$$.fragment, local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(switch_instance_anchor);
			}

			if (switch_instance) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(switch_instance, detaching);
		}
	};
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", { block, id: create_else_block.name, type: "else", source: "(21:1) {:else}", ctx });
	return block;
}

// (19:1) {#if error}
function create_if_block(ctx) {
	var current;

	var error_1 = new _routes_error_svelte__WEBPACK_IMPORTED_MODULE_4__["default"]({
		props: { error: ctx.error, status: ctx.status },
		$$inline: true
	});

	const block = {
		c: function create() {
			error_1.$$.fragment.c();
		},

		l: function claim(nodes) {
			error_1.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(error_1, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var error_1_changes = {};
			if (changed.error) error_1_changes.error = ctx.error;
			if (changed.status) error_1_changes.status = ctx.status;
			error_1.$set(error_1_changes);
		},

		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(error_1.$$.fragment, local);

			current = true;
		},

		o: function outro(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(error_1.$$.fragment, local);
			current = false;
		},

		d: function destroy(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(error_1, detaching);
		}
	};
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", { block, id: create_if_block.name, type: "if", source: "(19:1) {#if error}", ctx });
	return block;
}

// (18:0) <Layout segment="{segments[0]}" {...level0.props}>
function create_default_slot(ctx) {
	var current_block_type_index, if_block, if_block_anchor, current;

	var if_block_creators = [
		create_if_block,
		create_else_block
	];

	var if_blocks = [];

	function select_block_type(changed, ctx) {
		if (ctx.error) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(null, ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	const block = {
		c: function create() {
			if_block.c();
			if_block_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
		},

		l: function claim(nodes) {
			if_block.l(nodes);
			if_block_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
		},

		m: function mount(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, if_block_anchor, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(changed, ctx);
			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(changed, ctx);
			} else {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();

				if_block = if_blocks[current_block_type_index];
				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				}
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block, 1);
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},

		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block);
			current = true;
		},

		o: function outro(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block);
			current = false;
		},

		d: function destroy(detaching) {
			if_blocks[current_block_type_index].d(detaching);

			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(if_block_anchor);
			}
		}
	};
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", { block, id: create_default_slot.name, type: "slot", source: "(18:0) <Layout segment=\"{segments[0]}\" {...level0.props}>", ctx });
	return block;
}

function create_fragment(ctx) {
	var current;

	var layout_spread_levels = [
		{ segment: ctx.segments[0] },
		ctx.level0.props
	];

	let layout_props = {
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	};
	for (var i = 0; i < layout_spread_levels.length; i += 1) {
		layout_props = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["assign"])(layout_props, layout_spread_levels[i]);
	}
	var layout = new _routes_layout_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({ props: layout_props, $$inline: true });

	const block = {
		c: function create() {
			layout.$$.fragment.c();
		},

		l: function claim(nodes) {
			layout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(layout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var layout_changes = (changed.segments || changed.level0) ? Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_spread_update"])(layout_spread_levels, [
									(changed.segments) && { segment: ctx.segments[0] },
			(changed.level0) && Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_spread_object"])(ctx.level0.props)
								]) : {};
			if (changed.$$scope || changed.error || changed.status || changed.level1) layout_changes.$$scope = { changed, ctx };
			layout.$set(layout_changes);
		},

		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(layout.$$.fragment, local);

			current = true;
		},

		o: function outro(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(layout.$$.fragment, local);
			current = false;
		},

		d: function destroy(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(layout, detaching);
		}
	};
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", { block, id: create_fragment.name, type: "component", source: "", ctx });
	return block;
}

function instance($$self, $$props, $$invalidate) {
	

	let { stores, error, status, segments, level0, level1 = null } = $$props;

	Object(svelte__WEBPACK_IMPORTED_MODULE_1__["setContext"])(_shared__WEBPACK_IMPORTED_MODULE_2__["CONTEXT_KEY"], stores);

	const writable_props = ['stores', 'error', 'status', 'segments', 'level0', 'level1'];
	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<App> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ('stores' in $$props) $$invalidate('stores', stores = $$props.stores);
		if ('error' in $$props) $$invalidate('error', error = $$props.error);
		if ('status' in $$props) $$invalidate('status', status = $$props.status);
		if ('segments' in $$props) $$invalidate('segments', segments = $$props.segments);
		if ('level0' in $$props) $$invalidate('level0', level0 = $$props.level0);
		if ('level1' in $$props) $$invalidate('level1', level1 = $$props.level1);
	};

	$$self.$capture_state = () => {
		return { stores, error, status, segments, level0, level1 };
	};

	$$self.$inject_state = $$props => {
		if ('stores' in $$props) $$invalidate('stores', stores = $$props.stores);
		if ('error' in $$props) $$invalidate('error', error = $$props.error);
		if ('status' in $$props) $$invalidate('status', status = $$props.status);
		if ('segments' in $$props) $$invalidate('segments', segments = $$props.segments);
		if ('level0' in $$props) $$invalidate('level0', level0 = $$props.level0);
		if ('level1' in $$props) $$invalidate('level1', level1 = $$props.level1);
	};

	return {
		stores,
		error,
		status,
		segments,
		level0,
		level1
	};
}

class App extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], ["stores", "error", "status", "segments", "level0", "level1"]);
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", { component: this, tagName: "App", options, id: create_fragment.name });

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.stores === undefined && !('stores' in props)) {
			console.warn("<App> was created without expected prop 'stores'");
		}
		if (ctx.error === undefined && !('error' in props)) {
			console.warn("<App> was created without expected prop 'error'");
		}
		if (ctx.status === undefined && !('status' in props)) {
			console.warn("<App> was created without expected prop 'status'");
		}
		if (ctx.segments === undefined && !('segments' in props)) {
			console.warn("<App> was created without expected prop 'segments'");
		}
		if (ctx.level0 === undefined && !('level0' in props)) {
			console.warn("<App> was created without expected prop 'level0'");
		}
	}

	get stores() {
		throw new Error_1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set stores(value) {
		throw new Error_1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get error() {
		throw new Error_1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set error(value) {
		throw new Error_1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get status() {
		throw new Error_1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set status(value) {
		throw new Error_1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get segments() {
		throw new Error_1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set segments(value) {
		throw new Error_1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get level0() {
		throw new Error_1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set level0(value) {
		throw new Error_1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get level1() {
		throw new Error_1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set level1(value) {
		throw new Error_1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/node_modules/@sapper/internal/manifest-client.mjs":
/*!***************************************************************!*\
  !*** ./src/node_modules/@sapper/internal/manifest-client.mjs ***!
  \***************************************************************/
/*! exports provided: Root, root_preload, ErrorComponent, ignore, components, routes */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ignore", function() { return ignore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _routes_layout_svelte__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../routes/_layout.svelte */ "./src/routes/_layout.svelte");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Root", function() { return _routes_layout_svelte__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared */ "./src/node_modules/@sapper/internal/shared.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "root_preload", function() { return _shared__WEBPACK_IMPORTED_MODULE_1__["preload"]; });

/* harmony import */ var _routes_error_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../routes/_error.svelte */ "./src/routes/_error.svelte");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return _routes_error_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]; });

// This file is generated by Sapper — do not edit it!




const ignore = [/^\/blog.json$/, /^\/blog\/([^\/]+?).json$/];

const components = [
	{
		js: () => __webpack_require__.e(/*! import() | index */ "index").then(__webpack_require__.bind(null, /*! ../../../routes/index.svelte */ "./src/routes/index.svelte")),
		css: "__SAPPER_CSS_PLACEHOLDER:index.svelte__"
	},
	{
		js: () => __webpack_require__.e(/*! import() | about */ "about").then(__webpack_require__.bind(null, /*! ../../../routes/about.svelte */ "./src/routes/about.svelte")),
		css: "__SAPPER_CSS_PLACEHOLDER:about.svelte__"
	},
	{
		js: () => __webpack_require__.e(/*! import() | blog */ "blog").then(__webpack_require__.bind(null, /*! ../../../routes/blog/index.svelte */ "./src/routes/blog/index.svelte")),
		css: "__SAPPER_CSS_PLACEHOLDER:blog/index.svelte__"
	},
	{
		js: () => __webpack_require__.e(/*! import() | blog_$slug */ "blog_$slug").then(__webpack_require__.bind(null, /*! ../../../routes/blog/[slug].svelte */ "./src/routes/blog/[slug].svelte")),
		css: "__SAPPER_CSS_PLACEHOLDER:blog/[slug].svelte__"
	}
];

const routes = (d => [
	{
		// index.svelte
		pattern: /^\/$/,
		parts: [
			{ i: 0 }
		]
	},

	{
		// about.svelte
		pattern: /^\/about\/?$/,
		parts: [
			{ i: 1 }
		]
	},

	{
		// blog/index.svelte
		pattern: /^\/blog\/?$/,
		parts: [
			{ i: 2 }
		]
	},

	{
		// blog/[slug].svelte
		pattern: /^\/blog\/([^\/]+?)\/?$/,
		parts: [
			null,
			{ i: 3, params: match => ({ slug: d(match[1]) }) }
		]
	}
])(decodeURIComponent);

if (typeof window !== 'undefined') {
	__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./node_modules/sapper/sapper-dev-client.js */ "./node_modules/sapper/sapper-dev-client.js")).then(client => {
		client.connect(10000);
	});
}

/***/ }),

/***/ "./src/node_modules/@sapper/internal/shared.mjs":
/*!******************************************************!*\
  !*** ./src/node_modules/@sapper/internal/shared.mjs ***!
  \******************************************************/
/*! exports provided: CONTEXT_KEY, preload */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTEXT_KEY", function() { return CONTEXT_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preload", function() { return preload; });
/* harmony import */ var svelte_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/store */ "./node_modules/svelte/store/index.mjs");


const CONTEXT_KEY = {};

const preload = () => ({});

/***/ }),

/***/ "./src/routes/_error.svelte":
/*!**********************************!*\
  !*** ./src/routes/_error.svelte ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _Users_Luca_Desktop_Homepage_src_routes_error_svelte_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/routes/_error.svelte.css */ "./src/routes/_error.svelte.css");
/* harmony import */ var _Users_Luca_Desktop_Homepage_src_routes_error_svelte_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_Luca_Desktop_Homepage_src_routes_error_svelte_css__WEBPACK_IMPORTED_MODULE_1__);
/* src/routes/_error.svelte generated by Svelte v3.12.1 */

const { Error: Error_1 } = svelte_internal__WEBPACK_IMPORTED_MODULE_0__["globals"];

const file = "src/routes/_error.svelte";

// (39:0) {#if dev && error.stack}
function create_if_block(ctx) {
	var pre, t_value = ctx.error.stack + "", t;

	const block = {
		c: function create() {
			pre = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("pre");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t_value);
			this.h()
		},

		l: function claim(nodes) {
			pre = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "PRE", {}, false);
			var pre_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(pre);

			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(pre_nodes, t_value);
			pre_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(pre, file, 39, 1, 1172);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, pre, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(pre, t);
		},

		p: function update(changed, ctx) {
			if ((changed.error) && t_value !== (t_value = ctx.error.stack + "")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t, t_value);
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(pre);
			}
		}
	};
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", { block, id: create_if_block.name, type: "if", source: "(39:0) {#if dev && error.stack}", ctx });
	return block;
}

function create_fragment(ctx) {
	var title_value, t0, h1, t1, t2, p, t3_value = ctx.error.message + "", t3, t4, if_block_anchor;

	document.title = title_value = ctx.status;

	var if_block = (ctx.dev && ctx.error.stack) && create_if_block(ctx);

	const block = {
		c: function create() {
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h1");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(ctx.status);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t3_value);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if (if_block) if_block.c();
			if_block_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
			this.h()
		},

		l: function claim(nodes) {
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);

			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "H1", { class: true }, false);
			var h1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h1);

			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h1_nodes, ctx.status);
			h1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);

			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "P", { class: true }, false);
			var p_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p);

			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p_nodes, t3_value);
			p_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			if (if_block) if_block.l(nodes);
			if_block_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
			this.h();
		},

		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(h1, "class", "svelte-1hjjbzs");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h1, file, 34, 0, 1103);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(p, "class", "svelte-1hjjbzs");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p, file, 36, 0, 1122);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, h1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h1, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t2, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, p, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t4, anchor);
			if (if_block) if_block.m(target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, if_block_anchor, anchor);
		},

		p: function update(changed, ctx) {
			if ((changed.status) && title_value !== (title_value = ctx.status)) {
				document.title = title_value;
			}

			if (changed.status) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t1, ctx.status);
			}

			if ((changed.error) && t3_value !== (t3_value = ctx.error.message + "")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t3, t3_value);
			}

			if (ctx.dev && ctx.error.stack) {
				if (if_block) {
					if_block.p(changed, ctx);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},

		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t0);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(h1);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t2);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(p);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t4);
			}

			if (if_block) if_block.d(detaching);

			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(if_block_anchor);
			}
		}
	};
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", { block, id: create_fragment.name, type: "component", source: "", ctx });
	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { status, error } = $$props;

	const dev = "development" === 'development';

	const writable_props = ['status', 'error'];
	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<Error> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ('status' in $$props) $$invalidate('status', status = $$props.status);
		if ('error' in $$props) $$invalidate('error', error = $$props.error);
	};

	$$self.$capture_state = () => {
		return { status, error };
	};

	$$self.$inject_state = $$props => {
		if ('status' in $$props) $$invalidate('status', status = $$props.status);
		if ('error' in $$props) $$invalidate('error', error = $$props.error);
	};

	return { status, error, dev };
}

class Error extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], ["status", "error"]);
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", { component: this, tagName: "Error", options, id: create_fragment.name });

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.status === undefined && !('status' in props)) {
			console.warn("<Error> was created without expected prop 'status'");
		}
		if (ctx.error === undefined && !('error' in props)) {
			console.warn("<Error> was created without expected prop 'error'");
		}
	}

	get status() {
		throw new Error_1("<Error>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set status(value) {
		throw new Error_1("<Error>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get error() {
		throw new Error_1("<Error>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set error(value) {
		throw new Error_1("<Error>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Error);



/***/ }),

/***/ "./src/routes/_error.svelte.css":
/*!**************************************!*\
  !*** ./src/routes/_error.svelte.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Identifier directly after number (1:11)\nYou may need an appropriate loader to handle this file type.\n> h1.svelte-1hjjbzs,p.svelte-1hjjbzs{margin:0 auto}h1.svelte-1hjjbzs{font-size:2.8em;font-weight:700;margin:0 0 0.5em 0}p.svelte-1hjjbzs{margin:1em auto}@media(min-width: 480px){h1.svelte-1hjjbzs{font-size:4em}}\n| /*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi9Vc2Vycy9MdWNhL0Rlc2t0b3AvSG9tZXBhZ2Uvc3JjL3JvdXRlcy9fZXJyb3Iuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5cdGV4cG9ydCBsZXQgc3RhdHVzO1xuXHRleHBvcnQgbGV0IGVycm9yO1xuXG5cdGNvbnN0IGRldiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblx0aDEsIHAge1xuXHRcdG1hcmdpbjogMCBhdXRvO1xuXHR9XG5cblx0aDEge1xuXHRcdGZvbnQtc2l6ZTogMi44ZW07XG5cdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRtYXJnaW46IDAgMCAwLjVlbSAwO1xuXHR9XG5cblx0cCB7XG5cdFx0bWFyZ2luOiAxZW0gYXV0bztcblx0fVxuXG5cdEBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuXHRcdGgxIHtcblx0XHRcdGZvbnQtc2l6ZTogNGVtO1xuXHRcdH1cblx0fVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXliM1YwWlhNdlgyVnljbTl5TG5OMlpXeDBaU0pkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPME5CUTBNN1JVRkRReXhqUVVGak8wTkJRMlk3TzBOQlJVRTdSVUZEUXl4blFrRkJaMEk3UlVGRGFFSXNaMEpCUVdkQ08wVkJRMmhDTEcxQ1FVRnRRanREUVVOd1FqczdRMEZGUVR0RlFVTkRMR2RDUVVGblFqdERRVU5xUWpzN1EwRkZRVHRGUVVORE8wZEJRME1zWTBGQll6dEZRVU5tTzBOQlEwUWlMQ0ptYVd4bElqb2ljM0pqTDNKdmRYUmxjeTlmWlhKeWIzSXVjM1psYkhSbElpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lYRzVjZEdneExDQndJSHRjYmx4MFhIUnRZWEpuYVc0NklEQWdZWFYwYnp0Y2JseDBmVnh1WEc1Y2RHZ3hJSHRjYmx4MFhIUm1iMjUwTFhOcGVtVTZJREl1T0dWdE8xeHVYSFJjZEdadmJuUXRkMlZwWjJoME9pQTNNREE3WEc1Y2RGeDBiV0Z5WjJsdU9pQXdJREFnTUM0MVpXMGdNRHRjYmx4MGZWeHVYRzVjZEhBZ2UxeHVYSFJjZEcxaGNtZHBiam9nTVdWdElHRjFkRzg3WEc1Y2RIMWNibHh1WEhSQWJXVmthV0VnS0cxcGJpMTNhV1IwYURvZ05EZ3djSGdwSUh0Y2JseDBYSFJvTVNCN1hHNWNkRngwWEhSbWIyNTBMWE5wZW1VNklEUmxiVHRjYmx4MFhIUjlYRzVjZEgxY2JpSmRmUT09ICovPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+e3N0YXR1c308L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPGgxPntzdGF0dXN9PC9oMT5cblxuPHA+e2Vycm9yLm1lc3NhZ2V9PC9wPlxuXG57I2lmIGRldiAmJiBlcnJvci5zdGFja31cblx0PHByZT57ZXJyb3Iuc3RhY2t9PC9wcmU+XG57L2lmfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFDLGlCQUFFLENBQUUsQ0FBQyxlQUFDLENBQUMsQUFDTixNQUFNLENBQUUsQ0FBQyxDQUFDLElBQUksQUFDZixDQUFDLEFBRUQsRUFBRSxlQUFDLENBQUMsQUFDSCxTQUFTLENBQUUsS0FBSyxDQUNoQixXQUFXLENBQUUsR0FBRyxDQUNoQixNQUFNLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxBQUNwQixDQUFDLEFBRUQsQ0FBQyxlQUFDLENBQUMsQUFDRixNQUFNLENBQUUsR0FBRyxDQUFDLElBQUksQUFDakIsQ0FBQyxBQUVELE1BQU0sQUFBQyxZQUFZLEtBQUssQ0FBQyxBQUFDLENBQUMsQUFDMUIsRUFBRSxlQUFDLENBQUMsQUFDSCxTQUFTLENBQUUsR0FBRyxBQUNmLENBQUMsQUFDRixDQUFDIn0=*/");

/***/ }),

/***/ "./src/routes/_layout.svelte":
/*!***********************************!*\
  !*** ./src/routes/_layout.svelte ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _components_Nav_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Nav.svelte */ "./src/components/Nav.svelte");
/* harmony import */ var _components_Background_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Background.svelte */ "./src/components/Background.svelte");
/* harmony import */ var _Users_Luca_Desktop_Homepage_src_routes_layout_svelte_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/routes/_layout.svelte.css */ "./src/routes/_layout.svelte.css");
/* harmony import */ var _Users_Luca_Desktop_Homepage_src_routes_layout_svelte_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_Luca_Desktop_Homepage_src_routes_layout_svelte_css__WEBPACK_IMPORTED_MODULE_3__);
/* src/routes/_layout.svelte generated by Svelte v3.12.1 */




const file = "src/routes/_layout.svelte";

function create_fragment(ctx) {
	var t0, main, t1, current;

	var nav = new _components_Nav_svelte__WEBPACK_IMPORTED_MODULE_1__["default"]({
		props: { segment: ctx.segment },
		$$inline: true
	});

	const default_slot_template = ctx.$$slots.default;
	const default_slot = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_slot"])(default_slot_template, ctx, null);

	var background = new _components_Background_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({ $$inline: true });

	const block = {
		c: function create() {
			nav.$$.fragment.c();
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			main = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("main");

			if (default_slot) default_slot.c();
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			background.$$.fragment.c();
			this.h()
		},

		l: function claim(nodes) {
			nav.$$.fragment.l(nodes);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);

			main = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "MAIN", {}, false);
			var main_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(main);

			if (default_slot) default_slot.l(main_nodes);
			main_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			background.$$.fragment.l(nodes);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(main, file, 562, 0, 35153);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(nav, target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, main, anchor);

			if (default_slot) {
				default_slot.m(main, null);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(background, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var nav_changes = {};
			if (changed.segment) nav_changes.segment = ctx.segment;
			nav.$set(nav_changes);

			if (default_slot && default_slot.p && changed.$$scope) {
				default_slot.p(
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_slot_changes"])(default_slot_template, ctx, changed, null),
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_slot_context"])(default_slot_template, ctx, null)
				);
			}
		},

		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(nav.$$.fragment, local);

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(default_slot, local);

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(background.$$.fragment, local);

			current = true;
		},

		o: function outro(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(nav.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(default_slot, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(background.$$.fragment, local);
			current = false;
		},

		d: function destroy(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(nav, detaching);

			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t0);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(main);
			}

			if (default_slot) default_slot.d(detaching);

			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t1);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(background, detaching);
		}
	};
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", { block, id: create_fragment.name, type: "component", source: "", ctx });
	return block;
}

function instance($$self, $$props, $$invalidate) {
	

  let { segment } = $$props;

	const writable_props = ['segment'];
	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<Layout> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;

	$$self.$set = $$props => {
		if ('segment' in $$props) $$invalidate('segment', segment = $$props.segment);
		if ('$$scope' in $$props) $$invalidate('$$scope', $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => {
		return { segment };
	};

	$$self.$inject_state = $$props => {
		if ('segment' in $$props) $$invalidate('segment', segment = $$props.segment);
	};

	return { segment, $$slots, $$scope };
}

class Layout extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], ["segment"]);
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", { component: this, tagName: "Layout", options, id: create_fragment.name });

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.segment === undefined && !('segment' in props)) {
			console.warn("<Layout> was created without expected prop 'segment'");
		}
	}

	get segment() {
		throw new Error("<Layout>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set segment(value) {
		throw new Error("<Layout>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);



/***/ }),

/***/ "./src/routes/_layout.svelte.css":
/*!***************************************!*\
  !*** ./src/routes/_layout.svelte.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n> :root{font-size:16px}html{font-size:100%;line-height:1.2}@media(min-width: 480px){html{line-height:1.3}}@media(min-width: 767px){html{line-height:1.3}}h1{font-size:c 4.3rem;margin:0.7rem}@media(min-width: 480px){h1{font-size:2.074rem}}@media(min-width: 767px){h1{font-size:2.488rem;margin:1.4rem}}@media(min-width: 1023px){h1{font-size:2.986rem}}@media(min-width: 1279px){h1{font-size:3.583rem;margin:2.1rem}}@media(min-width: 1599px){h1{font-size:5.16rem}}h2{font-size:1rem}@media(min-width: 480px){h2{font-size:1.728rem}}@media(min-width: 767px){h2{font-size:2.074rem}}@media(min-width: 1023px){h2{font-size:2.488rem}}@media(min-width: 1279px){h2{font-size:2.986rem}}@media(min-width: 1599px){h2{font-size:4.3rem}}h3{font-size:0.833rem}@media(min-width: 480px){h3{font-size:1.44rem}}@media(min-width: 767px){h3{font-size:1.728rem}}@media(min-width: 1023px){h3{font-size:2.074rem}}@media(min-width: 1279px){h3{font-size:2.488rem}}@media(min-width: 1599px){h3{font-size:3.583rem}}h4{font-size:0.694rem}@media(min-width: 480px){h4{font-size:1.2rem}}@media(min-width: 767px){h4{font-size:1.44rem}}@media(min-width: 1023px){h4{font-size:1.728rem}}@media(min-width: 1279px){h4{font-size:2.074rem}}@media(min-width: 1599px){h4{font-size:2.986rem}}h5{font-size:0.694rem}@media(min-width: 480px){h5{font-size:1rem}}@media(min-width: 767px){h5{font-size:1.2rem}}@media(min-width: 1023px){h5{font-size:1.44rem}}@media(min-width: 1279px){h5{font-size:1.728rem}}@media(min-width: 1599px){h5{font-size:2.488rem}}h6{font-size:0.694rem}@media(min-width: 480px){h6{font-size:0.833rem}}@media(min-width: 767px){h6{font-size:1rem}}@media(min-width: 1023px){h6{font-size:1.2rem}}@media(min-width: 1279px){h6{font-size:1.44rem}}@media(min-width: 1599px){h6{font-size:2.074rem}}a,li,p{font-size:1rem}@media(min-width: 480px){a,li,p{font-size:1rem}}@media(min-width: 767px){a,li,p{font-size:1.2rem}}@media(min-width: 1023px){a,li,p{font-size:1.2rem}}p{line-height:1.3;max-width:30rem}@media(min-width: 767px){p{line-height:1.4;max-width:30rem}}@media(min-width: 1023px){p{line-height:1.4;max-width:40rem}}@media(min-width: 1279px){p{line-height:1.4;max-width:50rem}}.text-lighter{color:#666}a{color:blue}a:hover{color:#4b4bfd}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}h1{font-size:2em;margin:0.67em 0}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace, monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}body{background-color:#fafafa;z-index:1;color:#222;padding:2rem;font-family:\"Helvetica Neue\", Helvetica, Arial, sans-serif;max-width:1024px;margin:auto}section#about{margin-top:2rem}@media(prefers-color-scheme: dark){h1,h2,h3,h4,h5,p{color:#f2f2f2 !important}body{background-color:#1f1f1f !important}.smiley-circle{background-color:#181818 !important}button{background-color:#1f1f1f !important}button a{color:#f2f2f2 !important}button svg{fill:#f2f2f2 !important}}\n| /*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi9Vc2Vycy9MdWNhL0Rlc2t0b3AvSG9tZXBhZ2Uvc3JjL3JvdXRlcy9fbGF5b3V0LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICBpbXBvcnQgTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL05hdi5zdmVsdGVcIjtcbiAgaW1wb3J0IEJhY2tncm91bmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQmFja2dyb3VuZC5zdmVsdGVcIjtcblxuICBleHBvcnQgbGV0IHNlZ21lbnQ7XG48L3NjcmlwdD5cblxuPHN0eWxlIGdsb2JhbCBsYW5nPVwic2Nzc1wiPi8qXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnwgQnJlYWtwb2ludHNcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbi8qXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnwgTW9kdWxhciBTY2FsZSBTaXplc1xufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuLypcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxufCBSb290IEVsZW1lbnRzXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG46Z2xvYmFsKDpyb290KSB7XG4gIGZvbnQtc2l6ZTogMTZweDsgfVxuXG46Z2xvYmFsKGh0bWwpIHtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBsaW5lLWhlaWdodDogMS4yOyB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuICAgIDpnbG9iYWwoaHRtbCkge1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMzsgfSB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjdweCkge1xuICAgIDpnbG9iYWwoaHRtbCkge1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMzsgfSB9XG5cbi8qXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnwgSDFcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbjpnbG9iYWwoaDEpIHtcbiAgZm9udC1zaXplOiBjIDQuM3JlbTtcbiAgbWFyZ2luOiAwLjdyZW07IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XG4gICAgOmdsb2JhbChoMSkge1xuICAgICAgZm9udC1zaXplOiAyLjA3NHJlbTsgfSB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjdweCkge1xuICAgIDpnbG9iYWwoaDEpIHtcbiAgICAgIGZvbnQtc2l6ZTogMi40ODhyZW07XG4gICAgICBtYXJnaW46IDEuNHJlbTsgfSB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDIzcHgpIHtcbiAgICA6Z2xvYmFsKGgxKSB7XG4gICAgICBmb250LXNpemU6IDIuOTg2cmVtOyB9IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyNzlweCkge1xuICAgIDpnbG9iYWwoaDEpIHtcbiAgICAgIGZvbnQtc2l6ZTogMy41ODNyZW07XG4gICAgICBtYXJnaW46IDIuMXJlbTsgfSB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxNTk5cHgpIHtcbiAgICA6Z2xvYmFsKGgxKSB7XG4gICAgICBmb250LXNpemU6IDUuMTZyZW07IH0gfVxuXG4vKlxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG58IEgyIFxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuOmdsb2JhbChoMikge1xuICBmb250LXNpemU6IDFyZW07IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XG4gICAgOmdsb2JhbChoMikge1xuICAgICAgZm9udC1zaXplOiAxLjcyOHJlbTsgfSB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjdweCkge1xuICAgIDpnbG9iYWwoaDIpIHtcbiAgICAgIGZvbnQtc2l6ZTogMi4wNzRyZW07IH0gfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyM3B4KSB7XG4gICAgOmdsb2JhbChoMikge1xuICAgICAgZm9udC1zaXplOiAyLjQ4OHJlbTsgfSB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjc5cHgpIHtcbiAgICA6Z2xvYmFsKGgyKSB7XG4gICAgICBmb250LXNpemU6IDIuOTg2cmVtOyB9IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDE1OTlweCkge1xuICAgIDpnbG9iYWwoaDIpIHtcbiAgICAgIGZvbnQtc2l6ZTogNC4zcmVtOyB9IH1cblxuLypcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxufCBIM1xufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuOmdsb2JhbChoMykge1xuICBmb250LXNpemU6IDAuODMzcmVtOyB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuICAgIDpnbG9iYWwoaDMpIHtcbiAgICAgIGZvbnQtc2l6ZTogMS40NHJlbTsgfSB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjdweCkge1xuICAgIDpnbG9iYWwoaDMpIHtcbiAgICAgIGZvbnQtc2l6ZTogMS43MjhyZW07IH0gfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyM3B4KSB7XG4gICAgOmdsb2JhbChoMykge1xuICAgICAgZm9udC1zaXplOiAyLjA3NHJlbTsgfSB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjc5cHgpIHtcbiAgICA6Z2xvYmFsKGgzKSB7XG4gICAgICBmb250LXNpemU6IDIuNDg4cmVtOyB9IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDE1OTlweCkge1xuICAgIDpnbG9iYWwoaDMpIHtcbiAgICAgIGZvbnQtc2l6ZTogMy41ODNyZW07IH0gfVxuXG4vKlxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG58IEg0XG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG46Z2xvYmFsKGg0KSB7XG4gIGZvbnQtc2l6ZTogMC42OTRyZW07IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XG4gICAgOmdsb2JhbChoNCkge1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07IH0gfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY3cHgpIHtcbiAgICA6Z2xvYmFsKGg0KSB7XG4gICAgICBmb250LXNpemU6IDEuNDRyZW07IH0gfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyM3B4KSB7XG4gICAgOmdsb2JhbChoNCkge1xuICAgICAgZm9udC1zaXplOiAxLjcyOHJlbTsgfSB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjc5cHgpIHtcbiAgICA6Z2xvYmFsKGg0KSB7XG4gICAgICBmb250LXNpemU6IDIuMDc0cmVtOyB9IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDE1OTlweCkge1xuICAgIDpnbG9iYWwoaDQpIHtcbiAgICAgIGZvbnQtc2l6ZTogMi45ODZyZW07IH0gfVxuXG4vKlxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG58IEg1XG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG46Z2xvYmFsKGg1KSB7XG4gIGZvbnQtc2l6ZTogMC42OTRyZW07IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XG4gICAgOmdsb2JhbChoNSkge1xuICAgICAgZm9udC1zaXplOiAxcmVtOyB9IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2N3B4KSB7XG4gICAgOmdsb2JhbChoNSkge1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07IH0gfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyM3B4KSB7XG4gICAgOmdsb2JhbChoNSkge1xuICAgICAgZm9udC1zaXplOiAxLjQ0cmVtOyB9IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyNzlweCkge1xuICAgIDpnbG9iYWwoaDUpIHtcbiAgICAgIGZvbnQtc2l6ZTogMS43MjhyZW07IH0gfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTU5OXB4KSB7XG4gICAgOmdsb2JhbChoNSkge1xuICAgICAgZm9udC1zaXplOiAyLjQ4OHJlbTsgfSB9XG5cbi8qXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnwgSDZcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbjpnbG9iYWwoaDYpIHtcbiAgZm9udC1zaXplOiAwLjY5NHJlbTsgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcbiAgICA6Z2xvYmFsKGg2KSB7XG4gICAgICBmb250LXNpemU6IDAuODMzcmVtOyB9IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2N3B4KSB7XG4gICAgOmdsb2JhbChoNikge1xuICAgICAgZm9udC1zaXplOiAxcmVtOyB9IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjNweCkge1xuICAgIDpnbG9iYWwoaDYpIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtOyB9IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyNzlweCkge1xuICAgIDpnbG9iYWwoaDYpIHtcbiAgICAgIGZvbnQtc2l6ZTogMS40NHJlbTsgfSB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxNTk5cHgpIHtcbiAgICA6Z2xvYmFsKGg2KSB7XG4gICAgICBmb250LXNpemU6IDIuMDc0cmVtOyB9IH1cblxuLypcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxufCBFbGVtZW50cyAmIENvbXBvbmVudHNcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbjpnbG9iYWwoYSksXG46Z2xvYmFsKGxpKSxcbjpnbG9iYWwocCkge1xuICBmb250LXNpemU6IDFyZW07IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XG4gICAgOmdsb2JhbChhKSxcbiAgICA6Z2xvYmFsKGxpKSxcbiAgICA6Z2xvYmFsKHApIHtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTsgfSB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjdweCkge1xuICAgIDpnbG9iYWwoYSksXG4gICAgOmdsb2JhbChsaSksXG4gICAgOmdsb2JhbChwKSB7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTsgfSB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDIzcHgpIHtcbiAgICA6Z2xvYmFsKGEpLFxuICAgIDpnbG9iYWwobGkpLFxuICAgIDpnbG9iYWwocCkge1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07IH0gfVxuXG46Z2xvYmFsKHApIHtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgbWF4LXdpZHRoOiAzMHJlbTsgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY3cHgpIHtcbiAgICA6Z2xvYmFsKHApIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICBtYXgtd2lkdGg6IDMwcmVtOyB9IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjNweCkge1xuICAgIDpnbG9iYWwocCkge1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgIG1heC13aWR0aDogNDByZW07IH0gfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTI3OXB4KSB7XG4gICAgOmdsb2JhbChwKSB7XG4gICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgbWF4LXdpZHRoOiA1MHJlbTsgfSB9XG5cbjpnbG9iYWwoLnRleHQtbGlnaHRlcikge1xuICBjb2xvcjogIzY2NjsgfVxuXG46Z2xvYmFsKGEpIHtcbiAgY29sb3I6IGJsdWU7IH1cbiAgOmdsb2JhbChhOmhvdmVyKSB7XG4gICAgY29sb3I6ICM0YjRiZmQ7IH1cblxuLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4wIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xuLyogRG9jdW1lbnRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxuICovXG46Z2xvYmFsKGh0bWwpIHtcbiAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gIC8qIDEgKi9cbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAvKiAyICovIH1cblxuLyogU2VjdGlvbnNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKipcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cbiAqL1xuOmdsb2JhbChib2R5KSB7XG4gIG1hcmdpbjogMDsgfVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXG4gKi9cbjpnbG9iYWwoaDEpIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIG1hcmdpbjogMC42N2VtIDA7IH1cblxuLyogR3JvdXBpbmcgY29udGVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qKlxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxuICovXG46Z2xvYmFsKGhyKSB7XG4gIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIC8qIDEgKi9cbiAgaGVpZ2h0OiAwO1xuICAvKiAxICovXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICAvKiAyICovIH1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxuICovXG46Z2xvYmFsKHByZSkge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XG4gIC8qIDEgKi9cbiAgZm9udC1zaXplOiAxZW07XG4gIC8qIDIgKi8gfVxuXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qKlxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxuICovXG46Z2xvYmFsKGEpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cblxuLyoqXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cbiAqL1xuOmdsb2JhbChhYmJyW3RpdGxlXSkge1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICAvKiAxICovXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAvKiAyICovXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcbiAgLyogMiAqLyB9XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cbiAqL1xuOmdsb2JhbChiKSxcbjpnbG9iYWwoc3Ryb25nKSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7IH1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxuICovXG46Z2xvYmFsKGNvZGUpLFxuOmdsb2JhbChrYmQpLFxuOmdsb2JhbChzYW1wKSB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcbiAgLyogMSAqL1xuICBmb250LXNpemU6IDFlbTtcbiAgLyogMiAqLyB9XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cbjpnbG9iYWwoc21hbGwpIHtcbiAgZm9udC1zaXplOiA4MCU7IH1cblxuLyoqXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cbiAqIGFsbCBicm93c2Vycy5cbiAqL1xuOmdsb2JhbChzdWIpLFxuOmdsb2JhbChzdXApIHtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgfVxuXG46Z2xvYmFsKHN1Yikge1xuICBib3R0b206IC0wLjI1ZW07IH1cblxuOmdsb2JhbChzdXApIHtcbiAgdG9wOiAtMC41ZW07IH1cblxuLyogRW1iZWRkZWQgY29udGVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qKlxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cbiAqL1xuOmdsb2JhbChpbWcpIHtcbiAgYm9yZGVyLXN0eWxlOiBub25lOyB9XG5cbi8qIEZvcm1zXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyoqXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cbiAqL1xuOmdsb2JhbChidXR0b24pLFxuOmdsb2JhbChpbnB1dCksXG46Z2xvYmFsKG9wdGdyb3VwKSxcbjpnbG9iYWwoc2VsZWN0KSxcbjpnbG9iYWwodGV4dGFyZWEpIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIC8qIDEgKi9cbiAgZm9udC1zaXplOiAxMDAlO1xuICAvKiAxICovXG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAvKiAxICovXG4gIG1hcmdpbjogMDtcbiAgLyogMiAqLyB9XG5cbi8qKlxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxuICovXG46Z2xvYmFsKGJ1dHRvbiksXG46Z2xvYmFsKGlucHV0KSB7XG4gIC8qIDEgKi9cbiAgb3ZlcmZsb3c6IHZpc2libGU7IH1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cbiAqL1xuOmdsb2JhbChidXR0b24pLFxuOmdsb2JhbChzZWxlY3QpIHtcbiAgLyogMSAqL1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTsgfVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4gKi9cbjpnbG9iYWwoYnV0dG9uKSxcbjpnbG9iYWwoW3R5cGU9XCJidXR0b25cIl0pLFxuOmdsb2JhbChbdHlwZT1cInJlc2V0XCJdKSxcbjpnbG9iYWwoW3R5cGU9XCJzdWJtaXRcIl0pIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IH1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxuICovXG46Z2xvYmFsKGJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lciksXG46Z2xvYmFsKFt0eXBlPVwiYnV0dG9uXCJdOjotbW96LWZvY3VzLWlubmVyKSxcbjpnbG9iYWwoW3R5cGU9XCJyZXNldFwiXTo6LW1vei1mb2N1cy1pbm5lciksXG46Z2xvYmFsKFt0eXBlPVwic3VibWl0XCJdOjotbW96LWZvY3VzLWlubmVyKSB7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDsgfVxuXG4vKipcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cbiAqL1xuOmdsb2JhbChidXR0b246LW1vei1mb2N1c3JpbmcpLFxuOmdsb2JhbChbdHlwZT1cImJ1dHRvblwiXTotbW96LWZvY3VzcmluZyksXG46Z2xvYmFsKFt0eXBlPVwicmVzZXRcIl06LW1vei1mb2N1c3JpbmcpLFxuOmdsb2JhbChbdHlwZT1cInN1Ym1pdFwiXTotbW96LWZvY3VzcmluZykge1xuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7IH1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXG4gKi9cbjpnbG9iYWwoZmllbGRzZXQpIHtcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtOyB9XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxuICovXG46Z2xvYmFsKGxlZ2VuZCkge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLyogMSAqL1xuICBjb2xvcjogaW5oZXJpdDtcbiAgLyogMiAqL1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgLyogMSAqL1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIC8qIDEgKi9cbiAgcGFkZGluZzogMDtcbiAgLyogMyAqL1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAvKiAxICovIH1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxuICovXG46Z2xvYmFsKHByb2dyZXNzKSB7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgfVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxuICovXG46Z2xvYmFsKHRleHRhcmVhKSB7XG4gIG92ZXJmbG93OiBhdXRvOyB9XG5cbi8qKlxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXG4gKi9cbjpnbG9iYWwoW3R5cGU9XCJjaGVja2JveFwiXSksXG46Z2xvYmFsKFt0eXBlPVwicmFkaW9cIl0pIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC8qIDEgKi9cbiAgcGFkZGluZzogMDtcbiAgLyogMiAqLyB9XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxuICovXG46Z2xvYmFsKFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uKSxcbjpnbG9iYWwoW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24pIHtcbiAgaGVpZ2h0OiBhdXRvOyB9XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cbiAqL1xuOmdsb2JhbChbdHlwZT1cInNlYXJjaFwiXSkge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgLyogMSAqL1xuICBvdXRsaW5lLW9mZnNldDogLTJweDtcbiAgLyogMiAqLyB9XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxuICovXG46Z2xvYmFsKFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uKSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgfVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXG4gKi9cbjpnbG9iYWwoOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbikge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbiAgLyogMSAqL1xuICBmb250OiBpbmhlcml0O1xuICAvKiAyICovIH1cblxuLyogSW50ZXJhY3RpdmVcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cbiAqL1xuOmdsb2JhbChkZXRhaWxzKSB7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG5cbi8qXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cbjpnbG9iYWwoc3VtbWFyeSkge1xuICBkaXNwbGF5OiBsaXN0LWl0ZW07IH1cblxuLyogTWlzY1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxuICovXG46Z2xvYmFsKHRlbXBsYXRlKSB7XG4gIGRpc3BsYXk6IG5vbmU7IH1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cbiAqL1xuOmdsb2JhbChbaGlkZGVuXSkge1xuICBkaXNwbGF5OiBub25lOyB9XG5cbjpnbG9iYWwoYm9keSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICB6LWluZGV4OiAxO1xuICBjb2xvcjogIzIyMjtcbiAgcGFkZGluZzogMnJlbTtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgbWF4LXdpZHRoOiAxMDI0cHg7XG4gIG1hcmdpbjogYXV0bzsgfVxuXG46Z2xvYmFsKHNlY3Rpb24jYWJvdXQpIHtcbiAgbWFyZ2luLXRvcDogMnJlbTsgfVxuXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gIDpnbG9iYWwoaDEpLFxuICA6Z2xvYmFsKGgyKSxcbiAgOmdsb2JhbChoMyksXG4gIDpnbG9iYWwoaDQpLFxuICA6Z2xvYmFsKGg1KSxcbiAgOmdsb2JhbChwKSB7XG4gICAgY29sb3I6ICNmMmYyZjIgIWltcG9ydGFudDsgfVxuICA6Z2xvYmFsKGJvZHkpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYxZjFmICFpbXBvcnRhbnQ7IH1cbiAgOmdsb2JhbCguc21pbGV5LWNpcmNsZSkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODE4MTggIWltcG9ydGFudDsgfVxuICA6Z2xvYmFsKGJ1dHRvbikge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjFmMWYgIWltcG9ydGFudDsgfVxuICAgIDpnbG9iYWwoYnV0dG9uIGEpIHtcbiAgICAgIGNvbG9yOiAjZjJmMmYyICFpbXBvcnRhbnQ7IH1cbiAgICA6Z2xvYmFsKGJ1dHRvbiBzdmcpIHtcbiAgICAgIGZpbGw6ICNmMmYyZjIgIWltcG9ydGFudDsgfSB9XG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXliM1YwWlhNdlgyeGhlVzkxZEM1emRtVnNkR1VpWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN096czdRMEZKUXp0QlFVTkVPenM3TzBOQlNVTTdRVUZEUkRzN096dERRVWxETzBGQlEwUTdSVUZEUlN4bFFVRmxMRVZCUVVVN08wRkJSVzVDTzBWQlEwVXNaVUZCWlR0RlFVTm1MR2RDUVVGblFpeEZRVUZGTzBWQlEyeENPMGxCUTBVN1RVRkRSU3huUWtGQlowSXNSVUZCUlN4RlFVRkZPMFZCUTNoQ08wbEJRMFU3VFVGRFJTeG5Ra0ZCWjBJc1JVRkJSU3hGUVVGRk96dEJRVVV4UWpzN096dERRVWxETzBGQlEwUTdSVUZEUlN4dFFrRkJiVUk3UlVGRGJrSXNZMEZCWXl4RlFVRkZPMFZCUTJoQ08wbEJRMFU3VFVGRFJTeHRRa0ZCYlVJc1JVRkJSU3hGUVVGRk8wVkJRek5DTzBsQlEwVTdUVUZEUlN4dFFrRkJiVUk3VFVGRGJrSXNZMEZCWXl4RlFVRkZMRVZCUVVVN1JVRkRkRUk3U1VGRFJUdE5RVU5GTEcxQ1FVRnRRaXhGUVVGRkxFVkJRVVU3UlVGRE0wSTdTVUZEUlR0TlFVTkZMRzFDUVVGdFFqdE5RVU51UWl4alFVRmpMRVZCUVVVc1JVRkJSVHRGUVVOMFFqdEpRVU5GTzAxQlEwVXNhMEpCUVd0Q0xFVkJRVVVzUlVGQlJUczdRVUZGTlVJN096czdRMEZKUXp0QlFVTkVPMFZCUTBVc1pVRkJaU3hGUVVGRk8wVkJRMnBDTzBsQlEwVTdUVUZEUlN4dFFrRkJiVUlzUlVGQlJTeEZRVUZGTzBWQlF6TkNPMGxCUTBVN1RVRkRSU3h0UWtGQmJVSXNSVUZCUlN4RlFVRkZPMFZCUXpOQ08wbEJRMFU3VFVGRFJTeHRRa0ZCYlVJc1JVRkJSU3hGUVVGRk8wVkJRek5DTzBsQlEwVTdUVUZEUlN4dFFrRkJiVUlzUlVGQlJTeEZRVUZGTzBWQlF6TkNPMGxCUTBVN1RVRkRSU3hwUWtGQmFVSXNSVUZCUlN4RlFVRkZPenRCUVVVelFqczdPenREUVVsRE8wRkJRMFE3UlVGRFJTeHRRa0ZCYlVJc1JVRkJSVHRGUVVOeVFqdEpRVU5GTzAxQlEwVXNhMEpCUVd0Q0xFVkJRVVVzUlVGQlJUdEZRVU14UWp0SlFVTkZPMDFCUTBVc2JVSkJRVzFDTEVWQlFVVXNSVUZCUlR0RlFVTXpRanRKUVVORk8wMUJRMFVzYlVKQlFXMUNMRVZCUVVVc1JVRkJSVHRGUVVNelFqdEpRVU5GTzAxQlEwVXNiVUpCUVcxQ0xFVkJRVVVzUlVGQlJUdEZRVU16UWp0SlFVTkZPMDFCUTBVc2JVSkJRVzFDTEVWQlFVVXNSVUZCUlRzN1FVRkZOMEk3T3pzN1EwRkpRenRCUVVORU8wVkJRMFVzYlVKQlFXMUNMRVZCUVVVN1JVRkRja0k3U1VGRFJUdE5RVU5GTEdsQ1FVRnBRaXhGUVVGRkxFVkJRVVU3UlVGRGVrSTdTVUZEUlR0TlFVTkZMR3RDUVVGclFpeEZRVUZGTEVWQlFVVTdSVUZETVVJN1NVRkRSVHROUVVORkxHMUNRVUZ0UWl4RlFVRkZMRVZCUVVVN1JVRkRNMEk3U1VGRFJUdE5RVU5GTEcxQ1FVRnRRaXhGUVVGRkxFVkJRVVU3UlVGRE0wSTdTVUZEUlR0TlFVTkZMRzFDUVVGdFFpeEZRVUZGTEVWQlFVVTdPMEZCUlRkQ096czdPME5CU1VNN1FVRkRSRHRGUVVORkxHMUNRVUZ0UWl4RlFVRkZPMFZCUTNKQ08wbEJRMFU3VFVGRFJTeGxRVUZsTEVWQlFVVXNSVUZCUlR0RlFVTjJRanRKUVVORk8wMUJRMFVzYVVKQlFXbENMRVZCUVVVc1JVRkJSVHRGUVVONlFqdEpRVU5GTzAxQlEwVXNhMEpCUVd0Q0xFVkJRVVVzUlVGQlJUdEZRVU14UWp0SlFVTkZPMDFCUTBVc2JVSkJRVzFDTEVWQlFVVXNSVUZCUlR0RlFVTXpRanRKUVVORk8wMUJRMFVzYlVKQlFXMUNMRVZCUVVVc1JVRkJSVHM3UVVGRk4wSTdPenM3UTBGSlF6dEJRVU5FTzBWQlEwVXNiVUpCUVcxQ0xFVkJRVVU3UlVGRGNrSTdTVUZEUlR0TlFVTkZMRzFDUVVGdFFpeEZRVUZGTEVWQlFVVTdSVUZETTBJN1NVRkRSVHROUVVORkxHVkJRV1VzUlVGQlJTeEZRVUZGTzBWQlEzWkNPMGxCUTBVN1RVRkRSU3hwUWtGQmFVSXNSVUZCUlN4RlFVRkZPMFZCUTNwQ08wbEJRMFU3VFVGRFJTeHJRa0ZCYTBJc1JVRkJSU3hGUVVGRk8wVkJRekZDTzBsQlEwVTdUVUZEUlN4dFFrRkJiVUlzUlVGQlJTeEZRVUZGT3p0QlFVVTNRanM3T3p0RFFVbERPMEZCUTBRN096dEZRVWRGTEdWQlFXVXNSVUZCUlR0RlFVTnFRanRKUVVORk96czdUVUZIUlN4bFFVRmxMRVZCUVVVc1JVRkJSVHRGUVVOMlFqdEpRVU5GT3pzN1RVRkhSU3hwUWtGQmFVSXNSVUZCUlN4RlFVRkZPMFZCUTNwQ08wbEJRMFU3T3p0TlFVZEZMR2xDUVVGcFFpeEZRVUZGTEVWQlFVVTdPMEZCUlROQ08wVkJRMFVzWjBKQlFXZENPMFZCUTJoQ0xHZENRVUZuUWl4RlFVRkZPMFZCUTJ4Q08wbEJRMFU3VFVGRFJTeG5Ra0ZCWjBJN1RVRkRhRUlzWjBKQlFXZENMRVZCUVVVc1JVRkJSVHRGUVVONFFqdEpRVU5GTzAxQlEwVXNaMEpCUVdkQ08wMUJRMmhDTEdkQ1FVRm5RaXhGUVVGRkxFVkJRVVU3UlVGRGVFSTdTVUZEUlR0TlFVTkZMR2RDUVVGblFqdE5RVU5vUWl4blFrRkJaMElzUlVGQlJTeEZRVUZGT3p0QlFVVXhRanRGUVVORkxGZEJRVmNzUlVGQlJUczdRVUZGWmp0RlFVTkZMRmRCUVZjc1JVRkJSVHRGUVVOaU8wbEJRMFVzWTBGQll5eEZRVUZGT3p0QlFVVndRaXd5UlVGQk1rVTdRVUZETTBVN0swVkJReXRGTzBGQlF5OUZPenM3UlVGSFJUdEJRVU5HTzBWQlEwVXNhVUpCUVdsQ08wVkJRMnBDTEUxQlFVMDdSVUZEVGl3NFFrRkJPRUk3UlVGRE9VSXNUVUZCVFN4RlFVRkZPenRCUVVWV095dEZRVU1yUlR0QlFVTXZSVHM3UlVGRlJUdEJRVU5HTzBWQlEwVXNVMEZCVXl4RlFVRkZPenRCUVVWaU96czdSVUZIUlR0QlFVTkdPMFZCUTBVc1kwRkJZenRGUVVOa0xHZENRVUZuUWl4RlFVRkZPenRCUVVWd1Fqc3JSVUZESzBVN1FVRkRMMFU3T3p0RlFVZEZPMEZCUTBZN1JVRkRSU3dyUWtGQkswSTdWVUZEZGtJc2RVSkJRWFZDTzBWQlF5OUNMRTFCUVUwN1JVRkRUaXhUUVVGVE8wVkJRMVFzVFVGQlRUdEZRVU5PTEdsQ1FVRnBRanRGUVVOcVFpeE5RVUZOTEVWQlFVVTdPMEZCUlZZN096dEZRVWRGTzBGQlEwWTdSVUZEUlN4cFEwRkJhVU03UlVGRGFrTXNUVUZCVFR0RlFVTk9MR05CUVdNN1JVRkRaQ3hOUVVGTkxFVkJRVVU3TzBGQlJWWTdLMFZCUXl0Rk8wRkJReTlGT3p0RlFVVkZPMEZCUTBZN1JVRkRSU3cyUWtGQk5rSXNSVUZCUlRzN1FVRkZha003T3p0RlFVZEZPMEZCUTBZN1JVRkRSU3h0UWtGQmJVSTdSVUZEYmtJc1RVRkJUVHRGUVVOT0xEQkNRVUV3UWp0RlFVTXhRaXhOUVVGTk8wVkJRMDRzZVVOQlFYbERPMVZCUTJwRExHbERRVUZwUXp0RlFVTjZReXhOUVVGTkxFVkJRVVU3TzBGQlJWWTdPMFZCUlVVN1FVRkRSanM3UlVGRlJTeHRRa0ZCYlVJc1JVRkJSVHM3UVVGRmRrSTdPenRGUVVkRk8wRkJRMFk3T3p0RlFVZEZMR2xEUVVGcFF6dEZRVU5xUXl4TlFVRk5PMFZCUTA0c1kwRkJZenRGUVVOa0xFMUJRVTBzUlVGQlJUczdRVUZGVmpzN1JVRkZSVHRCUVVOR08wVkJRMFVzWTBGQll5eEZRVUZGT3p0QlFVVnNRanM3TzBWQlIwVTdRVUZEUmpzN1JVRkZSU3hqUVVGak8wVkJRMlFzWTBGQll6dEZRVU5rTEd0Q1FVRnJRanRGUVVOc1FpeDNRa0ZCZDBJc1JVRkJSVHM3UVVGRk5VSTdSVUZEUlN4bFFVRmxMRVZCUVVVN08wRkJSVzVDTzBWQlEwVXNWMEZCVnl4RlFVRkZPenRCUVVWbU95dEZRVU1yUlR0QlFVTXZSVHM3UlVGRlJUdEJRVU5HTzBWQlEwVXNhMEpCUVd0Q0xFVkJRVVU3TzBGQlJYUkNPeXRGUVVNclJUdEJRVU12UlRzN08wVkJSMFU3UVVGRFJqczdPenM3UlVGTFJTeHZRa0ZCYjBJN1JVRkRjRUlzVFVGQlRUdEZRVU5PTEdWQlFXVTdSVUZEWml4TlFVRk5PMFZCUTA0c2FVSkJRV2xDTzBWQlEycENMRTFCUVUwN1JVRkRUaXhUUVVGVE8wVkJRMVFzVFVGQlRTeEZRVUZGT3p0QlFVVldPenM3UlVGSFJUdEJRVU5HT3p0RlFVVkZMRTFCUVUwN1JVRkRUaXhwUWtGQmFVSXNSVUZCUlRzN1FVRkZja0k3T3p0RlFVZEZPMEZCUTBZN08wVkJSVVVzVFVGQlRUdEZRVU5PTEc5Q1FVRnZRaXhGUVVGRk96dEJRVVY0UWpzN1JVRkZSVHRCUVVOR096czdPMFZCU1VVc01FSkJRVEJDTEVWQlFVVTdPMEZCUlRsQ096dEZRVVZGTzBGQlEwWTdPenM3UlVGSlJTeHJRa0ZCYTBJN1JVRkRiRUlzVlVGQlZTeEZRVUZGT3p0QlFVVmtPenRGUVVWRk8wRkJRMFk3T3pzN1JVRkpSU3c0UWtGQk9FSXNSVUZCUlRzN1FVRkZiRU03TzBWQlJVVTdRVUZEUmp0RlFVTkZMRGhDUVVFNFFpeEZRVUZGT3p0QlFVVnNRenM3T3pzN1JVRkxSVHRCUVVOR08wVkJRMFVzT0VKQlFUaENPMVZCUTNSQ0xITkNRVUZ6UWp0RlFVTTVRaXhOUVVGTk8wVkJRMDRzWTBGQll6dEZRVU5rTEUxQlFVMDdSVUZEVGl4alFVRmpPMFZCUTJRc1RVRkJUVHRGUVVOT0xHVkJRV1U3UlVGRFppeE5RVUZOTzBWQlEwNHNWVUZCVlR0RlFVTldMRTFCUVUwN1JVRkRUaXh0UWtGQmJVSTdSVUZEYmtJc1RVRkJUU3hGUVVGRk96dEJRVVZXT3p0RlFVVkZPMEZCUTBZN1JVRkRSU3gzUWtGQmQwSXNSVUZCUlRzN1FVRkZOVUk3TzBWQlJVVTdRVUZEUmp0RlFVTkZMR05CUVdNc1JVRkJSVHM3UVVGRmJFSTdPenRGUVVkRk8wRkJRMFk3TzBWQlJVVXNPRUpCUVRoQ08xVkJRM1JDTEhOQ1FVRnpRanRGUVVNNVFpeE5RVUZOTzBWQlEwNHNWVUZCVlR0RlFVTldMRTFCUVUwc1JVRkJSVHM3UVVGRlZqczdSVUZGUlR0QlFVTkdPenRGUVVWRkxGbEJRVmtzUlVGQlJUczdRVUZGYUVJN096dEZRVWRGTzBGQlEwWTdSVUZEUlN3MlFrRkJOa0k3UlVGRE4wSXNUVUZCVFR0RlFVTk9MRzlDUVVGdlFqdEZRVU53UWl4TlFVRk5MRVZCUVVVN08wRkJSVlk3TzBWQlJVVTdRVUZEUmp0RlFVTkZMSGRDUVVGM1FpeEZRVUZGT3p0QlFVVTFRanM3TzBWQlIwVTdRVUZEUmp0RlFVTkZMREJDUVVFd1FqdEZRVU14UWl4TlFVRk5PMFZCUTA0c1lVRkJZVHRGUVVOaUxFMUJRVTBzUlVGQlJUczdRVUZGVmpzclJVRkRLMFU3UVVGREwwVTdPMFZCUlVVN1FVRkRSanRGUVVORkxHTkJRV01zUlVGQlJUczdRVUZGYkVJN08wVkJSVVU3UVVGRFJqdEZRVU5GTEd0Q1FVRnJRaXhGUVVGRk96dEJRVVYwUWpzclJVRkRLMFU3UVVGREwwVTdPMFZCUlVVN1FVRkRSanRGUVVORkxHRkJRV0VzUlVGQlJUczdRVUZGYWtJN08wVkJSVVU3UVVGRFJqdEZRVU5GTEdGQlFXRXNSVUZCUlRzN1FVRkZha0k3UlVGRFJTeDVRa0ZCZVVJN1JVRkRla0lzVlVGQlZUdEZRVU5XTEZkQlFWYzdSVUZEV0N4aFFVRmhPMFZCUTJJc01rUkJRVEpFTzBWQlF6TkVMR2xDUVVGcFFqdEZRVU5xUWl4WlFVRlpMRVZCUVVVN08wRkJSV2hDTzBWQlEwVXNaMEpCUVdkQ0xFVkJRVVU3TzBGQlJYQkNPMFZCUTBVN096czdPenRKUVUxRkxIbENRVUY1UWl4RlFVRkZPMFZCUXpkQ08wbEJRMFVzYjBOQlFXOURMRVZCUVVVN1JVRkRlRU03U1VGRFJTeHZRMEZCYjBNc1JVRkJSVHRGUVVONFF6dEpRVU5GTEc5RFFVRnZReXhGUVVGRk8wbEJRM1JETzAxQlEwVXNlVUpCUVhsQ0xFVkJRVVU3U1VGRE4wSTdUVUZEUlN4M1FrRkJkMElzUlVGQlJTeEZRVUZGSWl3aVptbHNaU0k2SW5OeVl5OXliM1YwWlhNdlgyeGhlVzkxZEM1emRtVnNkR1VpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdktseHVmQzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0WEc1OElFSnlaV0ZyY0c5cGJuUnpYRzU4TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMxY2Jpb3ZYRzR2S2x4dWZDMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRYRzU4SUUxdlpIVnNZWElnVTJOaGJHVWdVMmw2WlhOY2Jud3RMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMVnh1S2k5Y2JpOHFYRzU4TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMxY2Jud2dVbTl2ZENCRmJHVnRaVzUwYzF4dWZDMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRYRzRxTDF4dU9uSnZiM1FnZTF4dUlDQm1iMjUwTFhOcGVtVTZJREUyY0hnN0lIMWNibHh1YUhSdGJDQjdYRzRnSUdadmJuUXRjMmw2WlRvZ01UQXdKVHRjYmlBZ2JHbHVaUzFvWldsbmFIUTZJREV1TWpzZ2ZWeHVJQ0JBYldWa2FXRWdLRzFwYmkxM2FXUjBhRG9nTkRnd2NIZ3BJSHRjYmlBZ0lDQm9kRzFzSUh0Y2JpQWdJQ0FnSUd4cGJtVXRhR1ZwWjJoME9pQXhMak03SUgwZ2ZWeHVJQ0JBYldWa2FXRWdLRzFwYmkxM2FXUjBhRG9nTnpZM2NIZ3BJSHRjYmlBZ0lDQm9kRzFzSUh0Y2JpQWdJQ0FnSUd4cGJtVXRhR1ZwWjJoME9pQXhMak03SUgwZ2ZWeHVYRzR2S2x4dWZDMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRYRzU4SUVneFhHNThMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzFjYmlvdlhHNW9NU0I3WEc0Z0lHWnZiblF0YzJsNlpUb2dZeUEwTGpOeVpXMDdYRzRnSUcxaGNtZHBiam9nTUM0M2NtVnRPeUI5WEc0Z0lFQnRaV1JwWVNBb2JXbHVMWGRwWkhSb09pQTBPREJ3ZUNrZ2UxeHVJQ0FnSUdneElIdGNiaUFnSUNBZ0lHWnZiblF0YzJsNlpUb2dNaTR3TnpSeVpXMDdJSDBnZlZ4dUlDQkFiV1ZrYVdFZ0tHMXBiaTEzYVdSMGFEb2dOelkzY0hncElIdGNiaUFnSUNCb01TQjdYRzRnSUNBZ0lDQm1iMjUwTFhOcGVtVTZJREl1TkRnNGNtVnRPMXh1SUNBZ0lDQWdiV0Z5WjJsdU9pQXhMalJ5WlcwN0lIMGdmVnh1SUNCQWJXVmthV0VnS0cxcGJpMTNhV1IwYURvZ01UQXlNM0I0S1NCN1hHNGdJQ0FnYURFZ2UxeHVJQ0FnSUNBZ1ptOXVkQzF6YVhwbE9pQXlMams0Tm5KbGJUc2dmU0I5WEc0Z0lFQnRaV1JwWVNBb2JXbHVMWGRwWkhSb09pQXhNamM1Y0hncElIdGNiaUFnSUNCb01TQjdYRzRnSUNBZ0lDQm1iMjUwTFhOcGVtVTZJRE11TlRnemNtVnRPMXh1SUNBZ0lDQWdiV0Z5WjJsdU9pQXlMakZ5WlcwN0lIMGdmVnh1SUNCQWJXVmthV0VnS0cxcGJpMTNhV1IwYURvZ01UVTVPWEI0S1NCN1hHNGdJQ0FnYURFZ2UxeHVJQ0FnSUNBZ1ptOXVkQzF6YVhwbE9pQTFMakUyY21WdE95QjlJSDFjYmx4dUx5cGNibnd0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFZ4dWZDQklNaUJjYm53dExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExWeHVLaTljYm1neUlIdGNiaUFnWm05dWRDMXphWHBsT2lBeGNtVnRPeUI5WEc0Z0lFQnRaV1JwWVNBb2JXbHVMWGRwWkhSb09pQTBPREJ3ZUNrZ2UxeHVJQ0FnSUdneUlIdGNiaUFnSUNBZ0lHWnZiblF0YzJsNlpUb2dNUzQzTWpoeVpXMDdJSDBnZlZ4dUlDQkFiV1ZrYVdFZ0tHMXBiaTEzYVdSMGFEb2dOelkzY0hncElIdGNiaUFnSUNCb01pQjdYRzRnSUNBZ0lDQm1iMjUwTFhOcGVtVTZJREl1TURjMGNtVnRPeUI5SUgxY2JpQWdRRzFsWkdsaElDaHRhVzR0ZDJsa2RHZzZJREV3TWpOd2VDa2dlMXh1SUNBZ0lHZ3lJSHRjYmlBZ0lDQWdJR1p2Ym5RdGMybDZaVG9nTWk0ME9EaHlaVzA3SUgwZ2ZWeHVJQ0JBYldWa2FXRWdLRzFwYmkxM2FXUjBhRG9nTVRJM09YQjRLU0I3WEc0Z0lDQWdhRElnZTF4dUlDQWdJQ0FnWm05dWRDMXphWHBsT2lBeUxqazRObkpsYlRzZ2ZTQjlYRzRnSUVCdFpXUnBZU0FvYldsdUxYZHBaSFJvT2lBeE5UazVjSGdwSUh0Y2JpQWdJQ0JvTWlCN1hHNGdJQ0FnSUNCbWIyNTBMWE5wZW1VNklEUXVNM0psYlRzZ2ZTQjlYRzVjYmk4cVhHNThMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzFjYm53Z1NETmNibnd0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFZ4dUtpOWNibWd6SUh0Y2JpQWdabTl1ZEMxemFYcGxPaUF3TGpnek0zSmxiVHNnZlZ4dUlDQkFiV1ZrYVdFZ0tHMXBiaTEzYVdSMGFEb2dORGd3Y0hncElIdGNiaUFnSUNCb015QjdYRzRnSUNBZ0lDQm1iMjUwTFhOcGVtVTZJREV1TkRSeVpXMDdJSDBnZlZ4dUlDQkFiV1ZrYVdFZ0tHMXBiaTEzYVdSMGFEb2dOelkzY0hncElIdGNiaUFnSUNCb015QjdYRzRnSUNBZ0lDQm1iMjUwTFhOcGVtVTZJREV1TnpJNGNtVnRPeUI5SUgxY2JpQWdRRzFsWkdsaElDaHRhVzR0ZDJsa2RHZzZJREV3TWpOd2VDa2dlMXh1SUNBZ0lHZ3pJSHRjYmlBZ0lDQWdJR1p2Ym5RdGMybDZaVG9nTWk0d056UnlaVzA3SUgwZ2ZWeHVJQ0JBYldWa2FXRWdLRzFwYmkxM2FXUjBhRG9nTVRJM09YQjRLU0I3WEc0Z0lDQWdhRE1nZTF4dUlDQWdJQ0FnWm05dWRDMXphWHBsT2lBeUxqUTRPSEpsYlRzZ2ZTQjlYRzRnSUVCdFpXUnBZU0FvYldsdUxYZHBaSFJvT2lBeE5UazVjSGdwSUh0Y2JpQWdJQ0JvTXlCN1hHNGdJQ0FnSUNCbWIyNTBMWE5wZW1VNklETXVOVGd6Y21WdE95QjlJSDFjYmx4dUx5cGNibnd0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFZ4dWZDQklORnh1ZkMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdFhHNHFMMXh1YURRZ2UxeHVJQ0JtYjI1MExYTnBlbVU2SURBdU5qazBjbVZ0T3lCOVhHNGdJRUJ0WldScFlTQW9iV2x1TFhkcFpIUm9PaUEwT0RCd2VDa2dlMXh1SUNBZ0lHZzBJSHRjYmlBZ0lDQWdJR1p2Ym5RdGMybDZaVG9nTVM0eWNtVnRPeUI5SUgxY2JpQWdRRzFsWkdsaElDaHRhVzR0ZDJsa2RHZzZJRGMyTjNCNEtTQjdYRzRnSUNBZ2FEUWdlMXh1SUNBZ0lDQWdabTl1ZEMxemFYcGxPaUF4TGpRMGNtVnRPeUI5SUgxY2JpQWdRRzFsWkdsaElDaHRhVzR0ZDJsa2RHZzZJREV3TWpOd2VDa2dlMXh1SUNBZ0lHZzBJSHRjYmlBZ0lDQWdJR1p2Ym5RdGMybDZaVG9nTVM0M01qaHlaVzA3SUgwZ2ZWeHVJQ0JBYldWa2FXRWdLRzFwYmkxM2FXUjBhRG9nTVRJM09YQjRLU0I3WEc0Z0lDQWdhRFFnZTF4dUlDQWdJQ0FnWm05dWRDMXphWHBsT2lBeUxqQTNOSEpsYlRzZ2ZTQjlYRzRnSUVCdFpXUnBZU0FvYldsdUxYZHBaSFJvT2lBeE5UazVjSGdwSUh0Y2JpQWdJQ0JvTkNCN1hHNGdJQ0FnSUNCbWIyNTBMWE5wZW1VNklESXVPVGcyY21WdE95QjlJSDFjYmx4dUx5cGNibnd0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFZ4dWZDQklOVnh1ZkMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdFhHNHFMMXh1YURVZ2UxeHVJQ0JtYjI1MExYTnBlbVU2SURBdU5qazBjbVZ0T3lCOVhHNGdJRUJ0WldScFlTQW9iV2x1TFhkcFpIUm9PaUEwT0RCd2VDa2dlMXh1SUNBZ0lHZzFJSHRjYmlBZ0lDQWdJR1p2Ym5RdGMybDZaVG9nTVhKbGJUc2dmU0I5WEc0Z0lFQnRaV1JwWVNBb2JXbHVMWGRwWkhSb09pQTNOamR3ZUNrZ2UxeHVJQ0FnSUdnMUlIdGNiaUFnSUNBZ0lHWnZiblF0YzJsNlpUb2dNUzR5Y21WdE95QjlJSDFjYmlBZ1FHMWxaR2xoSUNodGFXNHRkMmxrZEdnNklERXdNak53ZUNrZ2UxeHVJQ0FnSUdnMUlIdGNiaUFnSUNBZ0lHWnZiblF0YzJsNlpUb2dNUzQwTkhKbGJUc2dmU0I5WEc0Z0lFQnRaV1JwWVNBb2JXbHVMWGRwWkhSb09pQXhNamM1Y0hncElIdGNiaUFnSUNCb05TQjdYRzRnSUNBZ0lDQm1iMjUwTFhOcGVtVTZJREV1TnpJNGNtVnRPeUI5SUgxY2JpQWdRRzFsWkdsaElDaHRhVzR0ZDJsa2RHZzZJREUxT1Rsd2VDa2dlMXh1SUNBZ0lHZzFJSHRjYmlBZ0lDQWdJR1p2Ym5RdGMybDZaVG9nTWk0ME9EaHlaVzA3SUgwZ2ZWeHVYRzR2S2x4dWZDMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRYRzU4SUVnMlhHNThMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzFjYmlvdlhHNW9OaUI3WEc0Z0lHWnZiblF0YzJsNlpUb2dNQzQyT1RSeVpXMDdJSDFjYmlBZ1FHMWxaR2xoSUNodGFXNHRkMmxrZEdnNklEUTRNSEI0S1NCN1hHNGdJQ0FnYURZZ2UxeHVJQ0FnSUNBZ1ptOXVkQzF6YVhwbE9pQXdMamd6TTNKbGJUc2dmU0I5WEc0Z0lFQnRaV1JwWVNBb2JXbHVMWGRwWkhSb09pQTNOamR3ZUNrZ2UxeHVJQ0FnSUdnMklIdGNiaUFnSUNBZ0lHWnZiblF0YzJsNlpUb2dNWEpsYlRzZ2ZTQjlYRzRnSUVCdFpXUnBZU0FvYldsdUxYZHBaSFJvT2lBeE1ESXpjSGdwSUh0Y2JpQWdJQ0JvTmlCN1hHNGdJQ0FnSUNCbWIyNTBMWE5wZW1VNklERXVNbkpsYlRzZ2ZTQjlYRzRnSUVCdFpXUnBZU0FvYldsdUxYZHBaSFJvT2lBeE1qYzVjSGdwSUh0Y2JpQWdJQ0JvTmlCN1hHNGdJQ0FnSUNCbWIyNTBMWE5wZW1VNklERXVORFJ5WlcwN0lIMGdmVnh1SUNCQWJXVmthV0VnS0cxcGJpMTNhV1IwYURvZ01UVTVPWEI0S1NCN1hHNGdJQ0FnYURZZ2UxeHVJQ0FnSUNBZ1ptOXVkQzF6YVhwbE9pQXlMakEzTkhKbGJUc2dmU0I5WEc1Y2JpOHFYRzU4TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMxY2Jud2dSV3hsYldWdWRITWdKaUJEYjIxd2IyNWxiblJ6WEc1OExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMWNiaW92WEc1aExGeHViR2tzWEc1d0lIdGNiaUFnWm05dWRDMXphWHBsT2lBeGNtVnRPeUI5WEc0Z0lFQnRaV1JwWVNBb2JXbHVMWGRwWkhSb09pQTBPREJ3ZUNrZ2UxeHVJQ0FnSUdFc1hHNGdJQ0FnYkdrc1hHNGdJQ0FnY0NCN1hHNGdJQ0FnSUNCbWIyNTBMWE5wZW1VNklERnlaVzA3SUgwZ2ZWeHVJQ0JBYldWa2FXRWdLRzFwYmkxM2FXUjBhRG9nTnpZM2NIZ3BJSHRjYmlBZ0lDQmhMRnh1SUNBZ0lHeHBMRnh1SUNBZ0lIQWdlMXh1SUNBZ0lDQWdabTl1ZEMxemFYcGxPaUF4TGpKeVpXMDdJSDBnZlZ4dUlDQkFiV1ZrYVdFZ0tHMXBiaTEzYVdSMGFEb2dNVEF5TTNCNEtTQjdYRzRnSUNBZ1lTeGNiaUFnSUNCc2FTeGNiaUFnSUNCd0lIdGNiaUFnSUNBZ0lHWnZiblF0YzJsNlpUb2dNUzR5Y21WdE95QjlJSDFjYmx4dWNDQjdYRzRnSUd4cGJtVXRhR1ZwWjJoME9pQXhMak03WEc0Z0lHMWhlQzEzYVdSMGFEb2dNekJ5WlcwN0lIMWNiaUFnUUcxbFpHbGhJQ2h0YVc0dGQybGtkR2c2SURjMk4zQjRLU0I3WEc0Z0lDQWdjQ0I3WEc0Z0lDQWdJQ0JzYVc1bExXaGxhV2RvZERvZ01TNDBPMXh1SUNBZ0lDQWdiV0Y0TFhkcFpIUm9PaUF6TUhKbGJUc2dmU0I5WEc0Z0lFQnRaV1JwWVNBb2JXbHVMWGRwWkhSb09pQXhNREl6Y0hncElIdGNiaUFnSUNCd0lIdGNiaUFnSUNBZ0lHeHBibVV0YUdWcFoyaDBPaUF4TGpRN1hHNGdJQ0FnSUNCdFlYZ3RkMmxrZEdnNklEUXdjbVZ0T3lCOUlIMWNiaUFnUUcxbFpHbGhJQ2h0YVc0dGQybGtkR2c2SURFeU56bHdlQ2tnZTF4dUlDQWdJSEFnZTF4dUlDQWdJQ0FnYkdsdVpTMW9aV2xuYUhRNklERXVORHRjYmlBZ0lDQWdJRzFoZUMxM2FXUjBhRG9nTlRCeVpXMDdJSDBnZlZ4dVhHNHVkR1Y0ZEMxc2FXZG9kR1Z5SUh0Y2JpQWdZMjlzYjNJNklDTTJOalk3SUgxY2JseHVZU0I3WEc0Z0lHTnZiRzl5T2lCaWJIVmxPeUI5WEc0Z0lHRTZhRzkyWlhJZ2UxeHVJQ0FnSUdOdmJHOXlPaUFqTkdJMFltWmtPeUI5WEc1Y2JpOHFJU0J1YjNKdFlXeHBlbVV1WTNOeklIWTRMakF1TUNCOElFMUpWQ0JNYVdObGJuTmxJSHdnWjJsMGFIVmlMbU52YlM5dVpXTnZiR0Z6TDI1dmNtMWhiR2w2WlM1amMzTWdLaTljYmk4cUlFUnZZM1Z0Wlc1MFhHNGdJQ0E5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFNBcUwxeHVMeW9xWEc0Z0tpQXhMaUJEYjNKeVpXTjBJSFJvWlNCc2FXNWxJR2hsYVdkb2RDQnBiaUJoYkd3Z1luSnZkM05sY25NdVhHNGdLaUF5TGlCUWNtVjJaVzUwSUdGa2FuVnpkRzFsYm5SeklHOW1JR1p2Ym5RZ2MybDZaU0JoWm5SbGNpQnZjbWxsYm5SaGRHbHZiaUJqYUdGdVoyVnpJR2x1SUdsUFV5NWNiaUFxTDF4dWFIUnRiQ0I3WEc0Z0lHeHBibVV0YUdWcFoyaDBPaUF4TGpFMU8xeHVJQ0F2S2lBeElDb3ZYRzRnSUMxM1pXSnJhWFF0ZEdWNGRDMXphWHBsTFdGa2FuVnpkRG9nTVRBd0pUdGNiaUFnTHlvZ01pQXFMeUI5WEc1Y2JpOHFJRk5sWTNScGIyNXpYRzRnSUNBOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBTQXFMMXh1THlvcVhHNGdLaUJTWlcxdmRtVWdkR2hsSUcxaGNtZHBiaUJwYmlCaGJHd2dZbkp2ZDNObGNuTXVYRzRnS2k5Y2JtSnZaSGtnZTF4dUlDQnRZWEpuYVc0NklEQTdJSDFjYmx4dUx5b3FYRzRnS2lCRGIzSnlaV04wSUhSb1pTQm1iMjUwSUhOcGVtVWdZVzVrSUcxaGNtZHBiaUJ2YmlCZ2FERmdJR1ZzWlcxbGJuUnpJSGRwZEdocGJpQmdjMlZqZEdsdmJtQWdZVzVrWEc0Z0tpQmdZWEowYVdOc1pXQWdZMjl1ZEdWNGRITWdhVzRnUTJoeWIyMWxMQ0JHYVhKbFptOTRMQ0JoYm1RZ1UyRm1ZWEpwTGx4dUlDb3ZYRzVvTVNCN1hHNGdJR1p2Ym5RdGMybDZaVG9nTW1WdE8xeHVJQ0J0WVhKbmFXNDZJREF1TmpkbGJTQXdPeUI5WEc1Y2JpOHFJRWR5YjNWd2FXNW5JR052Ym5SbGJuUmNiaUFnSUQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOUlDb3ZYRzR2S2lwY2JpQXFJREV1SUVGa1pDQjBhR1VnWTI5eWNtVmpkQ0JpYjNnZ2MybDZhVzVuSUdsdUlFWnBjbVZtYjNndVhHNGdLaUF5TGlCVGFHOTNJSFJvWlNCdmRtVnlabXh2ZHlCcGJpQkZaR2RsSUdGdVpDQkpSUzVjYmlBcUwxeHVhSElnZTF4dUlDQXRkMlZpYTJsMExXSnZlQzF6YVhwcGJtYzZJR052Ym5SbGJuUXRZbTk0TzF4dUlDQWdJQ0FnSUNBZ0lHSnZlQzF6YVhwcGJtYzZJR052Ym5SbGJuUXRZbTk0TzF4dUlDQXZLaUF4SUNvdlhHNGdJR2hsYVdkb2REb2dNRHRjYmlBZ0x5b2dNU0FxTDF4dUlDQnZkbVZ5Wm14dmR6b2dkbWx6YVdKc1pUdGNiaUFnTHlvZ01pQXFMeUI5WEc1Y2JpOHFLbHh1SUNvZ01TNGdRMjl5Y21WamRDQjBhR1VnYVc1b1pYSnBkR0Z1WTJVZ1lXNWtJSE5qWVd4cGJtY2diMllnWm05dWRDQnphWHBsSUdsdUlHRnNiQ0JpY205M2MyVnljeTVjYmlBcUlESXVJRU52Y25KbFkzUWdkR2hsSUc5a1pDQmdaVzFnSUdadmJuUWdjMmw2YVc1bklHbHVJR0ZzYkNCaWNtOTNjMlZ5Y3k1Y2JpQXFMMXh1Y0hKbElIdGNiaUFnWm05dWRDMW1ZVzFwYkhrNklHMXZibTl6Y0dGalpTd2diVzl1YjNOd1lXTmxPMXh1SUNBdktpQXhJQ292WEc0Z0lHWnZiblF0YzJsNlpUb2dNV1Z0TzF4dUlDQXZLaUF5SUNvdklIMWNibHh1THlvZ1ZHVjRkQzFzWlhabGJDQnpaVzFoYm5ScFkzTmNiaUFnSUQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOUlDb3ZYRzR2S2lwY2JpQXFJRkpsYlc5MlpTQjBhR1VnWjNKaGVTQmlZV05yWjNKdmRXNWtJRzl1SUdGamRHbDJaU0JzYVc1cmN5QnBiaUJKUlNBeE1DNWNiaUFxTDF4dVlTQjdYRzRnSUdKaFkydG5jbTkxYm1RdFkyOXNiM0k2SUhSeVlXNXpjR0Z5Wlc1ME95QjlYRzVjYmk4cUtseHVJQ29nTVM0Z1VtVnRiM1psSUhSb1pTQmliM1IwYjIwZ1ltOXlaR1Z5SUdsdUlFTm9jbTl0WlNBMU55MWNiaUFxSURJdUlFRmtaQ0IwYUdVZ1kyOXljbVZqZENCMFpYaDBJR1JsWTI5eVlYUnBiMjRnYVc0Z1EyaHliMjFsTENCRlpHZGxMQ0JKUlN3Z1QzQmxjbUVzSUdGdVpDQlRZV1poY21rdVhHNGdLaTljYm1GaVluSmJkR2wwYkdWZElIdGNiaUFnWW05eVpHVnlMV0p2ZEhSdmJUb2dibTl1WlR0Y2JpQWdMeW9nTVNBcUwxeHVJQ0IwWlhoMExXUmxZMjl5WVhScGIyNDZJSFZ1WkdWeWJHbHVaVHRjYmlBZ0x5b2dNaUFxTDF4dUlDQXRkMlZpYTJsMExYUmxlSFF0WkdWamIzSmhkR2x2YmpvZ2RXNWtaWEpzYVc1bElHUnZkSFJsWkR0Y2JpQWdJQ0FnSUNBZ0lDQjBaWGgwTFdSbFkyOXlZWFJwYjI0NklIVnVaR1Z5YkdsdVpTQmtiM1IwWldRN1hHNGdJQzhxSURJZ0tpOGdmVnh1WEc0dktpcGNiaUFxSUVGa1pDQjBhR1VnWTI5eWNtVmpkQ0JtYjI1MElIZGxhV2RvZENCcGJpQkRhSEp2YldVc0lFVmtaMlVzSUdGdVpDQlRZV1poY21rdVhHNGdLaTljYm1Jc1hHNXpkSEp2Ym1jZ2UxeHVJQ0JtYjI1MExYZGxhV2RvZERvZ1ltOXNaR1Z5T3lCOVhHNWNiaThxS2x4dUlDb2dNUzRnUTI5eWNtVmpkQ0IwYUdVZ2FXNW9aWEpwZEdGdVkyVWdZVzVrSUhOallXeHBibWNnYjJZZ1ptOXVkQ0J6YVhwbElHbHVJR0ZzYkNCaWNtOTNjMlZ5Y3k1Y2JpQXFJREl1SUVOdmNuSmxZM1FnZEdobElHOWtaQ0JnWlcxZ0lHWnZiblFnYzJsNmFXNW5JR2x1SUdGc2JDQmljbTkzYzJWeWN5NWNiaUFxTDF4dVkyOWtaU3hjYm10aVpDeGNibk5oYlhBZ2UxeHVJQ0JtYjI1MExXWmhiV2xzZVRvZ2JXOXViM053WVdObExDQnRiMjV2YzNCaFkyVTdYRzRnSUM4cUlERWdLaTljYmlBZ1ptOXVkQzF6YVhwbE9pQXhaVzA3WEc0Z0lDOHFJRElnS2k4Z2ZWeHVYRzR2S2lwY2JpQXFJRUZrWkNCMGFHVWdZMjl5Y21WamRDQm1iMjUwSUhOcGVtVWdhVzRnWVd4c0lHSnliM2R6WlhKekxseHVJQ292WEc1emJXRnNiQ0I3WEc0Z0lHWnZiblF0YzJsNlpUb2dPREFsT3lCOVhHNWNiaThxS2x4dUlDb2dVSEpsZG1WdWRDQmdjM1ZpWUNCaGJtUWdZSE4xY0dBZ1pXeGxiV1Z1ZEhNZ1puSnZiU0JoWm1abFkzUnBibWNnZEdobElHeHBibVVnYUdWcFoyaDBJR2x1WEc0Z0tpQmhiR3dnWW5KdmQzTmxjbk11WEc0Z0tpOWNibk4xWWl4Y2JuTjFjQ0I3WEc0Z0lHWnZiblF0YzJsNlpUb2dOelVsTzF4dUlDQnNhVzVsTFdobGFXZG9kRG9nTUR0Y2JpQWdjRzl6YVhScGIyNDZJSEpsYkdGMGFYWmxPMXh1SUNCMlpYSjBhV05oYkMxaGJHbG5iam9nWW1GelpXeHBibVU3SUgxY2JseHVjM1ZpSUh0Y2JpQWdZbTkwZEc5dE9pQXRNQzR5TldWdE95QjlYRzVjYm5OMWNDQjdYRzRnSUhSdmNEb2dMVEF1TldWdE95QjlYRzVjYmk4cUlFVnRZbVZrWkdWa0lHTnZiblJsYm5SY2JpQWdJRDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5SUNvdlhHNHZLaXBjYmlBcUlGSmxiVzkyWlNCMGFHVWdZbTl5WkdWeUlHOXVJR2x0WVdkbGN5QnBibk5wWkdVZ2JHbHVhM01nYVc0Z1NVVWdNVEF1WEc0Z0tpOWNibWx0WnlCN1hHNGdJR0p2Y21SbGNpMXpkSGxzWlRvZ2JtOXVaVHNnZlZ4dVhHNHZLaUJHYjNKdGMxeHVJQ0FnUFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwZ0tpOWNiaThxS2x4dUlDb2dNUzRnUTJoaGJtZGxJSFJvWlNCbWIyNTBJSE4wZVd4bGN5QnBiaUJoYkd3Z1luSnZkM05sY25NdVhHNGdLaUF5TGlCU1pXMXZkbVVnZEdobElHMWhjbWRwYmlCcGJpQkdhWEpsWm05NElHRnVaQ0JUWVdaaGNta3VYRzRnS2k5Y2JtSjFkSFJ2Yml4Y2JtbHVjSFYwTEZ4dWIzQjBaM0p2ZFhBc1hHNXpaV3hsWTNRc1hHNTBaWGgwWVhKbFlTQjdYRzRnSUdadmJuUXRabUZ0YVd4NU9pQnBibWhsY21sME8xeHVJQ0F2S2lBeElDb3ZYRzRnSUdadmJuUXRjMmw2WlRvZ01UQXdKVHRjYmlBZ0x5b2dNU0FxTDF4dUlDQnNhVzVsTFdobGFXZG9kRG9nTVM0eE5UdGNiaUFnTHlvZ01TQXFMMXh1SUNCdFlYSm5hVzQ2SURBN1hHNGdJQzhxSURJZ0tpOGdmVnh1WEc0dktpcGNiaUFxSUZOb2IzY2dkR2hsSUc5MlpYSm1iRzkzSUdsdUlFbEZMbHh1SUNvZ01TNGdVMmh2ZHlCMGFHVWdiM1psY21ac2IzY2dhVzRnUldSblpTNWNiaUFxTDF4dVluVjBkRzl1TEZ4dWFXNXdkWFFnZTF4dUlDQXZLaUF4SUNvdlhHNGdJRzkyWlhKbWJHOTNPaUIyYVhOcFlteGxPeUI5WEc1Y2JpOHFLbHh1SUNvZ1VtVnRiM1psSUhSb1pTQnBibWhsY21sMFlXNWpaU0J2WmlCMFpYaDBJSFJ5WVc1elptOXliU0JwYmlCRlpHZGxMQ0JHYVhKbFptOTRMQ0JoYm1RZ1NVVXVYRzRnS2lBeExpQlNaVzF2ZG1VZ2RHaGxJR2x1YUdWeWFYUmhibU5sSUc5bUlIUmxlSFFnZEhKaGJuTm1iM0p0SUdsdUlFWnBjbVZtYjNndVhHNGdLaTljYm1KMWRIUnZiaXhjYm5ObGJHVmpkQ0I3WEc0Z0lDOHFJREVnS2k5Y2JpQWdkR1Y0ZEMxMGNtRnVjMlp2Y20wNklHNXZibVU3SUgxY2JseHVMeW9xWEc0Z0tpQkRiM0p5WldOMElIUm9aU0JwYm1GaWFXeHBkSGtnZEc4Z2MzUjViR1VnWTJ4cFkydGhZbXhsSUhSNWNHVnpJR2x1SUdsUFV5QmhibVFnVTJGbVlYSnBMbHh1SUNvdlhHNWlkWFIwYjI0c1hHNWJkSGx3WlQxY0ltSjFkSFJ2Ymx3aVhTeGNibHQwZVhCbFBWd2ljbVZ6WlhSY0lsMHNYRzViZEhsd1pUMWNJbk4xWW0xcGRGd2lYU0I3WEc0Z0lDMTNaV0pyYVhRdFlYQndaV0Z5WVc1alpUb2dZblYwZEc5dU95QjlYRzVjYmk4cUtseHVJQ29nVW1WdGIzWmxJSFJvWlNCcGJtNWxjaUJpYjNKa1pYSWdZVzVrSUhCaFpHUnBibWNnYVc0Z1JtbHlaV1p2ZUM1Y2JpQXFMMXh1WW5WMGRHOXVPam90Ylc5NkxXWnZZM1Z6TFdsdWJtVnlMRnh1VzNSNWNHVTlYQ0ppZFhSMGIyNWNJbDA2T2kxdGIzb3RabTlqZFhNdGFXNXVaWElzWEc1YmRIbHdaVDFjSW5KbGMyVjBYQ0pkT2pvdGJXOTZMV1p2WTNWekxXbHVibVZ5TEZ4dVczUjVjR1U5WENKemRXSnRhWFJjSWwwNk9pMXRiM290Wm05amRYTXRhVzV1WlhJZ2UxeHVJQ0JpYjNKa1pYSXRjM1I1YkdVNklHNXZibVU3WEc0Z0lIQmhaR1JwYm1jNklEQTdJSDFjYmx4dUx5b3FYRzRnS2lCU1pYTjBiM0psSUhSb1pTQm1iMk4xY3lCemRIbHNaWE1nZFc1elpYUWdZbmtnZEdobElIQnlaWFpwYjNWeklISjFiR1V1WEc0Z0tpOWNibUoxZEhSdmJqb3RiVzk2TFdadlkzVnpjbWx1Wnl4Y2JsdDBlWEJsUFZ3aVluVjBkRzl1WENKZE9pMXRiM290Wm05amRYTnlhVzVuTEZ4dVczUjVjR1U5WENKeVpYTmxkRndpWFRvdGJXOTZMV1p2WTNWemNtbHVaeXhjYmx0MGVYQmxQVndpYzNWaWJXbDBYQ0pkT2kxdGIzb3RabTlqZFhOeWFXNW5JSHRjYmlBZ2IzVjBiR2x1WlRvZ01YQjRJR1J2ZEhSbFpDQkNkWFIwYjI1VVpYaDBPeUI5WEc1Y2JpOHFLbHh1SUNvZ1EyOXljbVZqZENCMGFHVWdjR0ZrWkdsdVp5QnBiaUJHYVhKbFptOTRMbHh1SUNvdlhHNW1hV1ZzWkhObGRDQjdYRzRnSUhCaFpHUnBibWM2SURBdU16VmxiU0F3TGpjMVpXMGdNQzQyTWpWbGJUc2dmVnh1WEc0dktpcGNiaUFxSURFdUlFTnZjbkpsWTNRZ2RHaGxJSFJsZUhRZ2QzSmhjSEJwYm1jZ2FXNGdSV1JuWlNCaGJtUWdTVVV1WEc0Z0tpQXlMaUJEYjNKeVpXTjBJSFJvWlNCamIyeHZjaUJwYm1obGNtbDBZVzVqWlNCbWNtOXRJR0JtYVdWc1pITmxkR0FnWld4bGJXVnVkSE1nYVc0Z1NVVXVYRzRnS2lBekxpQlNaVzF2ZG1VZ2RHaGxJSEJoWkdScGJtY2djMjhnWkdWMlpXeHZjR1Z5Y3lCaGNtVWdibTkwSUdOaGRXZG9kQ0J2ZFhRZ2QyaGxiaUIwYUdWNUlIcGxjbThnYjNWMFhHNGdLaUFnSUNCZ1ptbGxiR1J6WlhSZ0lHVnNaVzFsYm5SeklHbHVJR0ZzYkNCaWNtOTNjMlZ5Y3k1Y2JpQXFMMXh1YkdWblpXNWtJSHRjYmlBZ0xYZGxZbXRwZEMxaWIzZ3RjMmw2YVc1bk9pQmliM0prWlhJdFltOTRPMXh1SUNBZ0lDQWdJQ0FnSUdKdmVDMXphWHBwYm1jNklHSnZjbVJsY2kxaWIzZzdYRzRnSUM4cUlERWdLaTljYmlBZ1kyOXNiM0k2SUdsdWFHVnlhWFE3WEc0Z0lDOHFJRElnS2k5Y2JpQWdaR2x6Y0d4aGVUb2dkR0ZpYkdVN1hHNGdJQzhxSURFZ0tpOWNiaUFnYldGNExYZHBaSFJvT2lBeE1EQWxPMXh1SUNBdktpQXhJQ292WEc0Z0lIQmhaR1JwYm1jNklEQTdYRzRnSUM4cUlETWdLaTljYmlBZ2QyaHBkR1V0YzNCaFkyVTZJRzV2Y20xaGJEdGNiaUFnTHlvZ01TQXFMeUI5WEc1Y2JpOHFLbHh1SUNvZ1FXUmtJSFJvWlNCamIzSnlaV04wSUhabGNuUnBZMkZzSUdGc2FXZHViV1Z1ZENCcGJpQkRhSEp2YldVc0lFWnBjbVZtYjNnc0lHRnVaQ0JQY0dWeVlTNWNiaUFxTDF4dWNISnZaM0psYzNNZ2UxeHVJQ0IyWlhKMGFXTmhiQzFoYkdsbmJqb2dZbUZ6Wld4cGJtVTdJSDFjYmx4dUx5b3FYRzRnS2lCU1pXMXZkbVVnZEdobElHUmxabUYxYkhRZ2RtVnlkR2xqWVd3Z2MyTnliMnhzWW1GeUlHbHVJRWxGSURFd0t5NWNiaUFxTDF4dWRHVjRkR0Z5WldFZ2UxeHVJQ0J2ZG1WeVpteHZkem9nWVhWMGJ6c2dmVnh1WEc0dktpcGNiaUFxSURFdUlFRmtaQ0IwYUdVZ1kyOXljbVZqZENCaWIzZ2djMmw2YVc1bklHbHVJRWxGSURFd0xseHVJQ29nTWk0Z1VtVnRiM1psSUhSb1pTQndZV1JrYVc1bklHbHVJRWxGSURFd0xseHVJQ292WEc1YmRIbHdaVDFjSW1Ob1pXTnJZbTk0WENKZExGeHVXM1I1Y0dVOVhDSnlZV1JwYjF3aVhTQjdYRzRnSUMxM1pXSnJhWFF0WW05NExYTnBlbWx1WnpvZ1ltOXlaR1Z5TFdKdmVEdGNiaUFnSUNBZ0lDQWdJQ0JpYjNndGMybDZhVzVuT2lCaWIzSmtaWEl0WW05NE8xeHVJQ0F2S2lBeElDb3ZYRzRnSUhCaFpHUnBibWM2SURBN1hHNGdJQzhxSURJZ0tpOGdmVnh1WEc0dktpcGNiaUFxSUVOdmNuSmxZM1FnZEdobElHTjFjbk52Y2lCemRIbHNaU0J2WmlCcGJtTnlaVzFsYm5RZ1lXNWtJR1JsWTNKbGJXVnVkQ0JpZFhSMGIyNXpJR2x1SUVOb2NtOXRaUzVjYmlBcUwxeHVXM1I1Y0dVOVhDSnVkVzFpWlhKY0lsMDZPaTEzWldKcmFYUXRhVzV1WlhJdGMzQnBiaTFpZFhSMGIyNHNYRzViZEhsd1pUMWNJbTUxYldKbGNsd2lYVG82TFhkbFltdHBkQzF2ZFhSbGNpMXpjR2x1TFdKMWRIUnZiaUI3WEc0Z0lHaGxhV2RvZERvZ1lYVjBienNnZlZ4dVhHNHZLaXBjYmlBcUlERXVJRU52Y25KbFkzUWdkR2hsSUc5a1pDQmhjSEJsWVhKaGJtTmxJR2x1SUVOb2NtOXRaU0JoYm1RZ1UyRm1ZWEpwTGx4dUlDb2dNaTRnUTI5eWNtVmpkQ0IwYUdVZ2IzVjBiR2x1WlNCemRIbHNaU0JwYmlCVFlXWmhjbWt1WEc0Z0tpOWNibHQwZVhCbFBWd2ljMlZoY21Ob1hDSmRJSHRjYmlBZ0xYZGxZbXRwZEMxaGNIQmxZWEpoYm1ObE9pQjBaWGgwWm1sbGJHUTdYRzRnSUM4cUlERWdLaTljYmlBZ2IzVjBiR2x1WlMxdlptWnpaWFE2SUMweWNIZzdYRzRnSUM4cUlESWdLaThnZlZ4dVhHNHZLaXBjYmlBcUlGSmxiVzkyWlNCMGFHVWdhVzV1WlhJZ2NHRmtaR2x1WnlCcGJpQkRhSEp2YldVZ1lXNWtJRk5oWm1GeWFTQnZiaUJ0WVdOUFV5NWNiaUFxTDF4dVczUjVjR1U5WENKelpXRnlZMmhjSWwwNk9pMTNaV0pyYVhRdGMyVmhjbU5vTFdSbFkyOXlZWFJwYjI0Z2UxeHVJQ0F0ZDJWaWEybDBMV0Z3Y0dWaGNtRnVZMlU2SUc1dmJtVTdJSDFjYmx4dUx5b3FYRzRnS2lBeExpQkRiM0p5WldOMElIUm9aU0JwYm1GaWFXeHBkSGtnZEc4Z2MzUjViR1VnWTJ4cFkydGhZbXhsSUhSNWNHVnpJR2x1SUdsUFV5QmhibVFnVTJGbVlYSnBMbHh1SUNvZ01pNGdRMmhoYm1kbElHWnZiblFnY0hKdmNHVnlkR2xsY3lCMGJ5QmdhVzVvWlhKcGRHQWdhVzRnVTJGbVlYSnBMbHh1SUNvdlhHNDZPaTEzWldKcmFYUXRabWxzWlMxMWNHeHZZV1F0WW5WMGRHOXVJSHRjYmlBZ0xYZGxZbXRwZEMxaGNIQmxZWEpoYm1ObE9pQmlkWFIwYjI0N1hHNGdJQzhxSURFZ0tpOWNiaUFnWm05dWREb2dhVzVvWlhKcGREdGNiaUFnTHlvZ01pQXFMeUI5WEc1Y2JpOHFJRWx1ZEdWeVlXTjBhWFpsWEc0Z0lDQTlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQU0FxTDF4dUx5cGNiaUFxSUVGa1pDQjBhR1VnWTI5eWNtVmpkQ0JrYVhOd2JHRjVJR2x1SUVWa1oyVXNJRWxGSURFd0t5d2dZVzVrSUVacGNtVm1iM2d1WEc0Z0tpOWNibVJsZEdGcGJITWdlMXh1SUNCa2FYTndiR0Y1T2lCaWJHOWphenNnZlZ4dVhHNHZLbHh1SUNvZ1FXUmtJSFJvWlNCamIzSnlaV04wSUdScGMzQnNZWGtnYVc0Z1lXeHNJR0p5YjNkelpYSnpMbHh1SUNvdlhHNXpkVzF0WVhKNUlIdGNiaUFnWkdsemNHeGhlVG9nYkdsemRDMXBkR1Z0T3lCOVhHNWNiaThxSUUxcGMyTmNiaUFnSUQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOUlDb3ZYRzR2S2lwY2JpQXFJRUZrWkNCMGFHVWdZMjl5Y21WamRDQmthWE53YkdGNUlHbHVJRWxGSURFd0t5NWNiaUFxTDF4dWRHVnRjR3hoZEdVZ2UxeHVJQ0JrYVhOd2JHRjVPaUJ1YjI1bE95QjlYRzVjYmk4cUtseHVJQ29nUVdSa0lIUm9aU0JqYjNKeVpXTjBJR1JwYzNCc1lYa2dhVzRnU1VVZ01UQXVYRzRnS2k5Y2JsdG9hV1JrWlc1ZElIdGNiaUFnWkdsemNHeGhlVG9nYm05dVpUc2dmVnh1WEc1aWIyUjVJSHRjYmlBZ1ltRmphMmR5YjNWdVpDMWpiMnh2Y2pvZ0kyWmhabUZtWVR0Y2JpQWdlaTFwYm1SbGVEb2dNVHRjYmlBZ1kyOXNiM0k2SUNNeU1qSTdYRzRnSUhCaFpHUnBibWM2SURKeVpXMDdYRzRnSUdadmJuUXRabUZ0YVd4NU9pQmNJa2hsYkhabGRHbGpZU0JPWlhWbFhDSXNJRWhsYkhabGRHbGpZU3dnUVhKcFlXd3NJSE5oYm5NdGMyVnlhV1k3WEc0Z0lHMWhlQzEzYVdSMGFEb2dNVEF5TkhCNE8xeHVJQ0J0WVhKbmFXNDZJR0YxZEc4N0lIMWNibHh1YzJWamRHbHZiaU5oWW05MWRDQjdYRzRnSUcxaGNtZHBiaTEwYjNBNklESnlaVzA3SUgxY2JseHVRRzFsWkdsaElDaHdjbVZtWlhKekxXTnZiRzl5TFhOamFHVnRaVG9nWkdGeWF5a2dlMXh1SUNCb01TeGNiaUFnYURJc1hHNGdJR2d6TEZ4dUlDQm9OQ3hjYmlBZ2FEVXNYRzRnSUhBZ2UxeHVJQ0FnSUdOdmJHOXlPaUFqWmpKbU1tWXlJQ0ZwYlhCdmNuUmhiblE3SUgxY2JpQWdZbTlrZVNCN1hHNGdJQ0FnWW1GamEyZHliM1Z1WkMxamIyeHZjam9nSXpGbU1XWXhaaUFoYVcxd2IzSjBZVzUwT3lCOVhHNGdJQzV6Yldsc1pYa3RZMmx5WTJ4bElIdGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xXTnZiRzl5T2lBak1UZ3hPREU0SUNGcGJYQnZjblJoYm5RN0lIMWNiaUFnWW5WMGRHOXVJSHRjYmlBZ0lDQmlZV05yWjNKdmRXNWtMV052Ykc5eU9pQWpNV1l4WmpGbUlDRnBiWEJ2Y25SaGJuUTdJSDFjYmlBZ0lDQmlkWFIwYjI0Z1lTQjdYRzRnSUNBZ0lDQmpiMnh2Y2pvZ0kyWXlaakptTWlBaGFXMXdiM0owWVc1ME95QjlYRzRnSUNBZ1luVjBkRzl1SUhOMlp5QjdYRzRnSUNBZ0lDQm1hV3hzT2lBalpqSm1NbVl5SUNGcGJYQnZjblJoYm5RN0lIMGdmVnh1THlvaklITnZkWEpqWlUxaGNIQnBibWRWVWt3OWMzSmpMM0p2ZFhSbGN5OWZiR0Y1YjNWMExuTjJaV3gwWlM1dFlYQWdLaThpWFgwPSAqLzwvc3R5bGU+XG5cbjxOYXYge3NlZ21lbnR9IC8+XG5cbjxtYWluPlxuICA8c2xvdCAvPlxuPC9tYWluPlxuXG48QmFja2dyb3VuZCAvPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCUSxLQUFLLEFBQUUsQ0FBQyxBQUNkLFNBQVMsQ0FBRSxJQUFJLEFBQUUsQ0FBQyxBQUVaLElBQUksQUFBRSxDQUFDLEFBQ2IsU0FBUyxDQUFFLElBQUksQ0FDZixXQUFXLENBQUUsR0FBRyxBQUFFLENBQUMsQUFDbkIsTUFBTSxBQUFDLFlBQVksS0FBSyxDQUFDLEFBQUMsQ0FBQyxBQUNqQixJQUFJLEFBQUUsQ0FBQyxBQUNiLFdBQVcsQ0FBRSxHQUFHLEFBQUUsQ0FBQyxBQUFDLENBQUMsQUFDekIsTUFBTSxBQUFDLFlBQVksS0FBSyxDQUFDLEFBQUMsQ0FBQyxBQUNqQixJQUFJLEFBQUUsQ0FBQyxBQUNiLFdBQVcsQ0FBRSxHQUFHLEFBQUUsQ0FBQyxBQUFDLENBQUMsQUFPbkIsRUFBRSxBQUFFLENBQUMsQUFDWCxTQUFTLENBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FDbkIsTUFBTSxDQUFFLE1BQU0sQUFBRSxDQUFDLEFBQ2pCLE1BQU0sQUFBQyxZQUFZLEtBQUssQ0FBQyxBQUFDLENBQUMsQUFDakIsRUFBRSxBQUFFLENBQUMsQUFDWCxTQUFTLENBQUUsUUFBUSxBQUFFLENBQUMsQUFBQyxDQUFDLEFBQzVCLE1BQU0sQUFBQyxZQUFZLEtBQUssQ0FBQyxBQUFDLENBQUMsQUFDakIsRUFBRSxBQUFFLENBQUMsQUFDWCxTQUFTLENBQUUsUUFBUSxDQUNuQixNQUFNLENBQUUsTUFBTSxBQUFFLENBQUMsQUFBQyxDQUFDLEFBQ3ZCLE1BQU0sQUFBQyxZQUFZLE1BQU0sQ0FBQyxBQUFDLENBQUMsQUFDbEIsRUFBRSxBQUFFLENBQUMsQUFDWCxTQUFTLENBQUUsUUFBUSxBQUFFLENBQUMsQUFBQyxDQUFDLEFBQzVCLE1BQU0sQUFBQyxZQUFZLE1BQU0sQ0FBQyxBQUFDLENBQUMsQUFDbEIsRUFBRSxBQUFFLENBQUMsQUFDWCxTQUFTLENBQUUsUUFBUSxDQUNuQixNQUFNLENBQUUsTUFBTSxBQUFFLENBQUMsQUFBQyxDQUFDLEFBQ3ZCLE1BQU0sQUFBQyxZQUFZLE1BQU0sQ0FBQyxBQUFDLENBQUMsQUFDbEIsRUFBRSxBQUFFLENBQUMsQUFDWCxTQUFTLENBQUUsT0FBTyxBQUFFLENBQUMsQUFBQyxDQUFDLEFBT3JCLEVBQUUsQUFBRSxDQUFDLEFBQ1gsU0FBUyxDQUFFLElBQUksQUFBRSxDQUFDLEFBQ2xCLE1BQU0sQUFBQyxZQUFZLEtBQUssQ0FBQyxBQUFDLENBQUMsQUFDakIsRUFBRSxBQUFFLENBQUMsQUFDWCxTQUFTLENBQUUsUUFBUSxBQUFFLENBQUMsQUFBQyxDQUFDLEFBQzVCLE1BQU0sQUFBQyxZQUFZLEtBQUssQ0FBQyxBQUFDLENBQUMsQUFDakIsRUFBRSxBQUFFLENBQUMsQUFDWCxTQUFTLENBQUUsUUFBUSxBQUFFLENBQUMsQUFBQyxDQUFDLEFBQzVCLE1BQU0sQUFBQyxZQUFZLE1BQU0sQ0FBQyxBQUFDLENBQUMsQUFDbEIsRUFBRSxBQUFFLENBQUMsQUFDWCxTQUFTLENBQUUsUUFBUSxBQUFFLENBQUMsQUFBQyxDQUFDLEFBQzVCLE1BQU0sQUFBQyxZQUFZLE1BQU0sQ0FBQyxBQUFDLENBQUMsQUFDbEIsRUFBRSxBQUFFLENBQUMsQUFDWCxTQUFTLENBQUUsUUFBUSxBQUFFLENBQUMsQUFBQyxDQUFDLEFBQzVCLE1BQU0sQUFBQyxZQUFZLE1BQU0sQ0FBQyxBQUFDLENBQUMsQUFDbEIsRUFBRSxBQUFFLENBQUMsQUFDWCxTQUFTLENBQUUsTUFBTSxBQUFFLENBQUMsQUFBQyxDQUFDLEFBT3BCLEVBQUUsQUFBRSxDQUFDLEFBQ1gsU0FBUyxDQUFFLFFBQVEsQUFBRSxDQUFDLEFBQ3RCLE1BQU0sQUFBQyxZQUFZLEtBQUssQ0FBQyxBQUFDLENBQUMsQUFDakIsRUFBRSxBQUFFLENBQUMsQUFDWCxTQUFTLENBQUUsT0FBTyxBQUFFLENBQUMsQUFBQyxDQUFDLEFBQzNCLE1BQU0sQUFBQyxZQUFZLEtBQUssQ0FBQyxBQUFDLENBQUMsQUFDakIsRUFBRSxBQUFFLENBQUMsQUFDWCxTQUFTLENBQUUsUUFBUSxBQUFFLENBQUMsQUFBQyxDQUFDLEFBQzVCLE1BQU0sQUFBQyxZQUFZLE1BQU0sQ0FBQyxBQUFDLENBQUMsQUFDbEIsRUFBRSxBQUFFLENBQUMsQUFDWCxTQUFTLENBQUUsUUFBUSxBQUFFLENBQUMsQUFBQyxDQUFDLEFBQzVCLE1BQU0sQUFBQyxZQUFZLE1BQU0sQ0FBQyxBQUFDLENBQUMsQUFDbEIsRUFBRSxBQUFFLENBQUMsQUFDWCxTQUFTLENBQUUsUUFBUSxBQUFFLENBQUMsQUFBQyxDQUFDLEFBQzVCLE1BQU0sQUFBQyxZQUFZLE1BQU0sQ0FBQyxBQUFDLENBQUMsQUFDbEIsRUFBRSxBQUFFLENBQUMsQUFDWCxTQUFTLENBQUUsUUFBUSxBQUFFLENBQUMsQUFBQyxDQUFDLEFBT3RCLEVBQUUsQUFBRSxDQUFDLEFBQ1gsU0FBUyxDQUFFLFFBQVEsQUFBRSxDQUFDLEFBQ3RCLE1BQU0sQUFBQyxZQUFZLEtBQUssQ0FBQyxBQUFDLENBQUMsQUFDakIsRUFBRSxBQUFFLENBQUMsQUFDWCxTQUFTLENBQUUsTUFBTSxBQUFFLENBQUMsQUFBQyxDQUFDLEFBQzFCLE1BQU0sQUFBQyxZQUFZLEtBQUssQ0FBQyxBQUFDLENBQUMsQUFDakIsRUFBRSxBQUFFLENBQUMsQUFDWCxTQUFTLENBQUUsT0FBTyxBQUFFLENBQUMsQUFBQyxDQUFDLEFBQzNCLE1BQU0sQUFBQyxZQUFZLE1BQU0sQ0FBQyxBQUFDLENBQUMsQUFDbEIsRUFBRSxBQUFFLENBQUMsQUFDWCxTQUFTLENBQUUsUUFBUSxBQUFFLENBQUMsQUFBQyxDQUFDLEFBQzVCLE1BQU0sQUFBQyxZQUFZLE1BQU0sQ0FBQyxBQUFDLENBQUMsQUFDbEIsRUFBRSxBQUFFLENBQUMsQUFDWCxTQUFTLENBQUUsUUFBUSxBQUFFLENBQUMsQUFBQyxDQUFDLEFBQzVCLE1BQU0sQUFBQyxZQUFZLE1BQU0sQ0FBQyxBQUFDLENBQUMsQUFDbEIsRUFBRSxBQUFFLENBQUMsQUFDWCxTQUFTLENBQUUsUUFBUSxBQUFFLENBQUMsQUFBQyxDQUFDLEFBT3RCLEVBQUUsQUFBRSxDQUFDLEFBQ1gsU0FBUyxDQUFFLFFBQVEsQUFBRSxDQUFDLEFBQ3RCLE1BQU0sQUFBQyxZQUFZLEtBQUssQ0FBQyxBQUFDLENBQUMsQUFDakIsRUFBRSxBQUFFLENBQUMsQUFDWCxTQUFTLENBQUUsSUFBSSxBQUFFLENBQUMsQUFBQyxDQUFDLEFBQ3hCLE1BQU0sQUFBQyxZQUFZLEtBQUssQ0FBQyxBQUFDLENBQUMsQUFDakIsRUFBRSxBQUFFLENBQUMsQUFDWCxTQUFTLENBQUUsTUFBTSxBQUFFLENBQUMsQUFBQyxDQUFDLEFBQzFCLE1BQU0sQUFBQyxZQUFZLE1BQU0sQ0FBQyxBQUFDLENBQUMsQUFDbEIsRUFBRSxBQUFFLENBQUMsQUFDWCxTQUFTLENBQUUsT0FBTyxBQUFFLENBQUMsQUFBQyxDQUFDLEFBQzNCLE1BQU0sQUFBQyxZQUFZLE1BQU0sQ0FBQyxBQUFDLENBQUMsQUFDbEIsRUFBRSxBQUFFLENBQUMsQUFDWCxTQUFTLENBQUUsUUFBUSxBQUFFLENBQUMsQUFBQyxDQUFDLEFBQzVCLE1BQU0sQUFBQyxZQUFZLE1BQU0sQ0FBQyxBQUFDLENBQUMsQUFDbEIsRUFBRSxBQUFFLENBQUMsQUFDWCxTQUFTLENBQUUsUUFBUSxBQUFFLENBQUMsQUFBQyxDQUFDLEFBT3RCLEVBQUUsQUFBRSxDQUFDLEFBQ1gsU0FBUyxDQUFFLFFBQVEsQUFBRSxDQUFDLEFBQ3RCLE1BQU0sQUFBQyxZQUFZLEtBQUssQ0FBQyxBQUFDLENBQUMsQUFDakIsRUFBRSxBQUFFLENBQUMsQUFDWCxTQUFTLENBQUUsUUFBUSxBQUFFLENBQUMsQUFBQyxDQUFDLEFBQzVCLE1BQU0sQUFBQyxZQUFZLEtBQUssQ0FBQyxBQUFDLENBQUMsQUFDakIsRUFBRSxBQUFFLENBQUMsQUFDWCxTQUFTLENBQUUsSUFBSSxBQUFFLENBQUMsQUFBQyxDQUFDLEFBQ3hCLE1BQU0sQUFBQyxZQUFZLE1BQU0sQ0FBQyxBQUFDLENBQUMsQUFDbEIsRUFBRSxBQUFFLENBQUMsQUFDWCxTQUFTLENBQUUsTUFBTSxBQUFFLENBQUMsQUFBQyxDQUFDLEFBQzFCLE1BQU0sQUFBQyxZQUFZLE1BQU0sQ0FBQyxBQUFDLENBQUMsQUFDbEIsRUFBRSxBQUFFLENBQUMsQUFDWCxTQUFTLENBQUUsT0FBTyxBQUFFLENBQUMsQUFBQyxDQUFD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*/");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9pbnRlcm5hbC9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zdG9yZS9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXYuc3ZlbHRlIiwid2VicGFjazovLy8uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9hcHAubWpzIiwid2VicGFjazovLy8uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9pbnRlcm5hbC9BcHAuc3ZlbHRlIiwid2VicGFjazovLy8uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9pbnRlcm5hbC9tYW5pZmVzdC1jbGllbnQubWpzIiwid2VicGFjazovLy8uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9pbnRlcm5hbC9zaGFyZWQubWpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvX2Vycm9yLnN2ZWx0ZSIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL19sYXlvdXQuc3ZlbHRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBLGdGQUF3RSx3RUFBd0U7QUFDaEo7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBLHlDQUFpQzs7QUFFakM7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQXdCLGtDQUFrQztBQUMxRCxjQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0Esa0RBQTBDLG9CQUFvQixXQUFXOztBQUV6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUFnQix1QkFBdUI7QUFDdkM7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdJOzs7Ozs7Ozs7Ozs7O0FDQWhJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsS0FBSztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix5REFBeUQ7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0NBQWtDLHFDQUFxQztBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix1QkFBdUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxLQUFLO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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YztBQUM3RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNkJBQTZCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsOEJBQThCLEVBQUUsS0FBSztBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUVBQWlFO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUVBQWlFO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlFQUFpRTtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkM0aUI5QyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQUFQLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQTlpQjhDOztFQUVsRCxNQUFJLG1CQUFPLENBQUMiLCJmaWxlIjoiZGNiMWJjYmM4OTY0MjJhMDVhZGIvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdH07XG5cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG5cblxuIFx0Ly8gc2NyaXB0IHBhdGggZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIGpzb25wU2NyaXB0U3JjKGNodW5rSWQpIHtcbiBcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBcImRjYjFiY2JjODk2NDIyYTA1YWRiXCIgKyBcIi9cIiArICh7XCJhYm91dFwiOlwiYWJvdXRcIixcImJsb2dcIjpcImJsb2dcIixcImJsb2dfJHNsdWdcIjpcImJsb2dfJHNsdWdcIixcImluZGV4XCI6XCJpbmRleFwifVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5cIiArIGNodW5rSWQgKyBcIi5qc1wiXG4gXHR9XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG4gXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuIFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF07XG4gXHRcdFx0XHR9KTtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cbiBcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcbiBcdFx0XHRcdHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiBcdFx0XHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiBcdFx0XHRcdHZhciBvblNjcmlwdENvbXBsZXRlO1xuXG4gXHRcdFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdFx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcbiBcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG4gXHRcdFx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHNjcmlwdC5zcmMgPSBqc29ucFNjcmlwdFNyYyhjaHVua0lkKTtcblxuIFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuIFx0XHRcdFx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG4gXHRcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiBcdFx0XHRcdFx0dmFyIGNodW5rID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRcdFx0XHRpZihjaHVuayAhPT0gMCkge1xuIFx0XHRcdFx0XHRcdGlmKGNodW5rKSB7XG4gXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuIFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcbiBcdFx0XHRcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcignTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKScpO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuIFx0XHRcdFx0XHRcdFx0Y2h1bmtbMV0oZXJyb3IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH07XG4gXHRcdFx0XHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiBcdFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSh7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSk7XG4gXHRcdFx0XHR9LCAxMjAwMDApO1xuIFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZTtcbiBcdFx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJjbGllbnQvXCI7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NsaWVudC5qc1wiKTtcbiIsImV4cG9ydCB7IGFmdGVyVXBkYXRlLCBiZWZvcmVVcGRhdGUsIGNyZWF0ZUV2ZW50RGlzcGF0Y2hlciwgZ2V0Q29udGV4dCwgb25EZXN0cm95LCBvbk1vdW50LCBzZXRDb250ZXh0LCB0aWNrIH0gZnJvbSAnLi9pbnRlcm5hbCc7XG4iLCJmdW5jdGlvbiBub29wKCkgeyB9XG5jb25zdCBpZGVudGl0eSA9IHggPT4geDtcbmZ1bmN0aW9uIGFzc2lnbih0YXIsIHNyYykge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBmb3IgKGNvbnN0IGsgaW4gc3JjKVxuICAgICAgICB0YXJba10gPSBzcmNba107XG4gICAgcmV0dXJuIHRhcjtcbn1cbmZ1bmN0aW9uIGlzX3Byb21pc2UodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gJ2Z1bmN0aW9uJztcbn1cbmZ1bmN0aW9uIGFkZF9sb2NhdGlvbihlbGVtZW50LCBmaWxlLCBsaW5lLCBjb2x1bW4sIGNoYXIpIHtcbiAgICBlbGVtZW50Ll9fc3ZlbHRlX21ldGEgPSB7XG4gICAgICAgIGxvYzogeyBmaWxlLCBsaW5lLCBjb2x1bW4sIGNoYXIgfVxuICAgIH07XG59XG5mdW5jdGlvbiBydW4oZm4pIHtcbiAgICByZXR1cm4gZm4oKTtcbn1cbmZ1bmN0aW9uIGJsYW5rX29iamVjdCgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsKTtcbn1cbmZ1bmN0aW9uIHJ1bl9hbGwoZm5zKSB7XG4gICAgZm5zLmZvckVhY2gocnVuKTtcbn1cbmZ1bmN0aW9uIGlzX2Z1bmN0aW9uKHRoaW5nKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGluZyA9PT0gJ2Z1bmN0aW9uJztcbn1cbmZ1bmN0aW9uIHNhZmVfbm90X2VxdWFsKGEsIGIpIHtcbiAgICByZXR1cm4gYSAhPSBhID8gYiA9PSBiIDogYSAhPT0gYiB8fCAoKGEgJiYgdHlwZW9mIGEgPT09ICdvYmplY3QnKSB8fCB0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJyk7XG59XG5mdW5jdGlvbiBub3RfZXF1YWwoYSwgYikge1xuICAgIHJldHVybiBhICE9IGEgPyBiID09IGIgOiBhICE9PSBiO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVfc3RvcmUoc3RvcmUsIG5hbWUpIHtcbiAgICBpZiAoIXN0b3JlIHx8IHR5cGVvZiBzdG9yZS5zdWJzY3JpYmUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAnJHtuYW1lfScgaXMgbm90IGEgc3RvcmUgd2l0aCBhICdzdWJzY3JpYmUnIG1ldGhvZGApO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHN1YnNjcmliZShzdG9yZSwgY2FsbGJhY2spIHtcbiAgICBjb25zdCB1bnN1YiA9IHN0b3JlLnN1YnNjcmliZShjYWxsYmFjayk7XG4gICAgcmV0dXJuIHVuc3ViLnVuc3Vic2NyaWJlID8gKCkgPT4gdW5zdWIudW5zdWJzY3JpYmUoKSA6IHVuc3ViO1xufVxuZnVuY3Rpb24gZ2V0X3N0b3JlX3ZhbHVlKHN0b3JlKSB7XG4gICAgbGV0IHZhbHVlO1xuICAgIHN1YnNjcmliZShzdG9yZSwgXyA9PiB2YWx1ZSA9IF8pKCk7XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuZnVuY3Rpb24gY29tcG9uZW50X3N1YnNjcmliZShjb21wb25lbnQsIHN0b3JlLCBjYWxsYmFjaykge1xuICAgIGNvbXBvbmVudC4kJC5vbl9kZXN0cm95LnB1c2goc3Vic2NyaWJlKHN0b3JlLCBjYWxsYmFjaykpO1xufVxuZnVuY3Rpb24gY3JlYXRlX3Nsb3QoZGVmaW5pdGlvbiwgY3R4LCBmbikge1xuICAgIGlmIChkZWZpbml0aW9uKSB7XG4gICAgICAgIGNvbnN0IHNsb3RfY3R4ID0gZ2V0X3Nsb3RfY29udGV4dChkZWZpbml0aW9uLCBjdHgsIGZuKTtcbiAgICAgICAgcmV0dXJuIGRlZmluaXRpb25bMF0oc2xvdF9jdHgpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldF9zbG90X2NvbnRleHQoZGVmaW5pdGlvbiwgY3R4LCBmbikge1xuICAgIHJldHVybiBkZWZpbml0aW9uWzFdXG4gICAgICAgID8gYXNzaWduKHt9LCBhc3NpZ24oY3R4LiQkc2NvcGUuY3R4LCBkZWZpbml0aW9uWzFdKGZuID8gZm4oY3R4KSA6IHt9KSkpXG4gICAgICAgIDogY3R4LiQkc2NvcGUuY3R4O1xufVxuZnVuY3Rpb24gZ2V0X3Nsb3RfY2hhbmdlcyhkZWZpbml0aW9uLCBjdHgsIGNoYW5nZWQsIGZuKSB7XG4gICAgcmV0dXJuIGRlZmluaXRpb25bMV1cbiAgICAgICAgPyBhc3NpZ24oe30sIGFzc2lnbihjdHguJCRzY29wZS5jaGFuZ2VkIHx8IHt9LCBkZWZpbml0aW9uWzFdKGZuID8gZm4oY2hhbmdlZCkgOiB7fSkpKVxuICAgICAgICA6IGN0eC4kJHNjb3BlLmNoYW5nZWQgfHwge307XG59XG5mdW5jdGlvbiBleGNsdWRlX2ludGVybmFsX3Byb3BzKHByb3BzKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgZm9yIChjb25zdCBrIGluIHByb3BzKVxuICAgICAgICBpZiAoa1swXSAhPT0gJyQnKVxuICAgICAgICAgICAgcmVzdWx0W2tdID0gcHJvcHNba107XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG9uY2UoZm4pIHtcbiAgICBsZXQgcmFuID0gZmFsc2U7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgIGlmIChyYW4pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHJhbiA9IHRydWU7XG4gICAgICAgIGZuLmNhbGwodGhpcywgLi4uYXJncyk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIG51bGxfdG9fZW1wdHkodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWU7XG59XG5mdW5jdGlvbiBzZXRfc3RvcmVfdmFsdWUoc3RvcmUsIHJldCwgdmFsdWUgPSByZXQpIHtcbiAgICBzdG9yZS5zZXQodmFsdWUpO1xuICAgIHJldHVybiByZXQ7XG59XG5cbmNvbnN0IGlzX2NsaWVudCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xubGV0IG5vdyA9IGlzX2NsaWVudFxuICAgID8gKCkgPT4gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpXG4gICAgOiAoKSA9PiBEYXRlLm5vdygpO1xubGV0IHJhZiA9IGlzX2NsaWVudCA/IGNiID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZShjYikgOiBub29wO1xuLy8gdXNlZCBpbnRlcm5hbGx5IGZvciB0ZXN0aW5nXG5mdW5jdGlvbiBzZXRfbm93KGZuKSB7XG4gICAgbm93ID0gZm47XG59XG5mdW5jdGlvbiBzZXRfcmFmKGZuKSB7XG4gICAgcmFmID0gZm47XG59XG5cbmNvbnN0IHRhc2tzID0gbmV3IFNldCgpO1xubGV0IHJ1bm5pbmcgPSBmYWxzZTtcbmZ1bmN0aW9uIHJ1bl90YXNrcygpIHtcbiAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBpZiAoIXRhc2tbMF0obm93KCkpKSB7XG4gICAgICAgICAgICB0YXNrcy5kZWxldGUodGFzayk7XG4gICAgICAgICAgICB0YXNrWzFdKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBydW5uaW5nID0gdGFza3Muc2l6ZSA+IDA7XG4gICAgaWYgKHJ1bm5pbmcpXG4gICAgICAgIHJhZihydW5fdGFza3MpO1xufVxuZnVuY3Rpb24gY2xlYXJfbG9vcHMoKSB7XG4gICAgLy8gZm9yIHRlc3RpbmcuLi5cbiAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4gdGFza3MuZGVsZXRlKHRhc2spKTtcbiAgICBydW5uaW5nID0gZmFsc2U7XG59XG5mdW5jdGlvbiBsb29wKGZuKSB7XG4gICAgbGV0IHRhc2s7XG4gICAgaWYgKCFydW5uaW5nKSB7XG4gICAgICAgIHJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICByYWYocnVuX3Rhc2tzKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvbWlzZTogbmV3IFByb21pc2UoZnVsZmlsID0+IHtcbiAgICAgICAgICAgIHRhc2tzLmFkZCh0YXNrID0gW2ZuLCBmdWxmaWxdKTtcbiAgICAgICAgfSksXG4gICAgICAgIGFib3J0KCkge1xuICAgICAgICAgICAgdGFza3MuZGVsZXRlKHRhc2spO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kKHRhcmdldCwgbm9kZSkge1xuICAgIHRhcmdldC5hcHBlbmRDaGlsZChub2RlKTtcbn1cbmZ1bmN0aW9uIGluc2VydCh0YXJnZXQsIG5vZGUsIGFuY2hvcikge1xuICAgIHRhcmdldC5pbnNlcnRCZWZvcmUobm9kZSwgYW5jaG9yIHx8IG51bGwpO1xufVxuZnVuY3Rpb24gZGV0YWNoKG5vZGUpIHtcbiAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG59XG5mdW5jdGlvbiBkZXN0cm95X2VhY2goaXRlcmF0aW9ucywgZGV0YWNoaW5nKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVyYXRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChpdGVyYXRpb25zW2ldKVxuICAgICAgICAgICAgaXRlcmF0aW9uc1tpXS5kKGRldGFjaGluZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gZWxlbWVudChuYW1lKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSk7XG59XG5mdW5jdGlvbiBlbGVtZW50X2lzKG5hbWUsIGlzKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSwgeyBpcyB9KTtcbn1cbmZ1bmN0aW9uIG9iamVjdF93aXRob3V0X3Byb3BlcnRpZXMob2JqLCBleGNsdWRlKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1vYmplY3QtbGl0ZXJhbC10eXBlLWFzc2VydGlvblxuICAgIGNvbnN0IHRhcmdldCA9IHt9O1xuICAgIGZvciAoY29uc3QgayBpbiBvYmopIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGspXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAmJiBleGNsdWRlLmluZGV4T2YoaykgPT09IC0xKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICB0YXJnZXRba10gPSBvYmpba107XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIHN2Z19lbGVtZW50KG5hbWUpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIG5hbWUpO1xufVxuZnVuY3Rpb24gdGV4dChkYXRhKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGRhdGEpO1xufVxuZnVuY3Rpb24gc3BhY2UoKSB7XG4gICAgcmV0dXJuIHRleHQoJyAnKTtcbn1cbmZ1bmN0aW9uIGVtcHR5KCkge1xuICAgIHJldHVybiB0ZXh0KCcnKTtcbn1cbmZ1bmN0aW9uIGxpc3Rlbihub2RlLCBldmVudCwgaGFuZGxlciwgb3B0aW9ucykge1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgcmV0dXJuICgpID0+IG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgb3B0aW9ucyk7XG59XG5mdW5jdGlvbiBwcmV2ZW50X2RlZmF1bHQoZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhpcywgZXZlbnQpO1xuICAgIH07XG59XG5mdW5jdGlvbiBzdG9wX3Byb3BhZ2F0aW9uKGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCBldmVudCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHNlbGYoZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcylcbiAgICAgICAgICAgIGZuLmNhbGwodGhpcywgZXZlbnQpO1xuICAgIH07XG59XG5mdW5jdGlvbiBhdHRyKG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbClcbiAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICBlbHNlXG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xufVxuZnVuY3Rpb24gc2V0X2F0dHJpYnV0ZXMobm9kZSwgYXR0cmlidXRlcykge1xuICAgIGZvciAoY29uc3Qga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ3N0eWxlJykge1xuICAgICAgICAgICAgbm9kZS5zdHlsZS5jc3NUZXh0ID0gYXR0cmlidXRlc1trZXldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGtleSBpbiBub2RlKSB7XG4gICAgICAgICAgICBub2RlW2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhdHRyKG5vZGUsIGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIHNldF9zdmdfYXR0cmlidXRlcyhub2RlLCBhdHRyaWJ1dGVzKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgICAgICBhdHRyKG5vZGUsIGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzZXRfY3VzdG9tX2VsZW1lbnRfZGF0YShub2RlLCBwcm9wLCB2YWx1ZSkge1xuICAgIGlmIChwcm9wIGluIG5vZGUpIHtcbiAgICAgICAgbm9kZVtwcm9wXSA9IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgYXR0cihub2RlLCBwcm9wLCB2YWx1ZSk7XG4gICAgfVxufVxuZnVuY3Rpb24geGxpbmtfYXR0cihub2RlLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgbm9kZS5zZXRBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsIGF0dHJpYnV0ZSwgdmFsdWUpO1xufVxuZnVuY3Rpb24gZ2V0X2JpbmRpbmdfZ3JvdXBfdmFsdWUoZ3JvdXApIHtcbiAgICBjb25zdCB2YWx1ZSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JvdXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGdyb3VwW2ldLmNoZWNrZWQpXG4gICAgICAgICAgICB2YWx1ZS5wdXNoKGdyb3VwW2ldLl9fdmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiB0b19udW1iZXIodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09ICcnID8gdW5kZWZpbmVkIDogK3ZhbHVlO1xufVxuZnVuY3Rpb24gdGltZV9yYW5nZXNfdG9fYXJyYXkocmFuZ2VzKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbmdlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBhcnJheS5wdXNoKHsgc3RhcnQ6IHJhbmdlcy5zdGFydChpKSwgZW5kOiByYW5nZXMuZW5kKGkpIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXk7XG59XG5mdW5jdGlvbiBjaGlsZHJlbihlbGVtZW50KSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oZWxlbWVudC5jaGlsZE5vZGVzKTtcbn1cbmZ1bmN0aW9uIGNsYWltX2VsZW1lbnQobm9kZXMsIG5hbWUsIGF0dHJpYnV0ZXMsIHN2Zykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgICBpZiAobm9kZS5ub2RlTmFtZSA9PT0gbmFtZSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBub2RlLmF0dHJpYnV0ZXMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSBub2RlLmF0dHJpYnV0ZXNbal07XG4gICAgICAgICAgICAgICAgaWYgKCFhdHRyaWJ1dGVzW2F0dHJpYnV0ZS5uYW1lXSlcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5vZGVzLnNwbGljZShpLCAxKVswXTsgLy8gVE9ETyBzdHJpcCB1bndhbnRlZCBhdHRyaWJ1dGVzXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN2ZyA/IHN2Z19lbGVtZW50KG5hbWUpIDogZWxlbWVudChuYW1lKTtcbn1cbmZ1bmN0aW9uIGNsYWltX3RleHQobm9kZXMsIGRhdGEpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDMpIHtcbiAgICAgICAgICAgIG5vZGUuZGF0YSA9ICcnICsgZGF0YTtcbiAgICAgICAgICAgIHJldHVybiBub2Rlcy5zcGxpY2UoaSwgMSlbMF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRleHQoZGF0YSk7XG59XG5mdW5jdGlvbiBjbGFpbV9zcGFjZShub2Rlcykge1xuICAgIHJldHVybiBjbGFpbV90ZXh0KG5vZGVzLCAnICcpO1xufVxuZnVuY3Rpb24gc2V0X2RhdGEodGV4dCwgZGF0YSkge1xuICAgIGRhdGEgPSAnJyArIGRhdGE7XG4gICAgaWYgKHRleHQuZGF0YSAhPT0gZGF0YSlcbiAgICAgICAgdGV4dC5kYXRhID0gZGF0YTtcbn1cbmZ1bmN0aW9uIHNldF9pbnB1dF92YWx1ZShpbnB1dCwgdmFsdWUpIHtcbiAgICBpZiAodmFsdWUgIT0gbnVsbCB8fCBpbnB1dC52YWx1ZSkge1xuICAgICAgICBpbnB1dC52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNldF9pbnB1dF90eXBlKGlucHV0LCB0eXBlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaW5wdXQudHlwZSA9IHR5cGU7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICB9XG59XG5mdW5jdGlvbiBzZXRfc3R5bGUobm9kZSwga2V5LCB2YWx1ZSwgaW1wb3J0YW50KSB7XG4gICAgbm9kZS5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHZhbHVlLCBpbXBvcnRhbnQgPyAnaW1wb3J0YW50JyA6ICcnKTtcbn1cbmZ1bmN0aW9uIHNlbGVjdF9vcHRpb24oc2VsZWN0LCB2YWx1ZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0Lm9wdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gc2VsZWN0Lm9wdGlvbnNbaV07XG4gICAgICAgIGlmIChvcHRpb24uX192YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBzZWxlY3Rfb3B0aW9ucyhzZWxlY3QsIHZhbHVlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Qub3B0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBzZWxlY3Qub3B0aW9uc1tpXTtcbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gfnZhbHVlLmluZGV4T2Yob3B0aW9uLl9fdmFsdWUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNlbGVjdF92YWx1ZShzZWxlY3QpIHtcbiAgICBjb25zdCBzZWxlY3RlZF9vcHRpb24gPSBzZWxlY3QucXVlcnlTZWxlY3RvcignOmNoZWNrZWQnKSB8fCBzZWxlY3Qub3B0aW9uc1swXTtcbiAgICByZXR1cm4gc2VsZWN0ZWRfb3B0aW9uICYmIHNlbGVjdGVkX29wdGlvbi5fX3ZhbHVlO1xufVxuZnVuY3Rpb24gc2VsZWN0X211bHRpcGxlX3ZhbHVlKHNlbGVjdCkge1xuICAgIHJldHVybiBbXS5tYXAuY2FsbChzZWxlY3QucXVlcnlTZWxlY3RvckFsbCgnOmNoZWNrZWQnKSwgb3B0aW9uID0+IG9wdGlvbi5fX3ZhbHVlKTtcbn1cbmZ1bmN0aW9uIGFkZF9yZXNpemVfbGlzdGVuZXIoZWxlbWVudCwgZm4pIHtcbiAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgfVxuICAgIGNvbnN0IG9iamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29iamVjdCcpO1xuICAgIG9iamVjdC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGJsb2NrOyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgbGVmdDogMDsgaGVpZ2h0OiAxMDAlOyB3aWR0aDogMTAwJTsgb3ZlcmZsb3c6IGhpZGRlbjsgcG9pbnRlci1ldmVudHM6IG5vbmU7IHotaW5kZXg6IC0xOycpO1xuICAgIG9iamVjdC50eXBlID0gJ3RleHQvaHRtbCc7XG4gICAgb2JqZWN0LnRhYkluZGV4ID0gLTE7XG4gICAgbGV0IHdpbjtcbiAgICBvYmplY3Qub25sb2FkID0gKCkgPT4ge1xuICAgICAgICB3aW4gPSBvYmplY3QuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3O1xuICAgICAgICB3aW4uYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZm4pO1xuICAgIH07XG4gICAgaWYgKC9UcmlkZW50Ly50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQob2JqZWN0KTtcbiAgICAgICAgb2JqZWN0LmRhdGEgPSAnYWJvdXQ6YmxhbmsnO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgb2JqZWN0LmRhdGEgPSAnYWJvdXQ6YmxhbmsnO1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG9iamVjdCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGNhbmNlbDogKCkgPT4ge1xuICAgICAgICAgICAgd2luICYmIHdpbi5yZW1vdmVFdmVudExpc3RlbmVyICYmIHdpbi5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmbik7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKG9iamVjdCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gdG9nZ2xlX2NsYXNzKGVsZW1lbnQsIG5hbWUsIHRvZ2dsZSkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0W3RvZ2dsZSA/ICdhZGQnIDogJ3JlbW92ZSddKG5hbWUpO1xufVxuZnVuY3Rpb24gY3VzdG9tX2V2ZW50KHR5cGUsIGRldGFpbCkge1xuICAgIGNvbnN0IGUgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICBlLmluaXRDdXN0b21FdmVudCh0eXBlLCBmYWxzZSwgZmFsc2UsIGRldGFpbCk7XG4gICAgcmV0dXJuIGU7XG59XG5jbGFzcyBIdG1sVGFnIHtcbiAgICBjb25zdHJ1Y3RvcihodG1sLCBhbmNob3IgPSBudWxsKSB7XG4gICAgICAgIHRoaXMuZSA9IGVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmEgPSBhbmNob3I7XG4gICAgICAgIHRoaXMudShodG1sKTtcbiAgICB9XG4gICAgbSh0YXJnZXQsIGFuY2hvciA9IG51bGwpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm4ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGluc2VydCh0YXJnZXQsIHRoaXMubltpXSwgYW5jaG9yKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnQgPSB0YXJnZXQ7XG4gICAgfVxuICAgIHUoaHRtbCkge1xuICAgICAgICB0aGlzLmUuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgICAgdGhpcy5uID0gQXJyYXkuZnJvbSh0aGlzLmUuY2hpbGROb2Rlcyk7XG4gICAgfVxuICAgIHAoaHRtbCkge1xuICAgICAgICB0aGlzLmQoKTtcbiAgICAgICAgdGhpcy51KGh0bWwpO1xuICAgICAgICB0aGlzLm0odGhpcy50LCB0aGlzLmEpO1xuICAgIH1cbiAgICBkKCkge1xuICAgICAgICB0aGlzLm4uZm9yRWFjaChkZXRhY2gpO1xuICAgIH1cbn1cblxubGV0IHN0eWxlc2hlZXQ7XG5sZXQgYWN0aXZlID0gMDtcbmxldCBjdXJyZW50X3J1bGVzID0ge307XG4vLyBodHRwczovL2dpdGh1Yi5jb20vZGFya3NreWFwcC9zdHJpbmctaGFzaC9ibG9iL21hc3Rlci9pbmRleC5qc1xuZnVuY3Rpb24gaGFzaChzdHIpIHtcbiAgICBsZXQgaGFzaCA9IDUzODE7XG4gICAgbGV0IGkgPSBzdHIubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pXG4gICAgICAgIGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSBeIHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBoYXNoID4+PiAwO1xufVxuZnVuY3Rpb24gY3JlYXRlX3J1bGUobm9kZSwgYSwgYiwgZHVyYXRpb24sIGRlbGF5LCBlYXNlLCBmbiwgdWlkID0gMCkge1xuICAgIGNvbnN0IHN0ZXAgPSAxNi42NjYgLyBkdXJhdGlvbjtcbiAgICBsZXQga2V5ZnJhbWVzID0gJ3tcXG4nO1xuICAgIGZvciAobGV0IHAgPSAwOyBwIDw9IDE7IHAgKz0gc3RlcCkge1xuICAgICAgICBjb25zdCB0ID0gYSArIChiIC0gYSkgKiBlYXNlKHApO1xuICAgICAgICBrZXlmcmFtZXMgKz0gcCAqIDEwMCArIGAleyR7Zm4odCwgMSAtIHQpfX1cXG5gO1xuICAgIH1cbiAgICBjb25zdCBydWxlID0ga2V5ZnJhbWVzICsgYDEwMCUgeyR7Zm4oYiwgMSAtIGIpfX1cXG59YDtcbiAgICBjb25zdCBuYW1lID0gYF9fc3ZlbHRlXyR7aGFzaChydWxlKX1fJHt1aWR9YDtcbiAgICBpZiAoIWN1cnJlbnRfcnVsZXNbbmFtZV0pIHtcbiAgICAgICAgaWYgKCFzdHlsZXNoZWV0KSB7XG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IGVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgICAgICAgIHN0eWxlc2hlZXQgPSBzdHlsZS5zaGVldDtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50X3J1bGVzW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgc3R5bGVzaGVldC5pbnNlcnRSdWxlKGBAa2V5ZnJhbWVzICR7bmFtZX0gJHtydWxlfWAsIHN0eWxlc2hlZXQuY3NzUnVsZXMubGVuZ3RoKTtcbiAgICB9XG4gICAgY29uc3QgYW5pbWF0aW9uID0gbm9kZS5zdHlsZS5hbmltYXRpb24gfHwgJyc7XG4gICAgbm9kZS5zdHlsZS5hbmltYXRpb24gPSBgJHthbmltYXRpb24gPyBgJHthbmltYXRpb259LCBgIDogYGB9JHtuYW1lfSAke2R1cmF0aW9ufW1zIGxpbmVhciAke2RlbGF5fW1zIDEgYm90aGA7XG4gICAgYWN0aXZlICs9IDE7XG4gICAgcmV0dXJuIG5hbWU7XG59XG5mdW5jdGlvbiBkZWxldGVfcnVsZShub2RlLCBuYW1lKSB7XG4gICAgbm9kZS5zdHlsZS5hbmltYXRpb24gPSAobm9kZS5zdHlsZS5hbmltYXRpb24gfHwgJycpXG4gICAgICAgIC5zcGxpdCgnLCAnKVxuICAgICAgICAuZmlsdGVyKG5hbWVcbiAgICAgICAgPyBhbmltID0+IGFuaW0uaW5kZXhPZihuYW1lKSA8IDAgLy8gcmVtb3ZlIHNwZWNpZmljIGFuaW1hdGlvblxuICAgICAgICA6IGFuaW0gPT4gYW5pbS5pbmRleE9mKCdfX3N2ZWx0ZScpID09PSAtMSAvLyByZW1vdmUgYWxsIFN2ZWx0ZSBhbmltYXRpb25zXG4gICAgKVxuICAgICAgICAuam9pbignLCAnKTtcbiAgICBpZiAobmFtZSAmJiAhLS1hY3RpdmUpXG4gICAgICAgIGNsZWFyX3J1bGVzKCk7XG59XG5mdW5jdGlvbiBjbGVhcl9ydWxlcygpIHtcbiAgICByYWYoKCkgPT4ge1xuICAgICAgICBpZiAoYWN0aXZlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBsZXQgaSA9IHN0eWxlc2hlZXQuY3NzUnVsZXMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoaS0tKVxuICAgICAgICAgICAgc3R5bGVzaGVldC5kZWxldGVSdWxlKGkpO1xuICAgICAgICBjdXJyZW50X3J1bGVzID0ge307XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZV9hbmltYXRpb24obm9kZSwgZnJvbSwgZm4sIHBhcmFtcykge1xuICAgIGlmICghZnJvbSlcbiAgICAgICAgcmV0dXJuIG5vb3A7XG4gICAgY29uc3QgdG8gPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmIChmcm9tLmxlZnQgPT09IHRvLmxlZnQgJiYgZnJvbS5yaWdodCA9PT0gdG8ucmlnaHQgJiYgZnJvbS50b3AgPT09IHRvLnRvcCAmJiBmcm9tLmJvdHRvbSA9PT0gdG8uYm90dG9tKVxuICAgICAgICByZXR1cm4gbm9vcDtcbiAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSAzMDAsIGVhc2luZyA9IGlkZW50aXR5LCBcbiAgICAvLyBAdHMtaWdub3JlIHRvZG86IHNob3VsZCB0aGlzIGJlIHNlcGFyYXRlZCBmcm9tIGRlc3RydWN0dXJpbmc/IE9yIHN0YXJ0L2VuZCBhZGRlZCB0byBwdWJsaWMgYXBpIGFuZCBkb2N1bWVudGF0aW9uP1xuICAgIHN0YXJ0OiBzdGFydF90aW1lID0gbm93KCkgKyBkZWxheSwgXG4gICAgLy8gQHRzLWlnbm9yZSB0b2RvOlxuICAgIGVuZCA9IHN0YXJ0X3RpbWUgKyBkdXJhdGlvbiwgdGljayA9IG5vb3AsIGNzcyB9ID0gZm4obm9kZSwgeyBmcm9tLCB0byB9LCBwYXJhbXMpO1xuICAgIGxldCBydW5uaW5nID0gdHJ1ZTtcbiAgICBsZXQgc3RhcnRlZCA9IGZhbHNlO1xuICAgIGxldCBuYW1lO1xuICAgIGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICBpZiAoY3NzKSB7XG4gICAgICAgICAgICBuYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgMCwgMSwgZHVyYXRpb24sIGRlbGF5LCBlYXNpbmcsIGNzcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFkZWxheSkge1xuICAgICAgICAgICAgc3RhcnRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgaWYgKGNzcylcbiAgICAgICAgICAgIGRlbGV0ZV9ydWxlKG5vZGUsIG5hbWUpO1xuICAgICAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgfVxuICAgIGxvb3Aobm93ID0+IHtcbiAgICAgICAgaWYgKCFzdGFydGVkICYmIG5vdyA+PSBzdGFydF90aW1lKSB7XG4gICAgICAgICAgICBzdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhcnRlZCAmJiBub3cgPj0gZW5kKSB7XG4gICAgICAgICAgICB0aWNrKDEsIDApO1xuICAgICAgICAgICAgc3RvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcnVubmluZykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFydGVkKSB7XG4gICAgICAgICAgICBjb25zdCBwID0gbm93IC0gc3RhcnRfdGltZTtcbiAgICAgICAgICAgIGNvbnN0IHQgPSAwICsgMSAqIGVhc2luZyhwIC8gZHVyYXRpb24pO1xuICAgICAgICAgICAgdGljayh0LCAxIC0gdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gICAgc3RhcnQoKTtcbiAgICB0aWNrKDAsIDEpO1xuICAgIHJldHVybiBzdG9wO1xufVxuZnVuY3Rpb24gZml4X3Bvc2l0aW9uKG5vZGUpIHtcbiAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgaWYgKHN0eWxlLnBvc2l0aW9uICE9PSAnYWJzb2x1dGUnICYmIHN0eWxlLnBvc2l0aW9uICE9PSAnZml4ZWQnKSB7XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gc3R5bGU7XG4gICAgICAgIGNvbnN0IGEgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBub2RlLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgbm9kZS5zdHlsZS53aWR0aCA9IHdpZHRoO1xuICAgICAgICBub2RlLnN0eWxlLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgYWRkX3RyYW5zZm9ybShub2RlLCBhKTtcbiAgICB9XG59XG5mdW5jdGlvbiBhZGRfdHJhbnNmb3JtKG5vZGUsIGEpIHtcbiAgICBjb25zdCBiID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAoYS5sZWZ0ICE9PSBiLmxlZnQgfHwgYS50b3AgIT09IGIudG9wKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtID0gc3R5bGUudHJhbnNmb3JtID09PSAnbm9uZScgPyAnJyA6IHN0eWxlLnRyYW5zZm9ybTtcbiAgICAgICAgbm9kZS5zdHlsZS50cmFuc2Zvcm0gPSBgJHt0cmFuc2Zvcm19IHRyYW5zbGF0ZSgke2EubGVmdCAtIGIubGVmdH1weCwgJHthLnRvcCAtIGIudG9wfXB4KWA7XG4gICAgfVxufVxuXG5sZXQgY3VycmVudF9jb21wb25lbnQ7XG5mdW5jdGlvbiBzZXRfY3VycmVudF9jb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgY3VycmVudF9jb21wb25lbnQgPSBjb21wb25lbnQ7XG59XG5mdW5jdGlvbiBnZXRfY3VycmVudF9jb21wb25lbnQoKSB7XG4gICAgaWYgKCFjdXJyZW50X2NvbXBvbmVudClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGdW5jdGlvbiBjYWxsZWQgb3V0c2lkZSBjb21wb25lbnQgaW5pdGlhbGl6YXRpb25gKTtcbiAgICByZXR1cm4gY3VycmVudF9jb21wb25lbnQ7XG59XG5mdW5jdGlvbiBiZWZvcmVVcGRhdGUoZm4pIHtcbiAgICBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5iZWZvcmVfdXBkYXRlLnB1c2goZm4pO1xufVxuZnVuY3Rpb24gb25Nb3VudChmbikge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLm9uX21vdW50LnB1c2goZm4pO1xufVxuZnVuY3Rpb24gYWZ0ZXJVcGRhdGUoZm4pIHtcbiAgICBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5hZnRlcl91cGRhdGUucHVzaChmbik7XG59XG5mdW5jdGlvbiBvbkRlc3Ryb3koZm4pIHtcbiAgICBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5vbl9kZXN0cm95LnB1c2goZm4pO1xufVxuZnVuY3Rpb24gY3JlYXRlRXZlbnREaXNwYXRjaGVyKCkge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IGN1cnJlbnRfY29tcG9uZW50O1xuICAgIHJldHVybiAodHlwZSwgZGV0YWlsKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9IGNvbXBvbmVudC4kJC5jYWxsYmFja3NbdHlwZV07XG4gICAgICAgIGlmIChjYWxsYmFja3MpIHtcbiAgICAgICAgICAgIC8vIFRPRE8gYXJlIHRoZXJlIHNpdHVhdGlvbnMgd2hlcmUgZXZlbnRzIGNvdWxkIGJlIGRpc3BhdGNoZWRcbiAgICAgICAgICAgIC8vIGluIGEgc2VydmVyIChub24tRE9NKSBlbnZpcm9ubWVudD9cbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gY3VzdG9tX2V2ZW50KHR5cGUsIGRldGFpbCk7XG4gICAgICAgICAgICBjYWxsYmFja3Muc2xpY2UoKS5mb3JFYWNoKGZuID0+IHtcbiAgICAgICAgICAgICAgICBmbi5jYWxsKGNvbXBvbmVudCwgZXZlbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gc2V0Q29udGV4dChrZXksIGNvbnRleHQpIHtcbiAgICBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5jb250ZXh0LnNldChrZXksIGNvbnRleHQpO1xufVxuZnVuY3Rpb24gZ2V0Q29udGV4dChrZXkpIHtcbiAgICByZXR1cm4gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuY29udGV4dC5nZXQoa2V5KTtcbn1cbi8vIFRPRE8gZmlndXJlIG91dCBpZiB3ZSBzdGlsbCB3YW50IHRvIHN1cHBvcnRcbi8vIHNob3J0aGFuZCBldmVudHMsIG9yIGlmIHdlIHdhbnQgdG8gaW1wbGVtZW50XG4vLyBhIHJlYWwgYnViYmxpbmcgbWVjaGFuaXNtXG5mdW5jdGlvbiBidWJibGUoY29tcG9uZW50LCBldmVudCkge1xuICAgIGNvbnN0IGNhbGxiYWNrcyA9IGNvbXBvbmVudC4kJC5jYWxsYmFja3NbZXZlbnQudHlwZV07XG4gICAgaWYgKGNhbGxiYWNrcykge1xuICAgICAgICBjYWxsYmFja3Muc2xpY2UoKS5mb3JFYWNoKGZuID0+IGZuKGV2ZW50KSk7XG4gICAgfVxufVxuXG5jb25zdCBkaXJ0eV9jb21wb25lbnRzID0gW107XG5jb25zdCBpbnRyb3MgPSB7IGVuYWJsZWQ6IGZhbHNlIH07XG5jb25zdCBiaW5kaW5nX2NhbGxiYWNrcyA9IFtdO1xuY29uc3QgcmVuZGVyX2NhbGxiYWNrcyA9IFtdO1xuY29uc3QgZmx1c2hfY2FsbGJhY2tzID0gW107XG5jb25zdCByZXNvbHZlZF9wcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5sZXQgdXBkYXRlX3NjaGVkdWxlZCA9IGZhbHNlO1xuZnVuY3Rpb24gc2NoZWR1bGVfdXBkYXRlKCkge1xuICAgIGlmICghdXBkYXRlX3NjaGVkdWxlZCkge1xuICAgICAgICB1cGRhdGVfc2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgICAgcmVzb2x2ZWRfcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9XG59XG5mdW5jdGlvbiB0aWNrKCkge1xuICAgIHNjaGVkdWxlX3VwZGF0ZSgpO1xuICAgIHJldHVybiByZXNvbHZlZF9wcm9taXNlO1xufVxuZnVuY3Rpb24gYWRkX3JlbmRlcl9jYWxsYmFjayhmbikge1xuICAgIHJlbmRlcl9jYWxsYmFja3MucHVzaChmbik7XG59XG5mdW5jdGlvbiBhZGRfZmx1c2hfY2FsbGJhY2soZm4pIHtcbiAgICBmbHVzaF9jYWxsYmFja3MucHVzaChmbik7XG59XG5mdW5jdGlvbiBmbHVzaCgpIHtcbiAgICBjb25zdCBzZWVuX2NhbGxiYWNrcyA9IG5ldyBTZXQoKTtcbiAgICBkbyB7XG4gICAgICAgIC8vIGZpcnN0LCBjYWxsIGJlZm9yZVVwZGF0ZSBmdW5jdGlvbnNcbiAgICAgICAgLy8gYW5kIHVwZGF0ZSBjb21wb25lbnRzXG4gICAgICAgIHdoaWxlIChkaXJ0eV9jb21wb25lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gZGlydHlfY29tcG9uZW50cy5zaGlmdCgpO1xuICAgICAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICB1cGRhdGUoY29tcG9uZW50LiQkKTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAoYmluZGluZ19jYWxsYmFja3MubGVuZ3RoKVxuICAgICAgICAgICAgYmluZGluZ19jYWxsYmFja3MucG9wKCkoKTtcbiAgICAgICAgLy8gdGhlbiwgb25jZSBjb21wb25lbnRzIGFyZSB1cGRhdGVkLCBjYWxsXG4gICAgICAgIC8vIGFmdGVyVXBkYXRlIGZ1bmN0aW9ucy4gVGhpcyBtYXkgY2F1c2VcbiAgICAgICAgLy8gc3Vic2VxdWVudCB1cGRhdGVzLi4uXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVuZGVyX2NhbGxiYWNrcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSByZW5kZXJfY2FsbGJhY2tzW2ldO1xuICAgICAgICAgICAgaWYgKCFzZWVuX2NhbGxiYWNrcy5oYXMoY2FsbGJhY2spKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAvLyAuLi5zbyBndWFyZCBhZ2FpbnN0IGluZmluaXRlIGxvb3BzXG4gICAgICAgICAgICAgICAgc2Vlbl9jYWxsYmFja3MuYWRkKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZW5kZXJfY2FsbGJhY2tzLmxlbmd0aCA9IDA7XG4gICAgfSB3aGlsZSAoZGlydHlfY29tcG9uZW50cy5sZW5ndGgpO1xuICAgIHdoaWxlIChmbHVzaF9jYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgICAgIGZsdXNoX2NhbGxiYWNrcy5wb3AoKSgpO1xuICAgIH1cbiAgICB1cGRhdGVfc2NoZWR1bGVkID0gZmFsc2U7XG59XG5mdW5jdGlvbiB1cGRhdGUoJCQpIHtcbiAgICBpZiAoJCQuZnJhZ21lbnQpIHtcbiAgICAgICAgJCQudXBkYXRlKCQkLmRpcnR5KTtcbiAgICAgICAgcnVuX2FsbCgkJC5iZWZvcmVfdXBkYXRlKTtcbiAgICAgICAgJCQuZnJhZ21lbnQucCgkJC5kaXJ0eSwgJCQuY3R4KTtcbiAgICAgICAgJCQuZGlydHkgPSBudWxsO1xuICAgICAgICAkJC5hZnRlcl91cGRhdGUuZm9yRWFjaChhZGRfcmVuZGVyX2NhbGxiYWNrKTtcbiAgICB9XG59XG5cbmxldCBwcm9taXNlO1xuZnVuY3Rpb24gd2FpdCgpIHtcbiAgICBpZiAoIXByb21pc2UpIHtcbiAgICAgICAgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICBwcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgcHJvbWlzZSA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cbmZ1bmN0aW9uIGRpc3BhdGNoKG5vZGUsIGRpcmVjdGlvbiwga2luZCkge1xuICAgIG5vZGUuZGlzcGF0Y2hFdmVudChjdXN0b21fZXZlbnQoYCR7ZGlyZWN0aW9uID8gJ2ludHJvJyA6ICdvdXRybyd9JHtraW5kfWApKTtcbn1cbmNvbnN0IG91dHJvaW5nID0gbmV3IFNldCgpO1xubGV0IG91dHJvcztcbmZ1bmN0aW9uIGdyb3VwX291dHJvcygpIHtcbiAgICBvdXRyb3MgPSB7XG4gICAgICAgIHI6IDAsXG4gICAgICAgIGM6IFtdLFxuICAgICAgICBwOiBvdXRyb3MgLy8gcGFyZW50IGdyb3VwXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNoZWNrX291dHJvcygpIHtcbiAgICBpZiAoIW91dHJvcy5yKSB7XG4gICAgICAgIHJ1bl9hbGwob3V0cm9zLmMpO1xuICAgIH1cbiAgICBvdXRyb3MgPSBvdXRyb3MucDtcbn1cbmZ1bmN0aW9uIHRyYW5zaXRpb25faW4oYmxvY2ssIGxvY2FsKSB7XG4gICAgaWYgKGJsb2NrICYmIGJsb2NrLmkpIHtcbiAgICAgICAgb3V0cm9pbmcuZGVsZXRlKGJsb2NrKTtcbiAgICAgICAgYmxvY2suaShsb2NhbCk7XG4gICAgfVxufVxuZnVuY3Rpb24gdHJhbnNpdGlvbl9vdXQoYmxvY2ssIGxvY2FsLCBkZXRhY2gsIGNhbGxiYWNrKSB7XG4gICAgaWYgKGJsb2NrICYmIGJsb2NrLm8pIHtcbiAgICAgICAgaWYgKG91dHJvaW5nLmhhcyhibG9jaykpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIG91dHJvaW5nLmFkZChibG9jayk7XG4gICAgICAgIG91dHJvcy5jLnB1c2goKCkgPT4ge1xuICAgICAgICAgICAgb3V0cm9pbmcuZGVsZXRlKGJsb2NrKTtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGlmIChkZXRhY2gpXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrLmQoMSk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGJsb2NrLm8obG9jYWwpO1xuICAgIH1cbn1cbmNvbnN0IG51bGxfdHJhbnNpdGlvbiA9IHsgZHVyYXRpb246IDAgfTtcbmZ1bmN0aW9uIGNyZWF0ZV9pbl90cmFuc2l0aW9uKG5vZGUsIGZuLCBwYXJhbXMpIHtcbiAgICBsZXQgY29uZmlnID0gZm4obm9kZSwgcGFyYW1zKTtcbiAgICBsZXQgcnVubmluZyA9IGZhbHNlO1xuICAgIGxldCBhbmltYXRpb25fbmFtZTtcbiAgICBsZXQgdGFzaztcbiAgICBsZXQgdWlkID0gMDtcbiAgICBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgICAgICBpZiAoYW5pbWF0aW9uX25hbWUpXG4gICAgICAgICAgICBkZWxldGVfcnVsZShub2RlLCBhbmltYXRpb25fbmFtZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdvKCkge1xuICAgICAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSAzMDAsIGVhc2luZyA9IGlkZW50aXR5LCB0aWNrID0gbm9vcCwgY3NzIH0gPSBjb25maWcgfHwgbnVsbF90cmFuc2l0aW9uO1xuICAgICAgICBpZiAoY3NzKVxuICAgICAgICAgICAgYW5pbWF0aW9uX25hbWUgPSBjcmVhdGVfcnVsZShub2RlLCAwLCAxLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzLCB1aWQrKyk7XG4gICAgICAgIHRpY2soMCwgMSk7XG4gICAgICAgIGNvbnN0IHN0YXJ0X3RpbWUgPSBub3coKSArIGRlbGF5O1xuICAgICAgICBjb25zdCBlbmRfdGltZSA9IHN0YXJ0X3RpbWUgKyBkdXJhdGlvbjtcbiAgICAgICAgaWYgKHRhc2spXG4gICAgICAgICAgICB0YXNrLmFib3J0KCk7XG4gICAgICAgIHJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICBhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IGRpc3BhdGNoKG5vZGUsIHRydWUsICdzdGFydCcpKTtcbiAgICAgICAgdGFzayA9IGxvb3Aobm93ID0+IHtcbiAgICAgICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBlbmRfdGltZSkge1xuICAgICAgICAgICAgICAgICAgICB0aWNrKDEsIDApO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChub2RlLCB0cnVlLCAnZW5kJyk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBzdGFydF90aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBlYXNpbmcoKG5vdyAtIHN0YXJ0X3RpbWUpIC8gZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB0aWNrKHQsIDEgLSB0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcnVubmluZztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxldCBzdGFydGVkID0gZmFsc2U7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3RhcnQoKSB7XG4gICAgICAgICAgICBpZiAoc3RhcnRlZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBkZWxldGVfcnVsZShub2RlKTtcbiAgICAgICAgICAgIGlmIChpc19mdW5jdGlvbihjb25maWcpKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnID0gY29uZmlnKCk7XG4gICAgICAgICAgICAgICAgd2FpdCgpLnRoZW4oZ28pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZ28oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaW52YWxpZGF0ZSgpIHtcbiAgICAgICAgICAgIHN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5kKCkge1xuICAgICAgICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICAgICAgcnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZV9vdXRfdHJhbnNpdGlvbihub2RlLCBmbiwgcGFyYW1zKSB7XG4gICAgbGV0IGNvbmZpZyA9IGZuKG5vZGUsIHBhcmFtcyk7XG4gICAgbGV0IHJ1bm5pbmcgPSB0cnVlO1xuICAgIGxldCBhbmltYXRpb25fbmFtZTtcbiAgICBjb25zdCBncm91cCA9IG91dHJvcztcbiAgICBncm91cC5yICs9IDE7XG4gICAgZnVuY3Rpb24gZ28oKSB7XG4gICAgICAgIGNvbnN0IHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDMwMCwgZWFzaW5nID0gaWRlbnRpdHksIHRpY2sgPSBub29wLCBjc3MgfSA9IGNvbmZpZyB8fCBudWxsX3RyYW5zaXRpb247XG4gICAgICAgIGlmIChjc3MpXG4gICAgICAgICAgICBhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIDEsIDAsIGR1cmF0aW9uLCBkZWxheSwgZWFzaW5nLCBjc3MpO1xuICAgICAgICBjb25zdCBzdGFydF90aW1lID0gbm93KCkgKyBkZWxheTtcbiAgICAgICAgY29uc3QgZW5kX3RpbWUgPSBzdGFydF90aW1lICsgZHVyYXRpb247XG4gICAgICAgIGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4gZGlzcGF0Y2gobm9kZSwgZmFsc2UsICdzdGFydCcpKTtcbiAgICAgICAgbG9vcChub3cgPT4ge1xuICAgICAgICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAobm93ID49IGVuZF90aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpY2soMCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5vZGUsIGZhbHNlLCAnZW5kJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghLS1ncm91cC5yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdpbGwgcmVzdWx0IGluIGBlbmQoKWAgYmVpbmcgY2FsbGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc28gd2UgZG9uJ3QgbmVlZCB0byBjbGVhbiB1cCBoZXJlXG4gICAgICAgICAgICAgICAgICAgICAgICBydW5fYWxsKGdyb3VwLmMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBzdGFydF90aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBlYXNpbmcoKG5vdyAtIHN0YXJ0X3RpbWUpIC8gZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB0aWNrKDEgLSB0LCB0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcnVubmluZztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChpc19mdW5jdGlvbihjb25maWcpKSB7XG4gICAgICAgIHdhaXQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbmZpZyA9IGNvbmZpZygpO1xuICAgICAgICAgICAgZ28oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBnbygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBlbmQocmVzZXQpIHtcbiAgICAgICAgICAgIGlmIChyZXNldCAmJiBjb25maWcudGljaykge1xuICAgICAgICAgICAgICAgIGNvbmZpZy50aWNrKDEsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uX25hbWUpXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZV9ydWxlKG5vZGUsIGFuaW1hdGlvbl9uYW1lKTtcbiAgICAgICAgICAgICAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlX2JpZGlyZWN0aW9uYWxfdHJhbnNpdGlvbihub2RlLCBmbiwgcGFyYW1zLCBpbnRybykge1xuICAgIGxldCBjb25maWcgPSBmbihub2RlLCBwYXJhbXMpO1xuICAgIGxldCB0ID0gaW50cm8gPyAwIDogMTtcbiAgICBsZXQgcnVubmluZ19wcm9ncmFtID0gbnVsbDtcbiAgICBsZXQgcGVuZGluZ19wcm9ncmFtID0gbnVsbDtcbiAgICBsZXQgYW5pbWF0aW9uX25hbWUgPSBudWxsO1xuICAgIGZ1bmN0aW9uIGNsZWFyX2FuaW1hdGlvbigpIHtcbiAgICAgICAgaWYgKGFuaW1hdGlvbl9uYW1lKVxuICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSwgYW5pbWF0aW9uX25hbWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpbml0KHByb2dyYW0sIGR1cmF0aW9uKSB7XG4gICAgICAgIGNvbnN0IGQgPSBwcm9ncmFtLmIgLSB0O1xuICAgICAgICBkdXJhdGlvbiAqPSBNYXRoLmFicyhkKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGE6IHQsXG4gICAgICAgICAgICBiOiBwcm9ncmFtLmIsXG4gICAgICAgICAgICBkLFxuICAgICAgICAgICAgZHVyYXRpb24sXG4gICAgICAgICAgICBzdGFydDogcHJvZ3JhbS5zdGFydCxcbiAgICAgICAgICAgIGVuZDogcHJvZ3JhbS5zdGFydCArIGR1cmF0aW9uLFxuICAgICAgICAgICAgZ3JvdXA6IHByb2dyYW0uZ3JvdXBcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ28oYikge1xuICAgICAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSAzMDAsIGVhc2luZyA9IGlkZW50aXR5LCB0aWNrID0gbm9vcCwgY3NzIH0gPSBjb25maWcgfHwgbnVsbF90cmFuc2l0aW9uO1xuICAgICAgICBjb25zdCBwcm9ncmFtID0ge1xuICAgICAgICAgICAgc3RhcnQ6IG5vdygpICsgZGVsYXksXG4gICAgICAgICAgICBiXG4gICAgICAgIH07XG4gICAgICAgIGlmICghYikge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0b2RvOiBpbXByb3ZlIHR5cGluZ3NcbiAgICAgICAgICAgIHByb2dyYW0uZ3JvdXAgPSBvdXRyb3M7XG4gICAgICAgICAgICBvdXRyb3MuciArPSAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChydW5uaW5nX3Byb2dyYW0pIHtcbiAgICAgICAgICAgIHBlbmRpbmdfcHJvZ3JhbSA9IHByb2dyYW07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBpZiB0aGlzIGlzIGFuIGludHJvLCBhbmQgdGhlcmUncyBhIGRlbGF5LCB3ZSBuZWVkIHRvIGRvXG4gICAgICAgICAgICAvLyBhbiBpbml0aWFsIHRpY2sgYW5kL29yIGFwcGx5IENTUyBhbmltYXRpb24gaW1tZWRpYXRlbHlcbiAgICAgICAgICAgIGlmIChjc3MpIHtcbiAgICAgICAgICAgICAgICBjbGVhcl9hbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICBhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIHQsIGIsIGR1cmF0aW9uLCBkZWxheSwgZWFzaW5nLCBjc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGIpXG4gICAgICAgICAgICAgICAgdGljaygwLCAxKTtcbiAgICAgICAgICAgIHJ1bm5pbmdfcHJvZ3JhbSA9IGluaXQocHJvZ3JhbSwgZHVyYXRpb24pO1xuICAgICAgICAgICAgYWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiBkaXNwYXRjaChub2RlLCBiLCAnc3RhcnQnKSk7XG4gICAgICAgICAgICBsb29wKG5vdyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHBlbmRpbmdfcHJvZ3JhbSAmJiBub3cgPiBwZW5kaW5nX3Byb2dyYW0uc3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ19wcm9ncmFtID0gaW5pdChwZW5kaW5nX3Byb2dyYW0sIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgcGVuZGluZ19wcm9ncmFtID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobm9kZSwgcnVubmluZ19wcm9ncmFtLmIsICdzdGFydCcpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3NzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhcl9hbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgdCwgcnVubmluZ19wcm9ncmFtLmIsIHJ1bm5pbmdfcHJvZ3JhbS5kdXJhdGlvbiwgMCwgZWFzaW5nLCBjb25maWcuY3NzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocnVubmluZ19wcm9ncmFtKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub3cgPj0gcnVubmluZ19wcm9ncmFtLmVuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGljayh0ID0gcnVubmluZ19wcm9ncmFtLmIsIDEgLSB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5vZGUsIHJ1bm5pbmdfcHJvZ3JhbS5iLCAnZW5kJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXBlbmRpbmdfcHJvZ3JhbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlJ3JlIGRvbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocnVubmluZ19wcm9ncmFtLmIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW50cm8g4oCUIHdlIGNhbiB0aWR5IHVwIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyX2FuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb3V0cm8g4oCUIG5lZWRzIHRvIGJlIGNvb3JkaW5hdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghLS1ydW5uaW5nX3Byb2dyYW0uZ3JvdXAucilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bl9hbGwocnVubmluZ19wcm9ncmFtLmdyb3VwLmMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bm5pbmdfcHJvZ3JhbSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobm93ID49IHJ1bm5pbmdfcHJvZ3JhbS5zdGFydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcCA9IG5vdyAtIHJ1bm5pbmdfcHJvZ3JhbS5zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBydW5uaW5nX3Byb2dyYW0uYSArIHJ1bm5pbmdfcHJvZ3JhbS5kICogZWFzaW5nKHAgLyBydW5uaW5nX3Byb2dyYW0uZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGljayh0LCAxIC0gdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuICEhKHJ1bm5pbmdfcHJvZ3JhbSB8fCBwZW5kaW5nX3Byb2dyYW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcnVuKGIpIHtcbiAgICAgICAgICAgIGlmIChpc19mdW5jdGlvbihjb25maWcpKSB7XG4gICAgICAgICAgICAgICAgd2FpdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZyA9IGNvbmZpZygpO1xuICAgICAgICAgICAgICAgICAgICBnbyhiKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGdvKGIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbmQoKSB7XG4gICAgICAgICAgICBjbGVhcl9hbmltYXRpb24oKTtcbiAgICAgICAgICAgIHJ1bm5pbmdfcHJvZ3JhbSA9IHBlbmRpbmdfcHJvZ3JhbSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiBoYW5kbGVfcHJvbWlzZShwcm9taXNlLCBpbmZvKSB7XG4gICAgY29uc3QgdG9rZW4gPSBpbmZvLnRva2VuID0ge307XG4gICAgZnVuY3Rpb24gdXBkYXRlKHR5cGUsIGluZGV4LCBrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmIChpbmZvLnRva2VuICE9PSB0b2tlbilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaW5mby5yZXNvbHZlZCA9IGtleSAmJiB7IFtrZXldOiB2YWx1ZSB9O1xuICAgICAgICBjb25zdCBjaGlsZF9jdHggPSBhc3NpZ24oYXNzaWduKHt9LCBpbmZvLmN0eCksIGluZm8ucmVzb2x2ZWQpO1xuICAgICAgICBjb25zdCBibG9jayA9IHR5cGUgJiYgKGluZm8uY3VycmVudCA9IHR5cGUpKGNoaWxkX2N0eCk7XG4gICAgICAgIGlmIChpbmZvLmJsb2NrKSB7XG4gICAgICAgICAgICBpZiAoaW5mby5ibG9ja3MpIHtcbiAgICAgICAgICAgICAgICBpbmZvLmJsb2Nrcy5mb3JFYWNoKChibG9jaywgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSAhPT0gaW5kZXggJiYgYmxvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwX291dHJvcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbl9vdXQoYmxvY2ssIDEsIDEsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZvLmJsb2Nrc1tpXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrX291dHJvcygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbmZvLmJsb2NrLmQoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBibG9jay5jKCk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uX2luKGJsb2NrLCAxKTtcbiAgICAgICAgICAgIGJsb2NrLm0oaW5mby5tb3VudCgpLCBpbmZvLmFuY2hvcik7XG4gICAgICAgICAgICBmbHVzaCgpO1xuICAgICAgICB9XG4gICAgICAgIGluZm8uYmxvY2sgPSBibG9jaztcbiAgICAgICAgaWYgKGluZm8uYmxvY2tzKVxuICAgICAgICAgICAgaW5mby5ibG9ja3NbaW5kZXhdID0gYmxvY2s7XG4gICAgfVxuICAgIGlmIChpc19wcm9taXNlKHByb21pc2UpKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRfY29tcG9uZW50ID0gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCk7XG4gICAgICAgIHByb21pc2UudGhlbih2YWx1ZSA9PiB7XG4gICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQoY3VycmVudF9jb21wb25lbnQpO1xuICAgICAgICAgICAgdXBkYXRlKGluZm8udGhlbiwgMSwgaW5mby52YWx1ZSwgdmFsdWUpO1xuICAgICAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KG51bGwpO1xuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQoY3VycmVudF9jb21wb25lbnQpO1xuICAgICAgICAgICAgdXBkYXRlKGluZm8uY2F0Y2gsIDIsIGluZm8uZXJyb3IsIGVycm9yKTtcbiAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChudWxsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGlmIHdlIHByZXZpb3VzbHkgaGFkIGEgdGhlbi9jYXRjaCBibG9jaywgZGVzdHJveSBpdFxuICAgICAgICBpZiAoaW5mby5jdXJyZW50ICE9PSBpbmZvLnBlbmRpbmcpIHtcbiAgICAgICAgICAgIHVwZGF0ZShpbmZvLnBlbmRpbmcsIDApO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChpbmZvLmN1cnJlbnQgIT09IGluZm8udGhlbikge1xuICAgICAgICAgICAgdXBkYXRlKGluZm8udGhlbiwgMSwgaW5mby52YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpbmZvLnJlc29sdmVkID0geyBbaW5mby52YWx1ZV06IHByb21pc2UgfTtcbiAgICB9XG59XG5cbmNvbnN0IGdsb2JhbHMgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWwpO1xuXG5mdW5jdGlvbiBkZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApIHtcbiAgICBibG9jay5kKDEpO1xuICAgIGxvb2t1cC5kZWxldGUoYmxvY2sua2V5KTtcbn1cbmZ1bmN0aW9uIG91dHJvX2FuZF9kZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApIHtcbiAgICB0cmFuc2l0aW9uX291dChibG9jaywgMSwgMSwgKCkgPT4ge1xuICAgICAgICBsb29rdXAuZGVsZXRlKGJsb2NrLmtleSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBmaXhfYW5kX2Rlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCkge1xuICAgIGJsb2NrLmYoKTtcbiAgICBkZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApO1xufVxuZnVuY3Rpb24gZml4X2FuZF9vdXRyb19hbmRfZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKSB7XG4gICAgYmxvY2suZigpO1xuICAgIG91dHJvX2FuZF9kZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApO1xufVxuZnVuY3Rpb24gdXBkYXRlX2tleWVkX2VhY2gob2xkX2Jsb2NrcywgY2hhbmdlZCwgZ2V0X2tleSwgZHluYW1pYywgY3R4LCBsaXN0LCBsb29rdXAsIG5vZGUsIGRlc3Ryb3ksIGNyZWF0ZV9lYWNoX2Jsb2NrLCBuZXh0LCBnZXRfY29udGV4dCkge1xuICAgIGxldCBvID0gb2xkX2Jsb2Nrcy5sZW5ndGg7XG4gICAgbGV0IG4gPSBsaXN0Lmxlbmd0aDtcbiAgICBsZXQgaSA9IG87XG4gICAgY29uc3Qgb2xkX2luZGV4ZXMgPSB7fTtcbiAgICB3aGlsZSAoaS0tKVxuICAgICAgICBvbGRfaW5kZXhlc1tvbGRfYmxvY2tzW2ldLmtleV0gPSBpO1xuICAgIGNvbnN0IG5ld19ibG9ja3MgPSBbXTtcbiAgICBjb25zdCBuZXdfbG9va3VwID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IGRlbHRhcyA9IG5ldyBNYXAoKTtcbiAgICBpID0gbjtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkX2N0eCA9IGdldF9jb250ZXh0KGN0eCwgbGlzdCwgaSk7XG4gICAgICAgIGNvbnN0IGtleSA9IGdldF9rZXkoY2hpbGRfY3R4KTtcbiAgICAgICAgbGV0IGJsb2NrID0gbG9va3VwLmdldChrZXkpO1xuICAgICAgICBpZiAoIWJsb2NrKSB7XG4gICAgICAgICAgICBibG9jayA9IGNyZWF0ZV9lYWNoX2Jsb2NrKGtleSwgY2hpbGRfY3R4KTtcbiAgICAgICAgICAgIGJsb2NrLmMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkeW5hbWljKSB7XG4gICAgICAgICAgICBibG9jay5wKGNoYW5nZWQsIGNoaWxkX2N0eCk7XG4gICAgICAgIH1cbiAgICAgICAgbmV3X2xvb2t1cC5zZXQoa2V5LCBuZXdfYmxvY2tzW2ldID0gYmxvY2spO1xuICAgICAgICBpZiAoa2V5IGluIG9sZF9pbmRleGVzKVxuICAgICAgICAgICAgZGVsdGFzLnNldChrZXksIE1hdGguYWJzKGkgLSBvbGRfaW5kZXhlc1trZXldKSk7XG4gICAgfVxuICAgIGNvbnN0IHdpbGxfbW92ZSA9IG5ldyBTZXQoKTtcbiAgICBjb25zdCBkaWRfbW92ZSA9IG5ldyBTZXQoKTtcbiAgICBmdW5jdGlvbiBpbnNlcnQoYmxvY2spIHtcbiAgICAgICAgdHJhbnNpdGlvbl9pbihibG9jaywgMSk7XG4gICAgICAgIGJsb2NrLm0obm9kZSwgbmV4dCk7XG4gICAgICAgIGxvb2t1cC5zZXQoYmxvY2sua2V5LCBibG9jayk7XG4gICAgICAgIG5leHQgPSBibG9jay5maXJzdDtcbiAgICAgICAgbi0tO1xuICAgIH1cbiAgICB3aGlsZSAobyAmJiBuKSB7XG4gICAgICAgIGNvbnN0IG5ld19ibG9jayA9IG5ld19ibG9ja3NbbiAtIDFdO1xuICAgICAgICBjb25zdCBvbGRfYmxvY2sgPSBvbGRfYmxvY2tzW28gLSAxXTtcbiAgICAgICAgY29uc3QgbmV3X2tleSA9IG5ld19ibG9jay5rZXk7XG4gICAgICAgIGNvbnN0IG9sZF9rZXkgPSBvbGRfYmxvY2sua2V5O1xuICAgICAgICBpZiAobmV3X2Jsb2NrID09PSBvbGRfYmxvY2spIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgICAgIG5leHQgPSBuZXdfYmxvY2suZmlyc3Q7XG4gICAgICAgICAgICBvLS07XG4gICAgICAgICAgICBuLS07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIW5ld19sb29rdXAuaGFzKG9sZF9rZXkpKSB7XG4gICAgICAgICAgICAvLyByZW1vdmUgb2xkIGJsb2NrXG4gICAgICAgICAgICBkZXN0cm95KG9sZF9ibG9jaywgbG9va3VwKTtcbiAgICAgICAgICAgIG8tLTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghbG9va3VwLmhhcyhuZXdfa2V5KSB8fCB3aWxsX21vdmUuaGFzKG5ld19rZXkpKSB7XG4gICAgICAgICAgICBpbnNlcnQobmV3X2Jsb2NrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkaWRfbW92ZS5oYXMob2xkX2tleSkpIHtcbiAgICAgICAgICAgIG8tLTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkZWx0YXMuZ2V0KG5ld19rZXkpID4gZGVsdGFzLmdldChvbGRfa2V5KSkge1xuICAgICAgICAgICAgZGlkX21vdmUuYWRkKG5ld19rZXkpO1xuICAgICAgICAgICAgaW5zZXJ0KG5ld19ibG9jayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB3aWxsX21vdmUuYWRkKG9sZF9rZXkpO1xuICAgICAgICAgICAgby0tO1xuICAgICAgICB9XG4gICAgfVxuICAgIHdoaWxlIChvLS0pIHtcbiAgICAgICAgY29uc3Qgb2xkX2Jsb2NrID0gb2xkX2Jsb2Nrc1tvXTtcbiAgICAgICAgaWYgKCFuZXdfbG9va3VwLmhhcyhvbGRfYmxvY2sua2V5KSlcbiAgICAgICAgICAgIGRlc3Ryb3kob2xkX2Jsb2NrLCBsb29rdXApO1xuICAgIH1cbiAgICB3aGlsZSAobilcbiAgICAgICAgaW5zZXJ0KG5ld19ibG9ja3NbbiAtIDFdKTtcbiAgICByZXR1cm4gbmV3X2Jsb2Nrcztcbn1cbmZ1bmN0aW9uIG1lYXN1cmUoYmxvY2tzKSB7XG4gICAgY29uc3QgcmVjdHMgPSB7fTtcbiAgICBsZXQgaSA9IGJsb2Nrcy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSlcbiAgICAgICAgcmVjdHNbYmxvY2tzW2ldLmtleV0gPSBibG9ja3NbaV0ubm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gcmVjdHM7XG59XG5cbmZ1bmN0aW9uIGdldF9zcHJlYWRfdXBkYXRlKGxldmVscywgdXBkYXRlcykge1xuICAgIGNvbnN0IHVwZGF0ZSA9IHt9O1xuICAgIGNvbnN0IHRvX251bGxfb3V0ID0ge307XG4gICAgY29uc3QgYWNjb3VudGVkX2ZvciA9IHsgJCRzY29wZTogMSB9O1xuICAgIGxldCBpID0gbGV2ZWxzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIGNvbnN0IG8gPSBsZXZlbHNbaV07XG4gICAgICAgIGNvbnN0IG4gPSB1cGRhdGVzW2ldO1xuICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbykge1xuICAgICAgICAgICAgICAgIGlmICghKGtleSBpbiBuKSlcbiAgICAgICAgICAgICAgICAgICAgdG9fbnVsbF9vdXRba2V5XSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBuKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFhY2NvdW50ZWRfZm9yW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlW2tleV0gPSBuW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRlZF9mb3Jba2V5XSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV2ZWxzW2ldID0gbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG8pIHtcbiAgICAgICAgICAgICAgICBhY2NvdW50ZWRfZm9yW2tleV0gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IGluIHRvX251bGxfb3V0KSB7XG4gICAgICAgIGlmICghKGtleSBpbiB1cGRhdGUpKVxuICAgICAgICAgICAgdXBkYXRlW2tleV0gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiB1cGRhdGU7XG59XG5mdW5jdGlvbiBnZXRfc3ByZWFkX29iamVjdChzcHJlYWRfcHJvcHMpIHtcbiAgICByZXR1cm4gdHlwZW9mIHNwcmVhZF9wcm9wcyA9PT0gJ29iamVjdCcgJiYgc3ByZWFkX3Byb3BzICE9PSBudWxsID8gc3ByZWFkX3Byb3BzIDoge307XG59XG5cbmNvbnN0IGludmFsaWRfYXR0cmlidXRlX25hbWVfY2hhcmFjdGVyID0gL1tcXHMnXCI+Lz1cXHV7RkREMH0tXFx1e0ZERUZ9XFx1e0ZGRkV9XFx1e0ZGRkZ9XFx1ezFGRkZFfVxcdXsxRkZGRn1cXHV7MkZGRkV9XFx1ezJGRkZGfVxcdXszRkZGRX1cXHV7M0ZGRkZ9XFx1ezRGRkZFfVxcdXs0RkZGRn1cXHV7NUZGRkV9XFx1ezVGRkZGfVxcdXs2RkZGRX1cXHV7NkZGRkZ9XFx1ezdGRkZFfVxcdXs3RkZGRn1cXHV7OEZGRkV9XFx1ezhGRkZGfVxcdXs5RkZGRX1cXHV7OUZGRkZ9XFx1e0FGRkZFfVxcdXtBRkZGRn1cXHV7QkZGRkV9XFx1e0JGRkZGfVxcdXtDRkZGRX1cXHV7Q0ZGRkZ9XFx1e0RGRkZFfVxcdXtERkZGRn1cXHV7RUZGRkV9XFx1e0VGRkZGfVxcdXtGRkZGRX1cXHV7RkZGRkZ9XFx1ezEwRkZGRX1cXHV7MTBGRkZGfV0vdTtcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3N5bnRheC5odG1sI2F0dHJpYnV0ZXMtMlxuLy8gaHR0cHM6Ly9pbmZyYS5zcGVjLndoYXR3Zy5vcmcvI25vbmNoYXJhY3RlclxuZnVuY3Rpb24gc3ByZWFkKGFyZ3MpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVzID0gT2JqZWN0LmFzc2lnbih7fSwgLi4uYXJncyk7XG4gICAgbGV0IHN0ciA9ICcnO1xuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgIGlmIChpbnZhbGlkX2F0dHJpYnV0ZV9uYW1lX2NoYXJhY3Rlci50ZXN0KG5hbWUpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGF0dHJpYnV0ZXNbbmFtZV07XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAodmFsdWUgPT09IHRydWUpXG4gICAgICAgICAgICBzdHIgKz0gXCIgXCIgKyBuYW1lO1xuICAgICAgICBjb25zdCBlc2NhcGVkID0gU3RyaW5nKHZhbHVlKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1wiL2csICcmIzM0OycpXG4gICAgICAgICAgICAucmVwbGFjZSgvJy9nLCAnJiMzOTsnKTtcbiAgICAgICAgc3RyICs9IFwiIFwiICsgbmFtZSArIFwiPVwiICsgSlNPTi5zdHJpbmdpZnkoZXNjYXBlZCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHN0cjtcbn1cbmNvbnN0IGVzY2FwZWQgPSB7XG4gICAgJ1wiJzogJyZxdW90OycsXG4gICAgXCInXCI6ICcmIzM5OycsXG4gICAgJyYnOiAnJmFtcDsnLFxuICAgICc8JzogJyZsdDsnLFxuICAgICc+JzogJyZndDsnXG59O1xuZnVuY3Rpb24gZXNjYXBlKGh0bWwpIHtcbiAgICByZXR1cm4gU3RyaW5nKGh0bWwpLnJlcGxhY2UoL1tcIicmPD5dL2csIG1hdGNoID0+IGVzY2FwZWRbbWF0Y2hdKTtcbn1cbmZ1bmN0aW9uIGVhY2goaXRlbXMsIGZuKSB7XG4gICAgbGV0IHN0ciA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgc3RyICs9IGZuKGl0ZW1zW2ldLCBpKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbn1cbmNvbnN0IG1pc3NpbmdfY29tcG9uZW50ID0ge1xuICAgICQkcmVuZGVyOiAoKSA9PiAnJ1xufTtcbmZ1bmN0aW9uIHZhbGlkYXRlX2NvbXBvbmVudChjb21wb25lbnQsIG5hbWUpIHtcbiAgICBpZiAoIWNvbXBvbmVudCB8fCAhY29tcG9uZW50LiQkcmVuZGVyKSB7XG4gICAgICAgIGlmIChuYW1lID09PSAnc3ZlbHRlOmNvbXBvbmVudCcpXG4gICAgICAgICAgICBuYW1lICs9ICcgdGhpcz17Li4ufSc7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgPCR7bmFtZX0+IGlzIG5vdCBhIHZhbGlkIFNTUiBjb21wb25lbnQuIFlvdSBtYXkgbmVlZCB0byByZXZpZXcgeW91ciBidWlsZCBjb25maWcgdG8gZW5zdXJlIHRoYXQgZGVwZW5kZW5jaWVzIGFyZSBjb21waWxlZCwgcmF0aGVyIHRoYW4gaW1wb3J0ZWQgYXMgcHJlLWNvbXBpbGVkIG1vZHVsZXNgKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cbmZ1bmN0aW9uIGRlYnVnKGZpbGUsIGxpbmUsIGNvbHVtbiwgdmFsdWVzKSB7XG4gICAgY29uc29sZS5sb2coYHtAZGVidWd9ICR7ZmlsZSA/IGZpbGUgKyAnICcgOiAnJ30oJHtsaW5lfToke2NvbHVtbn0pYCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIHJldHVybiAnJztcbn1cbmxldCBvbl9kZXN0cm95O1xuZnVuY3Rpb24gY3JlYXRlX3Nzcl9jb21wb25lbnQoZm4pIHtcbiAgICBmdW5jdGlvbiAkJHJlbmRlcihyZXN1bHQsIHByb3BzLCBiaW5kaW5ncywgc2xvdHMpIHtcbiAgICAgICAgY29uc3QgcGFyZW50X2NvbXBvbmVudCA9IGN1cnJlbnRfY29tcG9uZW50O1xuICAgICAgICBjb25zdCAkJCA9IHtcbiAgICAgICAgICAgIG9uX2Rlc3Ryb3ksXG4gICAgICAgICAgICBjb250ZXh0OiBuZXcgTWFwKHBhcmVudF9jb21wb25lbnQgPyBwYXJlbnRfY29tcG9uZW50LiQkLmNvbnRleHQgOiBbXSksXG4gICAgICAgICAgICAvLyB0aGVzZSB3aWxsIGJlIGltbWVkaWF0ZWx5IGRpc2NhcmRlZFxuICAgICAgICAgICAgb25fbW91bnQ6IFtdLFxuICAgICAgICAgICAgYmVmb3JlX3VwZGF0ZTogW10sXG4gICAgICAgICAgICBhZnRlcl91cGRhdGU6IFtdLFxuICAgICAgICAgICAgY2FsbGJhY2tzOiBibGFua19vYmplY3QoKVxuICAgICAgICB9O1xuICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQoeyAkJCB9KTtcbiAgICAgICAgY29uc3QgaHRtbCA9IGZuKHJlc3VsdCwgcHJvcHMsIGJpbmRpbmdzLCBzbG90cyk7XG4gICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChwYXJlbnRfY29tcG9uZW50KTtcbiAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHJlbmRlcjogKHByb3BzID0ge30sIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgICAgICAgb25fZGVzdHJveSA9IFtdO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geyBoZWFkOiAnJywgY3NzOiBuZXcgU2V0KCkgfTtcbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSAkJHJlbmRlcihyZXN1bHQsIHByb3BzLCB7fSwgb3B0aW9ucyk7XG4gICAgICAgICAgICBydW5fYWxsKG9uX2Rlc3Ryb3kpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBodG1sLFxuICAgICAgICAgICAgICAgIGNzczoge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBBcnJheS5mcm9tKHJlc3VsdC5jc3MpLm1hcChjc3MgPT4gY3NzLmNvZGUpLmpvaW4oJ1xcbicpLFxuICAgICAgICAgICAgICAgICAgICBtYXA6IG51bGwgLy8gVE9ET1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaGVhZDogcmVzdWx0LmhlYWRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgICQkcmVuZGVyXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGFkZF9hdHRyaWJ1dGUobmFtZSwgdmFsdWUsIGJvb2xlYW4pIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCAoYm9vbGVhbiAmJiAhdmFsdWUpKVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgcmV0dXJuIGAgJHtuYW1lfSR7dmFsdWUgPT09IHRydWUgPyAnJyA6IGA9JHt0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gSlNPTi5zdHJpbmdpZnkoZXNjYXBlKHZhbHVlKSkgOiBgXCIke3ZhbHVlfVwiYH1gfWA7XG59XG5mdW5jdGlvbiBhZGRfY2xhc3NlcyhjbGFzc2VzKSB7XG4gICAgcmV0dXJuIGNsYXNzZXMgPyBgIGNsYXNzPVwiJHtjbGFzc2VzfVwiYCA6IGBgO1xufVxuXG5mdW5jdGlvbiBiaW5kKGNvbXBvbmVudCwgbmFtZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoY29tcG9uZW50LiQkLnByb3BzLmluZGV4T2YobmFtZSkgPT09IC0xKVxuICAgICAgICByZXR1cm47XG4gICAgY29tcG9uZW50LiQkLmJvdW5kW25hbWVdID0gY2FsbGJhY2s7XG4gICAgY2FsbGJhY2soY29tcG9uZW50LiQkLmN0eFtuYW1lXSk7XG59XG5mdW5jdGlvbiBtb3VudF9jb21wb25lbnQoY29tcG9uZW50LCB0YXJnZXQsIGFuY2hvcikge1xuICAgIGNvbnN0IHsgZnJhZ21lbnQsIG9uX21vdW50LCBvbl9kZXN0cm95LCBhZnRlcl91cGRhdGUgfSA9IGNvbXBvbmVudC4kJDtcbiAgICBmcmFnbWVudC5tKHRhcmdldCwgYW5jaG9yKTtcbiAgICAvLyBvbk1vdW50IGhhcHBlbnMgYmVmb3JlIHRoZSBpbml0aWFsIGFmdGVyVXBkYXRlXG4gICAgYWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld19vbl9kZXN0cm95ID0gb25fbW91bnQubWFwKHJ1bikuZmlsdGVyKGlzX2Z1bmN0aW9uKTtcbiAgICAgICAgaWYgKG9uX2Rlc3Ryb3kpIHtcbiAgICAgICAgICAgIG9uX2Rlc3Ryb3kucHVzaCguLi5uZXdfb25fZGVzdHJveSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBFZGdlIGNhc2UgLSBjb21wb25lbnQgd2FzIGRlc3Ryb3llZCBpbW1lZGlhdGVseSxcbiAgICAgICAgICAgIC8vIG1vc3QgbGlrZWx5IGFzIGEgcmVzdWx0IG9mIGEgYmluZGluZyBpbml0aWFsaXNpbmdcbiAgICAgICAgICAgIHJ1bl9hbGwobmV3X29uX2Rlc3Ryb3kpO1xuICAgICAgICB9XG4gICAgICAgIGNvbXBvbmVudC4kJC5vbl9tb3VudCA9IFtdO1xuICAgIH0pO1xuICAgIGFmdGVyX3VwZGF0ZS5mb3JFYWNoKGFkZF9yZW5kZXJfY2FsbGJhY2spO1xufVxuZnVuY3Rpb24gZGVzdHJveV9jb21wb25lbnQoY29tcG9uZW50LCBkZXRhY2hpbmcpIHtcbiAgICBpZiAoY29tcG9uZW50LiQkLmZyYWdtZW50KSB7XG4gICAgICAgIHJ1bl9hbGwoY29tcG9uZW50LiQkLm9uX2Rlc3Ryb3kpO1xuICAgICAgICBjb21wb25lbnQuJCQuZnJhZ21lbnQuZChkZXRhY2hpbmcpO1xuICAgICAgICAvLyBUT0RPIG51bGwgb3V0IG90aGVyIHJlZnMsIGluY2x1ZGluZyBjb21wb25lbnQuJCQgKGJ1dCBuZWVkIHRvXG4gICAgICAgIC8vIHByZXNlcnZlIGZpbmFsIHN0YXRlPylcbiAgICAgICAgY29tcG9uZW50LiQkLm9uX2Rlc3Ryb3kgPSBjb21wb25lbnQuJCQuZnJhZ21lbnQgPSBudWxsO1xuICAgICAgICBjb21wb25lbnQuJCQuY3R4ID0ge307XG4gICAgfVxufVxuZnVuY3Rpb24gbWFrZV9kaXJ0eShjb21wb25lbnQsIGtleSkge1xuICAgIGlmICghY29tcG9uZW50LiQkLmRpcnR5KSB7XG4gICAgICAgIGRpcnR5X2NvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgICAgICBzY2hlZHVsZV91cGRhdGUoKTtcbiAgICAgICAgY29tcG9uZW50LiQkLmRpcnR5ID0gYmxhbmtfb2JqZWN0KCk7XG4gICAgfVxuICAgIGNvbXBvbmVudC4kJC5kaXJ0eVtrZXldID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGluaXQoY29tcG9uZW50LCBvcHRpb25zLCBpbnN0YW5jZSwgY3JlYXRlX2ZyYWdtZW50LCBub3RfZXF1YWwsIHByb3BfbmFtZXMpIHtcbiAgICBjb25zdCBwYXJlbnRfY29tcG9uZW50ID0gY3VycmVudF9jb21wb25lbnQ7XG4gICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgY29uc3QgcHJvcHMgPSBvcHRpb25zLnByb3BzIHx8IHt9O1xuICAgIGNvbnN0ICQkID0gY29tcG9uZW50LiQkID0ge1xuICAgICAgICBmcmFnbWVudDogbnVsbCxcbiAgICAgICAgY3R4OiBudWxsLFxuICAgICAgICAvLyBzdGF0ZVxuICAgICAgICBwcm9wczogcHJvcF9uYW1lcyxcbiAgICAgICAgdXBkYXRlOiBub29wLFxuICAgICAgICBub3RfZXF1YWwsXG4gICAgICAgIGJvdW5kOiBibGFua19vYmplY3QoKSxcbiAgICAgICAgLy8gbGlmZWN5Y2xlXG4gICAgICAgIG9uX21vdW50OiBbXSxcbiAgICAgICAgb25fZGVzdHJveTogW10sXG4gICAgICAgIGJlZm9yZV91cGRhdGU6IFtdLFxuICAgICAgICBhZnRlcl91cGRhdGU6IFtdLFxuICAgICAgICBjb250ZXh0OiBuZXcgTWFwKHBhcmVudF9jb21wb25lbnQgPyBwYXJlbnRfY29tcG9uZW50LiQkLmNvbnRleHQgOiBbXSksXG4gICAgICAgIC8vIGV2ZXJ5dGhpbmcgZWxzZVxuICAgICAgICBjYWxsYmFja3M6IGJsYW5rX29iamVjdCgpLFxuICAgICAgICBkaXJ0eTogbnVsbFxuICAgIH07XG4gICAgbGV0IHJlYWR5ID0gZmFsc2U7XG4gICAgJCQuY3R4ID0gaW5zdGFuY2VcbiAgICAgICAgPyBpbnN0YW5jZShjb21wb25lbnQsIHByb3BzLCAoa2V5LCByZXQsIHZhbHVlID0gcmV0KSA9PiB7XG4gICAgICAgICAgICBpZiAoJCQuY3R4ICYmIG5vdF9lcXVhbCgkJC5jdHhba2V5XSwgJCQuY3R4W2tleV0gPSB2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoJCQuYm91bmRba2V5XSlcbiAgICAgICAgICAgICAgICAgICAgJCQuYm91bmRba2V5XSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlYWR5KVxuICAgICAgICAgICAgICAgICAgICBtYWtlX2RpcnR5KGNvbXBvbmVudCwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH0pXG4gICAgICAgIDogcHJvcHM7XG4gICAgJCQudXBkYXRlKCk7XG4gICAgcmVhZHkgPSB0cnVlO1xuICAgIHJ1bl9hbGwoJCQuYmVmb3JlX3VwZGF0ZSk7XG4gICAgJCQuZnJhZ21lbnQgPSBjcmVhdGVfZnJhZ21lbnQoJCQuY3R4KTtcbiAgICBpZiAob3B0aW9ucy50YXJnZXQpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuaHlkcmF0ZSkge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb25cbiAgICAgICAgICAgICQkLmZyYWdtZW50LmwoY2hpbGRyZW4ob3B0aW9ucy50YXJnZXQpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uXG4gICAgICAgICAgICAkJC5mcmFnbWVudC5jKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuaW50cm8pXG4gICAgICAgICAgICB0cmFuc2l0aW9uX2luKGNvbXBvbmVudC4kJC5mcmFnbWVudCk7XG4gICAgICAgIG1vdW50X2NvbXBvbmVudChjb21wb25lbnQsIG9wdGlvbnMudGFyZ2V0LCBvcHRpb25zLmFuY2hvcik7XG4gICAgICAgIGZsdXNoKCk7XG4gICAgfVxuICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChwYXJlbnRfY29tcG9uZW50KTtcbn1cbmxldCBTdmVsdGVFbGVtZW50O1xuaWYgKHR5cGVvZiBIVE1MRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBTdmVsdGVFbGVtZW50ID0gY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0b2RvOiBpbXByb3ZlIHR5cGluZ3NcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuJCQuc2xvdHRlZCkge1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdG9kbzogaW1wcm92ZSB0eXBpbmdzXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLiQkLnNsb3R0ZWRba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGF0dHIsIF9vbGRWYWx1ZSwgbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXNbYXR0cl0gPSBuZXdWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgICAgIGRlc3Ryb3lfY29tcG9uZW50KHRoaXMsIDEpO1xuICAgICAgICAgICAgdGhpcy4kZGVzdHJveSA9IG5vb3A7XG4gICAgICAgIH1cbiAgICAgICAgJG9uKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAvLyBUT0RPIHNob3VsZCB0aGlzIGRlbGVnYXRlIHRvIGFkZEV2ZW50TGlzdGVuZXI/XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFja3MgPSAodGhpcy4kJC5jYWxsYmFja3NbdHlwZV0gfHwgKHRoaXMuJCQuY2FsbGJhY2tzW3R5cGVdID0gW10pKTtcbiAgICAgICAgICAgIGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBjYWxsYmFja3MuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSlcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgICRzZXQoKSB7XG4gICAgICAgICAgICAvLyBvdmVycmlkZGVuIGJ5IGluc3RhbmNlLCBpZiBpdCBoYXMgcHJvcHNcbiAgICAgICAgfVxuICAgIH07XG59XG5jbGFzcyBTdmVsdGVDb21wb25lbnQge1xuICAgICRkZXN0cm95KCkge1xuICAgICAgICBkZXN0cm95X2NvbXBvbmVudCh0aGlzLCAxKTtcbiAgICAgICAgdGhpcy4kZGVzdHJveSA9IG5vb3A7XG4gICAgfVxuICAgICRvbih0eXBlLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBjYWxsYmFja3MgPSAodGhpcy4kJC5jYWxsYmFja3NbdHlwZV0gfHwgKHRoaXMuJCQuY2FsbGJhY2tzW3R5cGVdID0gW10pKTtcbiAgICAgICAgY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBjYWxsYmFja3MuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICAkc2V0KCkge1xuICAgICAgICAvLyBvdmVycmlkZGVuIGJ5IGluc3RhbmNlLCBpZiBpdCBoYXMgcHJvcHNcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BhdGNoX2Rldih0eXBlLCBkZXRhaWwpIHtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGN1c3RvbV9ldmVudCh0eXBlLCBkZXRhaWwpKTtcbn1cbmZ1bmN0aW9uIGFwcGVuZF9kZXYodGFyZ2V0LCBub2RlKSB7XG4gICAgZGlzcGF0Y2hfZGV2KFwiU3ZlbHRlRE9NSW5zZXJ0XCIsIHsgdGFyZ2V0LCBub2RlIH0pO1xuICAgIGFwcGVuZCh0YXJnZXQsIG5vZGUpO1xufVxuZnVuY3Rpb24gaW5zZXJ0X2Rldih0YXJnZXQsIG5vZGUsIGFuY2hvcikge1xuICAgIGRpc3BhdGNoX2RldihcIlN2ZWx0ZURPTUluc2VydFwiLCB7IHRhcmdldCwgbm9kZSwgYW5jaG9yIH0pO1xuICAgIGluc2VydCh0YXJnZXQsIG5vZGUsIGFuY2hvcik7XG59XG5mdW5jdGlvbiBkZXRhY2hfZGV2KG5vZGUpIHtcbiAgICBkaXNwYXRjaF9kZXYoXCJTdmVsdGVET01SZW1vdmVcIiwgeyBub2RlIH0pO1xuICAgIGRldGFjaChub2RlKTtcbn1cbmZ1bmN0aW9uIGRldGFjaF9iZXR3ZWVuX2RldihiZWZvcmUsIGFmdGVyKSB7XG4gICAgd2hpbGUgKGJlZm9yZS5uZXh0U2libGluZyAmJiBiZWZvcmUubmV4dFNpYmxpbmcgIT09IGFmdGVyKSB7XG4gICAgICAgIGRldGFjaF9kZXYoYmVmb3JlLm5leHRTaWJsaW5nKTtcbiAgICB9XG59XG5mdW5jdGlvbiBkZXRhY2hfYmVmb3JlX2RldihhZnRlcikge1xuICAgIHdoaWxlIChhZnRlci5wcmV2aW91c1NpYmxpbmcpIHtcbiAgICAgICAgZGV0YWNoX2RldihhZnRlci5wcmV2aW91c1NpYmxpbmcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRldGFjaF9hZnRlcl9kZXYoYmVmb3JlKSB7XG4gICAgd2hpbGUgKGJlZm9yZS5uZXh0U2libGluZykge1xuICAgICAgICBkZXRhY2hfZGV2KGJlZm9yZS5uZXh0U2libGluZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gbGlzdGVuX2Rldihub2RlLCBldmVudCwgaGFuZGxlciwgb3B0aW9ucywgaGFzX3ByZXZlbnRfZGVmYXVsdCwgaGFzX3N0b3BfcHJvcGFnYXRpb24pIHtcbiAgICBjb25zdCBtb2RpZmllcnMgPSBvcHRpb25zID09PSB0cnVlID8gW1wiY2FwdHVyZVwiXSA6IG9wdGlvbnMgPyBBcnJheS5mcm9tKE9iamVjdC5rZXlzKG9wdGlvbnMpKSA6IFtdO1xuICAgIGlmIChoYXNfcHJldmVudF9kZWZhdWx0KVxuICAgICAgICBtb2RpZmllcnMucHVzaCgncHJldmVudERlZmF1bHQnKTtcbiAgICBpZiAoaGFzX3N0b3BfcHJvcGFnYXRpb24pXG4gICAgICAgIG1vZGlmaWVycy5wdXNoKCdzdG9wUHJvcGFnYXRpb24nKTtcbiAgICBkaXNwYXRjaF9kZXYoXCJTdmVsdGVET01BZGRFdmVudExpc3RlbmVyXCIsIHsgbm9kZSwgZXZlbnQsIGhhbmRsZXIsIG1vZGlmaWVycyB9KTtcbiAgICBjb25zdCBkaXNwb3NlID0gbGlzdGVuKG5vZGUsIGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaF9kZXYoXCJTdmVsdGVET01SZW1vdmVFdmVudExpc3RlbmVyXCIsIHsgbm9kZSwgZXZlbnQsIGhhbmRsZXIsIG1vZGlmaWVycyB9KTtcbiAgICAgICAgZGlzcG9zZSgpO1xuICAgIH07XG59XG5mdW5jdGlvbiBhdHRyX2Rldihub2RlLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgYXR0cihub2RlLCBhdHRyaWJ1dGUsIHZhbHVlKTtcbiAgICBpZiAodmFsdWUgPT0gbnVsbClcbiAgICAgICAgZGlzcGF0Y2hfZGV2KFwiU3ZlbHRlRE9NUmVtb3ZlQXR0cmlidXRlXCIsIHsgbm9kZSwgYXR0cmlidXRlIH0pO1xuICAgIGVsc2VcbiAgICAgICAgZGlzcGF0Y2hfZGV2KFwiU3ZlbHRlRE9NU2V0QXR0cmlidXRlXCIsIHsgbm9kZSwgYXR0cmlidXRlLCB2YWx1ZSB9KTtcbn1cbmZ1bmN0aW9uIHByb3BfZGV2KG5vZGUsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIG5vZGVbcHJvcGVydHldID0gdmFsdWU7XG4gICAgZGlzcGF0Y2hfZGV2KFwiU3ZlbHRlRE9NU2V0UHJvcGVydHlcIiwgeyBub2RlLCBwcm9wZXJ0eSwgdmFsdWUgfSk7XG59XG5mdW5jdGlvbiBkYXRhc2V0X2Rldihub2RlLCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICBub2RlLmRhdGFzZXRbcHJvcGVydHldID0gdmFsdWU7XG4gICAgZGlzcGF0Y2hfZGV2KFwiU3ZlbHRlRE9NU2V0RGF0YXNldFwiLCB7IG5vZGUsIHByb3BlcnR5LCB2YWx1ZSB9KTtcbn1cbmZ1bmN0aW9uIHNldF9kYXRhX2Rldih0ZXh0LCBkYXRhKSB7XG4gICAgZGF0YSA9ICcnICsgZGF0YTtcbiAgICBpZiAodGV4dC5kYXRhID09PSBkYXRhKVxuICAgICAgICByZXR1cm47XG4gICAgZGlzcGF0Y2hfZGV2KFwiU3ZlbHRlRE9NU2V0RGF0YVwiLCB7IG5vZGU6IHRleHQsIGRhdGEgfSk7XG4gICAgdGV4dC5kYXRhID0gZGF0YTtcbn1cbmNsYXNzIFN2ZWx0ZUNvbXBvbmVudERldiBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBpZiAoIW9wdGlvbnMgfHwgKCFvcHRpb25zLnRhcmdldCAmJiAhb3B0aW9ucy4kJGlubGluZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJ3RhcmdldCcgaXMgYSByZXF1aXJlZCBvcHRpb25gKTtcbiAgICAgICAgfVxuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgc3VwZXIuJGRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy4kZGVzdHJveSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgQ29tcG9uZW50IHdhcyBhbHJlYWR5IGRlc3Ryb3llZGApOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IEh0bWxUYWcsIFN2ZWx0ZUNvbXBvbmVudCwgU3ZlbHRlQ29tcG9uZW50RGV2LCBTdmVsdGVFbGVtZW50LCBhZGRfYXR0cmlidXRlLCBhZGRfY2xhc3NlcywgYWRkX2ZsdXNoX2NhbGxiYWNrLCBhZGRfbG9jYXRpb24sIGFkZF9yZW5kZXJfY2FsbGJhY2ssIGFkZF9yZXNpemVfbGlzdGVuZXIsIGFkZF90cmFuc2Zvcm0sIGFmdGVyVXBkYXRlLCBhcHBlbmQsIGFwcGVuZF9kZXYsIGFzc2lnbiwgYXR0ciwgYXR0cl9kZXYsIGJlZm9yZVVwZGF0ZSwgYmluZCwgYmluZGluZ19jYWxsYmFja3MsIGJsYW5rX29iamVjdCwgYnViYmxlLCBjaGVja19vdXRyb3MsIGNoaWxkcmVuLCBjbGFpbV9lbGVtZW50LCBjbGFpbV9zcGFjZSwgY2xhaW1fdGV4dCwgY2xlYXJfbG9vcHMsIGNvbXBvbmVudF9zdWJzY3JpYmUsIGNyZWF0ZUV2ZW50RGlzcGF0Y2hlciwgY3JlYXRlX2FuaW1hdGlvbiwgY3JlYXRlX2JpZGlyZWN0aW9uYWxfdHJhbnNpdGlvbiwgY3JlYXRlX2luX3RyYW5zaXRpb24sIGNyZWF0ZV9vdXRfdHJhbnNpdGlvbiwgY3JlYXRlX3Nsb3QsIGNyZWF0ZV9zc3JfY29tcG9uZW50LCBjdXJyZW50X2NvbXBvbmVudCwgY3VzdG9tX2V2ZW50LCBkYXRhc2V0X2RldiwgZGVidWcsIGRlc3Ryb3lfYmxvY2ssIGRlc3Ryb3lfY29tcG9uZW50LCBkZXN0cm95X2VhY2gsIGRldGFjaCwgZGV0YWNoX2FmdGVyX2RldiwgZGV0YWNoX2JlZm9yZV9kZXYsIGRldGFjaF9iZXR3ZWVuX2RldiwgZGV0YWNoX2RldiwgZGlydHlfY29tcG9uZW50cywgZGlzcGF0Y2hfZGV2LCBlYWNoLCBlbGVtZW50LCBlbGVtZW50X2lzLCBlbXB0eSwgZXNjYXBlLCBlc2NhcGVkLCBleGNsdWRlX2ludGVybmFsX3Byb3BzLCBmaXhfYW5kX2Rlc3Ryb3lfYmxvY2ssIGZpeF9hbmRfb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2ssIGZpeF9wb3NpdGlvbiwgZmx1c2gsIGdldENvbnRleHQsIGdldF9iaW5kaW5nX2dyb3VwX3ZhbHVlLCBnZXRfY3VycmVudF9jb21wb25lbnQsIGdldF9zbG90X2NoYW5nZXMsIGdldF9zbG90X2NvbnRleHQsIGdldF9zcHJlYWRfb2JqZWN0LCBnZXRfc3ByZWFkX3VwZGF0ZSwgZ2V0X3N0b3JlX3ZhbHVlLCBnbG9iYWxzLCBncm91cF9vdXRyb3MsIGhhbmRsZV9wcm9taXNlLCBpZGVudGl0eSwgaW5pdCwgaW5zZXJ0LCBpbnNlcnRfZGV2LCBpbnRyb3MsIGludmFsaWRfYXR0cmlidXRlX25hbWVfY2hhcmFjdGVyLCBpc19jbGllbnQsIGlzX2Z1bmN0aW9uLCBpc19wcm9taXNlLCBsaXN0ZW4sIGxpc3Rlbl9kZXYsIGxvb3AsIG1lYXN1cmUsIG1pc3NpbmdfY29tcG9uZW50LCBtb3VudF9jb21wb25lbnQsIG5vb3AsIG5vdF9lcXVhbCwgbm93LCBudWxsX3RvX2VtcHR5LCBvYmplY3Rfd2l0aG91dF9wcm9wZXJ0aWVzLCBvbkRlc3Ryb3ksIG9uTW91bnQsIG9uY2UsIG91dHJvX2FuZF9kZXN0cm95X2Jsb2NrLCBwcmV2ZW50X2RlZmF1bHQsIHByb3BfZGV2LCByYWYsIHJ1biwgcnVuX2FsbCwgc2FmZV9ub3RfZXF1YWwsIHNjaGVkdWxlX3VwZGF0ZSwgc2VsZWN0X211bHRpcGxlX3ZhbHVlLCBzZWxlY3Rfb3B0aW9uLCBzZWxlY3Rfb3B0aW9ucywgc2VsZWN0X3ZhbHVlLCBzZWxmLCBzZXRDb250ZXh0LCBzZXRfYXR0cmlidXRlcywgc2V0X2N1cnJlbnRfY29tcG9uZW50LCBzZXRfY3VzdG9tX2VsZW1lbnRfZGF0YSwgc2V0X2RhdGEsIHNldF9kYXRhX2Rldiwgc2V0X2lucHV0X3R5cGUsIHNldF9pbnB1dF92YWx1ZSwgc2V0X25vdywgc2V0X3JhZiwgc2V0X3N0b3JlX3ZhbHVlLCBzZXRfc3R5bGUsIHNldF9zdmdfYXR0cmlidXRlcywgc3BhY2UsIHNwcmVhZCwgc3RvcF9wcm9wYWdhdGlvbiwgc3Vic2NyaWJlLCBzdmdfZWxlbWVudCwgdGV4dCwgdGljaywgdGltZV9yYW5nZXNfdG9fYXJyYXksIHRvX251bWJlciwgdG9nZ2xlX2NsYXNzLCB0cmFuc2l0aW9uX2luLCB0cmFuc2l0aW9uX291dCwgdXBkYXRlX2tleWVkX2VhY2gsIHZhbGlkYXRlX2NvbXBvbmVudCwgdmFsaWRhdGVfc3RvcmUsIHhsaW5rX2F0dHIgfTtcbiIsImltcG9ydCB7IHNhZmVfbm90X2VxdWFsLCBub29wLCBydW5fYWxsLCBpc19mdW5jdGlvbiB9IGZyb20gJy4uL2ludGVybmFsJztcbmV4cG9ydCB7IGdldF9zdG9yZV92YWx1ZSBhcyBnZXQgfSBmcm9tICcuLi9pbnRlcm5hbCc7XG5cbmNvbnN0IHN1YnNjcmliZXJfcXVldWUgPSBbXTtcbi8qKlxuICogQ3JlYXRlcyBhIGBSZWFkYWJsZWAgc3RvcmUgdGhhdCBhbGxvd3MgcmVhZGluZyBieSBzdWJzY3JpcHRpb24uXG4gKiBAcGFyYW0gdmFsdWUgaW5pdGlhbCB2YWx1ZVxuICogQHBhcmFtIHtTdGFydFN0b3BOb3RpZmllcn1zdGFydCBzdGFydCBhbmQgc3RvcCBub3RpZmljYXRpb25zIGZvciBzdWJzY3JpcHRpb25zXG4gKi9cbmZ1bmN0aW9uIHJlYWRhYmxlKHZhbHVlLCBzdGFydCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHN1YnNjcmliZTogd3JpdGFibGUodmFsdWUsIHN0YXJ0KS5zdWJzY3JpYmUsXG4gICAgfTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgYFdyaXRhYmxlYCBzdG9yZSB0aGF0IGFsbG93cyBib3RoIHVwZGF0aW5nIGFuZCByZWFkaW5nIGJ5IHN1YnNjcmlwdGlvbi5cbiAqIEBwYXJhbSB7Kj19dmFsdWUgaW5pdGlhbCB2YWx1ZVxuICogQHBhcmFtIHtTdGFydFN0b3BOb3RpZmllcj19c3RhcnQgc3RhcnQgYW5kIHN0b3Agbm90aWZpY2F0aW9ucyBmb3Igc3Vic2NyaXB0aW9uc1xuICovXG5mdW5jdGlvbiB3cml0YWJsZSh2YWx1ZSwgc3RhcnQgPSBub29wKSB7XG4gICAgbGV0IHN0b3A7XG4gICAgY29uc3Qgc3Vic2NyaWJlcnMgPSBbXTtcbiAgICBmdW5jdGlvbiBzZXQobmV3X3ZhbHVlKSB7XG4gICAgICAgIGlmIChzYWZlX25vdF9lcXVhbCh2YWx1ZSwgbmV3X3ZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUgPSBuZXdfdmFsdWU7XG4gICAgICAgICAgICBpZiAoc3RvcCkgeyAvLyBzdG9yZSBpcyByZWFkeVxuICAgICAgICAgICAgICAgIGNvbnN0IHJ1bl9xdWV1ZSA9ICFzdWJzY3JpYmVyX3F1ZXVlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YnNjcmliZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHMgPSBzdWJzY3JpYmVyc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgc1sxXSgpO1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyX3F1ZXVlLnB1c2gocywgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocnVuX3F1ZXVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Vic2NyaWJlcl9xdWV1ZS5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlcl9xdWV1ZVtpXVswXShzdWJzY3JpYmVyX3F1ZXVlW2kgKyAxXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlcl9xdWV1ZS5sZW5ndGggPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB1cGRhdGUoZm4pIHtcbiAgICAgICAgc2V0KGZuKHZhbHVlKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN1YnNjcmliZShydW4sIGludmFsaWRhdGUgPSBub29wKSB7XG4gICAgICAgIGNvbnN0IHN1YnNjcmliZXIgPSBbcnVuLCBpbnZhbGlkYXRlXTtcbiAgICAgICAgc3Vic2NyaWJlcnMucHVzaChzdWJzY3JpYmVyKTtcbiAgICAgICAgaWYgKHN1YnNjcmliZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgc3RvcCA9IHN0YXJ0KHNldCkgfHwgbm9vcDtcbiAgICAgICAgfVxuICAgICAgICBydW4odmFsdWUpO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBzdWJzY3JpYmVycy5pbmRleE9mKHN1YnNjcmliZXIpO1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3Vic2NyaWJlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgc3RvcCgpO1xuICAgICAgICAgICAgICAgIHN0b3AgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4geyBzZXQsIHVwZGF0ZSwgc3Vic2NyaWJlIH07XG59XG4vKipcbiAqIERlcml2ZWQgdmFsdWUgc3RvcmUgYnkgc3luY2hyb25pemluZyBvbmUgb3IgbW9yZSByZWFkYWJsZSBzdG9yZXMgYW5kXG4gKiBhcHBseWluZyBhbiBhZ2dyZWdhdGlvbiBmdW5jdGlvbiBvdmVyIGl0cyBpbnB1dCB2YWx1ZXMuXG4gKiBAcGFyYW0ge1N0b3Jlc30gc3RvcmVzIGlucHV0IHN0b3Jlc1xuICogQHBhcmFtIHtmdW5jdGlvbihTdG9yZXM9LCBmdW5jdGlvbigqKT0pOip9Zm4gZnVuY3Rpb24gY2FsbGJhY2sgdGhhdCBhZ2dyZWdhdGVzIHRoZSB2YWx1ZXNcbiAqIEBwYXJhbSB7Kj19aW5pdGlhbF92YWx1ZSB3aGVuIHVzZWQgYXN5bmNocm9ub3VzbHlcbiAqL1xuZnVuY3Rpb24gZGVyaXZlZChzdG9yZXMsIGZuLCBpbml0aWFsX3ZhbHVlKSB7XG4gICAgY29uc3Qgc2luZ2xlID0gIUFycmF5LmlzQXJyYXkoc3RvcmVzKTtcbiAgICBjb25zdCBzdG9yZXNfYXJyYXkgPSBzaW5nbGVcbiAgICAgICAgPyBbc3RvcmVzXVxuICAgICAgICA6IHN0b3JlcztcbiAgICBjb25zdCBhdXRvID0gZm4ubGVuZ3RoIDwgMjtcbiAgICByZXR1cm4gcmVhZGFibGUoaW5pdGlhbF92YWx1ZSwgKHNldCkgPT4ge1xuICAgICAgICBsZXQgaW5pdGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IFtdO1xuICAgICAgICBsZXQgcGVuZGluZyA9IDA7XG4gICAgICAgIGxldCBjbGVhbnVwID0gbm9vcDtcbiAgICAgICAgY29uc3Qgc3luYyA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChwZW5kaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZm4oc2luZ2xlID8gdmFsdWVzWzBdIDogdmFsdWVzLCBzZXQpO1xuICAgICAgICAgICAgaWYgKGF1dG8pIHtcbiAgICAgICAgICAgICAgICBzZXQocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsZWFudXAgPSBpc19mdW5jdGlvbihyZXN1bHQpID8gcmVzdWx0IDogbm9vcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgdW5zdWJzY3JpYmVycyA9IHN0b3Jlc19hcnJheS5tYXAoKHN0b3JlLCBpKSA9PiBzdG9yZS5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB2YWx1ZXNbaV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHBlbmRpbmcgJj0gfigxIDw8IGkpO1xuICAgICAgICAgICAgaWYgKGluaXRlZCkge1xuICAgICAgICAgICAgICAgIHN5bmMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgcGVuZGluZyB8PSAoMSA8PCBpKTtcbiAgICAgICAgfSkpO1xuICAgICAgICBpbml0ZWQgPSB0cnVlO1xuICAgICAgICBzeW5jKCk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICAgICAgcnVuX2FsbCh1bnN1YnNjcmliZXJzKTtcbiAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IHsgZGVyaXZlZCwgcmVhZGFibGUsIHdyaXRhYmxlIH07XG4iLCJpbXBvcnQgKiBhcyBzYXBwZXIgZnJvbSAnQHNhcHBlci9hcHAnO1xuXG5zYXBwZXIuc3RhcnQoe1xuXHR0YXJnZXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzYXBwZXInKVxufSk7IiwiPHNjcmlwdD5cbiAgZXhwb3J0IGxldCBzZWdtZW50O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSB0eXBlPVwidGV4dC9zY3NzXCI+LypcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxufCBCcmVha3BvaW50c1xufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuQG1lZGlhIChtaW4td2lkdGg6IDc2N3B4KSB7XG4gIGhlYWRlciB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICAgICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBlbmQ7XG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBlbmQ7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7IH0gfVxuXG4udG9wLWxpbmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWFyZ2luOiAzcmVtIDA7IH1cblxuaDEge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IDJyZW07IH1cblxuYnV0dG9uI25hdl9jb250YWN0LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmx1ZTtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lsbC1jaGFuZ2U6IGJvcmRlcjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXIgMC4zcyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDAuM3MgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSk7IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2N3B4KSB7XG4gICAgYnV0dG9uI25hdl9jb250YWN0LWJ1dHRvbiB7XG4gICAgICBkaXNwbGF5OiBibG9jazsgfSB9XG4gIGJ1dHRvbiNuYXZfY29udGFjdC1idXR0b246aG92ZXIgYSB7XG4gICAgY29sb3I6ICM0YjRiZmQ7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzOyB9XG4gIGJ1dHRvbiNuYXZfY29udGFjdC1idXR0b246aG92ZXIgc3ZnIHtcbiAgICBmaWxsOiAjNGI0YmZkO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwczsgfVxuICBidXR0b24jbmF2X2NvbnRhY3QtYnV0dG9uOmFjdGl2ZSB7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzRiNGJmZDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7IH1cbiAgYnV0dG9uI25hdl9jb250YWN0LWJ1dHRvbiBhIHtcbiAgICBjb2xvcjogYmx1ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICAgICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHdpbGwtY2hhbmdlOiBjb2xvcjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDAuM3MgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSk7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKTsgfVxuICBidXR0b24jbmF2X2NvbnRhY3QtYnV0dG9uIHN2ZyB7XG4gICAgZmlsbDogYmx1ZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgd2lsbC1jaGFuZ2U6IGZpbGw7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBmaWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSk7XG4gICAgdHJhbnNpdGlvbjogZmlsbCAwLjNzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpOyB9XG4gIGJ1dHRvbiNuYXZfY29udGFjdC1idXR0b24gc3BhbiB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpOyB9XG4vKiMgc291cmNlTWFwcGluZ1VSTD1zcmMvY29tcG9uZW50cy9OYXYuc3ZlbHRlLm1hcCAqLzwvc3R5bGU+XG5cbjxoZWFkZXI+XG4gIDxoMT5cbiAgICBMdWNhIENsYWVzc2VucyAmbWRhc2g7XG4gICAgPGJyIC8+XG4gICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWxpZ2h0ZXJcIj5EZXZlbG9wZXI8L3NwYW4+XG4gICAgJlxuICAgIDxzcGFuPkRpZ2l0YWwgZGVzaWduZXI8L3NwYW4+XG4gIDwvaDE+XG4gIDxidXR0b24gaWQ9XCJuYXZfY29udGFjdC1idXR0b25cIj5cbiAgICA8YSBocmVmPVwibWFpbHRvOmx1Y2FjbGFlQGdtYWlsLmNvbVwiPlxuICAgICAgPHN2Z1xuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgd2lkdGg9XCIyNFwiXG4gICAgICAgIGhlaWdodD1cIjI0XCJcbiAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGQ9XCJNMjAgNEg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45XG4gICAgICAgICAgMi0yVjZjMC0xLjEtLjktMi0yLTJ6bTAgNGwtOCA1LTgtNVY2bDggNSA4LTV2MnpcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIgLz5cbiAgICAgIDwvc3ZnPlxuICAgICAgPHNwYW4+Q29udGFjdCBtZTwvc3Bhbj5cbiAgICA8L2E+XG4gIDwvYnV0dG9uPlxuPC9oZWFkZXI+XG5cbjxociBjbGFzcz1cInRvcC1saW5lXCIgLz5cbiIsImltcG9ydCB7IGdldENvbnRleHQgfSBmcm9tICdzdmVsdGUnO1xuaW1wb3J0IHsgQ09OVEVYVF9LRVkgfSBmcm9tICcuL2ludGVybmFsL3NoYXJlZCc7XG5pbXBvcnQgeyB3cml0YWJsZSB9IGZyb20gJ3N2ZWx0ZS9zdG9yZSc7XG5pbXBvcnQgQXBwIGZyb20gJy4vaW50ZXJuYWwvQXBwLnN2ZWx0ZSc7XG5pbXBvcnQgeyBpZ25vcmUsIHJvdXRlcywgcm9vdF9wcmVsb2FkLCBjb21wb25lbnRzLCBFcnJvckNvbXBvbmVudCB9IGZyb20gJy4vaW50ZXJuYWwvbWFuaWZlc3QtY2xpZW50JztcblxuZnVuY3Rpb24gZ290byhocmVmLCBvcHRzID0geyByZXBsYWNlU3RhdGU6IGZhbHNlIH0pIHtcblx0Y29uc3QgdGFyZ2V0ID0gc2VsZWN0X3RhcmdldChuZXcgVVJMKGhyZWYsIGRvY3VtZW50LmJhc2VVUkkpKTtcblxuXHRpZiAodGFyZ2V0KSB7XG5cdFx0X2hpc3Rvcnlbb3B0cy5yZXBsYWNlU3RhdGUgPyAncmVwbGFjZVN0YXRlJyA6ICdwdXNoU3RhdGUnXSh7IGlkOiBjaWQgfSwgJycsIGhyZWYpO1xuXHRcdHJldHVybiBuYXZpZ2F0ZSh0YXJnZXQsIG51bGwpLnRoZW4oKCkgPT4ge30pO1xuXHR9XG5cblx0bG9jYXRpb24uaHJlZiA9IGhyZWY7XG5cdHJldHVybiBuZXcgUHJvbWlzZShmID0+IHt9KTsgLy8gbmV2ZXIgcmVzb2x2ZXNcbn1cblxuY29uc3QgaW5pdGlhbF9kYXRhID0gdHlwZW9mIF9fU0FQUEVSX18gIT09ICd1bmRlZmluZWQnICYmIF9fU0FQUEVSX187XG5cbmxldCByZWFkeSA9IGZhbHNlO1xubGV0IHJvb3RfY29tcG9uZW50O1xubGV0IGN1cnJlbnRfdG9rZW47XG5sZXQgcm9vdF9wcmVsb2FkZWQ7XG5sZXQgY3VycmVudF9icmFuY2ggPSBbXTtcbmxldCBjdXJyZW50X3F1ZXJ5ID0gJ3t9JztcblxuY29uc3Qgc3RvcmVzID0ge1xuXHRwYWdlOiB3cml0YWJsZSh7fSksXG5cdHByZWxvYWRpbmc6IHdyaXRhYmxlKG51bGwpLFxuXHRzZXNzaW9uOiB3cml0YWJsZShpbml0aWFsX2RhdGEgJiYgaW5pdGlhbF9kYXRhLnNlc3Npb24pXG59O1xuXG5sZXQgJHNlc3Npb247XG5sZXQgc2Vzc2lvbl9kaXJ0eTtcblxuc3RvcmVzLnNlc3Npb24uc3Vic2NyaWJlKGFzeW5jIHZhbHVlID0+IHtcblx0JHNlc3Npb24gPSB2YWx1ZTtcblxuXHRpZiAoIXJlYWR5KSByZXR1cm47XG5cdHNlc3Npb25fZGlydHkgPSB0cnVlO1xuXG5cdGNvbnN0IHRhcmdldCA9IHNlbGVjdF90YXJnZXQobmV3IFVSTChsb2NhdGlvbi5ocmVmKSk7XG5cblx0Y29uc3QgdG9rZW4gPSBjdXJyZW50X3Rva2VuID0ge307XG5cdGNvbnN0IHsgcmVkaXJlY3QsIHByb3BzLCBicmFuY2ggfSA9IGF3YWl0IGh5ZHJhdGVfdGFyZ2V0KHRhcmdldCk7XG5cdGlmICh0b2tlbiAhPT0gY3VycmVudF90b2tlbikgcmV0dXJuOyAvLyBhIHNlY29uZGFyeSBuYXZpZ2F0aW9uIGhhcHBlbmVkIHdoaWxlIHdlIHdlcmUgbG9hZGluZ1xuXG5cdGF3YWl0IHJlbmRlcihyZWRpcmVjdCwgYnJhbmNoLCBwcm9wcywgdGFyZ2V0LnBhZ2UpO1xufSk7XG5cbmxldCBwcmVmZXRjaGluZ1xuXG5cbiA9IG51bGw7XG5mdW5jdGlvbiBzZXRfcHJlZmV0Y2hpbmcoaHJlZiwgcHJvbWlzZSkge1xuXHRwcmVmZXRjaGluZyA9IHsgaHJlZiwgcHJvbWlzZSB9O1xufVxuXG5sZXQgdGFyZ2V0O1xuZnVuY3Rpb24gc2V0X3RhcmdldChlbGVtZW50KSB7XG5cdHRhcmdldCA9IGVsZW1lbnQ7XG59XG5cbmxldCB1aWQgPSAxO1xuZnVuY3Rpb24gc2V0X3VpZChuKSB7XG5cdHVpZCA9IG47XG59XG5cbmxldCBjaWQ7XG5mdW5jdGlvbiBzZXRfY2lkKG4pIHtcblx0Y2lkID0gbjtcbn1cblxuY29uc3QgX2hpc3RvcnkgPSB0eXBlb2YgaGlzdG9yeSAhPT0gJ3VuZGVmaW5lZCcgPyBoaXN0b3J5IDoge1xuXHRwdXNoU3RhdGU6IChzdGF0ZSwgdGl0bGUsIGhyZWYpID0+IHt9LFxuXHRyZXBsYWNlU3RhdGU6IChzdGF0ZSwgdGl0bGUsIGhyZWYpID0+IHt9LFxuXHRzY3JvbGxSZXN0b3JhdGlvbjogJydcbn07XG5cbmNvbnN0IHNjcm9sbF9oaXN0b3J5ID0ge307XG5cbmZ1bmN0aW9uIGV4dHJhY3RfcXVlcnkoc2VhcmNoKSB7XG5cdGNvbnN0IHF1ZXJ5ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblx0aWYgKHNlYXJjaC5sZW5ndGggPiAwKSB7XG5cdFx0c2VhcmNoLnNsaWNlKDEpLnNwbGl0KCcmJykuZm9yRWFjaChzZWFyY2hQYXJhbSA9PiB7XG5cdFx0XHRsZXQgWywga2V5LCB2YWx1ZSA9ICcnXSA9IC8oW149XSopKD86PSguKikpPy8uZXhlYyhkZWNvZGVVUklDb21wb25lbnQoc2VhcmNoUGFyYW0ucmVwbGFjZSgvXFwrL2csICcgJykpKTtcblx0XHRcdGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3N0cmluZycpIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XV07XG5cdFx0XHRpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICdvYmplY3QnKSAocXVlcnlba2V5XSApLnB1c2godmFsdWUpO1xuXHRcdFx0ZWxzZSBxdWVyeVtrZXldID0gdmFsdWU7XG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIHF1ZXJ5O1xufVxuXG5mdW5jdGlvbiBzZWxlY3RfdGFyZ2V0KHVybCkge1xuXHRpZiAodXJsLm9yaWdpbiAhPT0gbG9jYXRpb24ub3JpZ2luKSByZXR1cm4gbnVsbDtcblx0aWYgKCF1cmwucGF0aG5hbWUuc3RhcnRzV2l0aChpbml0aWFsX2RhdGEuYmFzZVVybCkpIHJldHVybiBudWxsO1xuXG5cdGxldCBwYXRoID0gdXJsLnBhdGhuYW1lLnNsaWNlKGluaXRpYWxfZGF0YS5iYXNlVXJsLmxlbmd0aCk7XG5cblx0aWYgKHBhdGggPT09ICcnKSB7XG5cdFx0cGF0aCA9ICcvJztcblx0fVxuXG5cdC8vIGF2b2lkIGFjY2lkZW50YWwgY2xhc2hlcyBiZXR3ZWVuIHNlcnZlciByb3V0ZXMgYW5kIHBhZ2Ugcm91dGVzXG5cdGlmIChpZ25vcmUuc29tZShwYXR0ZXJuID0+IHBhdHRlcm4udGVzdChwYXRoKSkpIHJldHVybjtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlcy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdGNvbnN0IHJvdXRlID0gcm91dGVzW2ldO1xuXG5cdFx0Y29uc3QgbWF0Y2ggPSByb3V0ZS5wYXR0ZXJuLmV4ZWMocGF0aCk7XG5cblx0XHRpZiAobWF0Y2gpIHtcblx0XHRcdGNvbnN0IHF1ZXJ5ID0gZXh0cmFjdF9xdWVyeSh1cmwuc2VhcmNoKTtcblx0XHRcdGNvbnN0IHBhcnQgPSByb3V0ZS5wYXJ0c1tyb3V0ZS5wYXJ0cy5sZW5ndGggLSAxXTtcblx0XHRcdGNvbnN0IHBhcmFtcyA9IHBhcnQucGFyYW1zID8gcGFydC5wYXJhbXMobWF0Y2gpIDoge307XG5cblx0XHRcdGNvbnN0IHBhZ2UgPSB7IGhvc3Q6IGxvY2F0aW9uLmhvc3QsIHBhdGgsIHF1ZXJ5LCBwYXJhbXMgfTtcblxuXHRcdFx0cmV0dXJuIHsgaHJlZjogdXJsLmhyZWYsIHJvdXRlLCBtYXRjaCwgcGFnZSB9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBoYW5kbGVfZXJyb3IodXJsKSB7XG5cdGNvbnN0IHsgaG9zdCwgcGF0aG5hbWUsIHNlYXJjaCB9ID0gbG9jYXRpb247XG5cdGNvbnN0IHsgc2Vzc2lvbiwgcHJlbG9hZGVkLCBzdGF0dXMsIGVycm9yIH0gPSBpbml0aWFsX2RhdGE7XG5cblx0aWYgKCFyb290X3ByZWxvYWRlZCkge1xuXHRcdHJvb3RfcHJlbG9hZGVkID0gcHJlbG9hZGVkICYmIHByZWxvYWRlZFswXTtcblx0fVxuXG5cdGNvbnN0IHByb3BzID0ge1xuXHRcdGVycm9yLFxuXHRcdHN0YXR1cyxcblx0XHRzZXNzaW9uLFxuXHRcdGxldmVsMDoge1xuXHRcdFx0cHJvcHM6IHJvb3RfcHJlbG9hZGVkXG5cdFx0fSxcblx0XHRsZXZlbDE6IHtcblx0XHRcdHByb3BzOiB7XG5cdFx0XHRcdHN0YXR1cyxcblx0XHRcdFx0ZXJyb3Jcblx0XHRcdH0sXG5cdFx0XHRjb21wb25lbnQ6IEVycm9yQ29tcG9uZW50XG5cdFx0fSxcblx0XHRzZWdtZW50czogcHJlbG9hZGVkXG5cblx0fTtcblx0Y29uc3QgcXVlcnkgPSBleHRyYWN0X3F1ZXJ5KHNlYXJjaCk7XG5cdHJlbmRlcihudWxsLCBbXSwgcHJvcHMsIHsgaG9zdCwgcGF0aDogcGF0aG5hbWUsIHF1ZXJ5LCBwYXJhbXM6IHt9IH0pO1xufVxuXG5mdW5jdGlvbiBzY3JvbGxfc3RhdGUoKSB7XG5cdHJldHVybiB7XG5cdFx0eDogcGFnZVhPZmZzZXQsXG5cdFx0eTogcGFnZVlPZmZzZXRcblx0fTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gbmF2aWdhdGUodGFyZ2V0LCBpZCwgbm9zY3JvbGwsIGhhc2gpIHtcblx0aWYgKGlkKSB7XG5cdFx0Ly8gcG9wc3RhdGUgb3IgaW5pdGlhbCBuYXZpZ2F0aW9uXG5cdFx0Y2lkID0gaWQ7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc3QgY3VycmVudF9zY3JvbGwgPSBzY3JvbGxfc3RhdGUoKTtcblxuXHRcdC8vIGNsaWNrZWQgb24gYSBsaW5rLiBwcmVzZXJ2ZSBzY3JvbGwgc3RhdGVcblx0XHRzY3JvbGxfaGlzdG9yeVtjaWRdID0gY3VycmVudF9zY3JvbGw7XG5cblx0XHRpZCA9IGNpZCA9ICsrdWlkO1xuXHRcdHNjcm9sbF9oaXN0b3J5W2NpZF0gPSBub3Njcm9sbCA/IGN1cnJlbnRfc2Nyb2xsIDogeyB4OiAwLCB5OiAwIH07XG5cdH1cblxuXHRjaWQgPSBpZDtcblxuXHRpZiAocm9vdF9jb21wb25lbnQpIHN0b3Jlcy5wcmVsb2FkaW5nLnNldCh0cnVlKTtcblxuXHRjb25zdCBsb2FkZWQgPSBwcmVmZXRjaGluZyAmJiBwcmVmZXRjaGluZy5ocmVmID09PSB0YXJnZXQuaHJlZiA/XG5cdFx0cHJlZmV0Y2hpbmcucHJvbWlzZSA6XG5cdFx0aHlkcmF0ZV90YXJnZXQodGFyZ2V0KTtcblxuXHRwcmVmZXRjaGluZyA9IG51bGw7XG5cblx0Y29uc3QgdG9rZW4gPSBjdXJyZW50X3Rva2VuID0ge307XG5cdGNvbnN0IHsgcmVkaXJlY3QsIHByb3BzLCBicmFuY2ggfSA9IGF3YWl0IGxvYWRlZDtcblx0aWYgKHRva2VuICE9PSBjdXJyZW50X3Rva2VuKSByZXR1cm47IC8vIGEgc2Vjb25kYXJ5IG5hdmlnYXRpb24gaGFwcGVuZWQgd2hpbGUgd2Ugd2VyZSBsb2FkaW5nXG5cblx0YXdhaXQgcmVuZGVyKHJlZGlyZWN0LCBicmFuY2gsIHByb3BzLCB0YXJnZXQucGFnZSk7XG5cdGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50KSBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcblxuXHRpZiAoIW5vc2Nyb2xsKSB7XG5cdFx0bGV0IHNjcm9sbCA9IHNjcm9sbF9oaXN0b3J5W2lkXTtcblxuXHRcdGlmIChoYXNoKSB7XG5cdFx0XHQvLyBzY3JvbGwgaXMgYW4gZWxlbWVudCBpZCAoZnJvbSBhIGhhc2gpLCB3ZSBuZWVkIHRvIGNvbXB1dGUgeS5cblx0XHRcdGNvbnN0IGRlZXBfbGlua2VkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaC5zbGljZSgxKSk7XG5cblx0XHRcdGlmIChkZWVwX2xpbmtlZCkge1xuXHRcdFx0XHRzY3JvbGwgPSB7XG5cdFx0XHRcdFx0eDogMCxcblx0XHRcdFx0XHR5OiBkZWVwX2xpbmtlZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3Bcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRzY3JvbGxfaGlzdG9yeVtjaWRdID0gc2Nyb2xsO1xuXHRcdGlmIChzY3JvbGwpIHNjcm9sbFRvKHNjcm9sbC54LCBzY3JvbGwueSk7XG5cdH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVuZGVyKHJlZGlyZWN0LCBicmFuY2gsIHByb3BzLCBwYWdlKSB7XG5cdGlmIChyZWRpcmVjdCkgcmV0dXJuIGdvdG8ocmVkaXJlY3QubG9jYXRpb24sIHsgcmVwbGFjZVN0YXRlOiB0cnVlIH0pO1xuXG5cdHN0b3Jlcy5wYWdlLnNldChwYWdlKTtcblx0c3RvcmVzLnByZWxvYWRpbmcuc2V0KGZhbHNlKTtcblxuXHRpZiAocm9vdF9jb21wb25lbnQpIHtcblx0XHRyb290X2NvbXBvbmVudC4kc2V0KHByb3BzKTtcblx0fSBlbHNlIHtcblx0XHRwcm9wcy5zdG9yZXMgPSB7XG5cdFx0XHRwYWdlOiB7IHN1YnNjcmliZTogc3RvcmVzLnBhZ2Uuc3Vic2NyaWJlIH0sXG5cdFx0XHRwcmVsb2FkaW5nOiB7IHN1YnNjcmliZTogc3RvcmVzLnByZWxvYWRpbmcuc3Vic2NyaWJlIH0sXG5cdFx0XHRzZXNzaW9uOiBzdG9yZXMuc2Vzc2lvblxuXHRcdH07XG5cdFx0cHJvcHMubGV2ZWwwID0ge1xuXHRcdFx0cHJvcHM6IGF3YWl0IHJvb3RfcHJlbG9hZGVkXG5cdFx0fTtcblxuXHRcdC8vIGZpcnN0IGxvYWQg4oCUIHJlbW92ZSBTU1InZCA8aGVhZD4gY29udGVudHNcblx0XHRjb25zdCBzdGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzYXBwZXItaGVhZC1zdGFydCcpO1xuXHRcdGNvbnN0IGVuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzYXBwZXItaGVhZC1lbmQnKTtcblxuXHRcdGlmIChzdGFydCAmJiBlbmQpIHtcblx0XHRcdHdoaWxlIChzdGFydC5uZXh0U2libGluZyAhPT0gZW5kKSBkZXRhY2goc3RhcnQubmV4dFNpYmxpbmcpO1xuXHRcdFx0ZGV0YWNoKHN0YXJ0KTtcblx0XHRcdGRldGFjaChlbmQpO1xuXHRcdH1cblxuXHRcdHJvb3RfY29tcG9uZW50ID0gbmV3IEFwcCh7XG5cdFx0XHR0YXJnZXQsXG5cdFx0XHRwcm9wcyxcblx0XHRcdGh5ZHJhdGU6IHRydWVcblx0XHR9KTtcblx0fVxuXG5cdGN1cnJlbnRfYnJhbmNoID0gYnJhbmNoO1xuXHRjdXJyZW50X3F1ZXJ5ID0gSlNPTi5zdHJpbmdpZnkocGFnZS5xdWVyeSk7XG5cdHJlYWR5ID0gdHJ1ZTtcblx0c2Vzc2lvbl9kaXJ0eSA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBwYXJ0X2NoYW5nZWQoaSwgc2VnbWVudCwgbWF0Y2gsIHN0cmluZ2lmaWVkX3F1ZXJ5KSB7XG5cdC8vIFRPRE8gb25seSBjaGVjayBxdWVyeSBzdHJpbmcgY2hhbmdlcyBmb3IgcHJlbG9hZCBmdW5jdGlvbnNcblx0Ly8gdGhhdCBkbyBpbiBmYWN0IGRlcGVuZCBvbiBpdCAodXNpbmcgc3RhdGljIGFuYWx5c2lzIG9yXG5cdC8vIHJ1bnRpbWUgaW5zdHJ1bWVudGF0aW9uKVxuXHRpZiAoc3RyaW5naWZpZWRfcXVlcnkgIT09IGN1cnJlbnRfcXVlcnkpIHJldHVybiB0cnVlO1xuXG5cdGNvbnN0IHByZXZpb3VzID0gY3VycmVudF9icmFuY2hbaV07XG5cblx0aWYgKCFwcmV2aW91cykgcmV0dXJuIGZhbHNlO1xuXHRpZiAoc2VnbWVudCAhPT0gcHJldmlvdXMuc2VnbWVudCkgcmV0dXJuIHRydWU7XG5cdGlmIChwcmV2aW91cy5tYXRjaCkge1xuXHRcdGlmIChKU09OLnN0cmluZ2lmeShwcmV2aW91cy5tYXRjaC5zbGljZSgxLCBpICsgMikpICE9PSBKU09OLnN0cmluZ2lmeShtYXRjaC5zbGljZSgxLCBpICsgMikpKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gaHlkcmF0ZV90YXJnZXQodGFyZ2V0KVxuXG5cblxuIHtcblx0Y29uc3QgeyByb3V0ZSwgcGFnZSB9ID0gdGFyZ2V0O1xuXHRjb25zdCBzZWdtZW50cyA9IHBhZ2UucGF0aC5zcGxpdCgnLycpLmZpbHRlcihCb29sZWFuKTtcblxuXHRsZXQgcmVkaXJlY3QgPSBudWxsO1xuXG5cdGNvbnN0IHByb3BzID0geyBlcnJvcjogbnVsbCwgc3RhdHVzOiAyMDAsIHNlZ21lbnRzOiBbc2VnbWVudHNbMF1dIH07XG5cblx0Y29uc3QgcHJlbG9hZF9jb250ZXh0ID0ge1xuXHRcdGZldGNoOiAodXJsLCBvcHRzKSA9PiBmZXRjaCh1cmwsIG9wdHMpLFxuXHRcdHJlZGlyZWN0OiAoc3RhdHVzQ29kZSwgbG9jYXRpb24pID0+IHtcblx0XHRcdGlmIChyZWRpcmVjdCAmJiAocmVkaXJlY3Quc3RhdHVzQ29kZSAhPT0gc3RhdHVzQ29kZSB8fCByZWRpcmVjdC5sb2NhdGlvbiAhPT0gbG9jYXRpb24pKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgQ29uZmxpY3RpbmcgcmVkaXJlY3RzYCk7XG5cdFx0XHR9XG5cdFx0XHRyZWRpcmVjdCA9IHsgc3RhdHVzQ29kZSwgbG9jYXRpb24gfTtcblx0XHR9LFxuXHRcdGVycm9yOiAoc3RhdHVzLCBlcnJvcikgPT4ge1xuXHRcdFx0cHJvcHMuZXJyb3IgPSB0eXBlb2YgZXJyb3IgPT09ICdzdHJpbmcnID8gbmV3IEVycm9yKGVycm9yKSA6IGVycm9yO1xuXHRcdFx0cHJvcHMuc3RhdHVzID0gc3RhdHVzO1xuXHRcdH1cblx0fTtcblxuXHRpZiAoIXJvb3RfcHJlbG9hZGVkKSB7XG5cdFx0cm9vdF9wcmVsb2FkZWQgPSBpbml0aWFsX2RhdGEucHJlbG9hZGVkWzBdIHx8IHJvb3RfcHJlbG9hZC5jYWxsKHByZWxvYWRfY29udGV4dCwge1xuXHRcdFx0aG9zdDogcGFnZS5ob3N0LFxuXHRcdFx0cGF0aDogcGFnZS5wYXRoLFxuXHRcdFx0cXVlcnk6IHBhZ2UucXVlcnksXG5cdFx0XHRwYXJhbXM6IHt9XG5cdFx0fSwgJHNlc3Npb24pO1xuXHR9XG5cblx0bGV0IGJyYW5jaDtcblx0bGV0IGwgPSAxO1xuXG5cdHRyeSB7XG5cdFx0Y29uc3Qgc3RyaW5naWZpZWRfcXVlcnkgPSBKU09OLnN0cmluZ2lmeShwYWdlLnF1ZXJ5KTtcblx0XHRjb25zdCBtYXRjaCA9IHJvdXRlLnBhdHRlcm4uZXhlYyhwYWdlLnBhdGgpO1xuXG5cdFx0bGV0IHNlZ21lbnRfZGlydHkgPSBmYWxzZTtcblxuXHRcdGJyYW5jaCA9IGF3YWl0IFByb21pc2UuYWxsKHJvdXRlLnBhcnRzLm1hcChhc3luYyAocGFydCwgaSkgPT4ge1xuXHRcdFx0Y29uc3Qgc2VnbWVudCA9IHNlZ21lbnRzW2ldO1xuXG5cdFx0XHRpZiAocGFydF9jaGFuZ2VkKGksIHNlZ21lbnQsIG1hdGNoLCBzdHJpbmdpZmllZF9xdWVyeSkpIHNlZ21lbnRfZGlydHkgPSB0cnVlO1xuXG5cdFx0XHRwcm9wcy5zZWdtZW50c1tsXSA9IHNlZ21lbnRzW2kgKyAxXTsgLy8gVE9ETyBtYWtlIHRoaXMgbGVzcyBjb25mdXNpbmdcblx0XHRcdGlmICghcGFydCkgcmV0dXJuIHsgc2VnbWVudCB9O1xuXG5cdFx0XHRjb25zdCBqID0gbCsrO1xuXG5cdFx0XHRpZiAoIXNlc3Npb25fZGlydHkgJiYgIXNlZ21lbnRfZGlydHkgJiYgY3VycmVudF9icmFuY2hbaV0gJiYgY3VycmVudF9icmFuY2hbaV0ucGFydCA9PT0gcGFydC5pKSB7XG5cdFx0XHRcdHJldHVybiBjdXJyZW50X2JyYW5jaFtpXTtcblx0XHRcdH1cblxuXHRcdFx0c2VnbWVudF9kaXJ0eSA9IGZhbHNlO1xuXG5cdFx0XHRjb25zdCB7IGRlZmF1bHQ6IGNvbXBvbmVudCwgcHJlbG9hZCB9ID0gYXdhaXQgbG9hZF9jb21wb25lbnQoY29tcG9uZW50c1twYXJ0LmldKTtcblxuXHRcdFx0bGV0IHByZWxvYWRlZDtcblx0XHRcdGlmIChyZWFkeSB8fCAhaW5pdGlhbF9kYXRhLnByZWxvYWRlZFtpICsgMV0pIHtcblx0XHRcdFx0cHJlbG9hZGVkID0gcHJlbG9hZFxuXHRcdFx0XHRcdD8gYXdhaXQgcHJlbG9hZC5jYWxsKHByZWxvYWRfY29udGV4dCwge1xuXHRcdFx0XHRcdFx0aG9zdDogcGFnZS5ob3N0LFxuXHRcdFx0XHRcdFx0cGF0aDogcGFnZS5wYXRoLFxuXHRcdFx0XHRcdFx0cXVlcnk6IHBhZ2UucXVlcnksXG5cdFx0XHRcdFx0XHRwYXJhbXM6IHBhcnQucGFyYW1zID8gcGFydC5wYXJhbXModGFyZ2V0Lm1hdGNoKSA6IHt9XG5cdFx0XHRcdFx0fSwgJHNlc3Npb24pXG5cdFx0XHRcdFx0OiB7fTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHByZWxvYWRlZCA9IGluaXRpYWxfZGF0YS5wcmVsb2FkZWRbaSArIDFdO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gKHByb3BzW2BsZXZlbCR7an1gXSA9IHsgY29tcG9uZW50LCBwcm9wczogcHJlbG9hZGVkLCBzZWdtZW50LCBtYXRjaCwgcGFydDogcGFydC5pIH0pO1xuXHRcdH0pKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRwcm9wcy5lcnJvciA9IGVycm9yO1xuXHRcdHByb3BzLnN0YXR1cyA9IDUwMDtcblx0XHRicmFuY2ggPSBbXTtcblx0fVxuXG5cdHJldHVybiB7IHJlZGlyZWN0LCBwcm9wcywgYnJhbmNoIH07XG59XG5cbmZ1bmN0aW9uIGxvYWRfY3NzKGNodW5rKSB7XG5cdGNvbnN0IGhyZWYgPSBgY2xpZW50LyR7Y2h1bmt9YDtcblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbaHJlZj1cIiR7aHJlZn1cIl1gKSkgcmV0dXJuO1xuXG5cdHJldHVybiBuZXcgUHJvbWlzZSgoZnVsZmlsLCByZWplY3QpID0+IHtcblx0XHRjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuXHRcdGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xuXHRcdGxpbmsuaHJlZiA9IGhyZWY7XG5cblx0XHRsaW5rLm9ubG9hZCA9ICgpID0+IGZ1bGZpbCgpO1xuXHRcdGxpbmsub25lcnJvciA9IHJlamVjdDtcblxuXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBsb2FkX2NvbXBvbmVudChjb21wb25lbnQpXG5cblxuIHtcblx0Ly8gVE9ETyB0aGlzIGlzIHRlbXBvcmFyeSDigJQgb25jZSBwbGFjZWhvbGRlcnMgYXJlXG5cdC8vIGFsd2F5cyByZXdyaXR0ZW4sIHNjcmF0Y2ggdGhlIHRlcm5hcnlcblx0Y29uc3QgcHJvbWlzZXMgPSAodHlwZW9mIGNvbXBvbmVudC5jc3MgPT09ICdzdHJpbmcnID8gW10gOiBjb21wb25lbnQuY3NzLm1hcChsb2FkX2NzcykpO1xuXHRwcm9taXNlcy51bnNoaWZ0KGNvbXBvbmVudC5qcygpKTtcblx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKHZhbHVlcyA9PiB2YWx1ZXNbMF0pO1xufVxuXG5mdW5jdGlvbiBkZXRhY2gobm9kZSkge1xuXHRub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKGhyZWYpIHtcblx0Y29uc3QgdGFyZ2V0ID0gc2VsZWN0X3RhcmdldChuZXcgVVJMKGhyZWYsIGRvY3VtZW50LmJhc2VVUkkpKTtcblxuXHRpZiAodGFyZ2V0KSB7XG5cdFx0aWYgKCFwcmVmZXRjaGluZyB8fCBocmVmICE9PSBwcmVmZXRjaGluZy5ocmVmKSB7XG5cdFx0XHRzZXRfcHJlZmV0Y2hpbmcoaHJlZiwgaHlkcmF0ZV90YXJnZXQodGFyZ2V0KSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHByZWZldGNoaW5nLnByb21pc2U7XG5cdH1cbn1cblxuZnVuY3Rpb24gc3RhcnQob3B0c1xuXG4pIHtcblx0aWYgKCdzY3JvbGxSZXN0b3JhdGlvbicgaW4gX2hpc3RvcnkpIHtcblx0XHRfaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnO1xuXHR9XG5cblx0c2V0X3RhcmdldChvcHRzLnRhcmdldCk7XG5cblx0YWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVfY2xpY2spO1xuXHRhZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIGhhbmRsZV9wb3BzdGF0ZSk7XG5cblx0Ly8gcHJlZmV0Y2hcblx0YWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRyaWdnZXJfcHJlZmV0Y2gpO1xuXHRhZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVfbW91c2Vtb3ZlKTtcblxuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG5cdFx0Y29uc3QgeyBoYXNoLCBocmVmIH0gPSBsb2NhdGlvbjtcblxuXHRcdF9oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7IGlkOiB1aWQgfSwgJycsIGhyZWYpO1xuXG5cdFx0Y29uc3QgdXJsID0gbmV3IFVSTChsb2NhdGlvbi5ocmVmKTtcblxuXHRcdGlmIChpbml0aWFsX2RhdGEuZXJyb3IpIHJldHVybiBoYW5kbGVfZXJyb3IoKTtcblxuXHRcdGNvbnN0IHRhcmdldCA9IHNlbGVjdF90YXJnZXQodXJsKTtcblx0XHRpZiAodGFyZ2V0KSByZXR1cm4gbmF2aWdhdGUodGFyZ2V0LCB1aWQsIHRydWUsIGhhc2gpO1xuXHR9KTtcbn1cblxubGV0IG1vdXNlbW92ZV90aW1lb3V0O1xuXG5mdW5jdGlvbiBoYW5kbGVfbW91c2Vtb3ZlKGV2ZW50KSB7XG5cdGNsZWFyVGltZW91dChtb3VzZW1vdmVfdGltZW91dCk7XG5cdG1vdXNlbW92ZV90aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0dHJpZ2dlcl9wcmVmZXRjaChldmVudCk7XG5cdH0sIDIwKTtcbn1cblxuZnVuY3Rpb24gdHJpZ2dlcl9wcmVmZXRjaChldmVudCkge1xuXHRjb25zdCBhID0gZmluZF9hbmNob3IoZXZlbnQudGFyZ2V0KTtcblx0aWYgKCFhIHx8IGEucmVsICE9PSAncHJlZmV0Y2gnKSByZXR1cm47XG5cblx0cHJlZmV0Y2goYS5ocmVmKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlX2NsaWNrKGV2ZW50KSB7XG5cdC8vIEFkYXB0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vdmlzaW9ubWVkaWEvcGFnZS5qc1xuXHQvLyBNSVQgbGljZW5zZSBodHRwczovL2dpdGh1Yi5jb20vdmlzaW9ubWVkaWEvcGFnZS5qcyNsaWNlbnNlXG5cdGlmICh3aGljaChldmVudCkgIT09IDEpIHJldHVybjtcblx0aWYgKGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSkgcmV0dXJuO1xuXHRpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkgcmV0dXJuO1xuXG5cdGNvbnN0IGEgPSBmaW5kX2FuY2hvcihldmVudC50YXJnZXQpO1xuXHRpZiAoIWEpIHJldHVybjtcblxuXHRpZiAoIWEuaHJlZikgcmV0dXJuO1xuXG5cdC8vIGNoZWNrIGlmIGxpbmsgaXMgaW5zaWRlIGFuIHN2Z1xuXHQvLyBpbiB0aGlzIGNhc2UsIGJvdGggaHJlZiBhbmQgdGFyZ2V0IGFyZSBhbHdheXMgaW5zaWRlIGFuIG9iamVjdFxuXHRjb25zdCBzdmcgPSB0eXBlb2YgYS5ocmVmID09PSAnb2JqZWN0JyAmJiBhLmhyZWYuY29uc3RydWN0b3IubmFtZSA9PT0gJ1NWR0FuaW1hdGVkU3RyaW5nJztcblx0Y29uc3QgaHJlZiA9IFN0cmluZyhzdmcgPyAoYSkuaHJlZi5iYXNlVmFsIDogYS5ocmVmKTtcblxuXHRpZiAoaHJlZiA9PT0gbG9jYXRpb24uaHJlZikge1xuXHRcdGlmICghbG9jYXRpb24uaGFzaCkgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBJZ25vcmUgaWYgdGFnIGhhc1xuXHQvLyAxLiAnZG93bmxvYWQnIGF0dHJpYnV0ZVxuXHQvLyAyLiByZWw9J2V4dGVybmFsJyBhdHRyaWJ1dGVcblx0aWYgKGEuaGFzQXR0cmlidXRlKCdkb3dubG9hZCcpIHx8IGEuZ2V0QXR0cmlidXRlKCdyZWwnKSA9PT0gJ2V4dGVybmFsJykgcmV0dXJuO1xuXG5cdC8vIElnbm9yZSBpZiA8YT4gaGFzIGEgdGFyZ2V0XG5cdGlmIChzdmcgPyAoYSkudGFyZ2V0LmJhc2VWYWwgOiBhLnRhcmdldCkgcmV0dXJuO1xuXG5cdGNvbnN0IHVybCA9IG5ldyBVUkwoaHJlZik7XG5cblx0Ly8gRG9uJ3QgaGFuZGxlIGhhc2ggY2hhbmdlc1xuXHRpZiAodXJsLnBhdGhuYW1lID09PSBsb2NhdGlvbi5wYXRobmFtZSAmJiB1cmwuc2VhcmNoID09PSBsb2NhdGlvbi5zZWFyY2gpIHJldHVybjtcblxuXHRjb25zdCB0YXJnZXQgPSBzZWxlY3RfdGFyZ2V0KHVybCk7XG5cdGlmICh0YXJnZXQpIHtcblx0XHRjb25zdCBub3Njcm9sbCA9IGEuaGFzQXR0cmlidXRlKCdzYXBwZXItbm9zY3JvbGwnKTtcblx0XHRuYXZpZ2F0ZSh0YXJnZXQsIG51bGwsIG5vc2Nyb2xsLCB1cmwuaGFzaCk7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRfaGlzdG9yeS5wdXNoU3RhdGUoeyBpZDogY2lkIH0sICcnLCB1cmwuaHJlZik7XG5cdH1cbn1cblxuZnVuY3Rpb24gd2hpY2goZXZlbnQpIHtcblx0cmV0dXJuIGV2ZW50LndoaWNoID09PSBudWxsID8gZXZlbnQuYnV0dG9uIDogZXZlbnQud2hpY2g7XG59XG5cbmZ1bmN0aW9uIGZpbmRfYW5jaG9yKG5vZGUpIHtcblx0d2hpbGUgKG5vZGUgJiYgbm9kZS5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpICE9PSAnQScpIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7IC8vIFNWRyA8YT4gZWxlbWVudHMgaGF2ZSBhIGxvd2VyY2FzZSBuYW1lXG5cdHJldHVybiBub2RlO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVfcG9wc3RhdGUoZXZlbnQpIHtcblx0c2Nyb2xsX2hpc3RvcnlbY2lkXSA9IHNjcm9sbF9zdGF0ZSgpO1xuXG5cdGlmIChldmVudC5zdGF0ZSkge1xuXHRcdGNvbnN0IHVybCA9IG5ldyBVUkwobG9jYXRpb24uaHJlZik7XG5cdFx0Y29uc3QgdGFyZ2V0ID0gc2VsZWN0X3RhcmdldCh1cmwpO1xuXHRcdGlmICh0YXJnZXQpIHtcblx0XHRcdG5hdmlnYXRlKHRhcmdldCwgZXZlbnQuc3RhdGUuaWQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsb2NhdGlvbi5ocmVmID0gbG9jYXRpb24uaHJlZjtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Ly8gaGFzaGNoYW5nZVxuXHRcdHNldF91aWQodWlkICsgMSk7XG5cdFx0c2V0X2NpZCh1aWQpO1xuXHRcdF9oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7IGlkOiBjaWQgfSwgJycsIGxvY2F0aW9uLmhyZWYpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoUm91dGVzKHBhdGhuYW1lcykge1xuXHRyZXR1cm4gcm91dGVzXG5cdFx0LmZpbHRlcihwYXRobmFtZXNcblx0XHRcdD8gcm91dGUgPT4gcGF0aG5hbWVzLnNvbWUocGF0aG5hbWUgPT4gcm91dGUucGF0dGVybi50ZXN0KHBhdGhuYW1lKSlcblx0XHRcdDogKCkgPT4gdHJ1ZVxuXHRcdClcblx0XHQucmVkdWNlKChwcm9taXNlLCByb3V0ZSkgPT4gcHJvbWlzZS50aGVuKCgpID0+IHtcblx0XHRcdHJldHVybiBQcm9taXNlLmFsbChyb3V0ZS5wYXJ0cy5tYXAocGFydCA9PiBwYXJ0ICYmIGxvYWRfY29tcG9uZW50KGNvbXBvbmVudHNbcGFydC5pXSkpKTtcblx0XHR9KSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xufVxuXG5jb25zdCBzdG9yZXMkMSA9ICgpID0+IGdldENvbnRleHQoQ09OVEVYVF9LRVkpO1xuXG5leHBvcnQgeyBnb3RvLCBwcmVmZXRjaCwgcHJlZmV0Y2hSb3V0ZXMsIHN0YXJ0LCBzdG9yZXMkMSBhcyBzdG9yZXMgfTtcbiIsIjwhLS0gVGhpcyBmaWxlIGlzIGdlbmVyYXRlZCBieSBTYXBwZXIg4oCUIGRvIG5vdCBlZGl0IGl0ISAtLT5cbjxzY3JpcHQ+XG5cdGltcG9ydCB7IHNldENvbnRleHQgfSBmcm9tICdzdmVsdGUnO1xuXHRpbXBvcnQgeyBDT05URVhUX0tFWSB9IGZyb20gJy4vc2hhcmVkJztcblx0aW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9yb3V0ZXMvX2xheW91dC5zdmVsdGUnO1xuXHRpbXBvcnQgRXJyb3IgZnJvbSAnLi4vLi4vLi4vcm91dGVzL19lcnJvci5zdmVsdGUnO1xuXG5cdGV4cG9ydCBsZXQgc3RvcmVzO1xuXHRleHBvcnQgbGV0IGVycm9yO1xuXHRleHBvcnQgbGV0IHN0YXR1cztcblx0ZXhwb3J0IGxldCBzZWdtZW50cztcblx0ZXhwb3J0IGxldCBsZXZlbDA7XG5cdGV4cG9ydCBsZXQgbGV2ZWwxID0gbnVsbDtcblxuXHRzZXRDb250ZXh0KENPTlRFWFRfS0VZLCBzdG9yZXMpO1xuPC9zY3JpcHQ+XG5cbjxMYXlvdXQgc2VnbWVudD1cIntzZWdtZW50c1swXX1cIiB7Li4ubGV2ZWwwLnByb3BzfT5cblx0eyNpZiBlcnJvcn1cblx0XHQ8RXJyb3Ige2Vycm9yfSB7c3RhdHVzfS8+XG5cdHs6ZWxzZX1cblx0XHQ8c3ZlbHRlOmNvbXBvbmVudCB0aGlzPVwie2xldmVsMS5jb21wb25lbnR9XCIgey4uLmxldmVsMS5wcm9wc30vPlxuXHR7L2lmfVxuPC9MYXlvdXQ+IiwiLy8gVGhpcyBmaWxlIGlzIGdlbmVyYXRlZCBieSBTYXBwZXIg4oCUIGRvIG5vdCBlZGl0IGl0IVxuZXhwb3J0IHsgZGVmYXVsdCBhcyBSb290IH0gZnJvbSAnLi4vLi4vLi4vcm91dGVzL19sYXlvdXQuc3ZlbHRlJztcbmV4cG9ydCB7IHByZWxvYWQgYXMgcm9vdF9wcmVsb2FkIH0gZnJvbSAnLi9zaGFyZWQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFcnJvckNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL3JvdXRlcy9fZXJyb3Iuc3ZlbHRlJztcblxuZXhwb3J0IGNvbnN0IGlnbm9yZSA9IFsvXlxcL2Jsb2cuanNvbiQvLCAvXlxcL2Jsb2dcXC8oW15cXC9dKz8pLmpzb24kL107XG5cbmV4cG9ydCBjb25zdCBjb21wb25lbnRzID0gW1xuXHR7XG5cdFx0anM6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImluZGV4XCIgKi8gXCIuLi8uLi8uLi9yb3V0ZXMvaW5kZXguc3ZlbHRlXCIpLFxuXHRcdGNzczogXCJfX1NBUFBFUl9DU1NfUExBQ0VIT0xERVI6aW5kZXguc3ZlbHRlX19cIlxuXHR9LFxuXHR7XG5cdFx0anM6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImFib3V0XCIgKi8gXCIuLi8uLi8uLi9yb3V0ZXMvYWJvdXQuc3ZlbHRlXCIpLFxuXHRcdGNzczogXCJfX1NBUFBFUl9DU1NfUExBQ0VIT0xERVI6YWJvdXQuc3ZlbHRlX19cIlxuXHR9LFxuXHR7XG5cdFx0anM6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImJsb2dcIiAqLyBcIi4uLy4uLy4uL3JvdXRlcy9ibG9nL2luZGV4LnN2ZWx0ZVwiKSxcblx0XHRjc3M6IFwiX19TQVBQRVJfQ1NTX1BMQUNFSE9MREVSOmJsb2cvaW5kZXguc3ZlbHRlX19cIlxuXHR9LFxuXHR7XG5cdFx0anM6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImJsb2dfJHNsdWdcIiAqLyBcIi4uLy4uLy4uL3JvdXRlcy9ibG9nL1tzbHVnXS5zdmVsdGVcIiksXG5cdFx0Y3NzOiBcIl9fU0FQUEVSX0NTU19QTEFDRUhPTERFUjpibG9nL1tzbHVnXS5zdmVsdGVfX1wiXG5cdH1cbl07XG5cbmV4cG9ydCBjb25zdCByb3V0ZXMgPSAoZCA9PiBbXG5cdHtcblx0XHQvLyBpbmRleC5zdmVsdGVcblx0XHRwYXR0ZXJuOiAvXlxcLyQvLFxuXHRcdHBhcnRzOiBbXG5cdFx0XHR7IGk6IDAgfVxuXHRcdF1cblx0fSxcblxuXHR7XG5cdFx0Ly8gYWJvdXQuc3ZlbHRlXG5cdFx0cGF0dGVybjogL15cXC9hYm91dFxcLz8kLyxcblx0XHRwYXJ0czogW1xuXHRcdFx0eyBpOiAxIH1cblx0XHRdXG5cdH0sXG5cblx0e1xuXHRcdC8vIGJsb2cvaW5kZXguc3ZlbHRlXG5cdFx0cGF0dGVybjogL15cXC9ibG9nXFwvPyQvLFxuXHRcdHBhcnRzOiBbXG5cdFx0XHR7IGk6IDIgfVxuXHRcdF1cblx0fSxcblxuXHR7XG5cdFx0Ly8gYmxvZy9bc2x1Z10uc3ZlbHRlXG5cdFx0cGF0dGVybjogL15cXC9ibG9nXFwvKFteXFwvXSs/KVxcLz8kLyxcblx0XHRwYXJ0czogW1xuXHRcdFx0bnVsbCxcblx0XHRcdHsgaTogMywgcGFyYW1zOiBtYXRjaCA9PiAoeyBzbHVnOiBkKG1hdGNoWzFdKSB9KSB9XG5cdFx0XVxuXHR9XG5dKShkZWNvZGVVUklDb21wb25lbnQpO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0aW1wb3J0KFwiL1VzZXJzL0x1Y2EvRGVza3RvcC9Ib21lcGFnZS9ub2RlX21vZHVsZXMvc2FwcGVyL3NhcHBlci1kZXYtY2xpZW50LmpzXCIpLnRoZW4oY2xpZW50ID0+IHtcblx0XHRjbGllbnQuY29ubmVjdCgxMDAwMCk7XG5cdH0pO1xufSIsImltcG9ydCB7IHdyaXRhYmxlIH0gZnJvbSAnc3ZlbHRlL3N0b3JlJztcblxuZXhwb3J0IGNvbnN0IENPTlRFWFRfS0VZID0ge307XG5cbmV4cG9ydCBjb25zdCBwcmVsb2FkID0gKCkgPT4gKHt9KTsiLCI8c2NyaXB0PlxuXHRleHBvcnQgbGV0IHN0YXR1cztcblx0ZXhwb3J0IGxldCBlcnJvcjtcblxuXHRjb25zdCBkZXYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jztcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cdGgxLCBwIHtcblx0XHRtYXJnaW46IDAgYXV0bztcblx0fVxuXG5cdGgxIHtcblx0XHRmb250LXNpemU6IDIuOGVtO1xuXHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0bWFyZ2luOiAwIDAgMC41ZW0gMDtcblx0fVxuXG5cdHAge1xuXHRcdG1hcmdpbjogMWVtIGF1dG87XG5cdH1cblxuXHRAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcblx0XHRoMSB7XG5cdFx0XHRmb250LXNpemU6IDRlbTtcblx0XHR9XG5cdH1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5YjNWMFpYTXZYMlZ5Y205eUxuTjJaV3gwWlNKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBOQlEwTTdSVUZEUXl4alFVRmpPME5CUTJZN08wTkJSVUU3UlVGRFF5eG5Ra0ZCWjBJN1JVRkRhRUlzWjBKQlFXZENPMFZCUTJoQ0xHMUNRVUZ0UWp0RFFVTndRanM3UTBGRlFUdEZRVU5ETEdkQ1FVRm5RanREUVVOcVFqczdRMEZGUVR0RlFVTkRPMGRCUTBNc1kwRkJZenRGUVVObU8wTkJRMFFpTENKbWFXeGxJam9pYzNKakwzSnZkWFJsY3k5ZlpYSnliM0l1YzNabGJIUmxJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpWEc1Y2RHZ3hMQ0J3SUh0Y2JseDBYSFJ0WVhKbmFXNDZJREFnWVhWMGJ6dGNibHgwZlZ4dVhHNWNkR2d4SUh0Y2JseDBYSFJtYjI1MExYTnBlbVU2SURJdU9HVnRPMXh1WEhSY2RHWnZiblF0ZDJWcFoyaDBPaUEzTURBN1hHNWNkRngwYldGeVoybHVPaUF3SURBZ01DNDFaVzBnTUR0Y2JseDBmVnh1WEc1Y2RIQWdlMXh1WEhSY2RHMWhjbWRwYmpvZ01XVnRJR0YxZEc4N1hHNWNkSDFjYmx4dVhIUkFiV1ZrYVdFZ0tHMXBiaTEzYVdSMGFEb2dORGd3Y0hncElIdGNibHgwWEhSb01TQjdYRzVjZEZ4MFhIUm1iMjUwTFhOcGVtVTZJRFJsYlR0Y2JseDBYSFI5WEc1Y2RIMWNiaUpkZlE9PSAqLzwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPntzdGF0dXN9PC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxoMT57c3RhdHVzfTwvaDE+XG5cbjxwPntlcnJvci5tZXNzYWdlfTwvcD5cblxueyNpZiBkZXYgJiYgZXJyb3Iuc3RhY2t9XG5cdDxwcmU+e2Vycm9yLnN0YWNrfTwvcHJlPlxuey9pZn1cbiIsIjxzY3JpcHQ+XG4gIGltcG9ydCBOYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2LnN2ZWx0ZVwiO1xuICBpbXBvcnQgQmFja2dyb3VuZCBmcm9tIFwiLi4vY29tcG9uZW50cy9CYWNrZ3JvdW5kLnN2ZWx0ZVwiO1xuXG4gIGV4cG9ydCBsZXQgc2VnbWVudDtcbjwvc2NyaXB0PlxuXG48c3R5bGUgZ2xvYmFsIGxhbmc9XCJzY3NzXCI+LypcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxufCBCcmVha3BvaW50c1xufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuLypcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxufCBNb2R1bGFyIFNjYWxlIFNpemVzXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG4vKlxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG58IFJvb3QgRWxlbWVudHNcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbjpnbG9iYWwoOnJvb3QpIHtcbiAgZm9udC1zaXplOiAxNnB4OyB9XG5cbjpnbG9iYWwoaHRtbCkge1xuICBmb250LXNpemU6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XG4gICAgOmdsb2JhbChodG1sKSB7XG4gICAgICBsaW5lLWhlaWdodDogMS4zOyB9IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2N3B4KSB7XG4gICAgOmdsb2JhbChodG1sKSB7XG4gICAgICBsaW5lLWhlaWdodDogMS4zOyB9IH1cblxuLypcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxufCBIMVxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuOmdsb2JhbChoMSkge1xuICBmb250LXNpemU6IGMgNC4zcmVtO1xuICBtYXJnaW46IDAuN3JlbTsgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcbiAgICA6Z2xvYmFsKGgxKSB7XG4gICAgICBmb250LXNpemU6IDIuMDc0cmVtOyB9IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2N3B4KSB7XG4gICAgOmdsb2JhbChoMSkge1xuICAgICAgZm9udC1zaXplOiAyLjQ4OHJlbTtcbiAgICAgIG1hcmdpbjogMS40cmVtOyB9IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjNweCkge1xuICAgIDpnbG9iYWwoaDEpIHtcbiAgICAgIGZvbnQtc2l6ZTogMi45ODZyZW07IH0gfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTI3OXB4KSB7XG4gICAgOmdsb2JhbChoMSkge1xuICAgICAgZm9udC1zaXplOiAzLjU4M3JlbTtcbiAgICAgIG1hcmdpbjogMi4xcmVtOyB9IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDE1OTlweCkge1xuICAgIDpnbG9iYWwoaDEpIHtcbiAgICAgIGZvbnQtc2l6ZTogNS4xNnJlbTsgfSB9XG5cbi8qXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnwgSDIgXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG46Z2xvYmFsKGgyKSB7XG4gIGZvbnQtc2l6ZTogMXJlbTsgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcbiAgICA6Z2xvYmFsKGgyKSB7XG4gICAgICBmb250LXNpemU6IDEuNzI4cmVtOyB9IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2N3B4KSB7XG4gICAgOmdsb2JhbChoMikge1xuICAgICAgZm9udC1zaXplOiAyLjA3NHJlbTsgfSB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDIzcHgpIHtcbiAgICA6Z2xvYmFsKGgyKSB7XG4gICAgICBmb250LXNpemU6IDIuNDg4cmVtOyB9IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyNzlweCkge1xuICAgIDpnbG9iYWwoaDIpIHtcbiAgICAgIGZvbnQtc2l6ZTogMi45ODZyZW07IH0gfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTU5OXB4KSB7XG4gICAgOmdsb2JhbChoMikge1xuICAgICAgZm9udC1zaXplOiA0LjNyZW07IH0gfVxuXG4vKlxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG58IEgzXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG46Z2xvYmFsKGgzKSB7XG4gIGZvbnQtc2l6ZTogMC44MzNyZW07IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XG4gICAgOmdsb2JhbChoMykge1xuICAgICAgZm9udC1zaXplOiAxLjQ0cmVtOyB9IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2N3B4KSB7XG4gICAgOmdsb2JhbChoMykge1xuICAgICAgZm9udC1zaXplOiAxLjcyOHJlbTsgfSB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDIzcHgpIHtcbiAgICA6Z2xvYmFsKGgzKSB7XG4gICAgICBmb250LXNpemU6IDIuMDc0cmVtOyB9IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyNzlweCkge1xuICAgIDpnbG9iYWwoaDMpIHtcbiAgICAgIGZvbnQtc2l6ZTogMi40ODhyZW07IH0gfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTU5OXB4KSB7XG4gICAgOmdsb2JhbChoMykge1xuICAgICAgZm9udC1zaXplOiAzLjU4M3JlbTsgfSB9XG5cbi8qXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnwgSDRcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbjpnbG9iYWwoaDQpIHtcbiAgZm9udC1zaXplOiAwLjY5NHJlbTsgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcbiAgICA6Z2xvYmFsKGg0KSB7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTsgfSB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjdweCkge1xuICAgIDpnbG9iYWwoaDQpIHtcbiAgICAgIGZvbnQtc2l6ZTogMS40NHJlbTsgfSB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDIzcHgpIHtcbiAgICA6Z2xvYmFsKGg0KSB7XG4gICAgICBmb250LXNpemU6IDEuNzI4cmVtOyB9IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyNzlweCkge1xuICAgIDpnbG9iYWwoaDQpIHtcbiAgICAgIGZvbnQtc2l6ZTogMi4wNzRyZW07IH0gfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTU5OXB4KSB7XG4gICAgOmdsb2JhbChoNCkge1xuICAgICAgZm9udC1zaXplOiAyLjk4NnJlbTsgfSB9XG5cbi8qXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnwgSDVcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbjpnbG9iYWwoaDUpIHtcbiAgZm9udC1zaXplOiAwLjY5NHJlbTsgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcbiAgICA6Z2xvYmFsKGg1KSB7XG4gICAgICBmb250LXNpemU6IDFyZW07IH0gfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY3cHgpIHtcbiAgICA6Z2xvYmFsKGg1KSB7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTsgfSB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDIzcHgpIHtcbiAgICA6Z2xvYmFsKGg1KSB7XG4gICAgICBmb250LXNpemU6IDEuNDRyZW07IH0gfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTI3OXB4KSB7XG4gICAgOmdsb2JhbChoNSkge1xuICAgICAgZm9udC1zaXplOiAxLjcyOHJlbTsgfSB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxNTk5cHgpIHtcbiAgICA6Z2xvYmFsKGg1KSB7XG4gICAgICBmb250LXNpemU6IDIuNDg4cmVtOyB9IH1cblxuLypcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxufCBINlxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuOmdsb2JhbChoNikge1xuICBmb250LXNpemU6IDAuNjk0cmVtOyB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuICAgIDpnbG9iYWwoaDYpIHtcbiAgICAgIGZvbnQtc2l6ZTogMC44MzNyZW07IH0gfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY3cHgpIHtcbiAgICA6Z2xvYmFsKGg2KSB7XG4gICAgICBmb250LXNpemU6IDFyZW07IH0gfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyM3B4KSB7XG4gICAgOmdsb2JhbChoNikge1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07IH0gfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTI3OXB4KSB7XG4gICAgOmdsb2JhbChoNikge1xuICAgICAgZm9udC1zaXplOiAxLjQ0cmVtOyB9IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDE1OTlweCkge1xuICAgIDpnbG9iYWwoaDYpIHtcbiAgICAgIGZvbnQtc2l6ZTogMi4wNzRyZW07IH0gfVxuXG4vKlxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG58IEVsZW1lbnRzICYgQ29tcG9uZW50c1xufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuOmdsb2JhbChhKSxcbjpnbG9iYWwobGkpLFxuOmdsb2JhbChwKSB7XG4gIGZvbnQtc2l6ZTogMXJlbTsgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcbiAgICA6Z2xvYmFsKGEpLFxuICAgIDpnbG9iYWwobGkpLFxuICAgIDpnbG9iYWwocCkge1xuICAgICAgZm9udC1zaXplOiAxcmVtOyB9IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2N3B4KSB7XG4gICAgOmdsb2JhbChhKSxcbiAgICA6Z2xvYmFsKGxpKSxcbiAgICA6Z2xvYmFsKHApIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtOyB9IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjNweCkge1xuICAgIDpnbG9iYWwoYSksXG4gICAgOmdsb2JhbChsaSksXG4gICAgOmdsb2JhbChwKSB7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTsgfSB9XG5cbjpnbG9iYWwocCkge1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBtYXgtd2lkdGg6IDMwcmVtOyB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjdweCkge1xuICAgIDpnbG9iYWwocCkge1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgIG1heC13aWR0aDogMzByZW07IH0gfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyM3B4KSB7XG4gICAgOmdsb2JhbChwKSB7XG4gICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgbWF4LXdpZHRoOiA0MHJlbTsgfSB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjc5cHgpIHtcbiAgICA6Z2xvYmFsKHApIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICBtYXgtd2lkdGg6IDUwcmVtOyB9IH1cblxuOmdsb2JhbCgudGV4dC1saWdodGVyKSB7XG4gIGNvbG9yOiAjNjY2OyB9XG5cbjpnbG9iYWwoYSkge1xuICBjb2xvcjogYmx1ZTsgfVxuICA6Z2xvYmFsKGE6aG92ZXIpIHtcbiAgICBjb2xvcjogIzRiNGJmZDsgfVxuXG4vKiEgbm9ybWFsaXplLmNzcyB2OC4wLjAgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXG4vKiBEb2N1bWVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXG4gKi9cbjpnbG9iYWwoaHRtbCkge1xuICBsaW5lLWhlaWdodDogMS4xNTtcbiAgLyogMSAqL1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC8qIDIgKi8gfVxuXG4vKiBTZWN0aW9uc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qKlxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxuICovXG46Z2xvYmFsKGJvZHkpIHtcbiAgbWFyZ2luOiAwOyB9XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cbiAqL1xuOmdsb2JhbChoMSkge1xuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luOiAwLjY3ZW0gMDsgfVxuXG4vKiBHcm91cGluZyBjb250ZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyoqXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXG4gKi9cbjpnbG9iYWwoaHIpIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgLyogMSAqL1xuICBoZWlnaHQ6IDA7XG4gIC8qIDEgKi9cbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIC8qIDIgKi8gfVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cbjpnbG9iYWwocHJlKSB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcbiAgLyogMSAqL1xuICBmb250LXNpemU6IDFlbTtcbiAgLyogMiAqLyB9XG5cbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyoqXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXG4gKi9cbjpnbG9iYWwoYSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuXG4vKipcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxuICovXG46Z2xvYmFsKGFiYnJbdGl0bGVdKSB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIC8qIDEgKi9cbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIC8qIDIgKi9cbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xuICAvKiAyICovIH1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxuICovXG46Z2xvYmFsKGIpLFxuOmdsb2JhbChzdHJvbmcpIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjsgfVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cbjpnbG9iYWwoY29kZSksXG46Z2xvYmFsKGtiZCksXG46Z2xvYmFsKHNhbXApIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xuICAvKiAxICovXG4gIGZvbnQtc2l6ZTogMWVtO1xuICAvKiAyICovIH1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAqL1xuOmdsb2JhbChzbWFsbCkge1xuICBmb250LXNpemU6IDgwJTsgfVxuXG4vKipcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxuICogYWxsIGJyb3dzZXJzLlxuICovXG46Z2xvYmFsKHN1YiksXG46Z2xvYmFsKHN1cCkge1xuICBmb250LXNpemU6IDc1JTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XG5cbjpnbG9iYWwoc3ViKSB7XG4gIGJvdHRvbTogLTAuMjVlbTsgfVxuXG46Z2xvYmFsKHN1cCkge1xuICB0b3A6IC0wLjVlbTsgfVxuXG4vKiBFbWJlZGRlZCBjb250ZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyoqXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxuICovXG46Z2xvYmFsKGltZykge1xuICBib3JkZXItc3R5bGU6IG5vbmU7IH1cblxuLyogRm9ybXNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKipcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxuICovXG46Z2xvYmFsKGJ1dHRvbiksXG46Z2xvYmFsKGlucHV0KSxcbjpnbG9iYWwob3B0Z3JvdXApLFxuOmdsb2JhbChzZWxlY3QpLFxuOmdsb2JhbCh0ZXh0YXJlYSkge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgLyogMSAqL1xuICBmb250LXNpemU6IDEwMCU7XG4gIC8qIDEgKi9cbiAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gIC8qIDEgKi9cbiAgbWFyZ2luOiAwO1xuICAvKiAyICovIH1cblxuLyoqXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXG4gKi9cbjpnbG9iYWwoYnV0dG9uKSxcbjpnbG9iYWwoaW5wdXQpIHtcbiAgLyogMSAqL1xuICBvdmVyZmxvdzogdmlzaWJsZTsgfVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxuICovXG46Z2xvYmFsKGJ1dHRvbiksXG46Z2xvYmFsKHNlbGVjdCkge1xuICAvKiAxICovXG4gIHRleHQtdHJhbnNmb3JtOiBub25lOyB9XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbiAqL1xuOmdsb2JhbChidXR0b24pLFxuOmdsb2JhbChbdHlwZT1cImJ1dHRvblwiXSksXG46Z2xvYmFsKFt0eXBlPVwicmVzZXRcIl0pLFxuOmdsb2JhbChbdHlwZT1cInN1Ym1pdFwiXSkge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgfVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXG4gKi9cbjpnbG9iYWwoYnV0dG9uOjotbW96LWZvY3VzLWlubmVyKSxcbjpnbG9iYWwoW3R5cGU9XCJidXR0b25cIl06Oi1tb3otZm9jdXMtaW5uZXIpLFxuOmdsb2JhbChbdHlwZT1cInJlc2V0XCJdOjotbW96LWZvY3VzLWlubmVyKSxcbjpnbG9iYWwoW3R5cGU9XCJzdWJtaXRcIl06Oi1tb3otZm9jdXMtaW5uZXIpIHtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwOyB9XG5cbi8qKlxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxuICovXG46Z2xvYmFsKGJ1dHRvbjotbW96LWZvY3VzcmluZyksXG46Z2xvYmFsKFt0eXBlPVwiYnV0dG9uXCJdOi1tb3otZm9jdXNyaW5nKSxcbjpnbG9iYWwoW3R5cGU9XCJyZXNldFwiXTotbW96LWZvY3VzcmluZyksXG46Z2xvYmFsKFt0eXBlPVwic3VibWl0XCJdOi1tb3otZm9jdXNyaW5nKSB7XG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDsgfVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cbiAqL1xuOmdsb2JhbChmaWVsZHNldCkge1xuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07IH1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cbjpnbG9iYWwobGVnZW5kKSB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAvKiAxICovXG4gIGNvbG9yOiBpbmhlcml0O1xuICAvKiAyICovXG4gIGRpc3BsYXk6IHRhYmxlO1xuICAvKiAxICovXG4gIG1heC13aWR0aDogMTAwJTtcbiAgLyogMSAqL1xuICBwYWRkaW5nOiAwO1xuICAvKiAzICovXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIC8qIDEgKi8gfVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXG4gKi9cbjpnbG9iYWwocHJvZ3Jlc3MpIHtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXG4gKi9cbjpnbG9iYWwodGV4dGFyZWEpIHtcbiAgb3ZlcmZsb3c6IGF1dG87IH1cblxuLyoqXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cbiAqL1xuOmdsb2JhbChbdHlwZT1cImNoZWNrYm94XCJdKSxcbjpnbG9iYWwoW3R5cGU9XCJyYWRpb1wiXSkge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLyogMSAqL1xuICBwYWRkaW5nOiAwO1xuICAvKiAyICovIH1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXG4gKi9cbjpnbG9iYWwoW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24pLFxuOmdsb2JhbChbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbikge1xuICBoZWlnaHQ6IGF1dG87IH1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxuICovXG46Z2xvYmFsKFt0eXBlPVwic2VhcmNoXCJdKSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xuICAvKiAxICovXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xuICAvKiAyICovIH1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXG4gKi9cbjpnbG9iYWwoW3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24pIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyB9XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cbiAqL1xuOmdsb2JhbCg6Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uKSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xuICAvKiAxICovXG4gIGZvbnQ6IGluaGVyaXQ7XG4gIC8qIDIgKi8gfVxuXG4vKiBJbnRlcmFjdGl2ZVxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxuICovXG46Z2xvYmFsKGRldGFpbHMpIHtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLypcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cbiAqL1xuOmdsb2JhbChzdW1tYXJ5KSB7XG4gIGRpc3BsYXk6IGxpc3QtaXRlbTsgfVxuXG4vKiBNaXNjXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXG4gKi9cbjpnbG9iYWwodGVtcGxhdGUpIHtcbiAgZGlzcGxheTogbm9uZTsgfVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxuICovXG46Z2xvYmFsKFtoaWRkZW5dKSB7XG4gIGRpc3BsYXk6IG5vbmU7IH1cblxuOmdsb2JhbChib2R5KSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIHotaW5kZXg6IDE7XG4gIGNvbG9yOiAjMjIyO1xuICBwYWRkaW5nOiAycmVtO1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgbWFyZ2luOiBhdXRvOyB9XG5cbjpnbG9iYWwoc2VjdGlvbiNhYm91dCkge1xuICBtYXJnaW4tdG9wOiAycmVtOyB9XG5cbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgOmdsb2JhbChoMSksXG4gIDpnbG9iYWwoaDIpLFxuICA6Z2xvYmFsKGgzKSxcbiAgOmdsb2JhbChoNCksXG4gIDpnbG9iYWwoaDUpLFxuICA6Z2xvYmFsKHApIHtcbiAgICBjb2xvcjogI2YyZjJmMiAhaW1wb3J0YW50OyB9XG4gIDpnbG9iYWwoYm9keSkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjFmMWYgIWltcG9ydGFudDsgfVxuICA6Z2xvYmFsKC5zbWlsZXktY2lyY2xlKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4MTgxOCAhaW1wb3J0YW50OyB9XG4gIDpnbG9iYWwoYnV0dG9uKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMWYxZiAhaW1wb3J0YW50OyB9XG4gICAgOmdsb2JhbChidXR0b24gYSkge1xuICAgICAgY29sb3I6ICNmMmYyZjIgIWltcG9ydGFudDsgfVxuICAgIDpnbG9iYWwoYnV0dG9uIHN2Zykge1xuICAgICAgZmlsbDogI2YyZjJmMiAhaW1wb3J0YW50OyB9IH1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eWIzVjBaWE12WDJ4aGVXOTFkQzV6ZG1Wc2RHVWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3T3pzN1EwRkpRenRCUVVORU96czdPME5CU1VNN1FVRkRSRHM3T3p0RFFVbERPMEZCUTBRN1JVRkRSU3hsUVVGbExFVkJRVVU3TzBGQlJXNUNPMFZCUTBVc1pVRkJaVHRGUVVObUxHZENRVUZuUWl4RlFVRkZPMFZCUTJ4Q08wbEJRMFU3VFVGRFJTeG5Ra0ZCWjBJc1JVRkJSU3hGUVVGRk8wVkJRM2hDTzBsQlEwVTdUVUZEUlN4blFrRkJaMElzUlVGQlJTeEZRVUZGT3p0QlFVVXhRanM3T3p0RFFVbERPMEZCUTBRN1JVRkRSU3h0UWtGQmJVSTdSVUZEYmtJc1kwRkJZeXhGUVVGRk8wVkJRMmhDTzBsQlEwVTdUVUZEUlN4dFFrRkJiVUlzUlVGQlJTeEZRVUZGTzBWQlF6TkNPMGxCUTBVN1RVRkRSU3h0UWtGQmJVSTdUVUZEYmtJc1kwRkJZeXhGUVVGRkxFVkJRVVU3UlVGRGRFSTdTVUZEUlR0TlFVTkZMRzFDUVVGdFFpeEZRVUZGTEVWQlFVVTdSVUZETTBJN1NVRkRSVHROUVVORkxHMUNRVUZ0UWp0TlFVTnVRaXhqUVVGakxFVkJRVVVzUlVGQlJUdEZRVU4wUWp0SlFVTkZPMDFCUTBVc2EwSkJRV3RDTEVWQlFVVXNSVUZCUlRzN1FVRkZOVUk3T3pzN1EwRkpRenRCUVVORU8wVkJRMFVzWlVGQlpTeEZRVUZGTzBWQlEycENPMGxCUTBVN1RVRkRSU3h0UWtGQmJVSXNSVUZCUlN4RlFVRkZPMFZCUXpOQ08wbEJRMFU3VFVGRFJTeHRRa0ZCYlVJc1JVRkJSU3hGUVVGRk8wVkJRek5DTzBsQlEwVTdUVUZEUlN4dFFrRkJiVUlzUlVGQlJTeEZRVUZGTzBWQlF6TkNPMGxCUTBVN1RVRkRSU3h0UWtGQmJVSXNSVUZCUlN4RlFVRkZPMFZCUXpOQ08wbEJRMFU3VFVGRFJTeHBRa0ZCYVVJc1JVRkJSU3hGUVVGRk96dEJRVVV6UWpzN096dERRVWxETzBGQlEwUTdSVUZEUlN4dFFrRkJiVUlzUlVGQlJUdEZRVU55UWp0SlFVTkZPMDFCUTBVc2EwSkJRV3RDTEVWQlFVVXNSVUZCUlR0RlFVTXhRanRKUVVORk8wMUJRMFVzYlVKQlFXMUNMRVZCUVVVc1JVRkJSVHRGUVVNelFqdEpRVU5GTzAxQlEwVXNiVUpCUVcxQ0xFVkJRVVVzUlVGQlJUdEZRVU16UWp0SlFVTkZPMDFCUTBVc2JVSkJRVzFDTEVWQlFVVXNSVUZCUlR0RlFVTXpRanRKUVVORk8wMUJRMFVzYlVKQlFXMUNMRVZCUVVVc1JVRkJSVHM3UVVGRk4wSTdPenM3UTBGSlF6dEJRVU5FTzBWQlEwVXNiVUpCUVcxQ0xFVkJRVVU3UlVGRGNrSTdTVUZEUlR0TlFVTkZMR2xDUVVGcFFpeEZRVUZGTEVWQlFVVTdSVUZEZWtJN1NVRkRSVHROUVVORkxHdENRVUZyUWl4RlFVRkZMRVZCUVVVN1JVRkRNVUk3U1VGRFJUdE5RVU5GTEcxQ1FVRnRRaXhGUVVGRkxFVkJRVVU3UlVGRE0wSTdTVUZEUlR0TlFVTkZMRzFDUVVGdFFpeEZRVUZGTEVWQlFVVTdSVUZETTBJN1NVRkRSVHROUVVORkxHMUNRVUZ0UWl4RlFVRkZMRVZCUVVVN08wRkJSVGRDT3pzN08wTkJTVU03UVVGRFJEdEZRVU5GTEcxQ1FVRnRRaXhGUVVGRk8wVkJRM0pDTzBsQlEwVTdUVUZEUlN4bFFVRmxMRVZCUVVVc1JVRkJSVHRGUVVOMlFqdEpRVU5GTzAxQlEwVXNhVUpCUVdsQ0xFVkJRVVVzUlVGQlJUdEZRVU42UWp0SlFVTkZPMDFCUTBVc2EwSkJRV3RDTEVWQlFVVXNSVUZCUlR0RlFVTXhRanRKUVVORk8wMUJRMFVzYlVKQlFXMUNMRVZCUVVVc1JVRkJSVHRGUVVNelFqdEpRVU5GTzAxQlEwVXNiVUpCUVcxQ0xFVkJRVVVzUlVGQlJUczdRVUZGTjBJN096czdRMEZKUXp0QlFVTkVPMFZCUTBVc2JVSkJRVzFDTEVWQlFVVTdSVUZEY2tJN1NVRkRSVHROUVVORkxHMUNRVUZ0UWl4RlFVRkZMRVZCUVVVN1JVRkRNMEk3U1VGRFJUdE5RVU5GTEdWQlFXVXNSVUZCUlN4RlFVRkZPMFZCUTNaQ08wbEJRMFU3VFVGRFJTeHBRa0ZCYVVJc1JVRkJSU3hGUVVGRk8wVkJRM3BDTzBsQlEwVTdUVUZEUlN4clFrRkJhMElzUlVGQlJTeEZRVUZGTzBWQlF6RkNPMGxCUTBVN1RVRkRSU3h0UWtGQmJVSXNSVUZCUlN4RlFVRkZPenRCUVVVM1FqczdPenREUVVsRE8wRkJRMFE3T3p0RlFVZEZMR1ZCUVdVc1JVRkJSVHRGUVVOcVFqdEpRVU5GT3pzN1RVRkhSU3hsUVVGbExFVkJRVVVzUlVGQlJUdEZRVU4yUWp0SlFVTkZPenM3VFVGSFJTeHBRa0ZCYVVJc1JVRkJSU3hGUVVGRk8wVkJRM3BDTzBsQlEwVTdPenROUVVkRkxHbENRVUZwUWl4RlFVRkZMRVZCUVVVN08wRkJSVE5DTzBWQlEwVXNaMEpCUVdkQ08wVkJRMmhDTEdkQ1FVRm5RaXhGUVVGRk8wVkJRMnhDTzBsQlEwVTdUVUZEUlN4blFrRkJaMEk3VFVGRGFFSXNaMEpCUVdkQ0xFVkJRVVVzUlVGQlJUdEZRVU40UWp0SlFVTkZPMDFCUTBVc1owSkJRV2RDTzAxQlEyaENMR2RDUVVGblFpeEZRVUZGTEVWQlFVVTdSVUZEZUVJN1NVRkRSVHROUVVORkxHZENRVUZuUWp0TlFVTm9RaXhuUWtGQlowSXNSVUZCUlN4RlFVRkZPenRCUVVVeFFqdEZRVU5GTEZkQlFWY3NSVUZCUlRzN1FVRkZaanRGUVVORkxGZEJRVmNzUlVGQlJUdEZRVU5pTzBsQlEwVXNZMEZCWXl4RlFVRkZPenRCUVVWd1Fpd3lSVUZCTWtVN1FVRkRNMFU3SzBWQlF5dEZPMEZCUXk5Rk96czdSVUZIUlR0QlFVTkdPMFZCUTBVc2FVSkJRV2xDTzBWQlEycENMRTFCUVUwN1JVRkRUaXc0UWtGQk9FSTdSVUZET1VJc1RVRkJUU3hGUVVGRk96dEJRVVZXT3l0RlFVTXJSVHRCUVVNdlJUczdSVUZGUlR0QlFVTkdPMFZCUTBVc1UwRkJVeXhGUVVGRk96dEJRVVZpT3pzN1JVRkhSVHRCUVVOR08wVkJRMFVzWTBGQll6dEZRVU5rTEdkQ1FVRm5RaXhGUVVGRk96dEJRVVZ3UWpzclJVRkRLMFU3UVVGREwwVTdPenRGUVVkRk8wRkJRMFk3UlVGRFJTd3JRa0ZCSzBJN1ZVRkRka0lzZFVKQlFYVkNPMFZCUXk5Q0xFMUJRVTA3UlVGRFRpeFRRVUZUTzBWQlExUXNUVUZCVFR0RlFVTk9MR2xDUVVGcFFqdEZRVU5xUWl4TlFVRk5MRVZCUVVVN08wRkJSVlk3T3p0RlFVZEZPMEZCUTBZN1JVRkRSU3hwUTBGQmFVTTdSVUZEYWtNc1RVRkJUVHRGUVVOT0xHTkJRV003UlVGRFpDeE5RVUZOTEVWQlFVVTdPMEZCUlZZN0swVkJReXRGTzBGQlF5OUZPenRGUVVWRk8wRkJRMFk3UlVGRFJTdzJRa0ZCTmtJc1JVRkJSVHM3UVVGRmFrTTdPenRGUVVkRk8wRkJRMFk3UlVGRFJTeHRRa0ZCYlVJN1JVRkRia0lzVFVGQlRUdEZRVU5PTERCQ1FVRXdRanRGUVVNeFFpeE5RVUZOTzBWQlEwNHNlVU5CUVhsRE8xVkJRMnBETEdsRFFVRnBRenRGUVVONlF5eE5RVUZOTEVWQlFVVTdPMEZCUlZZN08wVkJSVVU3UVVGRFJqczdSVUZGUlN4dFFrRkJiVUlzUlVGQlJUczdRVUZGZGtJN096dEZRVWRGTzBGQlEwWTdPenRGUVVkRkxHbERRVUZwUXp0RlFVTnFReXhOUVVGTk8wVkJRMDRzWTBGQll6dEZRVU5rTEUxQlFVMHNSVUZCUlRzN1FVRkZWanM3UlVGRlJUdEJRVU5HTzBWQlEwVXNZMEZCWXl4RlFVRkZPenRCUVVWc1FqczdPMFZCUjBVN1FVRkRSanM3UlVGRlJTeGpRVUZqTzBWQlEyUXNZMEZCWXp0RlFVTmtMR3RDUVVGclFqdEZRVU5zUWl4M1FrRkJkMElzUlVGQlJUczdRVUZGTlVJN1JVRkRSU3hsUVVGbExFVkJRVVU3TzBGQlJXNUNPMFZCUTBVc1YwRkJWeXhGUVVGRk96dEJRVVZtT3l0RlFVTXJSVHRCUVVNdlJUczdSVUZGUlR0QlFVTkdPMFZCUTBVc2EwSkJRV3RDTEVWQlFVVTdPMEZCUlhSQ095dEZRVU1yUlR0QlFVTXZSVHM3TzBWQlIwVTdRVUZEUmpzN096czdSVUZMUlN4dlFrRkJiMEk3UlVGRGNFSXNUVUZCVFR0RlFVTk9MR1ZCUVdVN1JVRkRaaXhOUVVGTk8wVkJRMDRzYVVKQlFXbENPMFZCUTJwQ0xFMUJRVTA3UlVGRFRpeFRRVUZUTzBWQlExUXNUVUZCVFN4RlFVRkZPenRCUVVWV096czdSVUZIUlR0QlFVTkdPenRGUVVWRkxFMUJRVTA3UlVGRFRpeHBRa0ZCYVVJc1JVRkJSVHM3UVVGRmNrSTdPenRGUVVkRk8wRkJRMFk3TzBWQlJVVXNUVUZCVFR0RlFVTk9MRzlDUVVGdlFpeEZRVUZGT3p0QlFVVjRRanM3UlVGRlJUdEJRVU5HT3pzN08wVkJTVVVzTUVKQlFUQkNMRVZCUVVVN08wRkJSVGxDT3p0RlFVVkZPMEZCUTBZN096czdSVUZKUlN4clFrRkJhMEk3UlVGRGJFSXNWVUZCVlN4RlFVRkZPenRCUVVWa096dEZRVVZGTzBGQlEwWTdPenM3UlVGSlJTdzRRa0ZCT0VJc1JVRkJSVHM3UVVGRmJFTTdPMFZCUlVVN1FVRkRSanRGUVVORkxEaENRVUU0UWl4RlFVRkZPenRCUVVWc1F6czdPenM3UlVGTFJUdEJRVU5HTzBWQlEwVXNPRUpCUVRoQ08xVkJRM1JDTEhOQ1FVRnpRanRGUVVNNVFpeE5RVUZOTzBWQlEwNHNZMEZCWXp0RlFVTmtMRTFCUVUwN1JVRkRUaXhqUVVGak8wVkJRMlFzVFVGQlRUdEZRVU5PTEdWQlFXVTdSVUZEWml4TlFVRk5PMFZCUTA0c1ZVRkJWVHRGUVVOV0xFMUJRVTA3UlVGRFRpeHRRa0ZCYlVJN1JVRkRia0lzVFVGQlRTeEZRVUZGT3p0QlFVVldPenRGUVVWRk8wRkJRMFk3UlVGRFJTeDNRa0ZCZDBJc1JVRkJSVHM3UVVGRk5VSTdPMFZCUlVVN1FVRkRSanRGUVVORkxHTkJRV01zUlVGQlJUczdRVUZGYkVJN096dEZRVWRGTzBGQlEwWTdPMFZCUlVVc09FSkJRVGhDTzFWQlEzUkNMSE5DUVVGelFqdEZRVU01UWl4TlFVRk5PMFZCUTA0c1ZVRkJWVHRGUVVOV0xFMUJRVTBzUlVGQlJUczdRVUZGVmpzN1JVRkZSVHRCUVVOR096dEZRVVZGTEZsQlFWa3NSVUZCUlRzN1FVRkZhRUk3T3p0RlFVZEZPMEZCUTBZN1JVRkRSU3cyUWtGQk5rSTdSVUZETjBJc1RVRkJUVHRGUVVOT0xHOUNRVUZ2UWp0RlFVTndRaXhOUVVGTkxFVkJRVVU3TzBGQlJWWTdPMFZCUlVVN1FVRkRSanRGUVVORkxIZENRVUYzUWl4RlFVRkZPenRCUVVVMVFqczdPMFZCUjBVN1FVRkRSanRGUVVORkxEQkNRVUV3UWp0RlFVTXhRaXhOUVVGTk8wVkJRMDRzWVVGQllUdEZRVU5pTEUxQlFVMHNSVUZCUlRzN1FVRkZWanNyUlVGREswVTdRVUZETDBVN08wVkJSVVU3UVVGRFJqdEZRVU5GTEdOQlFXTXNSVUZCUlRzN1FVRkZiRUk3TzBWQlJVVTdRVUZEUmp0RlFVTkZMR3RDUVVGclFpeEZRVUZGT3p0QlFVVjBRanNyUlVGREswVTdRVUZETDBVN08wVkJSVVU3UVVGRFJqdEZRVU5GTEdGQlFXRXNSVUZCUlRzN1FVRkZha0k3TzBWQlJVVTdRVUZEUmp0RlFVTkZMR0ZCUVdFc1JVRkJSVHM3UVVGRmFrSTdSVUZEUlN4NVFrRkJlVUk3UlVGRGVrSXNWVUZCVlR0RlFVTldMRmRCUVZjN1JVRkRXQ3hoUVVGaE8wVkJRMklzTWtSQlFUSkVPMFZCUXpORUxHbENRVUZwUWp0RlFVTnFRaXhaUVVGWkxFVkJRVVU3TzBGQlJXaENPMFZCUTBVc1owSkJRV2RDTEVWQlFVVTdPMEZCUlhCQ08wVkJRMFU3T3pzN096dEpRVTFGTEhsQ1FVRjVRaXhGUVVGRk8wVkJRemRDTzBsQlEwVXNiME5CUVc5RExFVkJRVVU3UlVGRGVFTTdTVUZEUlN4dlEwRkJiME1zUlVGQlJUdEZRVU40UXp0SlFVTkZMRzlEUVVGdlF5eEZRVUZGTzBsQlEzUkRPMDFCUTBVc2VVSkJRWGxDTEVWQlFVVTdTVUZETjBJN1RVRkRSU3gzUWtGQmQwSXNSVUZCUlN4RlFVRkZJaXdpWm1sc1pTSTZJbk55WXk5eWIzVjBaWE12WDJ4aGVXOTFkQzV6ZG1Wc2RHVWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2S2x4dWZDMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRYRzU4SUVKeVpXRnJjRzlwYm5SelhHNThMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzFjYmlvdlhHNHZLbHh1ZkMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdFhHNThJRTF2WkhWc1lYSWdVMk5oYkdVZ1UybDZaWE5jYm53dExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExWeHVLaTljYmk4cVhHNThMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzFjYm53Z1VtOXZkQ0JGYkdWdFpXNTBjMXh1ZkMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdFhHNHFMMXh1T25KdmIzUWdlMXh1SUNCbWIyNTBMWE5wZW1VNklERTJjSGc3SUgxY2JseHVhSFJ0YkNCN1hHNGdJR1p2Ym5RdGMybDZaVG9nTVRBd0pUdGNiaUFnYkdsdVpTMW9aV2xuYUhRNklERXVNanNnZlZ4dUlDQkFiV1ZrYVdFZ0tHMXBiaTEzYVdSMGFEb2dORGd3Y0hncElIdGNiaUFnSUNCb2RHMXNJSHRjYmlBZ0lDQWdJR3hwYm1VdGFHVnBaMmgwT2lBeExqTTdJSDBnZlZ4dUlDQkFiV1ZrYVdFZ0tHMXBiaTEzYVdSMGFEb2dOelkzY0hncElIdGNiaUFnSUNCb2RHMXNJSHRjYmlBZ0lDQWdJR3hwYm1VdGFHVnBaMmgwT2lBeExqTTdJSDBnZlZ4dVhHNHZLbHh1ZkMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdFhHNThJRWd4WEc1OExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMWNiaW92WEc1b01TQjdYRzRnSUdadmJuUXRjMmw2WlRvZ1l5QTBMak55WlcwN1hHNGdJRzFoY21kcGJqb2dNQzQzY21WdE95QjlYRzRnSUVCdFpXUnBZU0FvYldsdUxYZHBaSFJvT2lBME9EQndlQ2tnZTF4dUlDQWdJR2d4SUh0Y2JpQWdJQ0FnSUdadmJuUXRjMmw2WlRvZ01pNHdOelJ5WlcwN0lIMGdmVnh1SUNCQWJXVmthV0VnS0cxcGJpMTNhV1IwYURvZ056WTNjSGdwSUh0Y2JpQWdJQ0JvTVNCN1hHNGdJQ0FnSUNCbWIyNTBMWE5wZW1VNklESXVORGc0Y21WdE8xeHVJQ0FnSUNBZ2JXRnlaMmx1T2lBeExqUnlaVzA3SUgwZ2ZWeHVJQ0JBYldWa2FXRWdLRzFwYmkxM2FXUjBhRG9nTVRBeU0zQjRLU0I3WEc0Z0lDQWdhREVnZTF4dUlDQWdJQ0FnWm05dWRDMXphWHBsT2lBeUxqazRObkpsYlRzZ2ZTQjlYRzRnSUVCdFpXUnBZU0FvYldsdUxYZHBaSFJvT2lBeE1qYzVjSGdwSUh0Y2JpQWdJQ0JvTVNCN1hHNGdJQ0FnSUNCbWIyNTBMWE5wZW1VNklETXVOVGd6Y21WdE8xeHVJQ0FnSUNBZ2JXRnlaMmx1T2lBeUxqRnlaVzA3SUgwZ2ZWeHVJQ0JBYldWa2FXRWdLRzFwYmkxM2FXUjBhRG9nTVRVNU9YQjRLU0I3WEc0Z0lDQWdhREVnZTF4dUlDQWdJQ0FnWm05dWRDMXphWHBsT2lBMUxqRTJjbVZ0T3lCOUlIMWNibHh1THlwY2Jud3RMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMVnh1ZkNCSU1pQmNibnd0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFZ4dUtpOWNibWd5SUh0Y2JpQWdabTl1ZEMxemFYcGxPaUF4Y21WdE95QjlYRzRnSUVCdFpXUnBZU0FvYldsdUxYZHBaSFJvT2lBME9EQndlQ2tnZTF4dUlDQWdJR2d5SUh0Y2JpQWdJQ0FnSUdadmJuUXRjMmw2WlRvZ01TNDNNamh5WlcwN0lIMGdmVnh1SUNCQWJXVmthV0VnS0cxcGJpMTNhV1IwYURvZ056WTNjSGdwSUh0Y2JpQWdJQ0JvTWlCN1hHNGdJQ0FnSUNCbWIyNTBMWE5wZW1VNklESXVNRGMwY21WdE95QjlJSDFjYmlBZ1FHMWxaR2xoSUNodGFXNHRkMmxrZEdnNklERXdNak53ZUNrZ2UxeHVJQ0FnSUdneUlIdGNiaUFnSUNBZ0lHWnZiblF0YzJsNlpUb2dNaTQwT0RoeVpXMDdJSDBnZlZ4dUlDQkFiV1ZrYVdFZ0tHMXBiaTEzYVdSMGFEb2dNVEkzT1hCNEtTQjdYRzRnSUNBZ2FESWdlMXh1SUNBZ0lDQWdabTl1ZEMxemFYcGxPaUF5TGprNE5uSmxiVHNnZlNCOVhHNGdJRUJ0WldScFlTQW9iV2x1TFhkcFpIUm9PaUF4TlRrNWNIZ3BJSHRjYmlBZ0lDQm9NaUI3WEc0Z0lDQWdJQ0JtYjI1MExYTnBlbVU2SURRdU0zSmxiVHNnZlNCOVhHNWNiaThxWEc1OExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMWNibndnU0ROY2Jud3RMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMVnh1S2k5Y2JtZ3pJSHRjYmlBZ1ptOXVkQzF6YVhwbE9pQXdMamd6TTNKbGJUc2dmVnh1SUNCQWJXVmthV0VnS0cxcGJpMTNhV1IwYURvZ05EZ3djSGdwSUh0Y2JpQWdJQ0JvTXlCN1hHNGdJQ0FnSUNCbWIyNTBMWE5wZW1VNklERXVORFJ5WlcwN0lIMGdmVnh1SUNCQWJXVmthV0VnS0cxcGJpMTNhV1IwYURvZ056WTNjSGdwSUh0Y2JpQWdJQ0JvTXlCN1hHNGdJQ0FnSUNCbWIyNTBMWE5wZW1VNklERXVOekk0Y21WdE95QjlJSDFjYmlBZ1FHMWxaR2xoSUNodGFXNHRkMmxrZEdnNklERXdNak53ZUNrZ2UxeHVJQ0FnSUdneklIdGNiaUFnSUNBZ0lHWnZiblF0YzJsNlpUb2dNaTR3TnpSeVpXMDdJSDBnZlZ4dUlDQkFiV1ZrYVdFZ0tHMXBiaTEzYVdSMGFEb2dNVEkzT1hCNEtTQjdYRzRnSUNBZ2FETWdlMXh1SUNBZ0lDQWdabTl1ZEMxemFYcGxPaUF5TGpRNE9ISmxiVHNnZlNCOVhHNGdJRUJ0WldScFlTQW9iV2x1TFhkcFpIUm9PaUF4TlRrNWNIZ3BJSHRjYmlBZ0lDQm9NeUI3WEc0Z0lDQWdJQ0JtYjI1MExYTnBlbVU2SURNdU5UZ3pjbVZ0T3lCOUlIMWNibHh1THlwY2Jud3RMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMVnh1ZkNCSU5GeHVmQzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0WEc0cUwxeHVhRFFnZTF4dUlDQm1iMjUwTFhOcGVtVTZJREF1TmprMGNtVnRPeUI5WEc0Z0lFQnRaV1JwWVNBb2JXbHVMWGRwWkhSb09pQTBPREJ3ZUNrZ2UxeHVJQ0FnSUdnMElIdGNiaUFnSUNBZ0lHWnZiblF0YzJsNlpUb2dNUzR5Y21WdE95QjlJSDFjYmlBZ1FHMWxaR2xoSUNodGFXNHRkMmxrZEdnNklEYzJOM0I0S1NCN1hHNGdJQ0FnYURRZ2UxeHVJQ0FnSUNBZ1ptOXVkQzF6YVhwbE9pQXhMalEwY21WdE95QjlJSDFjYmlBZ1FHMWxaR2xoSUNodGFXNHRkMmxrZEdnNklERXdNak53ZUNrZ2UxeHVJQ0FnSUdnMElIdGNiaUFnSUNBZ0lHWnZiblF0YzJsNlpUb2dNUzQzTWpoeVpXMDdJSDBnZlZ4dUlDQkFiV1ZrYVdFZ0tHMXBiaTEzYVdSMGFEb2dNVEkzT1hCNEtTQjdYRzRnSUNBZ2FEUWdlMXh1SUNBZ0lDQWdabTl1ZEMxemFYcGxPaUF5TGpBM05ISmxiVHNnZlNCOVhHNGdJRUJ0WldScFlTQW9iV2x1TFhkcFpIUm9PaUF4TlRrNWNIZ3BJSHRjYmlBZ0lDQm9OQ0I3WEc0Z0lDQWdJQ0JtYjI1MExYTnBlbVU2SURJdU9UZzJjbVZ0T3lCOUlIMWNibHh1THlwY2Jud3RMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMVnh1ZkNCSU5WeHVmQzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0WEc0cUwxeHVhRFVnZTF4dUlDQm1iMjUwTFhOcGVtVTZJREF1TmprMGNtVnRPeUI5WEc0Z0lFQnRaV1JwWVNBb2JXbHVMWGRwWkhSb09pQTBPREJ3ZUNrZ2UxeHVJQ0FnSUdnMUlIdGNiaUFnSUNBZ0lHWnZiblF0YzJsNlpUb2dNWEpsYlRzZ2ZTQjlYRzRnSUVCdFpXUnBZU0FvYldsdUxYZHBaSFJvT2lBM05qZHdlQ2tnZTF4dUlDQWdJR2cxSUh0Y2JpQWdJQ0FnSUdadmJuUXRjMmw2WlRvZ01TNHljbVZ0T3lCOUlIMWNiaUFnUUcxbFpHbGhJQ2h0YVc0dGQybGtkR2c2SURFd01qTndlQ2tnZTF4dUlDQWdJR2cxSUh0Y2JpQWdJQ0FnSUdadmJuUXRjMmw2WlRvZ01TNDBOSEpsYlRzZ2ZTQjlYRzRnSUVCdFpXUnBZU0FvYldsdUxYZHBaSFJvT2lBeE1qYzVjSGdwSUh0Y2JpQWdJQ0JvTlNCN1hHNGdJQ0FnSUNCbWIyNTBMWE5wZW1VNklERXVOekk0Y21WdE95QjlJSDFjYmlBZ1FHMWxaR2xoSUNodGFXNHRkMmxrZEdnNklERTFPVGx3ZUNrZ2UxeHVJQ0FnSUdnMUlIdGNiaUFnSUNBZ0lHWnZiblF0YzJsNlpUb2dNaTQwT0RoeVpXMDdJSDBnZlZ4dVhHNHZLbHh1ZkMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdFhHNThJRWcyWEc1OExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMWNiaW92WEc1b05pQjdYRzRnSUdadmJuUXRjMmw2WlRvZ01DNDJPVFJ5WlcwN0lIMWNiaUFnUUcxbFpHbGhJQ2h0YVc0dGQybGtkR2c2SURRNE1IQjRLU0I3WEc0Z0lDQWdhRFlnZTF4dUlDQWdJQ0FnWm05dWRDMXphWHBsT2lBd0xqZ3pNM0psYlRzZ2ZTQjlYRzRnSUVCdFpXUnBZU0FvYldsdUxYZHBaSFJvT2lBM05qZHdlQ2tnZTF4dUlDQWdJR2cySUh0Y2JpQWdJQ0FnSUdadmJuUXRjMmw2WlRvZ01YSmxiVHNnZlNCOVhHNGdJRUJ0WldScFlTQW9iV2x1TFhkcFpIUm9PaUF4TURJemNIZ3BJSHRjYmlBZ0lDQm9OaUI3WEc0Z0lDQWdJQ0JtYjI1MExYTnBlbVU2SURFdU1uSmxiVHNnZlNCOVhHNGdJRUJ0WldScFlTQW9iV2x1TFhkcFpIUm9PaUF4TWpjNWNIZ3BJSHRjYmlBZ0lDQm9OaUI3WEc0Z0lDQWdJQ0JtYjI1MExYTnBlbVU2SURFdU5EUnlaVzA3SUgwZ2ZWeHVJQ0JBYldWa2FXRWdLRzFwYmkxM2FXUjBhRG9nTVRVNU9YQjRLU0I3WEc0Z0lDQWdhRFlnZTF4dUlDQWdJQ0FnWm05dWRDMXphWHBsT2lBeUxqQTNOSEpsYlRzZ2ZTQjlYRzVjYmk4cVhHNThMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzFjYm53Z1JXeGxiV1Z1ZEhNZ0ppQkRiMjF3YjI1bGJuUnpYRzU4TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMxY2Jpb3ZYRzVoTEZ4dWJHa3NYRzV3SUh0Y2JpQWdabTl1ZEMxemFYcGxPaUF4Y21WdE95QjlYRzRnSUVCdFpXUnBZU0FvYldsdUxYZHBaSFJvT2lBME9EQndlQ2tnZTF4dUlDQWdJR0VzWEc0Z0lDQWdiR2tzWEc0Z0lDQWdjQ0I3WEc0Z0lDQWdJQ0JtYjI1MExYTnBlbVU2SURGeVpXMDdJSDBnZlZ4dUlDQkFiV1ZrYVdFZ0tHMXBiaTEzYVdSMGFEb2dOelkzY0hncElIdGNiaUFnSUNCaExGeHVJQ0FnSUd4cExGeHVJQ0FnSUhBZ2UxeHVJQ0FnSUNBZ1ptOXVkQzF6YVhwbE9pQXhMakp5WlcwN0lIMGdmVnh1SUNCQWJXVmthV0VnS0cxcGJpMTNhV1IwYURvZ01UQXlNM0I0S1NCN1hHNGdJQ0FnWVN4Y2JpQWdJQ0JzYVN4Y2JpQWdJQ0J3SUh0Y2JpQWdJQ0FnSUdadmJuUXRjMmw2WlRvZ01TNHljbVZ0T3lCOUlIMWNibHh1Y0NCN1hHNGdJR3hwYm1VdGFHVnBaMmgwT2lBeExqTTdYRzRnSUcxaGVDMTNhV1IwYURvZ016QnlaVzA3SUgxY2JpQWdRRzFsWkdsaElDaHRhVzR0ZDJsa2RHZzZJRGMyTjNCNEtTQjdYRzRnSUNBZ2NDQjdYRzRnSUNBZ0lDQnNhVzVsTFdobGFXZG9kRG9nTVM0ME8xeHVJQ0FnSUNBZ2JXRjRMWGRwWkhSb09pQXpNSEpsYlRzZ2ZTQjlYRzRnSUVCdFpXUnBZU0FvYldsdUxYZHBaSFJvT2lBeE1ESXpjSGdwSUh0Y2JpQWdJQ0J3SUh0Y2JpQWdJQ0FnSUd4cGJtVXRhR1ZwWjJoME9pQXhMalE3WEc0Z0lDQWdJQ0J0WVhndGQybGtkR2c2SURRd2NtVnRPeUI5SUgxY2JpQWdRRzFsWkdsaElDaHRhVzR0ZDJsa2RHZzZJREV5Tnpsd2VDa2dlMXh1SUNBZ0lIQWdlMXh1SUNBZ0lDQWdiR2x1WlMxb1pXbG5hSFE2SURFdU5EdGNiaUFnSUNBZ0lHMWhlQzEzYVdSMGFEb2dOVEJ5WlcwN0lIMGdmVnh1WEc0dWRHVjRkQzFzYVdkb2RHVnlJSHRjYmlBZ1kyOXNiM0k2SUNNMk5qWTdJSDFjYmx4dVlTQjdYRzRnSUdOdmJHOXlPaUJpYkhWbE95QjlYRzRnSUdFNmFHOTJaWElnZTF4dUlDQWdJR052Ykc5eU9pQWpOR0kwWW1aa095QjlYRzVjYmk4cUlTQnViM0p0WVd4cGVtVXVZM056SUhZNExqQXVNQ0I4SUUxSlZDQk1hV05sYm5ObElId2daMmwwYUhWaUxtTnZiUzl1WldOdmJHRnpMMjV2Y20xaGJHbDZaUzVqYzNNZ0tpOWNiaThxSUVSdlkzVnRaVzUwWEc0Z0lDQTlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQU0FxTDF4dUx5b3FYRzRnS2lBeExpQkRiM0p5WldOMElIUm9aU0JzYVc1bElHaGxhV2RvZENCcGJpQmhiR3dnWW5KdmQzTmxjbk11WEc0Z0tpQXlMaUJRY21WMlpXNTBJR0ZrYW5WemRHMWxiblJ6SUc5bUlHWnZiblFnYzJsNlpTQmhablJsY2lCdmNtbGxiblJoZEdsdmJpQmphR0Z1WjJWeklHbHVJR2xQVXk1Y2JpQXFMMXh1YUhSdGJDQjdYRzRnSUd4cGJtVXRhR1ZwWjJoME9pQXhMakUxTzF4dUlDQXZLaUF4SUNvdlhHNGdJQzEzWldKcmFYUXRkR1Y0ZEMxemFYcGxMV0ZrYW5WemREb2dNVEF3SlR0Y2JpQWdMeW9nTWlBcUx5QjlYRzVjYmk4cUlGTmxZM1JwYjI1elhHNGdJQ0E5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFNBcUwxeHVMeW9xWEc0Z0tpQlNaVzF2ZG1VZ2RHaGxJRzFoY21kcGJpQnBiaUJoYkd3Z1luSnZkM05sY25NdVhHNGdLaTljYm1KdlpIa2dlMXh1SUNCdFlYSm5hVzQ2SURBN0lIMWNibHh1THlvcVhHNGdLaUJEYjNKeVpXTjBJSFJvWlNCbWIyNTBJSE5wZW1VZ1lXNWtJRzFoY21kcGJpQnZiaUJnYURGZ0lHVnNaVzFsYm5SeklIZHBkR2hwYmlCZ2MyVmpkR2x2Ym1BZ1lXNWtYRzRnS2lCZ1lYSjBhV05zWldBZ1kyOXVkR1Y0ZEhNZ2FXNGdRMmh5YjIxbExDQkdhWEpsWm05NExDQmhibVFnVTJGbVlYSnBMbHh1SUNvdlhHNW9NU0I3WEc0Z0lHWnZiblF0YzJsNlpUb2dNbVZ0TzF4dUlDQnRZWEpuYVc0NklEQXVOamRsYlNBd095QjlYRzVjYmk4cUlFZHliM1Z3YVc1bklHTnZiblJsYm5SY2JpQWdJRDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5SUNvdlhHNHZLaXBjYmlBcUlERXVJRUZrWkNCMGFHVWdZMjl5Y21WamRDQmliM2dnYzJsNmFXNW5JR2x1SUVacGNtVm1iM2d1WEc0Z0tpQXlMaUJUYUc5M0lIUm9aU0J2ZG1WeVpteHZkeUJwYmlCRlpHZGxJR0Z1WkNCSlJTNWNiaUFxTDF4dWFISWdlMXh1SUNBdGQyVmlhMmwwTFdKdmVDMXphWHBwYm1jNklHTnZiblJsYm5RdFltOTRPMXh1SUNBZ0lDQWdJQ0FnSUdKdmVDMXphWHBwYm1jNklHTnZiblJsYm5RdFltOTRPMXh1SUNBdktpQXhJQ292WEc0Z0lHaGxhV2RvZERvZ01EdGNiaUFnTHlvZ01TQXFMMXh1SUNCdmRtVnlabXh2ZHpvZ2RtbHphV0pzWlR0Y2JpQWdMeW9nTWlBcUx5QjlYRzVjYmk4cUtseHVJQ29nTVM0Z1EyOXljbVZqZENCMGFHVWdhVzVvWlhKcGRHRnVZMlVnWVc1a0lITmpZV3hwYm1jZ2IyWWdabTl1ZENCemFYcGxJR2x1SUdGc2JDQmljbTkzYzJWeWN5NWNiaUFxSURJdUlFTnZjbkpsWTNRZ2RHaGxJRzlrWkNCZ1pXMWdJR1p2Ym5RZ2MybDZhVzVuSUdsdUlHRnNiQ0JpY205M2MyVnljeTVjYmlBcUwxeHVjSEpsSUh0Y2JpQWdabTl1ZEMxbVlXMXBiSGs2SUcxdmJtOXpjR0ZqWlN3Z2JXOXViM053WVdObE8xeHVJQ0F2S2lBeElDb3ZYRzRnSUdadmJuUXRjMmw2WlRvZ01XVnRPMXh1SUNBdktpQXlJQ292SUgxY2JseHVMeW9nVkdWNGRDMXNaWFpsYkNCelpXMWhiblJwWTNOY2JpQWdJRDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5SUNvdlhHNHZLaXBjYmlBcUlGSmxiVzkyWlNCMGFHVWdaM0poZVNCaVlXTnJaM0p2ZFc1a0lHOXVJR0ZqZEdsMlpTQnNhVzVyY3lCcGJpQkpSU0F4TUM1Y2JpQXFMMXh1WVNCN1hHNGdJR0poWTJ0bmNtOTFibVF0WTI5c2IzSTZJSFJ5WVc1emNHRnlaVzUwT3lCOVhHNWNiaThxS2x4dUlDb2dNUzRnVW1WdGIzWmxJSFJvWlNCaWIzUjBiMjBnWW05eVpHVnlJR2x1SUVOb2NtOXRaU0ExTnkxY2JpQXFJREl1SUVGa1pDQjBhR1VnWTI5eWNtVmpkQ0IwWlhoMElHUmxZMjl5WVhScGIyNGdhVzRnUTJoeWIyMWxMQ0JGWkdkbExDQkpSU3dnVDNCbGNtRXNJR0Z1WkNCVFlXWmhjbWt1WEc0Z0tpOWNibUZpWW5KYmRHbDBiR1ZkSUh0Y2JpQWdZbTl5WkdWeUxXSnZkSFJ2YlRvZ2JtOXVaVHRjYmlBZ0x5b2dNU0FxTDF4dUlDQjBaWGgwTFdSbFkyOXlZWFJwYjI0NklIVnVaR1Z5YkdsdVpUdGNiaUFnTHlvZ01pQXFMMXh1SUNBdGQyVmlhMmwwTFhSbGVIUXRaR1ZqYjNKaGRHbHZiam9nZFc1a1pYSnNhVzVsSUdSdmRIUmxaRHRjYmlBZ0lDQWdJQ0FnSUNCMFpYaDBMV1JsWTI5eVlYUnBiMjQ2SUhWdVpHVnliR2x1WlNCa2IzUjBaV1E3WEc0Z0lDOHFJRElnS2k4Z2ZWeHVYRzR2S2lwY2JpQXFJRUZrWkNCMGFHVWdZMjl5Y21WamRDQm1iMjUwSUhkbGFXZG9kQ0JwYmlCRGFISnZiV1VzSUVWa1oyVXNJR0Z1WkNCVFlXWmhjbWt1WEc0Z0tpOWNibUlzWEc1emRISnZibWNnZTF4dUlDQm1iMjUwTFhkbGFXZG9kRG9nWW05c1pHVnlPeUI5WEc1Y2JpOHFLbHh1SUNvZ01TNGdRMjl5Y21WamRDQjBhR1VnYVc1b1pYSnBkR0Z1WTJVZ1lXNWtJSE5qWVd4cGJtY2diMllnWm05dWRDQnphWHBsSUdsdUlHRnNiQ0JpY205M2MyVnljeTVjYmlBcUlESXVJRU52Y25KbFkzUWdkR2hsSUc5a1pDQmdaVzFnSUdadmJuUWdjMmw2YVc1bklHbHVJR0ZzYkNCaWNtOTNjMlZ5Y3k1Y2JpQXFMMXh1WTI5a1pTeGNibXRpWkN4Y2JuTmhiWEFnZTF4dUlDQm1iMjUwTFdaaGJXbHNlVG9nYlc5dWIzTndZV05sTENCdGIyNXZjM0JoWTJVN1hHNGdJQzhxSURFZ0tpOWNiaUFnWm05dWRDMXphWHBsT2lBeFpXMDdYRzRnSUM4cUlESWdLaThnZlZ4dVhHNHZLaXBjYmlBcUlFRmtaQ0IwYUdVZ1kyOXljbVZqZENCbWIyNTBJSE5wZW1VZ2FXNGdZV3hzSUdKeWIzZHpaWEp6TGx4dUlDb3ZYRzV6YldGc2JDQjdYRzRnSUdadmJuUXRjMmw2WlRvZ09EQWxPeUI5WEc1Y2JpOHFLbHh1SUNvZ1VISmxkbVZ1ZENCZ2MzVmlZQ0JoYm1RZ1lITjFjR0FnWld4bGJXVnVkSE1nWm5KdmJTQmhabVpsWTNScGJtY2dkR2hsSUd4cGJtVWdhR1ZwWjJoMElHbHVYRzRnS2lCaGJHd2dZbkp2ZDNObGNuTXVYRzRnS2k5Y2JuTjFZaXhjYm5OMWNDQjdYRzRnSUdadmJuUXRjMmw2WlRvZ056VWxPMXh1SUNCc2FXNWxMV2hsYVdkb2REb2dNRHRjYmlBZ2NHOXphWFJwYjI0NklISmxiR0YwYVhabE8xeHVJQ0IyWlhKMGFXTmhiQzFoYkdsbmJqb2dZbUZ6Wld4cGJtVTdJSDFjYmx4dWMzVmlJSHRjYmlBZ1ltOTBkRzl0T2lBdE1DNHlOV1Z0T3lCOVhHNWNibk4xY0NCN1hHNGdJSFJ2Y0RvZ0xUQXVOV1Z0T3lCOVhHNWNiaThxSUVWdFltVmtaR1ZrSUdOdmJuUmxiblJjYmlBZ0lEMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlJQ292WEc0dktpcGNiaUFxSUZKbGJXOTJaU0IwYUdVZ1ltOXlaR1Z5SUc5dUlHbHRZV2RsY3lCcGJuTnBaR1VnYkdsdWEzTWdhVzRnU1VVZ01UQXVYRzRnS2k5Y2JtbHRaeUI3WEc0Z0lHSnZjbVJsY2kxemRIbHNaVG9nYm05dVpUc2dmVnh1WEc0dktpQkdiM0p0YzF4dUlDQWdQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDBnS2k5Y2JpOHFLbHh1SUNvZ01TNGdRMmhoYm1kbElIUm9aU0JtYjI1MElITjBlV3hsY3lCcGJpQmhiR3dnWW5KdmQzTmxjbk11WEc0Z0tpQXlMaUJTWlcxdmRtVWdkR2hsSUcxaGNtZHBiaUJwYmlCR2FYSmxabTk0SUdGdVpDQlRZV1poY21rdVhHNGdLaTljYm1KMWRIUnZiaXhjYm1sdWNIVjBMRnh1YjNCMFozSnZkWEFzWEc1elpXeGxZM1FzWEc1MFpYaDBZWEpsWVNCN1hHNGdJR1p2Ym5RdFptRnRhV3g1T2lCcGJtaGxjbWwwTzF4dUlDQXZLaUF4SUNvdlhHNGdJR1p2Ym5RdGMybDZaVG9nTVRBd0pUdGNiaUFnTHlvZ01TQXFMMXh1SUNCc2FXNWxMV2hsYVdkb2REb2dNUzR4TlR0Y2JpQWdMeW9nTVNBcUwxeHVJQ0J0WVhKbmFXNDZJREE3WEc0Z0lDOHFJRElnS2k4Z2ZWeHVYRzR2S2lwY2JpQXFJRk5vYjNjZ2RHaGxJRzkyWlhKbWJHOTNJR2x1SUVsRkxseHVJQ29nTVM0Z1UyaHZkeUIwYUdVZ2IzWmxjbVpzYjNjZ2FXNGdSV1JuWlM1Y2JpQXFMMXh1WW5WMGRHOXVMRnh1YVc1d2RYUWdlMXh1SUNBdktpQXhJQ292WEc0Z0lHOTJaWEptYkc5M09pQjJhWE5wWW14bE95QjlYRzVjYmk4cUtseHVJQ29nVW1WdGIzWmxJSFJvWlNCcGJtaGxjbWwwWVc1alpTQnZaaUIwWlhoMElIUnlZVzV6Wm05eWJTQnBiaUJGWkdkbExDQkdhWEpsWm05NExDQmhibVFnU1VVdVhHNGdLaUF4TGlCU1pXMXZkbVVnZEdobElHbHVhR1Z5YVhSaGJtTmxJRzltSUhSbGVIUWdkSEpoYm5ObWIzSnRJR2x1SUVacGNtVm1iM2d1WEc0Z0tpOWNibUoxZEhSdmJpeGNibk5sYkdWamRDQjdYRzRnSUM4cUlERWdLaTljYmlBZ2RHVjRkQzEwY21GdWMyWnZjbTA2SUc1dmJtVTdJSDFjYmx4dUx5b3FYRzRnS2lCRGIzSnlaV04wSUhSb1pTQnBibUZpYVd4cGRIa2dkRzhnYzNSNWJHVWdZMnhwWTJ0aFlteGxJSFI1Y0dWeklHbHVJR2xQVXlCaGJtUWdVMkZtWVhKcExseHVJQ292WEc1aWRYUjBiMjRzWEc1YmRIbHdaVDFjSW1KMWRIUnZibHdpWFN4Y2JsdDBlWEJsUFZ3aWNtVnpaWFJjSWwwc1hHNWJkSGx3WlQxY0luTjFZbTFwZEZ3aVhTQjdYRzRnSUMxM1pXSnJhWFF0WVhCd1pXRnlZVzVqWlRvZ1luVjBkRzl1T3lCOVhHNWNiaThxS2x4dUlDb2dVbVZ0YjNabElIUm9aU0JwYm01bGNpQmliM0prWlhJZ1lXNWtJSEJoWkdScGJtY2dhVzRnUm1seVpXWnZlQzVjYmlBcUwxeHVZblYwZEc5dU9qb3RiVzk2TFdadlkzVnpMV2x1Ym1WeUxGeHVXM1I1Y0dVOVhDSmlkWFIwYjI1Y0lsMDZPaTF0YjNvdFptOWpkWE10YVc1dVpYSXNYRzViZEhsd1pUMWNJbkpsYzJWMFhDSmRPam90Ylc5NkxXWnZZM1Z6TFdsdWJtVnlMRnh1VzNSNWNHVTlYQ0p6ZFdKdGFYUmNJbDA2T2kxdGIzb3RabTlqZFhNdGFXNXVaWElnZTF4dUlDQmliM0prWlhJdGMzUjViR1U2SUc1dmJtVTdYRzRnSUhCaFpHUnBibWM2SURBN0lIMWNibHh1THlvcVhHNGdLaUJTWlhOMGIzSmxJSFJvWlNCbWIyTjFjeUJ6ZEhsc1pYTWdkVzV6WlhRZ1lua2dkR2hsSUhCeVpYWnBiM1Z6SUhKMWJHVXVYRzRnS2k5Y2JtSjFkSFJ2YmpvdGJXOTZMV1p2WTNWemNtbHVaeXhjYmx0MGVYQmxQVndpWW5WMGRHOXVYQ0pkT2kxdGIzb3RabTlqZFhOeWFXNW5MRnh1VzNSNWNHVTlYQ0p5WlhObGRGd2lYVG90Ylc5NkxXWnZZM1Z6Y21sdVp5eGNibHQwZVhCbFBWd2ljM1ZpYldsMFhDSmRPaTF0YjNvdFptOWpkWE55YVc1bklIdGNiaUFnYjNWMGJHbHVaVG9nTVhCNElHUnZkSFJsWkNCQ2RYUjBiMjVVWlhoME95QjlYRzVjYmk4cUtseHVJQ29nUTI5eWNtVmpkQ0IwYUdVZ2NHRmtaR2x1WnlCcGJpQkdhWEpsWm05NExseHVJQ292WEc1bWFXVnNaSE5sZENCN1hHNGdJSEJoWkdScGJtYzZJREF1TXpWbGJTQXdMamMxWlcwZ01DNDJNalZsYlRzZ2ZWeHVYRzR2S2lwY2JpQXFJREV1SUVOdmNuSmxZM1FnZEdobElIUmxlSFFnZDNKaGNIQnBibWNnYVc0Z1JXUm5aU0JoYm1RZ1NVVXVYRzRnS2lBeUxpQkRiM0p5WldOMElIUm9aU0JqYjJ4dmNpQnBibWhsY21sMFlXNWpaU0JtY205dElHQm1hV1ZzWkhObGRHQWdaV3hsYldWdWRITWdhVzRnU1VVdVhHNGdLaUF6TGlCU1pXMXZkbVVnZEdobElIQmhaR1JwYm1jZ2MyOGdaR1YyWld4dmNHVnljeUJoY21VZ2JtOTBJR05oZFdkb2RDQnZkWFFnZDJobGJpQjBhR1Y1SUhwbGNtOGdiM1YwWEc0Z0tpQWdJQ0JnWm1sbGJHUnpaWFJnSUdWc1pXMWxiblJ6SUdsdUlHRnNiQ0JpY205M2MyVnljeTVjYmlBcUwxeHViR1ZuWlc1a0lIdGNiaUFnTFhkbFltdHBkQzFpYjNndGMybDZhVzVuT2lCaWIzSmtaWEl0WW05NE8xeHVJQ0FnSUNBZ0lDQWdJR0p2ZUMxemFYcHBibWM2SUdKdmNtUmxjaTFpYjNnN1hHNGdJQzhxSURFZ0tpOWNiaUFnWTI5c2IzSTZJR2x1YUdWeWFYUTdYRzRnSUM4cUlESWdLaTljYmlBZ1pHbHpjR3hoZVRvZ2RHRmliR1U3WEc0Z0lDOHFJREVnS2k5Y2JpQWdiV0Y0TFhkcFpIUm9PaUF4TURBbE8xeHVJQ0F2S2lBeElDb3ZYRzRnSUhCaFpHUnBibWM2SURBN1hHNGdJQzhxSURNZ0tpOWNiaUFnZDJocGRHVXRjM0JoWTJVNklHNXZjbTFoYkR0Y2JpQWdMeW9nTVNBcUx5QjlYRzVjYmk4cUtseHVJQ29nUVdSa0lIUm9aU0JqYjNKeVpXTjBJSFpsY25ScFkyRnNJR0ZzYVdkdWJXVnVkQ0JwYmlCRGFISnZiV1VzSUVacGNtVm1iM2dzSUdGdVpDQlBjR1Z5WVM1Y2JpQXFMMXh1Y0hKdlozSmxjM01nZTF4dUlDQjJaWEowYVdOaGJDMWhiR2xuYmpvZ1ltRnpaV3hwYm1VN0lIMWNibHh1THlvcVhHNGdLaUJTWlcxdmRtVWdkR2hsSUdSbFptRjFiSFFnZG1WeWRHbGpZV3dnYzJOeWIyeHNZbUZ5SUdsdUlFbEZJREV3S3k1Y2JpQXFMMXh1ZEdWNGRHRnlaV0VnZTF4dUlDQnZkbVZ5Wm14dmR6b2dZWFYwYnpzZ2ZWeHVYRzR2S2lwY2JpQXFJREV1SUVGa1pDQjBhR1VnWTI5eWNtVmpkQ0JpYjNnZ2MybDZhVzVuSUdsdUlFbEZJREV3TGx4dUlDb2dNaTRnVW1WdGIzWmxJSFJvWlNCd1lXUmthVzVuSUdsdUlFbEZJREV3TGx4dUlDb3ZYRzViZEhsd1pUMWNJbU5vWldOclltOTRYQ0pkTEZ4dVczUjVjR1U5WENKeVlXUnBiMXdpWFNCN1hHNGdJQzEzWldKcmFYUXRZbTk0TFhOcGVtbHVaem9nWW05eVpHVnlMV0p2ZUR0Y2JpQWdJQ0FnSUNBZ0lDQmliM2d0YzJsNmFXNW5PaUJpYjNKa1pYSXRZbTk0TzF4dUlDQXZLaUF4SUNvdlhHNGdJSEJoWkdScGJtYzZJREE3WEc0Z0lDOHFJRElnS2k4Z2ZWeHVYRzR2S2lwY2JpQXFJRU52Y25KbFkzUWdkR2hsSUdOMWNuTnZjaUJ6ZEhsc1pTQnZaaUJwYm1OeVpXMWxiblFnWVc1a0lHUmxZM0psYldWdWRDQmlkWFIwYjI1eklHbHVJRU5vY205dFpTNWNiaUFxTDF4dVczUjVjR1U5WENKdWRXMWlaWEpjSWwwNk9pMTNaV0pyYVhRdGFXNXVaWEl0YzNCcGJpMWlkWFIwYjI0c1hHNWJkSGx3WlQxY0ltNTFiV0psY2x3aVhUbzZMWGRsWW10cGRDMXZkWFJsY2kxemNHbHVMV0oxZEhSdmJpQjdYRzRnSUdobGFXZG9kRG9nWVhWMGJ6c2dmVnh1WEc0dktpcGNiaUFxSURFdUlFTnZjbkpsWTNRZ2RHaGxJRzlrWkNCaGNIQmxZWEpoYm1ObElHbHVJRU5vY205dFpTQmhibVFnVTJGbVlYSnBMbHh1SUNvZ01pNGdRMjl5Y21WamRDQjBhR1VnYjNWMGJHbHVaU0J6ZEhsc1pTQnBiaUJUWVdaaGNta3VYRzRnS2k5Y2JsdDBlWEJsUFZ3aWMyVmhjbU5vWENKZElIdGNiaUFnTFhkbFltdHBkQzFoY0hCbFlYSmhibU5sT2lCMFpYaDBabWxsYkdRN1hHNGdJQzhxSURFZ0tpOWNiaUFnYjNWMGJHbHVaUzF2Wm1aelpYUTZJQzB5Y0hnN1hHNGdJQzhxSURJZ0tpOGdmVnh1WEc0dktpcGNiaUFxSUZKbGJXOTJaU0IwYUdVZ2FXNXVaWElnY0dGa1pHbHVaeUJwYmlCRGFISnZiV1VnWVc1a0lGTmhabUZ5YVNCdmJpQnRZV05QVXk1Y2JpQXFMMXh1VzNSNWNHVTlYQ0p6WldGeVkyaGNJbDA2T2kxM1pXSnJhWFF0YzJWaGNtTm9MV1JsWTI5eVlYUnBiMjRnZTF4dUlDQXRkMlZpYTJsMExXRndjR1ZoY21GdVkyVTZJRzV2Ym1VN0lIMWNibHh1THlvcVhHNGdLaUF4TGlCRGIzSnlaV04wSUhSb1pTQnBibUZpYVd4cGRIa2dkRzhnYzNSNWJHVWdZMnhwWTJ0aFlteGxJSFI1Y0dWeklHbHVJR2xQVXlCaGJtUWdVMkZtWVhKcExseHVJQ29nTWk0Z1EyaGhibWRsSUdadmJuUWdjSEp2Y0dWeWRHbGxjeUIwYnlCZ2FXNW9aWEpwZEdBZ2FXNGdVMkZtWVhKcExseHVJQ292WEc0Nk9pMTNaV0pyYVhRdFptbHNaUzExY0d4dllXUXRZblYwZEc5dUlIdGNiaUFnTFhkbFltdHBkQzFoY0hCbFlYSmhibU5sT2lCaWRYUjBiMjQ3WEc0Z0lDOHFJREVnS2k5Y2JpQWdabTl1ZERvZ2FXNW9aWEpwZER0Y2JpQWdMeW9nTWlBcUx5QjlYRzVjYmk4cUlFbHVkR1Z5WVdOMGFYWmxYRzRnSUNBOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBTQXFMMXh1THlwY2JpQXFJRUZrWkNCMGFHVWdZMjl5Y21WamRDQmthWE53YkdGNUlHbHVJRVZrWjJVc0lFbEZJREV3S3l3Z1lXNWtJRVpwY21WbWIzZ3VYRzRnS2k5Y2JtUmxkR0ZwYkhNZ2UxeHVJQ0JrYVhOd2JHRjVPaUJpYkc5amF6c2dmVnh1WEc0dktseHVJQ29nUVdSa0lIUm9aU0JqYjNKeVpXTjBJR1JwYzNCc1lYa2dhVzRnWVd4c0lHSnliM2R6WlhKekxseHVJQ292WEc1emRXMXRZWEo1SUh0Y2JpQWdaR2x6Y0d4aGVUb2diR2x6ZEMxcGRHVnRPeUI5WEc1Y2JpOHFJRTFwYzJOY2JpQWdJRDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5SUNvdlhHNHZLaXBjYmlBcUlFRmtaQ0IwYUdVZ1kyOXljbVZqZENCa2FYTndiR0Y1SUdsdUlFbEZJREV3S3k1Y2JpQXFMMXh1ZEdWdGNHeGhkR1VnZTF4dUlDQmthWE53YkdGNU9pQnViMjVsT3lCOVhHNWNiaThxS2x4dUlDb2dRV1JrSUhSb1pTQmpiM0p5WldOMElHUnBjM0JzWVhrZ2FXNGdTVVVnTVRBdVhHNGdLaTljYmx0b2FXUmtaVzVkSUh0Y2JpQWdaR2x6Y0d4aGVUb2dibTl1WlRzZ2ZWeHVYRzVpYjJSNUlIdGNiaUFnWW1GamEyZHliM1Z1WkMxamIyeHZjam9nSTJaaFptRm1ZVHRjYmlBZ2VpMXBibVJsZURvZ01UdGNiaUFnWTI5c2IzSTZJQ015TWpJN1hHNGdJSEJoWkdScGJtYzZJREp5WlcwN1hHNGdJR1p2Ym5RdFptRnRhV3g1T2lCY0lraGxiSFpsZEdsallTQk9aWFZsWENJc0lFaGxiSFpsZEdsallTd2dRWEpwWVd3c0lITmhibk10YzJWeWFXWTdYRzRnSUcxaGVDMTNhV1IwYURvZ01UQXlOSEI0TzF4dUlDQnRZWEpuYVc0NklHRjFkRzg3SUgxY2JseHVjMlZqZEdsdmJpTmhZbTkxZENCN1hHNGdJRzFoY21kcGJpMTBiM0E2SURKeVpXMDdJSDFjYmx4dVFHMWxaR2xoSUNod2NtVm1aWEp6TFdOdmJHOXlMWE5qYUdWdFpUb2daR0Z5YXlrZ2UxeHVJQ0JvTVN4Y2JpQWdhRElzWEc0Z0lHZ3pMRnh1SUNCb05DeGNiaUFnYURVc1hHNGdJSEFnZTF4dUlDQWdJR052Ykc5eU9pQWpaakptTW1ZeUlDRnBiWEJ2Y25SaGJuUTdJSDFjYmlBZ1ltOWtlU0I3WEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzFqYjJ4dmNqb2dJekZtTVdZeFppQWhhVzF3YjNKMFlXNTBPeUI5WEc0Z0lDNXpiV2xzWlhrdFkybHlZMnhsSUh0Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFdOdmJHOXlPaUFqTVRneE9ERTRJQ0ZwYlhCdmNuUmhiblE3SUgxY2JpQWdZblYwZEc5dUlIdGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xXTnZiRzl5T2lBak1XWXhaakZtSUNGcGJYQnZjblJoYm5RN0lIMWNiaUFnSUNCaWRYUjBiMjRnWVNCN1hHNGdJQ0FnSUNCamIyeHZjam9nSTJZeVpqSm1NaUFoYVcxd2IzSjBZVzUwT3lCOVhHNGdJQ0FnWW5WMGRHOXVJSE4yWnlCN1hHNGdJQ0FnSUNCbWFXeHNPaUFqWmpKbU1tWXlJQ0ZwYlhCdmNuUmhiblE3SUgwZ2ZWeHVMeW9qSUhOdmRYSmpaVTFoY0hCcGJtZFZVa3c5YzNKakwzSnZkWFJsY3k5ZmJHRjViM1YwTG5OMlpXeDBaUzV0WVhBZ0tpOGlYWDA9ICovPC9zdHlsZT5cblxuPE5hdiB7c2VnbWVudH0gLz5cblxuPG1haW4+XG4gIDxzbG90IC8+XG48L21haW4+XG5cbjxCYWNrZ3JvdW5kIC8+XG4iXSwic291cmNlUm9vdCI6IiJ9