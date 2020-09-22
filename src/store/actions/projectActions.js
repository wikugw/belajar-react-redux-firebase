export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('projects').add({
      ...project,
      authorFirstName: 'wiku',
      authorLastName: 'galindra',
      authorId: '666',
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT', project });
    }).catch((error) => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', error });
    });
    // make async call to database
  }
};