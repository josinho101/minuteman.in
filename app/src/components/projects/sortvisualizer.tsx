import React from "react";

const SortVisualizer: React.FunctionComponent = () => {
  return (
    <div className="project">
      <h3 className="project-title">Sorting Visulizer</h3>
      <p>
        Alrorithms are hard to understand at first glance but visualizing will
        make it much easier to understand. This is a project I've done in an
        attempt to visualize different sorting algorithms. This project is done
        in <b>React JS</b> using create-react-app. I chosen create-react-app
        because for this project I don't have to customize my build process and
        this tool with come with predefined development environment so that I
        can use latest JavaScript features and not worry about how to convert it
        to version that browsers support.
      </p>
      <p>
        These are the algorithms that I had tried to visualize in this project.
      </p>
      <ul>
        <li>
          <b>Bubble sort</b>
        </li>
        <li>
          <b>Quick sort</b>
        </li>
        <li>
          <b>Merge sort</b>
        </li>
      </ul>
      <p>
        You can view full project source code in my{" "}
        <a
          href="https://github.com/josinho101/sorting-visualizer"
          target="_blank"
        >
          github
        </a>{" "}
        repository and{" "}
        <a
          href="https://josinho101.github.io/sorting-visualizer/"
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
          src="/contents/images/projects/sorting/initial.png"
        />
        <img
          className="medium-image"
          src="/contents/images/projects/sorting/completed.png"
        />
      </div>
    </div>
  );
};

export default SortVisualizer;
