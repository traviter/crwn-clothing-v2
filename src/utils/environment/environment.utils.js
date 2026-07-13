export const isDevEnvironment = () => process.env.NODE_ENV !== 'production';
export const getReduxCompose = () => window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__