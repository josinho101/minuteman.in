import React from "react";

const SortVisualizer: React.FunctionComponent = () => {
  return (
    <div className="project">
      <h3 className="project-title">Sorting Visulizer</h3>
      <p>
        Alrorithms are hard to understand at first glance but visualizing will
        make it much easier to understand. This is a project I've done with an
        intension of visualizing different sorting algorithms. This project is
        done in <b>React JS</b> using create-react-app. I chosen
        create-react-app because for this project I don't have to customize my
        build process and this tool with come with predefined development
        environment so that I can use latest JavaScript features and not worry
        about how to convert it to version that browsers support.
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
          github{" "}
        </a>{" "}
        repository.
      </p>
      <h4>Sub title</h4>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
};

export default SortVisualizer;
