import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

export const syncStoragePersister = createSyncStoragePersister({
  storage: window.localStorage,
});
