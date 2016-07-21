import { bidfactory } from '../bidfactory';
import { bidmanager } from '../bidmanager';

const AppNexusAdapter = function AppNexusAdapter() {
  function _callBids(params) {}

  return {
    callBids: _callBids
  };
};

export default AppNexusAdapter;
