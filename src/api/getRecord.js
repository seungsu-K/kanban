import pb from '@/api/pocketbase';

export const getRecord = (storage, option = false) => {
  if (option) {
    return pb.collection(storage).getList(1, 10, {
      filter: option,
    });
  }

  if (!option) {
    return pb.collection(storage).getList(1, 10);
  }
};

export const getFullRecord = (storage) => {
  return pb.collection(storage).getFullList({
    sort: '-created',
  });
};
