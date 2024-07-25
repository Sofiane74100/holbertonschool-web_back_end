export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Succès',
      });
    } else {
      reject(new Error('L\'API factice ne fonctionne pas actuellement'));
    }
  });
}
