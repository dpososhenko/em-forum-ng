export enum CookieModule {
  User = 'user',
  Market = 'market',
}

export function CookieSpecific(cookie: string) {
  // TODO: CookieSpecific decorator accept only:
  // @cookie: string
  // @cookie: 'complex.module.feature'
  //
  // const [complex, module, feature] = cookie.split('.');

  return (target, key, descriptor) => {
    const originalValue = descriptor.value;

    descriptor.value = cookie
      ? function(this: Function, ...args: any[]) { return originalValue.call(this, ...args); }
      : () => {};

    return descriptor;
  };
}
