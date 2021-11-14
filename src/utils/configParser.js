import transformStreamsStore from './transformStreamsStore.js';

export default function configParser(config) {
  return config.split('-').map(stream => {
    const transform =transformStreamsStore.get(stream);
    return (transform.type) ? new transform.class(transform.type) : new transform.class()
  });
}