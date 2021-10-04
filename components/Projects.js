import { Fragment, useEffect } from 'react';
import ReactDOM from 'react-dom'

export default function Introduction() {
  return (
    <Fragment>
      <div className="projects-container">
        <div className='projects-subtext subtext'>
          <div>
            work
          </div>
        </div>
        <a href="https://whatrhymeswithgod.com" target="_blank" rel="noreferrer">
          <div
            className="project-name-a"
            pseudo-content="What Rhymes With God"
          >
            What Rhymes With God
          </div>
        </a>
        <a href="https://spacex.juliette.dev" target="_blank" rel="noreferrer">
          <div
            className="project-name-b"
            pseudo-content="SpaceX Launches"
          >
            SpaceX Launches
          </div>
        </a>
        <a href="https://tasktracker.juliette.dev" target="_blank" rel="noreferrer">
          <div
            className="project-name-a"
            pseudo-content="That view task tracker that everyone makes"
          >
            That view task tracker that everyone makes
          </div>
        </a>
        <a href="https://fibonacci.juliette.dev" target="_blank" rel="noreferrer">
          <div
            className="project-name-b"
            pseudo-content="Fibonacci Generator"
          >
            Fibonacci Generator
          </div>
        </a>
        <a href="https://halloween.juliette.dev" target="_blank" rel="noreferrer">
          <div
            className="project-name-a"
            pseudo-content="Halloween Countdown"
          >
            Halloween Countdown
          </div>
        </a>
      </div>
    </Fragment>
  );
}