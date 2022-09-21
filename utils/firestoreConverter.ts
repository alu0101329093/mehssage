import type {
  DocumentData,
  PartialWithFieldValue,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from 'firebase/firestore';

export const firestoreConverter = <T extends Record<string, unknown>>() => ({
  toFirestore({ id, ...data }: PartialWithFieldValue<T>): DocumentData {
    return data;
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot<T>,
    options: SnapshotOptions
  ): T {
    const data = snapshot.data(options);
    return { id: snapshot.id, ...data };
  },
});
