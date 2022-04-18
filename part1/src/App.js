const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  
  return (
    <div>
      <h1> Greetings </h1>
      <Header course={course}/>
      <p>
        <Content part1={part1} exercises1={exercises1}/>
      </p>
      <p>
        <Content part2={part2} exercises2={exercises2}/>
     </p>
      <p>
        <Content part3={part3} exercises3={exercises3}/>
      </p>
      <p>
        <Total exercises1={exercises1 + exercises2 +exercises3 }/> 
        {/* Number of exercises {exercises1 + exercises2 + exercises3} */}
        </p>
     

    </div>
  )
}

const Header = (props) => {
  return (
    <div>
    <p>This is {props.course}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
    <p>{props.part1} {props.exercises1}</p>
    <p>{props.part2} {props.exercises2}</p>
    <p>{props.part3} {props.exercises3}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
    <p>Number of excercises {props.exercises1} {props.exercises} {props.exercises3}</p>
    </div>
  )
}


export default App






/*
//props can be used to send variables to other 'classes' - the App environment is the highest priority class in the hierarchy 
const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old </p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1> Greetings </h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
  }  
*/