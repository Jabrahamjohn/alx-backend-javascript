import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promises = [uploadPhoto(), createUser()];
  return Promise.all(promises).then((data) => {
    let collections = '';
    for (const item of data) {
      if (Object.keys(item).includes('body')) {
        collections += `${item.body} `;
      } if (Object.keys(item).includes('firstName')) {
        collections += `${item.firstName} `;
      } if (Object.keys(item).includes('lastName')) {
        collections += `${item.lastName}`;
      }
    }
    console.log(collections);
  })
    .catch(() => { console.log('Signup system offline'); });
}
