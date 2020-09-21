const initState = {
  projects: [
    { id: '1', title: 'menyapu', content: 'menyapu rumah tetangga' },
    { id: '2', title: 'menyiram', content: 'menyiram bunga' },
    { id: '3', title: 'makan', content: 'masak dulu ding' }
  ]
};

const projectReducer = (state = initState, action) => {
  return state
}

export default projectReducer