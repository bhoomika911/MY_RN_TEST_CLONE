export function LocationServiceError(message) {
  this.name = "LocationServiceError";
  this.message = message;
  this.stack = new Error().stack;
}

export function StorageServiceError(message) {
  this.name = "StorageServiceError";
  this.message = message;
  this.stack = new Error().stack;
}
