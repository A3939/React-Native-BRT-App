export const resetNav = (
  navigation: {reset: (arg0: {index: number; routes: {name: any}[]}) => void},
  route: string,
) => {
  navigation.reset({
    index: 0,
    routes: [{name: route}],
  });
};
