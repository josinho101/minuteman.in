import React from "react";

const PathFindingVisualizer: React.FunctionComponent = () => {
  return (
    <div className="project">
      <h3 className="project-title">Path finding visulizer</h3>
      <p>
        Path finding is the plotting of the shortest route between two points.
        In this project we will create a grid, and mark two arbitrary points as
        start and destination nodes. Application will visit neighboring nodes
        and find shortest route and draw path from start to destination node.
        Application has the option to generate bricks nodes (through which we
        can't navigate) to make path finding interesting.
      </p>
      <p>
        Again for this project I had used <b>React JS</b> as the UI library and{" "}
        <b>TypeScript</b> to bring in static typing and OOPs concept which helps
        me in reusing my code while creating engines for pathfinding and terrain
        generation.
      </p>
      <p>Different path finding algorithms implemented:</p>
      <ul>
        <li>
          <b>Dijkstra's algorithm</b>
        </li>
        <li>
          <b>A* algorithm</b>
        </li>
        <li>
          <b>Breadth-first search</b>
        </li>
        <li>
          <b>Depth-first search</b>
        </li>
      </ul>
      <p>
        <b>Recursive backtracker</b> algorithm (
        <a
          target="_blank"
          href="https://en.wikipedia.org/wiki/Maze_generation_algorithm"
        >
          ref
        </a>
        ), is used for generating blocks in grid (brick nodes).
      </p>
      <p>
        You can view full project source code in my{" "}
        <a
          href="https://github.com/josinho101/pathfinding-visualizer"
          target="_blank"
        >
          github
        </a>{" "}
        repository and{" "}
        <a
          href="https://josinho101.github.io/pathfinding-visualizer/"
          target="_blank"
        >
          demo
        </a>{" "}
        here.
      </p>
      <h5>Screenshots</h5>
      <div className="article-big-image">
        <img
          className="medium-image"
          src="/contents/images/projects/pathfinding/initial.png"
        />
        <img
          className="medium-image"
          src="/contents/images/projects/pathfinding/path.png"
        />
      </div>
    </div>
  );
};

export default PathFindingVisualizer;
