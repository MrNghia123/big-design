import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

export var createReducerInit = function createReducerInit() {
  return function (_ref) {
    var columns = _ref.columns,
        defaultSelected = _ref.defaultSelected,
        items = _ref.items,
        pagination = _ref.pagination;
    var currentPage = 1;
    var itemsPerPage = 25;
    var currentItems = getItems(items, pagination, {
      currentPage: currentPage,
      itemsPerPage: itemsPerPage
    });
    return {
      currentItems: currentItems,
      columns: augmentColumns(columns),
      isPaginationEnabled: pagination,
      items: items,
      pagination: {
        currentPage: currentPage,
        itemsPerPage: itemsPerPage,
        itemsPerPageOptions: [25, 50, 100, 250],
        totalItems: items.length
      },
      selectedItems: defaultSelected,
      sortable: {
        direction: 'ASC'
      }
    };
  };
};
export var createReducer = function createReducer() {
  return function (state, action) {
    switch (action.type) {
      case 'COLUMNS_CHANGED':
        {
          var columns = action.columns;
          return _objectSpread({}, state, {
            columns: augmentColumns(columns)
          });
        }

      case 'ITEMS_CHANGED':
        {
          var currentPage = 1;
          var _items = action.items;
          var isPaginationEnabled = action.isPaginationEnabled;
          var currentItems = getItems(_items, isPaginationEnabled, {
            currentPage: currentPage,
            itemsPerPage: state.pagination.itemsPerPage
          });
          var selectedItems = state.selectedItems.filter(function (item) {
            return _items.includes(item);
          });
          return _objectSpread({}, state, {
            currentItems: currentItems,
            isPaginationEnabled: isPaginationEnabled,
            items: _items,
            selectedItems: selectedItems,
            pagination: _objectSpread({}, state.pagination, {
              currentPage: currentPage,
              totalItems: _items.length
            }),
            sortable: {
              direction: state.sortable.direction
            }
          });
        }

      case 'PAGE_CHANGE':
        {
          var _currentPage = action.page;

          var _currentItems = getItems(state.items, true, {
            currentPage: _currentPage,
            itemsPerPage: state.pagination.itemsPerPage
          });

          return _objectSpread({}, state, {
            currentItems: _currentItems,
            pagination: _objectSpread({}, state.pagination, {
              currentPage: _currentPage
            })
          });
        }

      case 'ITEMS_PER_PAGE_CHANGE':
        {
          var _currentPage2 = 1;
          var itemsPerPage = action.itemsPerPage;

          var _currentItems2 = getItems(state.items, true, {
            currentPage: _currentPage2,
            itemsPerPage: itemsPerPage
          });

          return _objectSpread({}, state, {
            currentItems: _currentItems2,
            pagination: _objectSpread({}, state.pagination, {
              currentPage: _currentPage2,
              itemsPerPage: itemsPerPage
            })
          });
        }

      case 'SELECTED_ITEMS':
        {
          return _objectSpread({}, state, {
            selectedItems: action.selectedItems
          });
        }

      case 'SORT':
        {
          var _action$column = action.column,
              hash = _action$column.hash,
              _sortFn = _action$column.sortFn,
              _sortKey = _action$column.sortKey;
          var _direction = action.direction;

          if (!_sortKey && !_sortFn) {
            return state;
          }

          var _items2 = _sortKey ? sort(state.items, _direction, _sortKey) : _sortFn ? sort(state.items, _direction, _sortFn) : state.items;

          var _currentItems3 = getItems(_items2, state.isPaginationEnabled, {
            currentPage: 1,
            itemsPerPage: state.pagination.itemsPerPage
          });

          return _objectSpread({}, state, {
            currentItems: _currentItems3,
            items: _items2,
            pagination: _objectSpread({}, state.pagination, {
              currentPage: 1
            }),
            sortable: {
              direction: _direction,
              columnHash: hash
            }
          });
        }

      default:
        return state;
    }
  };
};

function augmentColumns(columns) {
  return columns.map(function (column) {
    return _objectSpread({}, column, {
      isSortable: Boolean(column.sortKey || column.sortFn)
    });
  });
}

function getItems(items, isPaginationEnabled, paginationOptions) {
  if (!isPaginationEnabled) {
    return items;
  }

  var maxItems = paginationOptions.currentPage * paginationOptions.itemsPerPage;
  var lastItem = Math.min(maxItems, items.length);
  var firstItem = Math.max(0, maxItems - paginationOptions.itemsPerPage);
  return items.slice(firstItem, lastItem);
}

function sort(items, direction, sortKeyOrFn) {
  return _toConsumableArray(items).sort(function (firstItem, secondItem) {
    if (typeof sortKeyOrFn === 'function') {
      return sortKeyOrFn(firstItem, secondItem, direction);
    }

    var sortKey = sortKeyOrFn;
    var firstValue = firstItem[sortKey];
    var secondValue = secondItem[sortKey];

    if (typeof firstValue === 'number' && typeof secondValue === 'number') {
      return direction === 'ASC' ? firstValue - secondValue : secondValue - firstValue;
    }

    var firstValueString = String(firstValue);
    var secondValueString = String(secondValue);
    return direction === 'ASC' ? firstValueString.localeCompare(secondValueString) : secondValueString.localeCompare(firstValueString);
  });
}