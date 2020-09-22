const initState = {
  projects: [
    { id: '1', title: 'menyapu', content: 'menyapu rumah tetangga' },
    { id: '2', title: 'menyiram', content: 'menyiram bunga' },
    { id: '3', title: 'makan', content: 'masak dulu ding' }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('porject created', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.error);
      return state;
    default:
      return state;
  }
}

export default projectReducer