"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.execute = execute;
exports.create = create;
exports.createPatient = createPatient;
Object.defineProperty(exports, "alterState", {
  enumerable: true,
  get: function () {
    return _languageCommon.alterState;
  }
});
Object.defineProperty(exports, "dataPath", {
  enumerable: true,
  get: function () {
    return _languageCommon.dataPath;
  }
});
Object.defineProperty(exports, "dataValue", {
  enumerable: true,
  get: function () {
    return _languageCommon.dataValue;
  }
});
Object.defineProperty(exports, "dateFns", {
  enumerable: true,
  get: function () {
    return _languageCommon.dateFns;
  }
});
Object.defineProperty(exports, "each", {
  enumerable: true,
  get: function () {
    return _languageCommon.each;
  }
});
Object.defineProperty(exports, "field", {
  enumerable: true,
  get: function () {
    return _languageCommon.field;
  }
});
Object.defineProperty(exports, "fields", {
  enumerable: true,
  get: function () {
    return _languageCommon.fields;
  }
});
Object.defineProperty(exports, "fn", {
  enumerable: true,
  get: function () {
    return _languageCommon.fn;
  }
});
Object.defineProperty(exports, "http", {
  enumerable: true,
  get: function () {
    return _languageCommon.http;
  }
});
Object.defineProperty(exports, "lastReferenceValue", {
  enumerable: true,
  get: function () {
    return _languageCommon.lastReferenceValue;
  }
});
Object.defineProperty(exports, "merge", {
  enumerable: true,
  get: function () {
    return _languageCommon.merge;
  }
});
Object.defineProperty(exports, "sourceValue", {
  enumerable: true,
  get: function () {
    return _languageCommon.sourceValue;
  }
});

var _languageCommon = require("@openfn/language-common");

/** @module Adaptor */
const {
  axios
} = _languageCommon.http;
exports.axios = axios;
/**
 * Execute a sequence of operations.
 * Wraps `language-common/execute`, and prepends initial state for http.
 * @example
 * execute(
 *   create('foo'),
 *   delete('bar')
 * )(state)
 * @function
 * @param {Operations} operations - Operations to be performed.
 * @returns {Operation}
 */

function execute(...operations) {
  const initialState = {
    references: [],
    data: null
  };
  return state => {
    return (0, _languageCommon.execute)(...operations)({ ...initialState,
      ...state
    });
  };
}
/**
 * Creates a fictional resource in a fictional destination system using a POST request
 * @public
 * @example
 * create("/endpoint", {"foo": "bar"})
 * @function
 * @param {string} path - Path to resource
 * @param {object} params - data to create the new resource
 * @param {function} callback - (Optional) callback function
 * @returns {Operation}
 */


function create(path, params, callback) {
  return state => {
    path = (0, _languageCommon.expandReferences)(path)(state);
    params = (0, _languageCommon.expandReferences)(params)(state);
    const {
      baseUrl,
      username,
      password
    } = state.configuration;
    const url = `${baseUrl}/${path}`;
    const auth = {
      username,
      password
    };
    const config = {
      url,
      body: params
    };
    return _languageCommon.http.post(config)(state).then(response => {
      const nextState = { ...(0, _languageCommon.composeNextState)(state, response.data),
        response
      };
      if (callback) return callback(nextState);
      return nextState;
    });
  };
}
/**
 * Create a fictional patient in a fictional universe with a fictional REST api
 * @public
 * @example
 * createPatient({"foo": "bar"})
 * @function
 * @param {object} params - data to create the new resource
 * @param {function} callback - (Optional) callback function
 * @returns {Operation}
 */


function createPatient(params, callback) {
  return state => {
    params = (0, _languageCommon.expandReferences)(params)(state);
    const {
      baseUrl,
      username,
      password
    } = state.configuration;
    const url = `${baseUrl}/patient`;
    const auth = {
      username,
      password
    };
    const config = {
      url,
      body: params,
      auth
    };
    return _languageCommon.http.post(config)(state).then(response => {
      const nextState = { ...(0, _languageCommon.composeNextState)(state, response.data),
        response
      };
      if (callback) return callback(nextState);
      return nextState;
    });
  };
} // What functions do you want from the common adaptor?