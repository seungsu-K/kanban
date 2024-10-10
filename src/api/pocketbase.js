import PocketBase from 'pocketbase';

const pb = new PocketBase('https://post-straight.pockethost.io');
pb.autoCancellation(false);
// pocketbase에서 저장소 중복 호출 막아둠

export default pb;
