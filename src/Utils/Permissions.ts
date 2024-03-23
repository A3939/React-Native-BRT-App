import {PERMISSIONS, check, request} from 'react-native-permissions';

export const LocationPermission = async () => {
  var permission = '';
  check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(result => {
    if (result === 'denied') {
      request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(result => {
        console.log(result, 'res');
        permission = result;
      });
    } else {
      permission = result;
    }
    permission = result;
  });
  return permission;
};
