
export default function configParser(config, store) {
  return config.split('-').map(stream => {
    const transform =store.get(stream);
    return (transform.type) ? new transform.class(transform.type) : new transform.class()
  });
}