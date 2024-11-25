import './Ideas.css';
import Card from './Card';

function Ideas({ ideas, deleteIdea }){
  console.log('ideas: ', ideas)
  const ideaCards = ideas.map(idea => {
    console.log('idea within the map: ', idea)
    return (
      <Card
        title={idea.title}
        description={idea.description}
        id={idea.id}
        key={idea.id}
        deleteIdea={deleteIdea}
      />
    )
  })
  console.log('ideaCards: ', ideaCards)
  return (
    <div className='ideas-container'>
      {ideaCards}
    </div>
  )
}

export default Ideas;